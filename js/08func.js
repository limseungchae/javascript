
    // 년도를 입력하면 윤년여부를 계산해서 출력
    // 윤년여부를 계산하는 함수 : computeLeapYear
    function computeLeapYear(year) {
    let result = '평년입니다';

    if ((year % 4 == 0 && year % 100 != 0) ||(year % 400 == 0)) {
    result = '윤년입니다';
}
    return `${year}년은 ${result}`;
}
    let year = 2023;
    let result = computeLeapYear(year); // 함수호출 및 결과받음
    document.write(result,'<br>');



    // 층수를 입력받아
    // 별* 피라미드 출력 : showStarPyramid
    function showStarPyramid(floor) {
    let result = '';

    for (let j = 1; j <= floor; ++j) { // 층 반복문
    for (let i = 1; i <= 1; ++i) { // 별 반복문
    result += '*';
}
    document.write(result,'<br>');
}
}
    showStarPyramid(10);
    showStarPyramid(7);
    showStarPyramid(3);



    // 시분초를 입력받아
    // 오전, 오후 구분하여 출력 : showAMPM
    function showAMPM(time) {
    let result = '오후입니다!!';
    let hour = time[0] + time[1];

    if (hour < 12) { result = '오전입니다!!';}

    return` ${hour}시는 ${result};`
}
    document.write(showAMPM ('09:49:55'),'<br>');
    document.write(showAMPM ('16:31:21'),'<br>');



    // 국어, 영어, 수학을 입력하면
    // 학점을 출력하는 함수 : computeSungJuk
    function computeSungJuk(kor, eng, mat) {
    let tot = 0, avg = 0, grd = '가';  // 다중변수 선언

    tot = kor + eng + mat;
    avg = tot / 3;
    switch (parseInt(avg / 10)) {
    case 10:
    case 9: grd = '수'; break;
    case 8: grd = '우'; break;
    case 7: grd = '미'; break;
    case 6: grd = '양'; break;
}

    document.write(`총점은 ${tot}, 평균은 ${avg},
                    학점은 ${grd}입니다 <br>`);
}
    computeSungJuk (99,98,99);
    computeSungJuk (33,44,55);
