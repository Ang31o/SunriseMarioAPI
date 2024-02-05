import { DbScore } from "../models/score";

export async function getScoreListController(req: any, res: any) {
  try {
    const { db } = req.app;
    const result = await db.collection("score").find().toArray();
    const sortedResult = result.sort(
      (a: DbScore, b: DbScore) => b.score - a.score
    );

    res.status(200).json({
      list: sortedResult,
    });
  } catch (error) {
    res.status(500).json({ error: error?.toString() });
  }
}
