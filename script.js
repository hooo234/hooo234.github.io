// 15가지 질문 데이터 배열
const questions = [
    { question: "1. 새로운 프로젝트에 참여할 때 당신의 첫 반응은?", answers: ["1. 기대감에 가득 차 바로 아이디어를 내놓는다", "2. 신중하게 계획을 세운다", "3. 다른 사람들의 의견을 먼저 들어본다", "4. 할 수 있는 역할을 확실히 파악 후 움직인다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "2. 사람들과의 모임이 끝난 후의 기분은?", answers: ["1. 에너지가 넘쳐 더 활동하고 싶다", "2. 만족스럽지만 약간의 휴식이 필요하다", "3. 혼자만의 시간이 필요하다", "4. 피곤함이 몰려온다"], types: ["leader", "collaborator", "thinker", "thinker"] },
    { question: "3. 문제를 해결할 때 당신은?", answers: ["1. 직관적으로 해결책이 떠오른다", "2. 논리적인 방법으로 접근한다", "3. 팀의 협력을 통해 해결한다", "4. 시간을 두고 여러 가능성을 고려한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "4. 자유 시간을 어떻게 보내나요?", answers: ["1. 새로운 사람들을 만나며 활발히 보낸다", "2. 새로운 정보를 공부하거나 배우는 데 사용한다", "3. 조용한 곳에서 독서나 취미 생활을 한다", "4. 기존에 하던 활동을 더 발전시키며 보낸다"], types: ["leader", "analyst", "thinker", "collaborator"] },
    { question: "5. 여행을 계획할 때, 당신의 방식은?", answers: ["1. 즉흥적으로 계획하고 떠난다", "2. 일정과 계획을 철저히 세운다", "3. 다른 사람과 협의해 일정 조율한다", "4. 여유롭게 그때그때 필요한 부분만 계획한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "6. 갑작스러운 변화에 대한 당신의 태도는?", answers: ["1. 즐겁게 받아들인다", "2. 계획을 다시 검토한다", "3. 다른 사람들의 반응을 살핀다", "4. 조금 당황하지만 적응한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "7. 친구의 고민을 들었을 때 당신은?", answers: ["1. 바로 해결책을 제시한다", "2. 논리적으로 문제를 분석한다", "3. 공감하며 들어준다", "4. 여러 해결책을 제안하며 조언한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "8. 회의 중에 당신의 역할은?", answers: ["1. 가장 먼저 의견을 말하며 주도한다", "2. 자료를 제시하며 구체적인 논의에 참여한다", "3. 다른 사람의 의견을 종합하여 조율한다", "4. 필요할 때만 의견을 말한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "9. 스트레스를 받을 때 당신의 행동은?", answers: ["1. 바로 밖에 나가 활동하며 풀어낸다", "2. 스트레스의 원인을 분석하며 대처한다", "3. 친구에게 이야기하며 풀어낸다", "4. 혼자만의 시간을 가지며 회복한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "10. 결정을 내릴 때 당신은?", answers: ["1. 직감적으로 결정한다", "2. 모든 가능성을 검토한 후 신중히 결정한다", "3. 주변 사람들의 의견을 참고한다", "4. 스스로 심사숙고하며 결정한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "11. 새로운 기술을 배울 때 당신의 접근 방식은?", answers: ["1. 직접 시도하면서 경험을 통해 배운다", "2. 이론과 자료를 충분히 검토한 후 시작한다", "3. 다른 사람에게 도움을 청하며 배운다", "4. 필요에 따라 천천히 배워나간다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "12. 계획한 일이 지연될 때 당신은?", answers: ["1. 새로운 계획을 세워 즉시 대처한다", "2. 지연 원인을 분석하여 해결책을 찾는다", "3. 팀원들과 협력하여 해결한다", "4. 스트레스 없이 천천히 진행한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "13. 감정을 표현할 때 당신은?", answers: ["1. 솔직하게 감정을 표출한다", "2. 상황에 따라 감정을 조절한다", "3. 주변 사람들에게 공감하며 부드럽게 표현한다", "4. 혼자서 감정을 다스린다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "14. 복잡한 문제를 해결할 때 당신은?", answers: ["1. 바로 해결책을 찾으려고 한다", "2. 문제를 세부적으로 나눠 해결한다", "3. 다른 사람들의 조언을 참고한다", "4. 천천히 접근하며 문제를 분석한다"], types: ["leader", "analyst", "collaborator", "thinker"] },
    { question: "15. 미래 계획을 세울 때 당신의 스타일은?", answers: ["1. 꿈꾸던 일을 이루기 위한 도전적인 계획을 세운다", "2. 현실적으로 목표를 설정하고 실행 계획을 마련한다", "3. 주변 사람과 상의하며 조율된 계획을 세운다", "4. 현재 상황을 유지하며 소소한 목표를 설정한다"], types: ["leader", "analyst", "collaborator", "thinker"] }
];

let currentQuestionIndex = 0;
let selectedAnswers = {};  // 각 질문별 선택한 답변을 저장할 객체
let scores = { leader: 0, analyst: 0, collaborator: 0, thinker: 0 }; // 각 유형의 점수

// 테스트 시작하기
function startTest() {
    document.querySelector("button").style.display = "none"; // 시작 버튼 숨기기
    document.getElementById("progress-container").style.display = "block"; // 진행 바 표시
    document.getElementById("question-container").style.display = "block"; // 질문 컨테이너 표시
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];

    // 진행률 계산
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";

    // 진행률 텍스트 업데이트
    document.getElementById("progress-text").textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.answers.map((answer, index) => `
                <li>
                    <button 
                        class="${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                        onclick="selectAnswer(${index}, this)">
                        ${answer}
                    </button>
                </li>`).join('')}
        </ul>
        <div>
            ${currentQuestionIndex > 0 ? `<button onclick="prevQuestion()">이전</button>` : ""}
            <button onclick="nextQuestion()">다음</button>
        </div>
    `;

    
    
}

// 답변 선택
function selectAnswer(answerIndex, button) {
    // 현재 질문에 대한 선택한 답변 저장
    selectedAnswers[currentQuestionIndex] = answerIndex;

    // 모든 버튼의 'selected' 클래스 제거
    const buttons = button.parentNode.parentNode.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    // 선택된 버튼에 'selected' 클래스 추가
    button.classList.add("selected");
}

// 다음 질문으로 넘어가기
function nextQuestion() {
    if (selectedAnswers[currentQuestionIndex] === undefined) {
        alert("답변을 선택해 주세요.");
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // 다음 질문으로 이동
        showQuestion();
    } else {
        calculateResult(); // 마지막 질문에서 결과 계산
    }
}

// 이전 질문으로 돌아가기
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// 결과 계산
function calculateResult() {

    // 진행 바 숨기기
    document.getElementById("progress-container").style.display = "none";
    
    // 점수 초기화
    scores = { leader: 0, analyst: 0, collaborator: 0, thinker: 0 };

    // 각 답변에 대한 유형 점수 계산
    for (let i = 0; i < questions.length; i++) {
        const answerIndex = selectedAnswers[i];
        const answerType = questions[i].types[answerIndex];
        scores[answerType]++;
    }

    // 최종 결과 계산
    let maxType = null;
    let maxScore = 0;
    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxType = type;
            maxScore = scores[type];
        }
    }

    showResult(maxType);
}

function shareToKakao(resultText) {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '심리테스트 결과',
            description: resultText,
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




// 결과 표시
function showResult(type) {
    const resultContainer = document.getElementById("question-container");
    let resultText = "";
    let resultImage = ""; // 결과 이미지 URL을 저장할 변수

    // 결과 유형별 이미지와 설명 설정
    switch (type) {
        case "leader":
            resultText = "당신은 활동적 리더형입니다! 자신감이 넘치고 팀을 이끄는 데 강점이 있습니다. 사람들과의 소통을 중요하게 여기며, 어려운 상황에서도 해결책을 빠르게 찾으려는 태도를 가지고 있습니다. 항상 목표를 향해 적극적으로 나아가며, 주변 사람들에게 영감을 주는 존재로 여겨집니다. 단, 때때로 타인의 의견을 충분히 듣는 것이 중요할 수 있습니다. 팀워크를 더 강화한다면 더욱 훌륭한 리더로 성장할 수 있을 것입니다.";
            resultImage = "리더형.jpg"; // leader 유형의 이미지 경로
            break;
        case "analyst":
            resultText = "당신은 분석가형입니다! 논리적 사고와 신중한 접근을 중요시하며, 문제를 체계적으로 해결하려는 경향이 있습니다. 복잡한 상황에서도 차분하게 분석하고, 명확한 데이터와 사실을 바탕으로 결정을 내립니다. 창의적인 아이디어보다는 실용적이고 현실적인 접근을 선호하며, 완성도 높은 결과물을 만드는 데 탁월합니다. 단, 지나치게 신중할 경우 결정이 지연될 수 있으니, 때로는 직관에 따라 빠르게 행동해 보는 것도 좋습니다.";
            resultImage = "분석형.jpg"; // analyst 유형의 이미지 경로
            break;
        case "collaborator":
            resultText = "당신은 협력자형입니다! 타인의 의견을 존중하고 조화를 추구하는 성향이 강합니다. 갈등을 피하고, 항상 팀의 화합을 중요하게 생각하며 주변 사람들을 잘 돕습니다. 당신의 이러한 태도는 팀의 분위기를 좋게 하고, 서로 이해하는 환경을 조성하는 데 기여합니다. 다만, 때로는 자신의 의견을 더 적극적으로 표현하는 것도 중요합니다. 당신의 생각이 팀에 큰 도움이 될 수 있습니다.";
            resultImage = "협력자형.jpg"; // collaborator 유형의 이미지 경로
            break;
        case "thinker":
            resultText = "당신은 내향적 사색가형입니다! 조용한 환경에서 깊이 생각하는 것을 선호하며, 자신의 내면을 들여다보는 시간이 많습니다. 창의적이고 독창적인 아이디어를 가지고 있으며, 문제를 새로운 관점에서 접근하는 데 능합니다. 깊이 있는 사고와 성찰을 통해 의미 있는 결과를 만들어내지만, 혼자만의 시간에 너무 몰두하지 않도록 주의할 필요도 있습니다. 때로는 주변 사람들과 소통하며 의견을 공유해 보는 것도 도움이 될 것입니다.";
            resultImage = "분석형.jpg"; // thinker 유형의 이미지 경로
            break;
    }

    // 결과 화면에 이미지와 설명을 함께 표시
    resultContainer.innerHTML = `
        <h2>테스트 결과</h2>
        <img src="${resultImage}" alt="${type} 이미지" style="width: 200px; margin-bottom: 20px;">
        <p>${resultText}</p>
        <button onclick="shareResult()">카카오톡으로 공유하기</button>
    `;

    
}
