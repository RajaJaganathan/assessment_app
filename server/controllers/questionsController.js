exports.getQuestions = function(req, res, next) {
  const response = [
    {
      questionNo: 1,
      question:
        "காஸ், கும்மர் மற்றும் மிகைப்பெருக்கத் தொடர்களுக்கான விளைவுகளை தனி ஒரு ஆளாக இருந்து கண்டுபிடித்தவர், ஸ்ரீநிவாச இராமானுஜன். மிகைப்பெருக்கத் தொடரின் பகுதி தொகைகளையும், பொருட்களையும் ஆய்வு செய்வதில் அவர் காட்டிய ஆர்வமே அவருடைய பெரும்வளர்ச்சிக்கு வழிவகுத்தது. இவர் குறுகிய காலங்களிலேயே, (அதாவது 1914ஆம் ஆண்டு  முதல் 1918ஆம் ஆண்டு வரை) 3000க்கும் அதிகமான புதுக் கணிதத் தேற்றங்களைக் கண்டுபிடித்தார்.?",
      options: [
        {
          text: "Hyperlinks and Text Markup Language",
          answer: true,
          userChecked: false
        },
        {
          text: "Home Tool Markup Language",
          answer: false,
          userChecked: false
        },
        {
          text: "Hyper Text Markup Language",
          answer: false,
          userChecked: false
        }
      ]
    },
    {
      questionNo: 2,
      question:
        "காஸ், கும்மர் மற்றும் மிகைப்பெருக்கத் தொடர்களுக்கான விளைவுகளை தனி ஒரு ஆளாக இருந்து கண்டுபிடித்தவர், ஸ்ரீநிவாச இராமானுஜன். மிகைப்பெருக்கத் தொடரின் பகுதி தொகைகளையும், பொருட்களையும் ஆய்வு செய்வதில் அவர் காட்டிய ஆர்வமே அவருடைய பெரும்வளர்ச்சிக்கு வழிவகுத்தது. இவர் குறுகிய காலங்களிலேயே, (அதாவது 1914ஆம் ஆண்டு  முதல் 1918ஆம் ஆண்டு வரை) 3000க்கும் அதிகமான புதுக் கணிதத் தேற்றங்களைக் கண்டுபிடித்தார்.?",
      options: [
        {
          text: "The World Wide Web Consortium",
          answer: true,
          userChecked: false
        },
        {
          text: "Google",
          answer: false,
          userChecked: false
        },
        {
          text: "Mozilla",
          answer: false,
          userChecked: false
        },
        {
          text: "Microsoft",
          answer: false,
          userChecked: false
        }
      ]
    },
    {
      questionNo: 3,
      question: "What does HTML stand for?",
      options: [
        {
          text: "Hyperlinks and Text Markup Language",
          answer: true,
          userChecked: false
        },
        {
          text: "Home Tool Markup Language",
          answer: false,
          userChecked: false
        },
        {
          text: "Hyper Text Markup Language",
          answer: false,
          userChecked: false
        }
      ]
    },
    {
      questionNo: 4,
      question: "Who is making the Web standards?",
      options: [
        {
          text: "The World Wide Web Consortium",
          answer: true,
          userChecked: false
        },
        {
          text: "Google",
          answer: false,
          userChecked: false
        },
        {
          text: "Mozilla",
          answer: false,
          userChecked: false
        },
        {
          text: "Microsoft",
          answer: false,
          userChecked: false
        }
      ]
    },
    {
      questionNo: 5,
      question: "What does HTML stand for?",
      options: [
        {
          text: "Hyperlinks and Text Markup Language",
          answer: true,
          userChecked: false
        },
        {
          text: "Home Tool Markup Language",
          answer: false,
          userChecked: false
        },
        {
          text: "Hyper Text Markup Language",
          answer: false,
          userChecked: false
        }
      ]
    },
    {
      questionNo: 6,
      question: "Who is making the Web standards?",
      options: [
        {
          text: "The World Wide Web Consortium",
          answer: true,
          userChecked: false
        },
        {
          text: "Google",
          answer: false,
          userChecked: false
        },
        {
          text: "Mozilla",
          answer: false,
          userChecked: false
        },
        {
          text: "Microsoft",
          answer: false,
          userChecked: false
        }
      ]
    }
  ];
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(response));
};
