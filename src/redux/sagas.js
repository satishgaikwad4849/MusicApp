import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://itunes.apple.com/search?term=artist?')
        .then(response => response.json(), ); 
        console.log("json.results",json.results)   
  yield put({ type: "NEWS_RECEIVED", json: json.results  });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}