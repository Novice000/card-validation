# Credit Card Validator (Nigerian Bank Cards)

This project provides a solution to validate Nigerian bank card numbers, including Visa, Mastercard, and Verve cards. The program uses the Luhn algorithm for card number validation and regular expressions to detect the card type based on the number's prefix.

## How to Run the Project

1. **JavaScript Version:**
   - Navigate to the `js` folder: `cd js`
   - Run the application: `node index.js`

2. **TypeScript Version:**
    type scrits needs a few node imports and configuration to work
   - Navigate to the `ts` folder: `cd ts`
   - Compile the TypeScript files using `tsc`.
   - Run the compiled code with `node ./js/index.js`.

## File Structure

- **js/index.js**: JavaScript file that runs the application.
- **js/regex.js**: Contains the logic to validate Nigerian bank card numbers using regular expressions and the Luhn algorithm.
- **ts/index.ts**: TypeScript version of the main file.
- **ts/regex.ts**: TypeScript version of the validation logic.

## Key Features

- **Card Number Validation**: The Luhn algorithm is used to check if a card number is valid.
- **Card Type Detection**: The program can identify if a card is Visa, Mastercard, or Verve based on the card number's prefix.
- **Supports Nigerian Bank Cards**: Specifically, Visa, Mastercard, and Verve, which are popular in Nigeria.

## Explanation of the Code

### Luhn Algorithm for Card Number Validation

The Luhn algorithm is used to validate the card number to ensure it's valid and properly structured. This algorithm works by:

1. Starting from the last digit (the check digit) and moving to the left.
2. Doubling every second digit and subtracting 9 from any result greater than 9.
3. Adding all the digits together, including the transformed ones.
4. The sum must be divisible by 10 for the card number to be valid.

**Reference:**
Wikipedia Pages to help learn more about the luhn algorith and card type formats.

- [Luhn Algorithm](https://en.m.wikipedia.org/wiki/Luhn_algorithm)
- [Payment Card Number](https://en.m.wikipedia.org/wiki/Payment_card_number)

### Regular Expressions for Card Type Detection

Each card type has a specific pattern defined by the first few digits (also known as the Issuer Identification Number or IIN). The regex patterns below help in identifying whether a card is Visa, Mastercard, or Verve:

1. **Visa (starts with '4')**:
   - **Regex**: `^4[0-9]{12}(?:[0-9]{3})?$`
     - Visa cards always start with `4`, followed by 12 or 15 digits.

2. **Mastercard (starts with '5' or '2')**:
   - **Regex**: `^(5[1-5][0-9]{14}|2[2-6][0-9]{14}|27[0-1][0-9]{13}|2720[0-9]{12})$`
     - Mastercard starts with `5` and is followed by 14 digits. Also, cards starting with `2` (a newer range for Mastercard; from 2017 according to the wikipedia page) are accepted.The Regex matches `2221–2720` the newwer range and `51–55` (from the wikipedia page).

3. **Verve (starts with '506', '507', or '650')**:
   - **Regex**: `^(506[0-9]|507[8-9]|650[0-9])[0-9]{12,15}$`
     - Verve cards start with `506`, `507`, or `650`, followed by 12 to 15 digits. The regex matches `506099–506198`, `650002–650027` and `507865–5079641`.

### Functions in the Code

1. **`isValidCardNum(cardNumber)`**:
   - Validates the card number using the Luhn algorithm. It returns `true` if the card number is valid according to Luhn's checksum and `false` otherwise.

2. **`isVisaCard(cardNumber)`**:
   - Checks if the card number is valid according to the Luhn algorithm and whether it matches the Visa regex pattern.

3. **`isMasterCard(cardNumber)`**:
   - Checks if the card number is valid according to the Luhn algorithm and whether it matches the Mastercard regex pattern.

4. **`isVerveCard(cardNumber)`**:
   - Checks if the card number is valid according to the Luhn algorithm and whether it matches the Verve regex pattern.

5. **`whatCard(cardNumber)`**:
   - Returns the card type (Visa, Mastercard, Verve) based on the card number. If the card number is valid but doesn't match any of the patterns, it returns a message indicating that the card is valid but unknown.

## Example

To validate a card number, run the program and input a card number when prompted. For example:

``` sh
Enter a card number: 4123456789012345
4123456789012345 is a VisaCard
```
