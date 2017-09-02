const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

const QuestionPapersApi = {
  fetchAll() {
    return fetch('/api/v1/questionpaper', options).then(res => res.json());
  },
  createQuestionPaper(payload) {
    return fetch('/api/v1/questionpaper/new', {
      ...options,
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(res => res.json());
  },
  fetchQuestionPaperByQuestionBank(questionBankId) {
    return fetch(`/api/v1/questionbanks/${questionBankId}/questions`, options).then(res =>
      res.json(),
    );
  },
};

export default QuestionPapersApi;
