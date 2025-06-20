export interface JwtPayload {
    name: string;
    role: string;
    nameid: string;
    exp: number; // ?
}