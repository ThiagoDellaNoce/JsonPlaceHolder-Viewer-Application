import { TestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';
describe('AlbumsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(AlbumService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=album.service.spec.js.map