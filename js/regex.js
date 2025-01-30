class NigerianBankCardValidator {
    static visaRegex = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
    static masterCardRegex = new RegExp("^(5[1-5][0-9]{14}|2[2-6][0-9]{14}|27[0-1][0-9]{13}|2720[0-9]{12})$");
    static verveRegex = new RegExp("^(506[0-9]|507[8-9]|650[0-9])[0-9]{12,15}$");
    static isValidCardNum(cardNumber) {
        try {
            parseInt(cardNumber);
        }
        catch (err) {
            return false;
        }
        let card_number = cardNumber.split("");
        // console.log(card_number);
        let card_number_int = card_number
            .reverse()
            .map((item) => parseInt(item));
        // console.log(card_number_int);
        card_number_int.map((item, index) => {
            if (index % 2 === 1) {
                card_number_int[index] *= 2;
                if (card_number_int[index] > 9) {
                    card_number_int[index] -= 9;
                }
            }
        });
        // console.log(card_number_int);
        let sum = card_number_int.reduce((a, b) => a + b);
        // console.log(sum);
        return sum % 10 === 0;
    }
    static isVisaCard(cardNumber) {
        if (this.isValidCardNum(cardNumber)) {
            return this.visaRegex.test(cardNumber);
        }
        else {
            console.log(`${cardNumber} is an invalid Card Number`);
            return false;
        }
    }
    static isMasterCard(cardNumber) {
        if (this.isValidCardNum(cardNumber)) {
            return this.masterCardRegex.test(cardNumber);
        }
        else {
            console.log(`${cardNumber} is an invalid Card Number`);
            return false;
        }
    }
    static isVerveCard(cardNumber) {
        if (this.isValidCardNum(cardNumber)) {
            return this.verveRegex.test(cardNumber);
        }
        else {
            console.log(`${cardNumber} is an invalid Card Number`);
            return false;
        }
    }
    static whatCard(cardNumber) {
        if (this.isMasterCard(cardNumber)) {
            return "MasterCard";
        }
        else if (this.isVisaCard(cardNumber)) {
            return "VisaCard";
        }
        else if (this.isVerveCard(cardNumber)) {
            return "VerveCard";
        }
        else {
            return `${cardNumber} is a valid card number but not in our database`;
        }
    }
}
export default NigerianBankCardValidator;
