AFRAME.registerState({
    initialState: {
        score: 0
    },

    handlers: {
        
    }
});

AFRAME.registerComponent("pushableobject", {
    init:function() {
        let el = this.el;
        el.addEventListener("click", function() {
            let positionObject = el.getAttribute("position");
            let positionVector = new THREE.Vector3(positionObject.x, positionObject.y, positionObject.z);
            
            let camPosObject = document.querySelector("#rig").getAttribute("position");
            let camPosVector = new THREE.Vector3(camPosObject.x, camPosObject.y, camPosObject.z);
            
            // Besaran direction dipengaruhi oleh jarak kamera ke object
            let direction = camPosVector.sub(positionVector);
            direction = direction.normalize();  // Jadi vektor unit
            let speed = -60;
            direction = direction.multiplyScalar(speed);
            // Fungsi di bawah ini ada di Cannon.js
            el.body.applyImpulse(
                new CANNON.Vec3(direction.x, 0, direction.z),  // ke arah z- (menjauh dari kamera)
                new CANNON.Vec3().copy(positionVector)
            );
        });
    }
});

AFRAME.registerComponent("touchobject", {
    init:function() {
        let el = this.el;
        el.addEventListener("collide", function(ev) {
            // console.log("%c" + ev.srcElement.id, "font-size:1em");
        });
    }
});

AFRAME.registerComponent("autospawn", {
    update:function() {
        var el = this.el;
        el.addEventListener("collide", function(ev) {
            // console.log("%c" + ev.srcElement.id, "font-size:1em");
            el.object3D.position.set(0, 0, 0);
            // el.setAttribute('position',{x: 0, y: 0, z: 0});
            let positionObject = el.getAttribute("position");
            console.log(el);
            console.log(positionObject);
            // let positionVector = new THREE.Vector3(positionObject.x, positionObject.y, positionObject.z);
        }); 
    }
}); 