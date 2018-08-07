/*jshint esversion: 6 */
// function checkButtom() {
//   let x = document.querySelector('button');
//   switch (x.status) {
//     case 'locked':
//       return rgba(92, 92, 92, 0.62);
//     case 'empty':
//       return rgba(255, 255, 255, 0.62);
//     case 'selected':
//       return rgba(87, 145, 255, 0.62);
//   }
// }
// checkButtom();

function buttonPosition() {
  const skillArray = [
    ['設計規範', 'UI設計跟平面設計最大的不同是，因為具有功能、要被操作且須遵守一些易用性規範，雖然難啃但不失為初心者必備武器。'],
    ['爬梳乾貨', 'UI/UX這行目前在台灣沒什麼完全的大學科系可選擇，與 IT 產業相同的是需仰賴大量的閱讀與自學，不管是新手村或職業人士都是要每天持續學習。'],
    ['UX思維', '使用者體驗 (User Experience) 與使用者介面 (User Interface) 的領域實在是有些不同，這邊僅點破一個常見誤會：UX設計師每天面對的是更多的統計資料、調研與分析，爬梳脈絡與心理預測，跟不少同學響往的「設計師(Designer)」的華麗工作日常不太一樣，盯著螢幕畫設計稿、著重視覺與美感，創造讓心情愉悅的畫面相關工作才是 UI設計師的工作內容。'],
    ['設計思考', '設計思考（Design Thinking）是一個以人為本的解決問題方法論，透過從人的需求出發，為各種議題尋求創新解決方案，並創造更多的可能性。IDEO設計公司總裁提姆·布朗曾在《哈佛商業評論》定義：「設計思考是以人為本的設計精神與方法，考慮人的需求、行為，也考量科技或商業的可行性。」'],
    ['心理學', '著名的人因工程學者，同時也是世紀最有影響力之一的設計師 Donald A. Normand 在《設計的心理學》中呼籲，設計師應該為了產品的「易用性」而奮鬥，否則費盡心思製造出功能多變、使用繁雜的產品，即使外觀漂亮，也只會讓消費者徒增困擾。這本書也解釋了這些基於心理學的設計原則，如何在日新月異的科技進化中歷久彌新。'],
    ['線框稿', '其實就是設計草稿，只是在產品設計上為了更擬真，一般指的線框稿(Wireframe)都會是需要可以點擊交互的，製作線框稿的目的著重在畫面間的流程與操作，並透過這份由簡單線條與去視覺化的草圖去與工程師、專案經理等團隊成員溝通，確保大家對產品最後的想像是一致的。'],
    ['插畫', '插畫在今年的網頁視覺上存在感愈來愈重，愈來愈多的科技公司官網及產品流程皆採用插畫來取代以往的扁平、簡約風格，像是 Slack 、Dropbox跟 Shopify等，帶來更有溫度的使用體驗，而且也更有趣，如果你是平面設計出身或本來就喜歡插畫，在設計介面的時候可以選擇自產素材，創作更具備個人風格的作品。'],
    ['配色', '許多公司或品牌會定義出 VI(企業視覺識別)，其中可能涵蓋了主要的色碼，但大多是平面設計適用，但網頁上由於多了互動操作的部分，需要更多用色靈活性，像是漸層、陰影、Hover及Click的轉換⋯，等。'],
    ['美感', '不論是什麼樣的數位產品(Web , App⋯等)，視覺都是接觸用戶的第一道關卡，每個物件的陰影、大小到圓角的處理，以及每個項目之間的間距及整體配色，都是魔鬼的關鍵細節，也是設計師的基本素養。'],
    ['文案', '雖然說文案可能已經有其他部門會準備，但更常遇到的狀況是，他們也不知道你製作網頁會需要什麼樣的內容，或是今天是你要獨自完成一個網站的上架；其實當架站與設計技術經驗到一定門檻後，產文案反而是最難的，吸引人的文案是需要大量時間爬梳整理才能夠寫出來。'],
    ['靈感', '蘋果打到牛頓的頭，達文西賞鳥展翅，這些靈光乍現的瞬間對設計師來說是稀貴的寶石，只是靈感不單是稍縱即逝的瞬間，也是自發的學習勉強積累。成功的設計師除了具備軟體技能外，每天更需要維持汲取靈感、蒐集想法，以在專案來臨時發揮實力，讓眾同事發出「哇！果然是設計師」的讚嘆。'],
    ['圖庫', '網頁中會用到大量的實拍照片、或是作為背景的情境照，如果客戶那邊提供的素材不盡人意，這時候你就得自己準備了，作好美美的設計稿才能夠有說服力。'],
    ['UI設計', '終於進入到介面設計的環節啦！前面的些準備及技巧，都是為了在這一階段能有更精彩的表現，坦白說現在的 UI 設計軟體的操作愈做愈簡單，功能也幾乎愈來愈像，挑一款適合你的工具就可以囉。'],
    ['標註', '這也是一個可以讓工程師提早下班的技能，透過包含字體、大小、顏色及間劇等在內的標註文件，可以讓工程師更清楚地知道設計稿的真實模樣。'],
    ['略懂開發', '懂一點 Code (像是 Html5 / CSS3/JS..) 知道其網頁構成對於設計上也能帶來很大幫助，也能更靈活的做出想要的視覺與創意、並且是實務上可以被實踐的，也甭讓工程師加班 QAQ'],
    ['原型', '「完成度真高啊！」就是 Prototype(原型)的主要目標，透過接近最後成品的模擬，可以更確切的定義出團隊協作上對產品的最終想像，可以點擊、切換頁面，並加入一點微特效，也能讓開發者們更清楚知道設計師的想法，為團隊省下重工的時間(產品開發很燒錢也好花時間的)。'],
    ['出師', '恭喜你！抵達這裡已經擁有 UI設計師的基本職能，但才正要開始而已呢，這職好玩的是必須每天都要學習新東西，並且從四處蒐集靈感與資源，以及持續創作累積屬於自己的作品。'],
    ['版本控制', '一個專案有時會需要多名設計師合作，如何存放檔案、命名、分工內容都是開發流程中常遇到的問題。或是 PM 想掌握每位設計師的進度、客戶想了解前後設計稿差異，這都讓設計師需要花額外的精力去處理。'],
    ['厚黑學', '職場、商場上與人共事如此險峻，有時候面臨到的是公司內部與主管、工程師們的協作，並不是做好份內的事就可以達成專案目標，初入職場的你會感受到非常大的挫折，這時候你會需要懂一點技巧去維持設計師的立場，包括人際相處與溝通技巧，但記得：我們都是為了打造更好的產品，別走火入魔拉。'],

  ];

  let titleArr = [
    '設計規範', //1
    '爬梳乾貨', //2
    'UX思維', //3
    '設計思考', //4
    '心理學', //5
    '線框稿', //6
    '插畫', //7
    '配色', //8
    '美感', //9
    '文案', //10
    '靈感', //11
    '圖庫', //12
    'UI設計', //13
    '標註', //15
    '略懂開發', //16
    '原型', //14
    '出師', //17
    '版本控制', //18
    '厚黑學' //19
  ];
  let picArr = [
    './img/img_blade-1', //1
    './img/img_meat', //2
    './img/img_shield', //3
    './img/img_hat', //4
    './img/img_horn', //5
    './img/img_hammer', //6
    './img/img_illustration', //7
    './img/img_color', //8
    './img/img_sense', //9
    './img/img_text', //10
    './img/img_inspiration', //11
    './img/img_pictures', //12
    './img/img_axe', //13
    './img/img_book', //15
    './img/img_quill', //16
    './img/img_blade', //14
    './img/img_sword', //17
    './img/img_timer', //18
    './img/img_emblem', //19
  ];

  let btnarr = [
    [80, 140],//1
    [270, 140],//2
    [80, 340],//3
    [230, 340],//4
    [390, 340],//5
    [550, 240],//6
    [720, 40],//7
    [880, 40],//8
    [720, 240],//9
    [880, 240],//10
    [720, 440],//11
    [880, 440],//12
    [1050, 240],//13
    [1220, 40],//15
    [1380, 40],//16
    [1220, 240],//14
    [1380, 240],//17
    [1220, 440],//18
    [1380, 440],//19
  ];
  // console.log(arr);
  // console.log(arr.length);
  btnarr.forEach(function (xy, i) {
    let imag = document.createElement('img');
    imag.src = picArr[i] + '.png';
    let newBT = document.createElement('button');
    newBT.classList = 'btn';
    newBT.style.left = xy[0] + 'px';
    newBT.style.top = xy[1] + 'px';
    let dataBefore = document.createAttribute('dataBefore');
    dataBefore.value = titleArr[i];
    newBT.attributes.setNamedItem(dataBefore);

    newBT.appendChild(imag);
    document.getElementById('mid').appendChild(newBT);

    newBT.onclick = function() {
      // var word = [];
      let newP = document.createElement('p');
      let newY = document.createElement('y');
      newY.innerHTML = skillArray[i][0];
      newP.innerHTML = skillArray[i][1];
      let x = document.querySelector('.bor');
      x.innerHTML = '';
      x.appendChild(newY);
      x.appendChild(newP);

      // newBT.attributes('status').value = 'selected';
    };
    
  });
}
buttonPosition();