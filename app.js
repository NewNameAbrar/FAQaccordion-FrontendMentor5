const faqs = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');
const icons = document.querySelectorAll('.plusMinusImg');

faqs.forEach((faq, index) => {
  faq.addEventListener('click', () => {
    const isOpen = answers[index].innerHTML.trim() !== '';

    answers.forEach((answer, i) => {
      answer.innerHTML = '';
      answer.style.marginTop = '0';
      icons[i].src = '/assets/images/icon-plus.svg';
    });

    if (!isOpen) {
      const answerTexts = [
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      ];
      answers[index].innerHTML = answerTexts[index];
      answers[index].style.marginTop = '20px';
      icons[index].src = '/assets/images/icon-minus.svg';
    }
  });
});
