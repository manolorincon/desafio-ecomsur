import { CronJob } from 'cron';
import { searchCode } from '../tickets';

export const start = (): void => {
  const ticketScheduler = new CronJob(
    '* * * * *',
    searchCode,
    null,
    false,
    'America/Bogota',
    null,
    false
  );
  ticketScheduler.start();
};

