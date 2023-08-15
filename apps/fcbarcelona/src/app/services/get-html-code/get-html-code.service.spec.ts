import { Test, TestingModule } from '@nestjs/testing';
import { GetHtmlCodeService } from './get-html-code.service';

describe('GetHtmlCodeService', () => {
  let service: GetHtmlCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetHtmlCodeService],
    }).compile();

    service = module.get<GetHtmlCodeService>(GetHtmlCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
