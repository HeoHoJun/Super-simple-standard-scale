// BMI를 계산하고 결과를 표시하는 함수
function cal_bmi() {
	var ki = document.getElementById("height").value;
	var mo = document.getElementById("weight").value;

	if (ki == "") {
		alert("키를 입력해주세요.");
		return;
	}

	if (mo == "") {
		alert("몸무게를 입력해주세요.");
		return;
	}

	// 키를 cm를 m로 변환
	ki = ki / 100;

	var bmi = mo / (ki * ki);

	// 결과를 화면에 표시
	document.getElementById('bmi').innerText = bmi.toFixed(2);
	// BMI 범주를 결정하고 결과를 표시
	if (bmi < 18.5) {
		document.getElementById('bmi').innerText = "저체중";
	} else if (bmi < 23) {
		document.getElementById('bmi').innerText = "정상";
	} else if (bmi < 25) {
		document.getElementById('bmi').innerText = "과체중";
	} else {
		document.getElementById('result').innerText = "비만";
	}
}
// 입력 필드와 결과를 초기화하는 함수
function reset() {
	document.getElementById("height").value = "";
	document.getElementById("weight").value = "";
	document.getElementById("bmi").innerText = "";
	document.getElementById("result").innerText = "";
}