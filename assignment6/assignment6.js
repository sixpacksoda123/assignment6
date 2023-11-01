
const LucasObject = {
    name: "Lucas",
    birthYear: 1990,
    job: "Engineer",
    address: "123 Main St",
    email: "lucas@example.com",
    calculateRetirement: function() {
        const currentYear = new Date().getFullYear();
        const retirementAge = 65;

        if (currentYear - this.birthYear >= retirementAge) {
            return `${this.name} has retired for ${currentYear - (this.birthYear + retirementAge)} years.`;
        } else if (currentYear - this.birthYear < 16) {
            return `${this.name} hasn't started working.`;
        } else {
            const yearsLeft = retirementAge - (currentYear - this.birthYear);
            return `${this.name} has ${yearsLeft} years left till retirement.`;
        }
    }
};


function checkBMI(name, mass, height) {
    const heightInMeters = height / 100;
    const bmi = mass / (heightInMeters * heightInMeters);
    let message;

    if (bmi < 18.5) {
        message = `${name}'s BMI is ${bmi.toFixed(2)}, you are underweight based on the body fat indicator. It is recommended to check more details with a doctor.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = `${name}'s BMI is ${bmi.toFixed(2)}, and Congrats! Your body weight is ideal.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        message = `${name}'s BMI is ${bmi.toFixed(2)}, you are overweight based on our body fat indicator. It is recommended to get advice from a doctor.`;
    } else {
        message = `${name}'s BMI is ${bmi.toFixed(2)}, and you are obese based on our body fat indicator, please see a doctor!!`;
    }

    return message;
}


const friends = [
    { name: "Mark", mass: 70, height: 175 },
    { name: "John", mass: 80, height: 180 },
    { name: "Lucas", mass: 90, height: 185 }
];


for (const friend of friends) {
    const bmiMessage = checkBMI(friend.name, friend.mass, friend.height);
    console.log(bmiMessage);
}


const retirementMessage = LucasObject.calculateRetirement();
console.log(retirementMessage);
