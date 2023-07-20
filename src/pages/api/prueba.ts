import { RedisManager } from "@/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    let redisManager:RedisManager = new RedisManager("redis://localhost:6379");

    const isHealthyRedis = await redisManager.isHealthy();
    res.status(200).send({
        redis: isHealthyRedis ? "Ok" : "No"
    })
}