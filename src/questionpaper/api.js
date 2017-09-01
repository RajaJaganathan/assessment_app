const QuestionPapersApi = {
  fetchAll() {
    return fetch('/api/v1/questionpaper', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(res => res.json());
  },
  createQuestionPaper(payload) {
    return fetch('/api/v1/questionpaper/new', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    }).then(res => res.json());
  },
};

export default QuestionPapersApi;
