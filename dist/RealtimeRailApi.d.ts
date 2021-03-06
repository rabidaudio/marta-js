/// <reference types="moment" />
import { Moment, Duration } from 'moment-timezone';
import { Callback, Direction } from './utils';
export declare type Line = 'RED' | 'GOLD' | 'GREEN' | 'BLUE';
export interface RailArrival {
    destination: string;
    direction: Direction;
    eventTime: Moment;
    line: Line;
    nextArrival: Moment;
    station: Station;
    trainId: string;
    waitingTimeSeconds: number;
    waitingTime: Duration;
    waitingState: 'Boarding' | 'Arriving' | string;
}
export declare type Station = 'OMNI DOME STATION' | 'BUCKHEAD STATION' | 'NORTH AVE STATION' | 'GEORGIA STATE STATION' | 'LENOX STATION' | 'MEDICAL CENTER STATION' | 'VINE CITY STATION' | 'BANKHEAD STATION' | 'MIDTOWN STATION' | 'OAKLAND CITY STATION' | 'KING MEMORIAL STATION' | 'DORAVILLE STATION' | 'ASHBY STATION' | 'DUNWOODY STATION' | 'ARTS CENTER STATION' | 'LINDBERGH STATION' | 'LAKEWOOD STATION' | 'SANDY SPRINGS STATION' | 'WEST LAKE STATION' | 'INMAN PARK STATION' | 'EDGEWOOD CANDLER PARK STATION' | 'EAST POINT STATION' | 'HAMILTON E HOLMES STATION' | 'NORTH SPRINGS STATION' | 'EAST LAKE STATION' | 'COLLEGE PARK STATION' | 'CIVIC CENTER STATION' | 'AIRPORT STATION' | 'DECATUR STATION' | 'BROOKHAVEN STATION' | 'PEACHTREE CENTER STATION' | 'AVONDALE STATION' | 'FIVE POINTS STATION' | 'CHAMBLEE STATION' | 'GARNETT STATION' | 'KENSINGTON STATION' | 'WEST END STATION' | 'INDIAN CREEK STATION';
export declare class RealtimeRailApi {
    private readonly apiKey;
    constructor(apiKey: string);
    getArrivals(callback?: Callback<RailArrival[]>): Promise<RailArrival[]>;
    getArrivalsForStation(station: Station, callback?: Callback<RailArrival[]>): Promise<RailArrival[]>;
    private request;
    private convertRailDirection;
    private convertResponse;
}
//# sourceMappingURL=RealtimeRailApi.d.ts.map