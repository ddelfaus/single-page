import React from "react";
import * as Yup from "yup"
import {useState, useEffect} from "react"

// Define form elements: email, password and terms/conditions

const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    terms: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
      // required isn't required for checkboxes.
  });


function ValidForm() {
    // Basic submit event handler and console.log to confirm form submitted
    const formSubmit = e => {
        e.preventDefault();
        console.log("submitted");
    };

    // Create state for the form values. We will want to update state later on, but for now... empty strings!
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        website: "",
        password: ""
    });

    const [errors, SetErrors] =useState({
        email: "",
        password: "",
        terms: ""
    })
    /* Each time the form value state is updated, check to see if it is valid per our schema.
    This will allow us to enable/disable the submit button.*/
    useEffect(() => {
        /* We pass the entire state into the entire schema, no need to use reach here.
        We want to make sure it is all valid before we allow a user to submit
        isValid comes from Yup directly */
        formSchema.isValid(formState).then(valid => {
        // setButtonDisabled(!valid);
        });
    }, [formState]);

    const inputChange = e => {
        // let's pull the information of interest from the target of the event
        const { name, value } = e.target
                // yup.reach will allow us to "reach" into the schema and test only one part.
        // We give reach the schema as the first argument, and the key we want to test as the second.
        yup
        .reach(formSchema, name)
        //we can then run validate using the value
        .validate(value)
        // if the validation is successful, we can clear the error message
        .then(valid => {
        setErrors({
            ...errors, [name]: ""
        });
        })
        // if the validation is unsuccessful, we can set the error message to the message
        // returned from yup (that we created in our schema)
        .catch(err => {
        setErrors({
            ...errors, [name]: err.errors[0]
        });
        });

    // Whether or not our validation was successful, we will still set the state to the new value as the user is typing
    setFormState({
        ...formState, [name]: value
    });
};
    

    return (
        <form>
        <label htmlFor="emailInput">
          Name
          <input id="emailInput" type="email" name="email" placeholder="Email" />
        </label>
        { errors.email.length > 0 && <p className="error">{errors.email}</p> }
  
        <label htmlFor="passwordInput">
          Password
          <input id="passwordInput" type="password" name="password" placeholder="Password" />
        </label>
        { errors.password.length > 0 && <p className="error">{errors.password}</p> }
  
        <label htmlFor="termsInput">
          Do you agree to the terms and conditions?
          <input id="termsInput" type="checkbox" name="terms" />
        </label>
  
        <button>Submit!</button>
      </form>
  );
}

export default ValidForm;