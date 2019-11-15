new Vue({
    el: '#exercise',
    data: {
        effect: '',
        multipleStyles: ["black", "borderRound"],
        userClass: "",
        displayAnotherStyle: false,
        progressStatus: 0
    },
    computed: {
        progressBarStyle: function() {
            return { width: this.progressStatus * 3 + 'px', height: 30 + 'px', backgroundColor: 'red' }
        }
    },
    methods: {
        startEffect: function() {
            effectApplied = false
            const vm = this
            setInterval(() => {
                effectApplied = !effectApplied
                vm.effect = effectApplied ? 'shrink' : 'highlight'
            }, 300);
        },
        fillProgressBar: function() {
            const vm = this
            vm.progressStatus = 0
            setInterval(() => {
                if (vm.progressStatus < 100) vm.progressStatus++
            }, 30)

        }
    }
});