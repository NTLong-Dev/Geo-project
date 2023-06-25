var choices = ['rock', 'paper','cut'];
		var playerScore = 0;
		var computerScore = 0;
		var gameMessage = document.getElementById('game-message');

		// Hàm chọn ngẫu nhiên lựa chọn của máy tính
		function getComputerChoice() {
			var randomIndex = Math.floor(Math.random() * choices.length);
			return choices[randomIndex];
		}

		// Hàm so sánh kết quả của người chơi và máy tính
		function compareChoices(playerChoice, computerChoice) {
			if (playerChoice === computerChoice) {
				return 'Hòa';
			} else if (playerChoice === 'rock' && computerChoice === 'paper') {
				return 'Bạn thua!';
			} else if (playerChoice === '   paper' && computerChoice === 'rock') {
				return 'Bạn thắng!';
            } else if (playerChoice === 'paper' && computerChoice === 'cut') {
				return 'Bạn thua!';
            } else if (playerChoice === 'cut' && computerChoice === 'paper') {
				return 'Bạn thắng!';
            } else if (playerChoice === 'cut' && computerChoice === 'rock') {
				return 'Bạn thua!';
            } else if (playerChoice === 'rock' && computerChoice === 'cut') {
				return 'Bạn thắng!';
			} else {
				return 'Bạn thắng!';
			}
		}

		// Hàm xử lý khi người chơi chọn một lựa chọn
		function choose(playerChoice) {
			var computerChoice = getComputerChoice();
			var result = compareChoices(playerChoice, computerChoice);

			if (result === 'Bạn thắng!') {
				playerScore++;
			} else if (result === 'Bạn thua!') {
				computerScore++;
			}

			gameMessage.innerHTML = 'Bạn chọn ' + playerChoice + '. Máy tính chọn ' + computerChoice + '. ' + result;

			if (playerScore >= 5) {
				gameMessage.innerHTML += '<br><strong>Bạn đã thắng cuộc!</strong>';
				reset();
			} else if (computerScore >= 5) {
				gameMessage.innerHTML += '<br><strong>Bạn đã thua cuộc!</strong>';
				reset();
			}
		}

		// Hàm đặt lại trò chơi khi kết thúc
		function reset() {
			playerScore = 0;
			computerScore = 0;
		}