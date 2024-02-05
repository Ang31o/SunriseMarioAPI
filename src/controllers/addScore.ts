export async function addScoreController(req: any, res: any) {
  try {
    const { db } = req.app;
    const name = req.body.name;
    const score = req.body.score ?? 0;
    if (!name) return res.status(400).json({ message: "Name is required" });

    // check if player exists and update player's score
    const updateExistingPlayer = await db
      .collection("score")
      .findOneAndUpdate({ name: name }, { $set: { score: score } });

    if (!!updateExistingPlayer?._id) {
      res.status(200).json({ success: true });
    } else {
      // If player doesn't exist add player to the DB with score
      const result = await db.collection("score").insertOne({
        name,
        score,
      });

      if (result.acknowledged) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ success: false });
        throw new Error("Score wasn't inserted!");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error?.toString() });
  }
}
