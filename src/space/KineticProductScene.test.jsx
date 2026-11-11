import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import KineticProductScene, { getKineticDemoConfig } from "./KineticProductScene";

afterEach(cleanup);
function product(category, id = `${category}-01`, demoType) {
  return { category, id, demoType, name: `${id} 시연 상품` };
}
const PARTS = [
  ["assistant", ["right-arm", "wrist", "pan", "food", "spoon"]],
  ["robot", ["front-leg", "rear-leg", "tail", "head", "ears"]],
  ["phone", ["folding-screen", "third-screen"]],
  ["internet", ["dish-azimuth", "dish-elevation"]],
  ["satellite", ["left-solar-panel", "right-solar-panel", "dish-elevation"]],
  ["aircraft", ["rear-gear", "front-gear", "wing-flap", "engine-fan"]],
  ["rocket", ["main-flame", "left-booster", "right-booster", "nose-fairing"]],
  ["drone", ["rotor-1", "rotor-4", "winch-cable", "cargo"]],
  ["carrier", ["carrier-drive", "wheel-211", "wheel-342", "load-lift", "load-transfer"]],
  ["building", ["elevator", "door-left", "door-right", "window-0-0"]],
  ["wearable", ["left-sleeve", "right-sleeve", "harness-clasp"]],
  ["gear", ["light-blade"]],
  ["food", ["food-capsule-lid", "expanding-bean", "nutrient-layer-1"]],
  ["land", ["parcel-boundary", "survey-head", "habitat-dome-left"]],
  ["living", ["bed-base", "floating-mattress"]],
];

describe("KineticProductScene", () => {
  it.each(PARTS)("%s provides separately movable functional parts instead of a product image", (category, parts) => {
    const item = product(category);
    const { container } = render(<KineticProductScene product={item} />);
    expect(screen.getByRole("img", { name: new RegExp(item.name) })).toBeTruthy();
    expect(container.querySelector("img")).toBeNull();
    for (const part of parts) expect(container.querySelector(`[data-part="${part}"]`)).not.toBeNull();
    expect(getKineticDemoConfig(item).action).toBeTruthy();
    expect(getKineticDemoConfig(item).status).toBeTruthy();
  });

  it.each([
    ["assistant-01", "cooking", "pan", "팬 돌리고 요리하기"],
    ["assistant-02", "cleaning", "vacuum-wand", "바닥 청소하기"],
    ["assistant-03", "organizing", "moving-box", "상자 정리하기"],
    ["assistant-04", "care", "water-delivery", "물 가져다주기"],
    ["assistant-05", "concierge", "serving-cover", "트레이 서빙하기"],
    ["assistant-06", "secretary", "typing-fingers", "일정 정리하기"],
  ])("%s has its own job and working tool", (id, task, tool, action) => {
    const item = product("assistant", id, task);
    const { container, rerender } = render(<KineticProductScene product={item} />);
    expect(container.querySelector(`[data-task="${task}"]`)).not.toBeNull();
    expect(container.querySelector(`[data-part="${tool}"]`)).not.toBeNull();
    expect(getKineticDemoConfig(item).action).toBe(action);
    rerender(<KineticProductScene product={item} action="greet" />);
    expect(container.querySelector("svg").getAttribute("data-action")).toBe("greet");
    expect(screen.getByRole("img", { name: /인사 동작/ })).toBeTruthy();
    expect(container.querySelector(`[data-task="${task}"]`)).not.toBeNull();
  });

  it.each(["dog", "cat", "duck", "tiger", "lion", "bird", "rabbit", "fox", "panda", "otter", "penguin", "seal"])("uses the %s animal's articulated anatomy", (species) => {
    const { container } = render(<KineticProductScene product={product("robot", "animal-01", species)} />);
    expect(container.querySelector(`[data-species="${species}"]`)).not.toBeNull();
    for (const part of ["head", "front-leg", "rear-leg", "ears"])
      expect(container.querySelector(`[data-part="${part}"]`)).not.toBeNull();
    if (["duck", "bird", "penguin"].includes(species))
      expect(container.querySelector('[data-part="wings"]')).not.toBeNull();
  });

  it.each([
    ["phone-01", "third-screen"], ["phone-02", "edge-display"],
    ["phone-03", "hologram-screen"], ["phone-04", "projection-lens"],
    ["phone-05", "rolling-screen"], ["phone-06", "folding-screen"],
    ["phone-07", "camera-module"], ["phone-08", "hologram-screen"],
  ])("%s uses its model-specific expansion mechanism", (id, part) => {
    const { container } = render(<KineticProductScene product={product("phone", id)} />);
    expect(container.querySelector(`[data-part="${part}"]`)).not.toBeNull();
  });

  it.each([
    ["gear-01", "light-blade"], ["gear-02", "second-light-blade"],
    ["gear-05", "laser-emitter"], ["gear-09", "hovering-cube"],
    ["gear-10", "shield-panel-1"], ["gear-11", "portal-opening"],
    ["gear-12", "capsule-lid"],
  ])("%s exposes an actual moving output or opening", (id, part) => {
    const { container } = render(<KineticProductScene product={product("gear", id)} />);
    expect(container.querySelector(`[data-part="${part}"]`)).not.toBeNull();
  });

  it.each(["gear-13", "warp-one"])("%s uses portal behavior from demoType instead of falling back to a capsule", (id) => {
    const item = product("gear", id, "portal");
    const { container } = render(<KineticProductScene product={item} />);
    expect(getKineticDemoConfig(item).action).toBe("순간이동 시연");
    expect(getKineticDemoConfig(item).status).toContain("반대편");
    expect(container.querySelector('[data-part="warp-gateway-in"]')).not.toBeNull();
    expect(container.querySelector('[data-part="warp-gateway-out"]')).not.toBeNull();
    expect(container.querySelector('[data-part="warp-crate-in"].kin-warp-crate-in')).not.toBeNull();
    expect(container.querySelector('[data-part="warp-crate-out"].kin-warp-crate-out')).not.toBeNull();
    expect(container.querySelector('[data-part="capsule-lid"]')).toBeNull();
    expect(container.querySelector('[data-part="light-blade"]')).toBeNull();
  });

  it("keeps the six assistants recognizably different in the functional view", () => {
    const items = ["cooking", "cleaning", "organizing", "care", "concierge", "secretary"].map((task, i) => product("assistant", `assistant-0${i+1}`, task));
    const { container } = render(<>{items.map(item => <KineticProductScene key={item.id} product={item} />)}</>);
    expect(Array.from(container.querySelectorAll("[data-persona]"), node => node.dataset.persona)).toEqual(["ARIA", "ELI", "SOHA", "NOAH", "LUNA", "LUCA"]);
    expect(new Set(Array.from(container.querySelectorAll("[data-hairstyle]"), node => node.dataset.hairstyle)).size).toBe(6);
    expect(container.querySelectorAll('[data-part="tailored-clothing"]')).toHaveLength(6);
    expect(container.querySelectorAll('[data-part="wrist"]')).toHaveLength(6);
  });

  it("shows rail docking for magnetic boots and a hovering cube for the gravity fork", () => {
    const boots = product("wearable", "wearable-02");
    const fork = product("gear", "gear-09");
    const { container, rerender } = render(<KineticProductScene product={boots} />);
    expect(container.querySelector('[data-part="docking-rail"]')).not.toBeNull();
    expect(container.querySelector('[data-part="sole-lock-1"]')).not.toBeNull();
    expect(container.querySelector('[data-part^="sole-jet"]')).toBeNull();
    expect(getKineticDemoConfig(boots).status).toContain("레일");
    rerender(<KineticProductScene product={fork} />);
    expect(container.querySelector('[data-part="gravity-fork"]')).not.toBeNull();
    expect(container.querySelector('[data-part="hovering-cube"]')).not.toBeNull();
    expect(container.querySelector('[data-part="laser-pulse"]')).toBeNull();
    expect(getKineticDemoConfig(fork).action).toBe("중력 그립 시연");
  });

  it.each([
    ["bean", ["food-capsule-lid", "expanding-bean", "nutrient-layer-3"]],
    ["biscuit", ["biscuit-left", "biscuit-right", "biscuit-filling", "meal-steam"]],
    ["noodles", ["pouring-jug", "water-stream", "unfolding-noodles"]],
    ["tray", ["meal-tray-lid", "rising-meal", "meal-steam"]],
    ["pouch", ["pouch-seal", "floating-fruit", "poured-bead-5"]],
  ])("food %s has visible preparation parts rather than a generic picture animation", (type, parts) => {
    const food = product("food", "food-01", type);
    const { container } = render(<KineticProductScene product={food} />);
    expect(container.querySelector(`[data-food-type="${type}"]`)).not.toBeNull();
    for (const part of parts) expect(container.querySelector(`[data-part="${part}"]`)).not.toBeNull();
    expect(getKineticDemoConfig(food).greeting).toBeUndefined();
  });

  it("keeps gradient IDs unique when multiple previews are rendered", () => {
    const { container } = render(<><KineticProductScene product={product("assistant")} /><KineticProductScene product={product("drone")} /></>);
    const ids = Array.from(container.querySelectorAll("[id]"), node => node.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(["mars", "moon"])("%s land surveys the parcel and opens its habitat", (type) => {
    const { container } = render(<KineticProductScene product={product("land", "land-01", type)} />);
    expect(container.querySelector(`[data-land-type="${type}"]`)).not.toBeNull();
    expect(container.querySelector('[data-part="parcel-boundary"]')).not.toBeNull();
    expect(container.querySelector('[data-part="habitat-dome-right"]')).not.toBeNull();
    expect(container.querySelector('[data-part="orbital-deck-right"]')).toBeNull();
  });

  it("places the Jupiter offer on an orbital platform rather than depicting solid ground", () => {
    const item = product("land", "land-03", "jupiter");
    const { container } = render(<KineticProductScene product={item} />);
    expect(container.querySelector('[data-part="orbital-deck-left"]')).not.toBeNull();
    expect(container.querySelector('[data-part="orbital-deck-right"]')).not.toBeNull();
    expect(container.querySelector('[data-part="parcel-boundary"]')).toBeNull();
    expect(getKineticDemoConfig(item).status).toContain("상공");
  });

  it.each([
    ["bed", ["bed-base", "floating-mattress"], "침대 띄우기"],
    ["desk", ["desk-panel-left", "desk-panel-right", "desk-leg-left"], "책상 펼치기"],
    ["tv", ["tv-projector", "projected-tv-screen"], "공중 화면 켜기"],
    ["oven", ["oven-plating-arm-left", "oven-plating-arm-right", "oven-door", "oven-sliding-meal"], "한 접시 준비하기"],
    ["wardrobe", ["wardrobe-hanger", "wardrobe-fold-left", "folded-sweater", "wardrobe-door-right"], "옷 정리하기"],
    ["sofa", ["sofa-backrest", "sofa-footrest"], "휴식 모드 펴기"],
    ["shower", ["shower-sliding-door", "shower-nozzles", "recirculating-mist"], "샤워 순환 시연"],
    ["garden", ["garden-dome", "garden-watering-arm", "garden-water-drops", "garden-light-panel"], "작은 정원 돌보기"],
  ])("living %s has its own articulated product structure", (type, parts, action) => {
    const item = product("living", "living-01", type);
    const { container } = render(<KineticProductScene product={item} />);
    expect(container.querySelector(`[data-living-type="${type}"]`)).not.toBeNull();
    for (const part of parts) expect(container.querySelector(`[data-part="${part}"]`)).not.toBeNull();
    expect(getKineticDemoConfig(item).action).toBe(action);
    expect(getKineticDemoConfig(item).greeting).toBeUndefined();
    expect(container.querySelector("img")).toBeNull();
    expect(container.querySelector('[data-part="capsule-lid"]')).toBeNull();
  });
});
