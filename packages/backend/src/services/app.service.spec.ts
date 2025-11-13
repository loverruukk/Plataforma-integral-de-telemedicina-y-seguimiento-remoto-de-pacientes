import { AppService } from './app.service';

describe('AppService', () => {
  it('should report health as ok', () => {
    const service = new AppService();
    expect(service.getHealth()).toBe('ok');
  });
});
