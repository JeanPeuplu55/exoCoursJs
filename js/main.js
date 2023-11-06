const replic = document.querySelectorAll('replic')

    replic.forEach((replic)=>{
        replic.addEventListener('clic', function(){
            if (replic.classList.contains('yellow')){
                replic.classList.remove('yellow')
            }else{
                replic.classList.add('yellow')
            }
        })
    })
    
    
        const replicaElements = document.querySelectorAll(".replica");
        const selectedReplica = document.getElementById("selectedReplica");
        const moveUpButton = document.getElementById("moveUpButton");
        const moveDownButton = document.getElementById("moveDownButton");
        let selected = null;

        replicaElements.forEach((replica, index) => {
            replica.addEventListener("click", () => {
                if (selected) {
                    selected.classList.remove("selected");
                }
                selected = replica;
                selected.classList.add("selected");
                selectedReplica.textContent = `Réplique ${index + 1}`;
            });
        });

        moveUpButton.addEventListener("click", () => {
            if (selected) {
                const selectedIndex = Array.from(replicaElements).indexOf(selected);
                if (selectedIndex > 0) {
                    const previousReplica = replicaElements[selectedIndex - 1];
                    selected.parentNode.insertBefore(selected, previousReplica);
                }
            }
        });

        moveDownButton.addEventListener("click", () => {
            if (selected) {
                const selectedIndex = Array.from(replicaElements).indexOf(selected);
                if (selectedIndex < replicaElements.length - 1) {
                    const nextReplica = replicaElements[selectedIndex + 1];
                    selected.parentNode.insertBefore(nextReplica, selected);
                }
            }
        });
   