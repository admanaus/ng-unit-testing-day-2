// src/app/heroes/heroes.component.spec.ts
import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HerosComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        // 1. Arrange: Define our test data
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ];

        // 2. Arrange: Create our mock service
        // We tell Jasmine which methods we need to spy on.
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        // 3. Arrange: Create our component and inject the mock service
        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            // Arrange: Tell the mock service what to return
            mockHeroService.deleteHero.and.returnValue(of(true));

            // Act: We need to populate the heroes property
            component.heroes = HEROES;

            // Act: Call the delete method on the component
            component.delete(HEROES[2]); // Delete the last hero

            // Assert: Check the length of the heroes array
            expect(component.heroes.length).toBe(2);
            expect(component.heroes[0].id).toBe(1);
            expect(component.heroes[1].id).toBe(2);
        });
    });

})