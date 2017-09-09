const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

const QuestionBankApi = {
  fetchAll() {
    return fetch('/api/v1/questionbanks', options).then(res => res.json());
  },
  fetchQuestionsById(questionBankId) {
    return fetch(
      `/api/v1/questionbanks/${questionBankId}/questions`,
      options,
    ).then(res => res.json());
  },
  createQuestionsById(payload) {
    const params = {
      ...options,
      method: 'POST',
      body: JSON.stringify(payload),
    };
    return fetch(
      `/api/v1/questionbanks/${payload.questionBankId}/create`,
      params,
    ).then(res => res.json());
  },
};

export default QuestionBankApi;
