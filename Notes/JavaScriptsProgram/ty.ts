function checkLoan(creditScore) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (creditScore > 700) {
                resolve("Loan Approved");
            } else {
                reject("Loan Rejected");
            }
        }, 2000);
    });
}

async function loanStatus() {
    try {
        let result = await checkLoan(750);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
