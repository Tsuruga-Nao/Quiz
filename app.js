(()=>{

  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navlen = $nav.length;

  // 初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  // クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav,contentを全て一旦リセットする
    let index = 0;
    while(index < navlen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block'
    $nav[targetVal].classList.add(ACTIVE_CLASS);

  };

  // 全nav要素に対して関数を適応・発火
  let index = 0;
  while(index < navlen){
      $nav[index].addEventListener('click', (e) => handleClick(e));
      index++;    
  }

  const quiz = [
    {
      question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
      answers: [
        'スーパーファミコン',
        'プレイステーション２',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
      ],
      correct: 'ニンテンドースイッチ'
    },  {
      question: '糸井重里が規格に関わった、任天堂の看板ゲームといえば？',
      answers: [
        'MOTHER2',
        'スーパーマリオブラザーズ３',
        'スーパードンキーコング',
        '星のカービィ'
      ],
      correct: 'MOTHER2'
    },  {
      question: 'ファイナルファンタジーIVの主人公の名前は？',
      answers: [
        'フリオニール',
        'クラウド',
        'ティーダ',
        'セシル'
      ],
      correct: 'セシル'
    },
  ];

  const quizLength = quiz.length;
  let quizIndex = 0;
  let score = 0;

  const $button = document.getElementsByTagName('button');
  const buttonLength = $button.length;
  const result = document.getElementById('result');
  const container = document.getElementById('container')

  //クイズの問題文、選択肢を定義
  const setupQuiz = () => {
    document.getElementById('js-qusetion').textContent = '問題： ' + quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
  }
  setupQuiz();


  const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了です！');
    result.style.display = 'block';
    container.style.display = 'none';
    document.getElementById('score2').textContent = 'あなたの正解数は' + quizLength + '問中 ' + score + '問です！';
    document.getElementById('js_qusetion1').textContent = 'Q1. ' + quiz[0].question;
    document.getElementById('correct1').textContent = '答え: ' + quiz[0].correct;
    document.getElementById('js_qusetion2').textContent = 'Q2. ' + quiz[1].question;
    document.getElementById('correct2').textContent = '答え: ' + quiz[1].correct;
    document.getElementById('js_qusetion3').textContent = 'Q3. ' + quiz[2].question;
    document.getElementById('correct3').textContent = '答え: ' + quiz[2].correct;
    }
  

  };


  let handlerIndex = 0;
  while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) => {
      clickHandler(e);
    });
    handlerIndex++;
  }

  let btnReload = document.getElementById('btnReload');
  btnReload.addEventListener('click', function(){
    location.reload();
  });

})();
