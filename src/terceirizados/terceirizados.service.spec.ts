import { Test, TestingModule } from '@nestjs/testing';
import { TerceirizadosService } from './terceirizados.service';

describe('TerceirizadosService', () => {
  let service: TerceirizadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerceirizadosService],
    }).compile();

    service = module.get<TerceirizadosService>(TerceirizadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
