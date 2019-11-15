new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        fightActions: []
    },
    methods: {
        startNewGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.fightActions = [];
        },
        initializeGame: function() {
            this.gameIsRunning = false;
        },
        attackMonster: function() {
            this.dealDamages(3, 4)
        },
        specialAttackMonster: function() {
            this.dealDamages(8, 3)
        },
        dealDamages(damageD, damageT) {
            const damageDealt = this.calculateDamage(damageD);
            const damageTaken = this.calculateDamage(damageT);
            this.playerHealth -= damageTaken;
            this.fightActions.unshift({ log: `The player takes ${damageTaken} damages !`, color: "blue" })
            if (this.checkWinner()) {
                return
            }
            this.monsterHealth -= damageDealt;
            this.fightActions.unshift({ log: `The monster takes ${damageDealt} damages !`, color: "red" })
            this.checkWinner()
        },
        heal: function() {
            const heal = Math.floor(3 + Math.random() * 10);
            if (this.playerHealth + heal <= 100) {
                this.playerHealth += heal
                this.fightActions.unshift({ log: `The player healths for ${heal} HP !`, color: "green" })
            }
        },
        calculateDamage: function(damage) {
            return Math.floor(damage + Math.random() * 10);
        },
        checkWinner: function() {
            if (this.playerHealth <= 0) {
                alert('You lost ! the monster cut your throat !')
                this.gameIsRunning = false;
                return true
            }
            if (this.monsterHealth <= 0) {
                alert('You win ! You cut the monster throat !')
                this.gameIsRunning = false;
                return true
            }
        }
    }
})