describe('menu tree factory', function () {
    var MenuTree, menuModel;

    beforeEach(function () {
        module('quickie');
        inject(function ($injector) {
            MenuTree = $injector.get('MenuTree');
        });

        menuModel = {
            name: 'Root menu',
            type: 'root',
            children: [
                {
                    name: 'Coffee drinks',
                    type: 'section'
                },
                {
                    name: 'Desserts',
                    type: 'section'
                }
            ]
        };
    });

    it('expect top level root to be the root', function() {
        var menuTree = new MenuTree(menuModel);
        expect(menuTree.isRoot()).toBe(true);
    });

    it('expect child node not to be the root node', function() {
        var menuTree = new MenuTree(menuModel);
        expect(menuTree.children[0].isRoot()).toBe(false);
    });

    it('expect the root to have children', function() {
        var menuTree = new MenuTree(menuModel);
        expect(menuTree.hasChildren()).toBe(true);
        expect(menuTree.children[0].hasChildren()).toBe(false);
    });

    it('should add a child to the root node', function() {
        var childTree = new MenuTree({ name: 'Plain coffee', type: 'itemGroup'});
        var menuTree = new MenuTree(menuModel);
        menuTree.addChild(childTree);
        expect(menuTree.children.length).toBe(3);
    });

    it('should add a child at an index', function() {
        var childTree = new MenuTree({name: 'Plain coffee', type: 'itemGroup'});
        var menuTree = new MenuTree(menuModel);
        menuTree.addChildAtIndex(childTree, 0);
        expect(menuTree.children[0].model.name).toBe('Plain coffee');
    });

    it('should change the index', function() {
        var menuTree = new MenuTree(menuModel);
        expect(menuTree.children[0].model.name).toBe('Coffee drinks');
        expect(menuTree.children[1].model.name).toBe('Desserts');
        menuTree.children[0].setIndex(1);
        expect(menuTree.children[0].model.name).toBe('Desserts');
        expect(menuTree.children[1].model.name).toBe('Coffee drinks');
        expect(menuTree.children[2]).toBe(undefined);
    });

    it('should get path of node', function() {
        var menuTree = new MenuTree(menuModel);
        var path = menuTree.children[0].getPath();
        expect(path.length).toBe(2);
        expect(path[0].model.name).toBe('Root menu');
        expect(path[1].model.name).toBe('Coffee drinks');
    });

    it('should drop a node', function() {
        var menuTree = new MenuTree(menuModel);
        menuTree.children[0].drop();
        expect(menuTree.children.length).toBe(1);
        expect(menuTree.children[0].model.name).toBe('Desserts');
    });

    describe('all()', function() {
       it('should get all all nodes', function() {
           var menuTree = new MenuTree(menuModel);
           var all = menuTree.all();
           expect(all.length).toBe(3);
           //all.forEach(function(node) {
           //    console.log(node.model);
           //})
       });
    });

    describe('walk()', function() {
        it('should walk the tree', function() {
            var menuTree = new MenuTree(menuModel);
            var root = [];
            menuTree.walk(function(node) {
                root.push(node.model);
            });
        })
    });

    describe('alter children\'s children effects parent', function() {
        beforeEach(function() {

            menuModel = {
                name: 'Root menu',
                type: 'root',
                children: [
                    {
                        name: 'Coffee drinks',
                        type: 'section',
                        children: [
                            {
                                name: 'Sodas',
                                type: 'section',
                                children: [
                                    {
                                        name: 'Colas',
                                        type: 'section',
                                        children: [
                                            {
                                                name: 'Coke',
                                                type: 'section'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Desserts',
                        type: 'section'
                    }
                ]
            };
        });

        it('should effect children of children in model if there is a change', function() {
            var menuTree = new MenuTree(menuModel);
            var copy = angular.copy(menuTree);
            menuTree.children[0].children[0].children[0].drop();
            expect(menuTree.model.children[0].children[0].children.length).toBe(0);
        });
    });
});