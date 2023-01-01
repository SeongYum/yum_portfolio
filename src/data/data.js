export const skills = [
  {
    title: 'React',
    contents: [
      '생태계가 넓고, 다양한 라이브러리를 사용할 수 있는 React를 주로 사용합니다.',
      '디자인 패턴 및 최적화에 관심이 많습니다.',
      '상태관리 라이브러리(redux) 사용 경험이 있습니다.',
    ],
  },
  {
    title: 'Javascript',
    contents: [
      'ES6+ 문법에 익숙합니다.',
      'webpack, parcel 등의 번들러 사용 경험이 있습니다.',
      'typescript의 필요성을 느끼고 현재 공부 중입니다.',
    ],
  },
  {
    title: 'HTML/CSS',
    contents: [
      '웹표준을 지키려 노력합니다.',
      'SCSS 문법에 익숙합니다.',
      'styled-component, emotion을 활용할 수 있습니다.',
      'css 라이브러리를 사용할 수 있습니다.',
      'keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.',
    ],
  },
];

export const projects = [
  {
    title: 'SALIDA 재난 대피소 예약 서비스',
    date: '2022.11.08 ~ 2022.12.04(6인 프로젝트)',
    img: 'https://velog.velcdn.com/images/dbal6930/post/e634821b-24c2-443c-a898-e197977ff45b/image.gif',
    about: [
      '스페인어로 출구를 의미하는 [SALIDA]는 재난 발생 후 대피소로 모일 때, 특정 대피소에 사람들이 몰려서 발생할 수 있는 2차 사고의 위험을 줄이기 위해 원하는 대피소에 몇 명의 인원이 있는지 확인 및 예약 할 수 있는 서비스입니다.',
    ],
    skills: ['React', 'javaScript', 'styled-components', 'redux', 'AXIOS'],
    todo: [
      '레이아웃 구성 및 Figma(로고 및 전체 프로젝트 UI 디자인)',
      '커뮤니티 페이지 전체 구현(비품 현황, 물품 나눔, 대피소 후기)',
      '재난별 대피 요령 페이지 구현',
      '반응형 구현',
    ],
    learned: [
      '백엔드 개발자와 협업하는 과정에 관해 많이 배울 수 있었습니다.',
      '협업 시 필요한 명세를 문서로 작성하여 소통했고, 서로 부족한 지식을 공유하며 프로젝트를 진행하였습니다.',
      '또한, git을 활용한 협업에 대해서도 배울 수 있었습니다.',
      '개인적으로는 커뮤니티 페이지를 구현하며 페이지네이션과 무한 스크롤에 대한 숙지를 할 수 있었고, 스켈레톤 UI와 로딩 화면을 구현하며 사용자 친화적인 웹 페이지를 더욱 생각하게 되었습니다.',
    ],
    github: 'https://github.com/SeongYum/Main-project',
    website: 'https://seb40-main-036.vercel.app/',
    text: 'https://codestates.notion.site/40-Team036-SALIDA-bbb2654a9c56417bbc72db0ad807b891#c48f1f66b12a49d6a4f5800331a20eb2',
    figma:
      'https://www.figma.com/file/yiRWGLIoCHJpEeGKVFFurF/Untitled?node-id=0%3A1&t=6qEJfzW2xS5upKJO-1',
  },
  {
    title: 'Portfolio',
    date: '2022.12 (개인 프로젝트)',
    img: 'https://velog.velcdn.com/images/dbal6930/post/16a7bb97-2413-4de4-a12d-c63624b37731/image.gif',
    about: [
      '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.',
      '자기소개와 기술 스택, 프로젝트에 대해 소개합니다.',
    ],
    skills: ['React', 'javaScript', 'styled-components', 'React-scroll'],
    todo: [
      '레이아웃 구성 및 Figma(로고 및 전체 프로젝트 UI 디자인)',
      'react-scroll 라이브러리를 통해 각 메뉴를 클릭했을 때 해당 컴포넌트로 이동할수 있도록 구현',
      'keyframes을 통해 배경화면 애니메이션 구현',
      '',
    ],
    learned: [
      '디자인에 대한 고민을 많이 한 프로젝트입니다. 포트폴리오를 제작하며 UX/UI에 대해 많은 생각을 할 수 있어 좋았습니다',
      'keyframes을 사용한 애니메이션을 배경이나 버튼에 적용하는 과정이 재밌었습니다.',
    ],
    github: 'https://github.com/SeongYum/yum_portfolio',
    website: 'https://yum-portfolio.vercel.app/',
    figma:
      'https://www.figma.com/file/SGoM8B4juWK9PP0CzsctBo/Untitled?node-id=0%3A1&t=JQa91IypD0G9rRKX-1',
  },
  {
    title: 'TODO LIST',
    date: '2022.10.08 (개인 프로젝트)',
    img: 'https://velog.velcdn.com/images/dbal6930/post/af2e1731-9ee6-4d18-9b17-2e1f438f2d01/image.gif',
    about: [
      'React 학습을 위해 만들었던 TODO LIST 입니다.',
      'Todo List 작성, 삭제, 수정이 가능합니다.',
      '할 일이 몇 개 남았는지 알 수 있습니다.',
    ],
    skills: ['React', 'javaScript', 'styled-components'],
    todo: ['레이아웃 구성 및 Figma 디자인', 'Todo List CRUD'],
    learned: [
      '처음으로 React를 사용한 프로젝트입니다.',
      '이 프로젝트를 통해 React에 대한 학습을 할 수 있었으며, 게시글 CRUD에 대한 개념을 확실하게 배우게 되었습니다.',
    ],
    github: 'https://github.com/SeongYum/todolist',
  },
];
