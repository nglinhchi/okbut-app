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

  if (error) {
    if (error.code === "PGRST116") {
      // No rows returned
      console.warn(`Card with ID "${id}" not found.`);
    } else {
      console.error("Supabase error:", error.message);
    }
    return null;
  }
  return data;
}
