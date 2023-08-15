import { Controller, Get, HttpException, HttpStatus, Res } from '@nestjs/common';
import axios from 'axios';
import { Response } from 'express';


@Controller('html-code')
export class HtmlCodeController {

    @Get()
    async getHtml(@Res() response: Response) {
        try {
            const URL = 'https://www.fcbarcelona.com/en/tickets/football/regular/laliga/fcbarcelona-realmadrid?_ga=2.98404636.2024413001.1690664182-981999279.1687191133&_gl=1*1r9fw7c*_ga*OTgxOTk5Mjc5LjE2ODcxOTExMzM.*_ga_XCQ7B6K8TL*MTY5MDY2NDE4MS42LjAuMTY5MDY2NDE4MS4wLjAuMA';
            const htmlResponse = await axios.get(URL);
            response.header('Content-Type', 'text/html');
            response.status(HttpStatus.OK).send(htmlResponse.data);
        } catch (error) {
            throw new HttpException('Error extracting HTML from the webpage.', 500);
        }
    }

}
