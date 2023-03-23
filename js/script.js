// Avatar mario
const avatarMario = document.getElementById('avatar_mario');
const avatarMario2 = document.getElementById('avatar_mario2');
const avatarMario3 = document.getElementById('avatar_mario3');
const avatarMario4 = document.getElementById('avatar_mario4');

// Header count elements
const timeCount = document.getElementById('time');
const scoreCount = document.getElementById('score');

// Go to page button
const goToWorkButton = document.getElementById('goToWorkButton');
const goToContactButton = document.getElementById('goToContactButton');
const goToFinishButton = document.getElementById('goToFinishButton');

const about = document.getElementById('about');
const contact = document.getElementById('contact');
const finish = document.getElementById('finish');
const flag = document.getElementById('flag');
const start = document.getElementById('startButton');
const works = document.getElementById('works');

let play, play2, play3, play4, play5, play6, play7;

// Change mario images
let avatarImageNumber = 1;

const changeAvatarImages = setInterval(() => {
  // 다음 이미지로 바꾸기 위해 이미지 번호 1씩 증가
  avatarImageNumber++;

  // 이미지가 마지막 번호에 도달하면 다시 1번으로 돌아가기
  if (avatarImageNumber > 4) avatarImageNumber = 1;

  const avatarImageSrc = 'images/mario/mario_0' + avatarImageNumber + '.png';

  avatarMario.setAttribute('src', avatarImageSrc);
  avatarMario2.setAttribute('src', avatarImageSrc);
  avatarMario3.setAttribute('src', avatarImageSrc);
  avatarMario4.setAttribute('src', avatarImageSrc);
}, 80);

const moveDistance = 10;
const convertToPositionNumber = ({ element, position }) => {
  if (position == 'bottom') {
    return parseInt(element.style.bottom);
  }
  return parseInt(element.style.left);
};

const marioMove = function () {
  if (convertToPositionNumber({ element: avatarMario, position: 'left' }) < 610) {
    avatarMario.style.left =
      convertToPositionNumber({ element: avatarMario, position: 'left' }) +
      moveDistance +
      'px';
    play = setTimeout(marioMove, 20);
  } else {
    clearTimeout(play);
  }
};

const marioMove2 = function () {
  avatarMario.style.left =
    convertToPositionNumber({ element: avatarMario, position: 'left' }) +
    moveDistance +
    'px';
  play2 = setTimeout(marioMove2, 20);
};

const marioMove3 = function () {
  if (convertToPositionNumber({ element: avatarMario2, position: 'left' }) < 0) {
    avatarMario2.style.left =
      convertToPositionNumber({ element: avatarMario2, position: 'left' }) +
      moveDistance +
      'px';
    play3 = setTimeout(marioMove3, 20);
  } else {
    clearTimeout(play3);
  }
};

const marioMove4 = function () {
  if (convertToPositionNumber({ element: avatarMario3, position: 'left' }) < 562) {
    avatarMario3.style.left =
      convertToPositionNumber({ element: avatarMario3, position: 'left' }) +
      moveDistance +
      'px';
    play4 = setTimeout(marioMove4, 20);
  } else {
    clearTimeout(play4);
  }
};

const marioMove5 = function () {
  if (convertToPositionNumber({ element: avatarMario4, position: 'left' }) < 610) {
    avatarMario4.style.left =
      convertToPositionNumber({ element: avatarMario4, position: 'left' }) +
      moveDistance +
      'px';
    play6 = setTimeout(marioMove5, 20);
  } else {
    clearTimeout(play6);
  }
};

const flagMove = function () {
  if (convertToPositionNumber({ element: flag, position: 'bottom' }) > -460) {
    flag.style.bottom =
      convertToPositionNumber({ element: flag, position: 'bottom' }) -
      moveDistance +
      'px';
    play7 = setTimeout(flagMove, 60);
  } else {
    clearTimeout(play7);
    $('.win').delay(1000).fadeIn();
    $('.spark01').delay(1000).fadeIn().delay(50).fadeOut();
    $('.spark02').delay(1200).fadeIn().delay(50).fadeOut();
    $('.spark03').delay(1500).fadeIn().delay(50).fadeOut();
    $('.spark04').delay(1800).fadeIn().delay(50).fadeOut();
    $('.spark05').delay(2000).fadeIn().delay(50).fadeOut();
    $('.slide_four .click_me').delay(1000).fadeIn();
  }
};

// Works page : pipe
$('.pipe_orange01 > p').click(function () {
  $('.slide_two .works_box:nth-of-type(1)').stop().slideToggle();
});
$('.pipe_orange02 > p').click(function () {
  $('.slide_two .works_box:nth-of-type(2)').stop().slideToggle();
});
$('.pipe_orange03 > p').click(function () {
  $('.slide_two .works_box:nth-of-type(3)').stop().slideToggle();
});
$('.pipe_orange04 > p').click(function () {
  $('.slide_two .works_box:nth-of-type(4)').stop().slideToggle();
});

const setContact = function () {
  avatarMario3.style.left = 0;

  $('.contact_box').slideUp();
  $('.slide_three .click_me').show();

  $(avatarMario3).addClass('animate__animated');
  $(avatarMario3).addClass('animate__bounceInDown');
  $(avatarMario3).addClass('animate__delay-1s');
  $('.slide_three .click_me').addClass('animate__animated');
  $('.slide_three .click_me').addClass('animate__bounceInDown');
  $('.slide_three .click_me').addClass('animate__delay-2s');
};

$(contact)
  .siblings()
  .click(function () {
    $('.contact_box').slideUp();
    $(avatarMario3).removeClass('animate__animated');
    $(avatarMario3).removeClass('animate__bounceInDown');
    $(avatarMario3).removeClass('animate__delay-1s');
    $('.slide_three .click_me').removeClass('animate__animated');
    $('.slide_three .click_me').removeClass('animate__bounceInDown');
    $('.slide_three .click_me').removeClass('animate__delay-2s');
  });

const goToWorkPage = () => {
  setImagePosition({ element: avatarMario2, position: -600 });
  marioMove2();

  setTimeout(() => marioMove3(), 300);
};

const goToFinishPage = function () {
  setImagePosition({ element: avatarMario4, position: -600 });
  flag.style.bottom = 0;
  $('.contact_box').slideUp();
  $('.win').hide();
  $('.slide_four .click_me').hide();

  setTimeout(() => marioMove5(), 300);

  flagMove();
};

about.addEventListener(
  'click',
  function () {
    location.reload(true);
  },
  false
);

start.addEventListener(
  'click',
  function () {
    marioMove();

    $('.portfolio_world').hide();
    $(this).hide();
    $('.about').delay(1700).fadeIn(500);

    // Typing effect
    let isTyped = false;
    let liIndex = 0;
    const liLength = $('.typing-txt > ul > li').length;

    let typingInedx = 0;
    let typingText = $('.typing-txt > ul > li').eq(liIndex).text().split(''); // 타이핑될 텍스트

    let typingInit; // 반복동작

    if (isTyped == false) {
      // 타이핑이 진행되지 않았다면
      isTyped = true;
      typingInit = setInterval(typing, 60);
    }

    function typing() {
      $('.typing ul li').removeClass('on');
      $('.typing ul li').eq(liIndex).addClass('on'); //현재 타이핑되는 문장에만 커서 애니메이션 적용

      if (typingInedx < typingText.length) {
        // 타이핑될 텍스트 길이만큼 반복
        $('.typing ul li').eq(liIndex).append(typingText[typingInedx]); // 한글자씩 이어줌
        typingInedx++;
      } else {
        // 한문장이 끝나면
        if (liIndex < liLength - 1) {
          liIndex++; //다음문장으로  가기위해 인덱스를 1증가

          //다음문장을 타이핑하기위한 셋팅
          typingInedx = 0;
          isTyped = false;
          typingText = $('.typing-txt>ul>li').eq(liIndex).text();

          clearInterval(typingInit); //타이핑 종료

          //다음문장 타이핑 전 0.5초 쉰다
          setTimeout(() => (typingInit = setInterval(typing, 60)), 500);
        } else if (liIndex == liLength - 1) {
          clearInterval(typingInit); //마지막 문장까지 써지면 반복종료
        }
      }
    }
  },
  false
);

goToWorkButton.addEventListener(
  'click',
  function () {
    goToWorkPage();
  },
  false
);

works.addEventListener(
  'click',
  function () {
    goToWorkPage();
    $('.works_box').slideUp();
  },
  false
);

goToContactButton.addEventListener(
  'click',
  function () {
    clearTimeout(play2);
    avatarMario3.style.left = 0;
    setContact();
  },
  false
);

contact.addEventListener(
  'click',
  function () {
    clearTimeout(play2);
    setContact();
  },
  false
);

avatarMario3.addEventListener(
  'click',
  function () {
    $('.slide_three .click_me').hide();
    $('.contact_box').delay(1500).slideDown();
  },
  false
);

goToFinishButton.addEventListener(
  'click',
  function () {
    goToFinishPage();
  },
  false
);

finish.addEventListener(
  'click',
  function () {
    goToFinishPage();
  },
  false
);

// score, time에 사용
// 숫자 증가 함수
const counter = ({ element, delay, increase }) => {
  let count = 0;

  setInterval(() => {
    count = count + increase;
    element.innerText = count;
  }, delay);
};

// 이미지 position 초기화
const setImagePosition = ({ element, position }) => {
  element.style.position = 'relative';
  element.style.left = `${position}px`;
};

// 초기화
const init = () => {
  counter({ element: score, delay: 100, increase: 10 });
  counter({ element: time, delay: 500, increase: 1 });

  setImagePosition({ element: avatarMario, position: 0 });
  setImagePosition({ element: avatarMario2, position: -600 });
  setImagePosition({ element: avatarMario3, position: 0 });
  setImagePosition({ element: avatarMario4, position: -600 });
  setImagePosition({ element: flag, position: 0 });
};

window.onload = init();
