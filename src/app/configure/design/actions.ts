"use server";

import { db } from "@/src/db";
import { InkFinish, InkMaterial, MacModel } from "@prisma/client";

export type SaveConfigArgs = {
  finish: InkFinish;
  material: InkMaterial;
  model: MacModel;
  configId: string;
};

export async function saveConfig({
  finish,
  material,
  model,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { finish, material, model },
  });
}
