const quiz_data = {
    questions: [
        {
            id: 1,
            type: 'multiple-choice',
            question: 'What is a common indicator of a phishing email?',
            options: [
                { text: 'A) Professional logo and company branding', correct: false },
                { text: 'B) Urgent requests for personal information', correct: true },
                { text: 'C) Clear contact information from the sender', correct: false },
                { text: 'D) Personalized greeting with your name', correct: false }
            ],
            explanation: 'Phishers often create urgency to pressure you into acting without thinking. They may ask for passwords, banking details, or other sensitive information via email. Legitimate companies will never request this information through email.',
            marks: 1
        },
        {
            id: 2,
            type: 'multiple-choice',
            question: 'Which of these is NOT a safe practice when managing your passwords?',
            options: [
                { text: 'A) Using a combination of uppercase, lowercase, and numbers', correct: false },
                { text: 'B) Sharing passwords with trusted family members', correct: true },
                { text: 'C) Using unique passwords for different accounts', correct: false },
                { text: 'D) Changing passwords regularly', correct: false }
            ],
            explanation: 'Never share your passwords with anyone, including family members. If someone needs account access, use secure account sharing features or create a separate account. Sharing passwords puts your accounts at risk if that person\'s device is compromised.',
            marks: 1
        },
        {
            id: 3,
            type: 'multiple-choice',
            question: 'What should you do if you receive a suspicious link via text message?',
            options: [
                { text: 'A) Click it to see what it is', correct: false },
                { text: 'B) Reply to the message asking if it\'s legitimate', correct: false },
                { text: 'C) Forward it to your friends to warn them', correct: false },
                { text: 'D) Delete it and report the sender', correct: true }
            ],
            explanation: 'Never click suspicious links, as they can install malware or direct you to phishing websites. Don\'t reply either, as this confirms your number is active. Simply delete and report the message to your mobile provider or the relevant authorities.',
            marks: 1
        },
        {
            id: 4,
            type: 'true-false',
            question: 'True or False: Your bank will never ask for your PIN or password via email or phone call.',
            correct: true,
            explanation: 'This is TRUE. Legitimate banks NEVER ask for PINs, passwords, or sensitive information via email, phone, or text. If someone claims to be from your bank and asks for this information, it\'s a scam. Always contact your bank directly using the number on your card.',
            marks: 1
        },
        {
            id: 5,
            type: 'true-false',
            question: 'True or False: It\'s safe to use the same password for multiple accounts as long as it\'s complex.',
            correct: false,
            explanation: 'This is FALSE. Even complex passwords should be unique for each account. If one account is hacked, attackers can use the same password on your other accounts. Use a password manager to generate and store unique passwords for each service.',
            marks: 1
        },
        {
            id: 6,
            type: 'multiple-selection',
            question: 'Which of the following are RED FLAGS for investment scams? (Select 2)',
            options: [
                { text: 'Guaranteed high returns with little risk', correct: true },
                { text: 'Pressure to invest quickly without research', correct: true },
                { text: 'Detailed financial reports and disclosures', correct: false },
                { text: 'Registered with official financial regulators', correct: false }
            ],
            correctCount: 2,
            explanation: 'Investment scammers promise unrealistic returns and create artificial urgency to prevent you from doing proper research. Legitimate investments come with proper disclosures and regulatory registration. Never invest based on pressure or promises of guaranteed returns.',
            marks: 2
        }
    ],
    scoreRanges: [
        {
            min: 0,
            max: 3,
            message: '⚠️ Safety Score: Low',
            details: 'You need to be more cautious! Review common scam tactics and stay vigilant online. Consider taking our safety course.'
        },
        {
            min: 4,
            max: 5,
            message: '✓ Safety Score: Good',
            details: 'You have basic safety knowledge. Keep learning and stay updated on new scam techniques to improve your protection.'
        },
        {
            min: 6,
            max: 7,
            message: '🌟 Safety Score: Excellent',
            details: 'Outstanding! You\'re well-equipped to protect yourself and your SafeCircle. Keep spreading awareness!'
        }
    ]
};

function get_score_message(score) {
    return quiz_data.scoreRanges.find(range => score >= range.min && score <= range.max);
}
