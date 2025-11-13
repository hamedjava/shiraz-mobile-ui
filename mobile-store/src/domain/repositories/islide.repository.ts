    // src/domain/repositories/islide.repository.ts

    import { Slide } from '../entities/slide.entity';

    export interface ISlideRepository {
        getSlides(): Promise<Slide[]>;
    }
