var layoutInfo = {
    startTab: "none",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)


addLayer("tree-tab", {
    tabFormat: ["buyables", ["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    buyables: {
        rows: 1,
        cols: 1,
        11: {
            title: "Begin",
            cost: "Free",
            display() {
                return "Begin Decrementing"
            },
            canAfford() {
                return getBuyableAmount(this.layer, this.id).lt(1)
            },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {
                return getBuyableAmount(this.layer, this.id).lt(1)
            }
        }
    }
})