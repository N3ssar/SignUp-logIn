# SignUp Form

This project is a user registration form designed with a modern, responsive layout. The form includes features such as email validation, password matching, and password visibility toggling. It's styled using CSS and includes validation logic using JavaScript.

## Features

- **Email Validation**: Ensures that the user inputs a valid email address format.
- **Password Validation**: Requires a password that is at least 8 characters long and includes special characters.
- **Password Matching**: Checks if the password and confirm password fields match.
- **Toggle Password Visibility**: Users can show or hide their passwords by clicking an eye icon.
- **Responsive Design**: The form is responsive and adapts to different screen sizes.
- **Error Handling**: Displays error messages when input fields are invalid.

## Technologies Used

- **HTML5**: For the structure of the form.
- **CSS3**: For styling and responsiveness.
- **JavaScript**: For form validation and interactive features like password toggling.
- **Font Awesome**: Icons used in the form (e.g., user, email, password eye icon).
- **Google Fonts**: "Rubik" font for the text.

## How to Use

1. Clone or download this repository.
2. Open the `index.html` file in your browser.
3. Fill in the required fields (first name, email, password, and confirm password).
4. Submit the form to see the validation in action.
5. Toggle the password visibility using the eye icon.

## File Structure
├── assets │ ├── images │ ├── Js │ └── script.js ├── style.css └── index.html


- `index.html`: The main HTML file for the form.
- `style.css`: Contains all the styles for the form.
- `script.js`: Includes the JavaScript logic for validation and interaction.

## How It Works

1. **Form Validation**:
   - Validates the email format using a regular expression.
   - Ensures that the password meets the specified criteria.
   - Confirms that the password and confirm password fields match.

2. **Password Toggling**:
   - Password fields can be toggled between text and password types to show or hide the input.
   - Uses an eye icon that switches between "eye" and "eye-slash" based on visibility.

## Customization

Feel free to customize the colors, fonts, or layout to fit your project's needs. All the main styles are defined using CSS variables for easy tweaking.

## License

This project is open-source and available under the MIT License.
