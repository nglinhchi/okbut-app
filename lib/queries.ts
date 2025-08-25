import type { CardData } from "../types";
import { supabase } from "./supabase";

export async function insertCard(cardData: CardData) {
  const { data, error } = await supabase
    .from("cards")
    .insert([cardData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getCardById(id: string) {
  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}
