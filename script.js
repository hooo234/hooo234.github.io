const questions = {
    1: {
        question: "요즘 하루의 기분을 1~10점으로 평가한다면 몇 점인가요?",
        answers: [
            { text: "8~10 (긍정적)", type: "positive", nextQuestion: 2 },
            { text: "4~7 (보통)", type: "neutral", nextQuestion: 3 },
            { text: "1~3 (부정적)", type: "negative", nextQuestion: 4 }
        ]
    },
    2: {
        question: "최근 가장 기분이 좋았던 순간은 언제인가요?",
        answers: [
            { text: "성과를 이뤘을 때", type: "achievement", nextQuestion: 5 },
            { text: "사람들과 함께 시간을 보냈을 때", type: "social", nextQuestion: 6 },
            { text: "새로운 경험을 했을 때", type: "exploration", nextQuestion: 7 }
        ]
    },
    3: {
        question: "하루 중 기분이 가장 좋을 때는 언제인가요?",
        answers: [
            { text: "아침", type: "positive", nextQuestion: 8 },
            { text: "저녁", type: "neutral", nextQuestion: 9 },
            { text: "특정 시간 없음", type: "negative", nextQuestion: 10 }
        ]
    },
    4: {
        question: "최근 기분이 좋았던 순간이 있었나요?",
        answers: [
            { text: "거의 없었다", type: "negative", nextQuestion: 11 },
            { text: "가끔 있었다", type: "neutral", nextQuestion: 12 }
        ]
    },
    5: {
        question: "성과를 이루기 위해 어떤 노력을 했나요?",
        answers: [
            { text: "계획적으로 접근했다", type: "achievement", nextQuestion: 13 },
            { text: "즉흥적으로 해결했다", type: "exploration", nextQuestion: 14 },
            { text: "주변의 도움을 받았다", type: "social", nextQuestion: 15 }
        ]
    },
    6: {
        question: "사람들과 함께 보낸 시간에서 무엇이 가장 즐거웠나요?",
        answers: [
            { text: "대화와 소통", type: "social", nextQuestion: 16 },
            { text: "활동 자체", type: "positive", nextQuestion: 17 },
            { text: "분위기", type: "neutral", nextQuestion: 18 }
        ]
    },
    7: {
        question: "새로운 경험은 어떤 영향을 주었나요?",
        answers: [
            { text: "도전과 성취", type: "achievement", nextQuestion: 17 },
            { text: "색다른 즐거움", type: "positive", nextQuestion: 14 },
            { text: "배움과 성장", type: "exploration", nextQuestion: 5 }
        ]
    },
    8: {
        question: "아침에 기분이 좋은 이유는 무엇인가요?",
        answers: [
            { text: "새로운 시작", type: "positive", nextQuestion: 14 },
            { text: "조용한 환경", type: "neutral", nextQuestion: 12 },
            { text: "습관적인 활동", type: "achievement", nextQuestion: 17 }
        ]
    },
    9: {
        question: "저녁에 기분이 좋은 이유는 무엇인가요?",
        answers: [
            { text: "하루를 마무리하며 느끼는 성취감", type: "achievement", nextQuestion: 21 },
            { text: "휴식과 여유", type: "neutral", nextQuestion: 18 },
            { text: "활발한 활동", type: "positive", nextQuestion: 17 }
        ]
    },
    10: {
        question: "특정 시간에 기분이 변하지 않는 이유는 무엇인가요?",
        answers: [
            { text: "기분의 변화를 잘 느끼지 못한다", type: "negative", nextQuestion: 15 },
            { text: "특별히 즐거운 일이 없다", type: "neutral", nextQuestion: 11 },
            { text: "항상 일정하다", type: "positive", nextQuestion: 18 }
        ]
    },
    11: {
        question: "기분이 좋지 않을 때 주로 무엇을 하나요?",
        answers: [
            { text: "혼자 시간을 보낸다", type: "negative", nextQuestion: 12 },
            { text: "사람들과 대화를 나눈다", type: "social", nextQuestion: 15 },
            { text: "다른 활동에 몰두한다", type: "exploration", nextQuestion: 17 }
        ]
    },
    12: {
        question: "기분을 회복하기 위해 어떤 노력을 하나요?",
        answers: [
            { text: "운동", type: "achievement", nextQuestion: 22 },
            { text: "명상 또는 휴식", type: "neutral", nextQuestion: 25 },
            { text: "창의적 활동 (그림, 글쓰기 등)", type: "exploration", nextQuestion: 21 }
        ]
    },
    13: {
        question: "계획적으로 접근했을 때 어려운 점은 무엇인가요?",
        answers: [
            { text: "시간 관리", type: "achievement", nextQuestion: 47 },
            { text: "예상치 못한 변수", type: "negative", nextQuestion: 19 },
            { text: "완벽주의 성향", type: "neutral", nextQuestion: 26 }
        ]
    },
    14: {
        question: "즉흥적으로 접근했을 때 즐거운 점은 무엇인가요?",
        answers: [
            { text: "예상치 못한 결과", type: "exploration", nextQuestion: 19 },
            { text: "자유로운 선택", type: "positive", nextQuestion: 22 },
            { text: "긴장감과 흥미", type: "neutral", nextQuestion: 17 }
        ]
    },
    15: {
        question: "주변의 도움을 받았을 때 느낀 점은 무엇인가요?",
        answers: [
            { text: "신뢰와 연결감", type: "social", nextQuestion: 21 },
            { text: "기대에 부응해야 한다는 부담", type: "negative", nextQuestion: 26 },
            { text: "감사의 마음", type: "neutral", nextQuestion: 24 }
        ]
    },
    16: {
        question: "대화와 소통에서 무엇이 가장 중요하다고 느끼나요?",
        answers: [
            { text: "서로의 의견 존중", type: "social", nextQuestion: 17 },
            { text: "분위기와 친근함", type: "neutral", nextQuestion: 18 },
            { text: "정확한 정보 전달", type: "achievement", nextQuestion: 19 }
        ]
    },
    17: {
        question: "즐거운 활동에서 가장 크게 느낀 감정은 무엇인가요?",
        answers: [
            { text: "흥미와 몰입", type: "exploration", nextQuestion: 20 },
            { text: "만족감과 성취감", type: "achievement", nextQuestion: 21 },
            { text: "새로운 도전", type: "positive", nextQuestion: 22 }
        ]
    },
    18: {
        question: "분위기를 개선하기 위해 어떤 노력을 하시나요?",
        answers: [
            { text: "농담을 한다", type: "social", nextQuestion: 23 },
            { text: "공감하며 이야기를 나눈다", type: "social", nextQuestion: 24 },
            { text: "상황에 따라 침묵을 지킨다", type: "neutral", nextQuestion: 25 }
        ]
    },
    19: {
        question: "정확한 정보를 얻기 위해 어떤 방법을 사용하시나요?",
        answers: [
            { text: "스스로 조사한다", type: "exploration", nextQuestion: 26 },
            { text: "전문가에게 조언을 구한다", type: "social", nextQuestion: 27 },
            { text: "다양한 의견을 종합한다", type: "achievement", nextQuestion: 28 }
        ]
    },
    20: {
        question: "흥미로운 활동을 찾을 때 주로 무엇을 고려하시나요?",
        answers: [
            { text: "새로운 경험", type: "exploration", nextQuestion: 29 },
            { text: "친구들과 함께할 수 있는지", type: "social", nextQuestion: 30 },
            { text: "스스로 즐길 수 있는지", type: "positive", nextQuestion: 31 }
        ]
    },
    21: {
        question: "성취감을 느낀 순간, 어떤 기분이 들었나요?",
        answers: [
            { text: "내가 성장하고 있다는 확신", type: "achievement", nextQuestion: 22 },
            { text: "다른 사람들에게 인정받는 느낌", type: "social", nextQuestion: 30 },
            { text: "새로운 목표를 세우고 싶어짐", type: "positive", nextQuestion: 29 }
        ]
    },
    22: {
        question: "새로운 도전을 할 때 가장 큰 동기는 무엇인가요?",
        answers: [
            { text: "스스로의 성장", type: "achievement", nextQuestion: 29 },
            { text: "주변의 인정", type: "social", nextQuestion: 30 },
            { text: "호기심과 재미", type: "exploration", nextQuestion: 35 }
        ]
    },
    23: {
        question: "농담으로 분위기를 바꿨을 때 주위의 반응은 어땠나요?",
        answers: [
            { text: "긍정적이고 웃음이 넘쳤다", type: "positive", nextQuestion: 30 },
            { text: "가볍게 반응했다", type: "neutral", nextQuestion: 28 },
            { text: "별다른 반응이 없었다", type: "negative", nextQuestion: 25 }
        ]
    },
    24: {
        question: "공감하며 대화를 나눴을 때 느낀 점은 무엇인가요?",
        answers: [
            { text: "상대방과의 유대감이 깊어졌다", type: "social", nextQuestion: 30 },
            { text: "문제가 잘 해결되었다", type: "achievement", nextQuestion: 35 },
            { text: "나도 상대방에게 위로받았다", type: "positive", nextQuestion: 34 }
        ]
    },
    25: {
        question: "침묵이 긍정적으로 작용했던 순간이 있었나요?",
        answers: [
            { text: "상대방이 스스로 이야기하게 되었다", type: "social", nextQuestion: 28 },
            { text: "상황이 자연스럽게 정리되었다", type: "neutral", nextQuestion: 31 },
            { text: "긴장을 완화시켰다", type: "positive", nextQuestion: 34 }
        ]
    },
    26: {
        question: "스스로 조사했을 때 느끼는 장점은 무엇인가요?",
        answers: [
            { text: "정보의 신뢰도가 높다", type: "achievement", nextQuestion: 32 },
            { text: "직접 배울 수 있다", type: "exploration", nextQuestion: 35 },
            { text: "시간이 효율적이다", type: "neutral", nextQuestion: 36 }
        ]
    },
    27: {
        question: "전문가에게 조언을 구했을 때 가장 유익했던 점은?",
        answers: [
            { text: "신뢰할 수 있는 정보를 얻음", type: "achievement", nextQuestion: 32 },
            { text: "시간을 절약함", type: "positive", nextQuestion: 35 },
            { text: "새로운 관점을 배움", type: "exploration", nextQuestion: 36 }
        ]
    },
    28: {
        question: "다양한 의견을 종합할 때 가장 중요한 기준은?",
        answers: [
            { text: "객관적인 데이터", type: "achievement", nextQuestion: 32 },
            { text: "다수의 공통된 의견", type: "social", nextQuestion: 35 },
            { text: "상황에 맞는 적합성", type: "positive", nextQuestion: 36 }
        ]
    },
    29: {
        question: "새로운 경험에서 가장 얻고 싶은 것은 무엇인가요?",
        answers: [
            { text: "배움과 성장", type: "exploration", nextQuestion: 38 },
            { text: "즐거움과 추억", type: "positive", nextQuestion: 39 },
            { text: "도전과 성취", type: "achievement", nextQuestion: 36 }
        ]
    },
    30: {
        question: "친구들과 함께할 활동을 선택할 때 가장 중요하게 보는 점은?",
        answers: [
            { text: "모두가 즐거워할 수 있는지", type: "social", nextQuestion: 28 },
            { text: "비용과 시간의 적절성", type: "neutral", nextQuestion: 31 },
            { text: "새로운 경험을 제공하는지", type: "exploration", nextQuestion: 29 }
        ]
    },
    31: {
        question: "혼자 시간을 보낼 때 주로 무엇을 하나요?",
        answers: [
            { text: "책을 읽거나 공부한다", type: "exploration", nextQuestion: 32 },
            { text: "음악을 듣거나 영화를 본다", type: "positive", nextQuestion: 33 },
            { text: "아무것도 하지 않고 쉰다", type: "neutral", nextQuestion: 34 }
        ]
    },
    32: {
        question: "책이나 공부를 통해 얻는 가장 큰 만족은 무엇인가요?",
        answers: [
            { text: "새로운 지식을 얻는다", type: "exploration", nextQuestion: 35 },
            { text: "자기계발의 성취감", type: "achievement", nextQuestion: 36 },
            { text: "현실에서 벗어나는 경험", type: "positive", nextQuestion: 37 }
        ]
    },
    33: {
        question: "음악이나 영화를 즐길 때 가장 큰 매력은 무엇인가요?",
        answers: [
            { text: "감정의 해소", type: "positive", nextQuestion: 38 },
            { text: "예술적인 영감", type: "exploration", nextQuestion: 39 },
            { text: "휴식과 여유", type: "neutral", nextQuestion: 40 }
        ]
    },
    34: {
        question: "아무것도 하지 않는 시간에 느끼는 감정은 무엇인가요?",
        answers: [
            { text: "편안함", type: "neutral", nextQuestion: 41 },
            { text: "불안감", type: "negative", nextQuestion: 42 },
            { text: "무기력함", type: "negative", nextQuestion: 43 }
        ]
    },
    35: {
        question: "새로운 지식을 얻었을 때 가장 먼저 하고 싶은 것은 무엇인가요?",
        answers: [
            { text: "다른 사람과 공유한다", type: "social", nextQuestion: 44 },
            { text: "실생활에 적용한다", type: "achievement", nextQuestion: 45 },
            { text: "더 깊이 탐구한다", type: "exploration", nextQuestion: 36 }
        ]
    },
    36: {
        question: "자기계발의 성취감을 느꼈던 가장 최근 경험은 무엇인가요?",
        answers: [
            { text: "새로운 기술을 배웠을 때", type: "achievement", nextQuestion: 46 },
            { text: "목표를 달성했을 때", type: "achievement", nextQuestion: 44 },
            { text: "습관을 개선했을 때", type: "positive", nextQuestion: 45 }
        ]
    },
    37: {
        question: "현실에서 벗어나기 위해 주로 어떤 활동을 하시나요?",
        answers: [
            { text: "여행", type: "exploration", nextQuestion: 42 },
            { text: "창작 활동", type: "exploration", nextQuestion: 38 },
            { text: "명상", type: "positive", nextQuestion: 40 }
        ]
    },
    38: {
        question: "음악이나 영화를 통해 감정을 해소한 가장 기억에 남는 순간은?",
        answers: [
            { text: "스트레스를 날려버렸을 때", type: "positive", nextQuestion: 40 },
            { text: "슬픔을 위로받았을 때", type: "social", nextQuestion: 42 },
            { text: "기쁨을 더 크게 느꼈을 때", type: "positive", nextQuestion: 41 }
        ]
    },
    39: {
        question: "예술적인 영감을 얻었을 때, 가장 먼저 떠오르는 행동은 무엇인가요?",
        answers: [
            { text: "그 영감을 기록한다", type: "exploration", nextQuestion: 46 },
            { text: "바로 실행에 옮긴다", type: "achievement", nextQuestion: 48 },
            { text: "시간을 두고 생각한다", type: "neutral", nextQuestion: 47 }
        ]
    },
    40: {
        question: "휴식과 여유를 위한 완벽한 환경은 무엇인가요?",
        answers: [
            { text: "조용하고 아늑한 공간", type: "neutral", nextQuestion: 46 },
            { text: "자연과 가까운 장소", type: "positive", nextQuestion: 47 },
            { text: "활기차고 즐거운 분위기", type: "social", nextQuestion: 48 }
        ]
    },
    41: {
        question: "편안함을 느낄 때 가장 중요한 요소는 무엇인가요?",
        answers: [
            { text: "외부 자극이 없는 환경", type: "neutral", nextQuestion: 46 },
            { text: "심리적인 안정감", type: "positive", nextQuestion: 42 },
            { text: "신체적인 휴식", type: "positive", nextQuestion: 48 }
        ]
    },
    42: {
        question: "불안감을 해소하기 위해 주로 어떤 방법을 사용하시나요?",
        answers: [
            { text: "규칙적인 루틴을 만든다", type: "achievement", nextQuestion: 46 },
            { text: "명상이나 심호흡을 한다", type: "positive", nextQuestion: 47 },
            { text: "주변 사람들에게 도움을 요청한다", type: "social", nextQuestion: 48 }
        ]
    },
    43: {
        question: "무기력함을 극복하기 위해 가장 효과적이었던 방법은 무엇인가요?",
        answers: [
            { text: "작은 목표를 세우고 실행한다", type: "achievement", nextQuestion: 45 },
            { text: "운동이나 신체 활동을 한다", type: "positive", nextQuestion: 46 },
            { text: "새로운 자극을 찾는다", type: "exploration", nextQuestion: 47 }
        ]
    },
    44: {
        question: "다른 사람과 지식을 공유했을 때의 가장 좋은 경험은?",
        answers: [
            { text: "새로운 관점을 배우는 것", type: "exploration", nextQuestion: 46 },
            { text: "상대방이 감사함을 표현했을 때", type: "social", nextQuestion: 47 },
            { text: "내 지식이 인정받는 느낌", type: "positive", nextQuestion: 48 }
        ]
    },
    45: {
        question: "실생활에 지식을 적용했을 때의 가장 큰 변화는?",
        answers: [
            { text: "효율이 증가했다", type: "achievement", nextQuestion: 46 },
            { text: "문제가 해결되었다", type: "positive", nextQuestion: 47 },
            { text: "삶의 질이 향상되었다", type: "positive", nextQuestion: 48 }
        ]
    },
    46: {
        question: "일을 시작할 때 가장 먼저 고려하는 것은 무엇인가요?",
        answers: [
            { text: "시간 관리", type: "achievement", nextQuestion: 47 },
            { text: "목표 설정", type: "achievement", nextQuestion: 48 },
            { text: "자원의 준비 상태", type: "neutral", nextQuestion: 49 }
        ]
    },
    47: {
        question: "시간 관리를 잘하기 위해 주로 사용하는 방법은 무엇인가요?",
        answers: [
            { text: "일정을 세분화한다", type: "achievement", nextQuestion: 50 },
            { text: "중요한 작업을 우선시한다", type: "achievement", nextQuestion: 51 },
            { text: "일정을 다른 사람과 조율한다", type: "social", nextQuestion: 52 }
        ]
    },
    48: {
        question: "목표를 설정할 때 가장 중요한 요소는 무엇인가요?",
        answers: [
            { text: "현실적인 달성 가능성", type: "achievement", nextQuestion: 53 },
            { text: "장기적인 비전", type: "exploration", nextQuestion: 54 },
            { text: "주변의 기대와 요구", type: "social", nextQuestion: 55 }
        ]
    },
    49: {
        question: "자원을 준비할 때 주로 무엇을 확인하나요?",
        answers: [
            { text: "금전적 비용", type: "neutral", nextQuestion: 56 },
            { text: "시간과 노력", type: "achievement", nextQuestion: 57 },
            { text: "다른 사람의 협력", type: "social", nextQuestion: 58 }
        ]
    },
    50: {
        question: "일정을 세분화했을 때 느낀 가장 큰 장점은 무엇인가요?",
        answers: [
            { text: "혼란이 줄어든다", type: "neutral", nextQuestion: 59 },
            { text: "작업 효율이 증가한다", type: "achievement", nextQuestion: 60 },
            { text: "긴장감이 줄어든다", type: "positive", nextQuestion: null }
        ]
    },
    51: {
        question: "중요한 작업을 우선시했을 때 발생한 어려움은 무엇인가요?",
        answers: [
            { text: "덜 중요한 작업이 밀린다", type: "neutral", nextQuestion: null },
            { text: "우선순위 결정이 어렵다", type: "negative", nextQuestion: null },
            { text: "다른 사람과의 조율이 필요하다", type: "social", nextQuestion: null }
        ]
    },
    52: {
        question: "일정을 조율할 때 가장 어려운 점은 무엇인가요?",
        answers: [
            { text: "다른 사람의 협조 부족", type: "social", nextQuestion: null },
            { text: "불확실한 변수", type: "negative", nextQuestion: null },
            { text: "시간이 부족하다", type: "neutral", nextQuestion: null }
        ]
    },
    53: {
        question: "현실적인 목표를 설정했을 때 느낀 감정은?",
        answers: [
            { text: "안정감", type: "neutral", nextQuestion: null },
            { text: "확신과 자신감", type: "positive", nextQuestion: null },
            { text: "다소 지루함", type: "negative", nextQuestion: null }
        ]
    },
    54: {
        question: "장기적인 비전을 세웠을 때 가장 중요하게 생각한 것은?",
        answers: [
            { text: "내 삶의 방향성", type: "positive", nextQuestion: null },
            { text: "주변의 영향력", type: "social", nextQuestion: null },
            { text: "재정적 안정성", type: "neutral", nextQuestion: null }
        ]
    },
    55: {
        question: "주변의 기대와 요구를 우선시했을 때 느낀 점은?",
        answers: [
            { text: "책임감이 커졌다", type: "achievement", nextQuestion: null },
            { text: "스트레스가 증가했다", type: "negative", nextQuestion: null },
            { text: "의미 있는 관계를 유지했다", type: "social", nextQuestion: null }
        ]
    },
    56: {
        question: "금전적 비용을 고려할 때 가장 중점적으로 보는 요소는?",
        answers: [
            { text: "예산 내에서 가능한지", type: "neutral", nextQuestion: null },
            { text: "장기적으로 가치가 있는지", type: "achievement", nextQuestion: null },
            { text: "다른 대안이 있는지", type: "exploration", nextQuestion: null }
        ]
    },
    57: {
        question: "시간과 노력을 효과적으로 사용하기 위해 어떤 방법을 쓰시나요?",
        answers: [
            { text: "계획을 철저히 세운다", type: "achievement", nextQuestion: null },
            { text: "일정을 조율한다", type: "social", nextQuestion: null },
            { text: "다른 사람의 도움을 받는다", type: "social", nextQuestion: null }
        ]
    },
    58: {
        question: "다른 사람의 협력을 구했을 때 가장 기억에 남는 경험은?",
        answers: [
            { text: "팀워크가 잘 맞았다", type: "social", nextQuestion: null },
            { text: "갈등을 해결했다", type: "achievement", nextQuestion: null },
            { text: "목표를 더 빨리 달성했다", type: "positive", nextQuestion: null }
        ]
    },
    59: {
        question: "혼란이 줄어들었을 때 느낀 가장 큰 변화는?",
        answers: [
            { text: "집중력이 높아졌다", type: "achievement", nextQuestion: null },
            { text: "작업 속도가 빨라졌다", type: "positive", nextQuestion: null },
            { text: "스트레스가 줄었다", type: "neutral", nextQuestion: null }
        ]
    },
    60: {
        question: "작업 효율이 증가했을 때 느낀 성취감은?",
        answers: [
            { text: "내 자신에 대한 자부심", type: "positive", nextQuestion: null },
            { text: "다음 작업에 대한 의욕", type: "achievement", nextQuestion: null },
            { text: "주변의 인정", type: "social", nextQuestion: null }
        ]
    }

    // 더 많은 질문 데이터를 추가...
};

let currentQuestionId = 1; // 현재 질문 ID
let previousQuestions = []; // 이전 질문 ID를 추적하는 스택
let selectedAnswers = {}; // 사용자가 선택한 답변을 저장

let scores = {
    positive: 0,
    neutral: 0,
    negative: 0,
    achievement: 0,
    social: 0,
    exploration: 0
};


// 테스트 시작하기
function startTest() {
    document.querySelector("button").style.display = "none"; // 시작 버튼 숨기기
    document.getElementById("progress-container").style.display = "block"; // 진행 바 표시
    document.getElementById("question-container").style.display = "block"; // 질문 컨테이너 표시
    showQuestion();
}


function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionData = questions[currentQuestionId];

    // 데이터 유효성 검사
    if (!questionData) {
        calculateResult(); // 질문이 끝났을 경우 결과 계산
        return;
    }

    // 질문 및 답변 표시
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul>
            ${questionData.answers
                .map(
                    (answer, index) => `
                <li>
                    <button onclick="selectAnswer('${answer.type}', ${questionData.answers[index].nextQuestion})">
                        ${answer.text}
                    </button>
                </li>`
                )
                .join("")}
        </ul>
        <div>
            ${previousQuestions.length > 0 ? `<button onclick="prevQuestion()">이전</button>` : ""}
        </div>
    `;
}
function selectAnswer(type, nextQuestion) {
    // 점수 업데이트
    if (type in scores) {
        scores[type]++;
    }

    // 현재 질문 ID 저장
    previousQuestions.push(currentQuestionId);

    // 다음 질문으로 이동
    currentQuestionId = nextQuestion;

    // 다음 질문 표시
    showQuestion();
}

function prevQuestion() {
    if (previousQuestions.length === 0) {
        alert("이전 질문이 없습니다.");
        return;
    }

    // 이전 질문으로 돌아가기
    currentQuestionId = previousQuestions.pop();

    // 이전 질문 표시
    showQuestion();
}

function calculateResult() {
    const questionContainer = document.getElementById("question-container");

    // 최고 점수를 가진 유형 찾기
    const highestScoreType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    const results = {
        positive: {
            description: "당신은 낙천적이고 긍정적인 성격을 가지고 있습니다. 어려운 상황에서도 밝은 태도로 임하며, 주변 사람들에게 희망과 활력을 줍니다.",
            recommendations: [
                { type: "활동", content: "감사 일기 쓰기, 명상, 긍정적인 친구와 대화하기" },
                { 
                    type: "책",
                    content: "《긍정의 힘》 by 조엘 오스틴",
                    image: "긍정의힘.jpg"
                },
                { type: "기타", content: "긍정적인 글귀가 담긴 포스터로 방 꾸미기" }
            ]
        },
        neutral: {
            description: "당신은 차분하고 현실적인 성격을 가지고 있습니다. 상황을 냉정하게 바라보며 신중한 결정을 내리는 데 강점이 있습니다.",
            recommendations: [
                { type: "활동", content: "독서 클럽 참여, 시간 관리 앱 사용해보기, 정리정돈" },
                { 
                    type: "책", 
                    content: "《미니멀리즘 라이프》 by 조슈아 필즈 밀번",
                    image: "미니멀리즘 라이프.jpg" 
                },
                { type: "기타", content: "한 달 목표를 세우고 작은 단계를 실천하기" }
            ]
        },
        negative: {
            description: "당신은 민감하고 감정을 잘 느끼는 성격입니다. 하지만 어려운 순간에도 감정을 통제하며 자신만의 방법으로 극복하려는 노력이 돋보입니다.",
            recommendations: [
                { type: "활동", content: "감정 다이어리 쓰기, 자연 산책, 음악 감상" },
                { 
                    type: "책",
                    content: "《회복 탄력성》 by 김주환",
                    image: "회복탄력성.jpg" 
                },

                { type: "기타", content: "감정 표현을 돕는 창작 활동 (그림, 글쓰기 등)" }
            ]
        },
        achievement: {
            description: "당신은 목표지향적이고 성취욕이 강한 성격입니다. 항상 최선을 다해 목표를 이루고자 하며, 자기계발을 중요하게 여깁니다.",
            recommendations: [
                { type: "활동", content: "새로운 기술 배우기, 프로젝트 계획 세우기, 운동 목표 설정" },
                { 
                    type: "책", 
                    content: "《아웃라이어》 by 말콤 글래드웰 ",
                    image: "아웃라이어.jpg"
                },
                { type: "기타", content: "자기계발 세미나 참여 또는 워크숍 수강" }
            ]
        },
        social: {
            description: "당신은 사람들과의 관계를 중시하며, 팀워크와 협력을 중요하게 생각합니다. 다른 사람들을 돕고 함께 성장하려는 태도가 돋보입니다.",
            recommendations: [
                { type: "활동", content: "자원봉사 참여, 친구들과 모임 기획, 팀 스포츠 활동" },
                { 
                    type: "책", 
                    content: "《내가 원하는 것을 나도 모를 때》 by 전승환",
                    image: "내가 원하는 것을 나도 모를 때.jpg"
                },
                { type: "기타", content: "커뮤니티 활동이나 동호회 가입" }
            ]
        },
        exploration: {
            description: "당신은 호기심이 많고 새로운 것을 탐구하는 것을 즐깁니다. 창의적이고 독창적인 아이디어로 세상을 바라보는 시각이 특별합니다.",
            recommendations: [
                { type: "활동", content: "여행 계획 세우기, 새로운 취미 시작, 과학 다큐멘터리 시청" },
                { 
                    type: "책", 
                    content: "《사피엔스》 by 유발 하라리 ",
                    image: "사피엔스.jpg"
                },
                { type: "기타", content: "온라인 강의 듣기 (예: Udemy, Coursera)" }
            ]
        }
    };

    const result = results[highestScoreType];
    const resultText = result.description;
    const resultRecommendations = result.recommendations
        .map(r => {
            if (r.image) {
                return `
                    <div style="margin-bottom: 15px;">
                        <strong>${r.type}:</strong> ${r.content}<br>
                        <img src="${r.image}" alt="${r.content}" style="width: 100px; height: auto; margin-top: 5px;">
                    </div>
                `;
            }
            return `<strong>${r.type}:</strong> ${r.content}<br>`;
        })
        .join(""); // 객체 배열을 HTML로 변환

    // 결과 화면 표시
    questionContainer.innerHTML = `
        <h2>테스트 결과</h2>
        <p>${resultText}</p>
        <div style="margin-top: 20px;">
            <h3>추천 활동 및 리소스</h3>
            ${resultRecommendations}
        </div>
        <button onclick="shareToKakao('${resultText}')">카카오톡으로 공유하기</button>
        <button onclick="restartTest()">테스트 다시하기</button>
    `;
}

function restartTest() {
    scores = {
        positive: 0,
        neutral: 0,
        negative: 0,
        achievement: 0,
        social: 0,
        exploration: 0
    };
    currentQuestionId = 1;
    previousQuestions = [];
    startTest();
}


function shareToKakao(resultText) {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '심리테스트 결과',
            description: resultText,
            imageUrl: 'https://yourimageurl.com/image.png', // 공유할 이미지 URL (선택 사항)
            link: {
                mobileWebUrl: 'https://hooo234.github.io/', // 공유할 웹사이트 URL
                webUrl: 'https://hooo234.github.io/'
            }
        },
        buttons: [
            {
                title: '결과 보러가기',
                link: {
                    mobileWebUrl: 'https://hooo234.github.io/',
                    webUrl: 'https://hooo234.github.io/'
                }
            }
        ]
    });
}


