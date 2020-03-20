import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
describe('TodoService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(TodoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=todo.service.spec.js.map