import { Question } from "@/App";

export const questions: Question[] = [
  {
    id: 1,
    type: "衣着反差",
    approach: "氛围",
    content: "在对方安静专注的目光下，缓慢脱去衣服的过程，我能体会到心理上明确的拉扯感"
  },
  {
    id: 2,
    type: "衣着反差",
    approach: "氛围",
    content: "走廊里灯光昏暗，把对方把我的眼睛蒙上然后拉到镜子前面，揭开后让我看着镜子里羞涩的自己"
  },
  {
    id: 3,
    type: "衣着反差",
    approach: "语言",
    content: "被对方冷下声音，严肃要求“脱掉某件衣服”，并要求自己说出现在是什么身份，等下要被怎么样"
  },
  {
    id: 4,
    type: "衣着反差",
    approach: "语言",
    content: "当裙子被卷到腰间，对方问“今天是乖小孩吗，为什么裙子会在腰间呢”"
  },
  {
    id: 5,
    type: "衣着反差",
    approach: "身体",
    content: "衣物被部分推开，露出局部皮肤感知到空调的凉意，比全裸更让我害羞。"
  },
  {
    id: 6,
    type: "衣着反差",
    approach: "身体",
    content: "短裤挂在脚踝，行动时有明显的拘束感，但是不能完全脱掉。"
  },
  {
    id: 7,
    type: "身份反差",
    approach: "氛围",
    content: "在会议室里突然接到对方的电话，听筒对面低声喊出了你们约定的特殊称呼"
  },
  {
    id: 8,
    type: "身份反差",
    approach: "氛围",
    content: "在安静的空间里，被示意捧起戒尺站在墙角，对方沉默的注视让我觉得紧张。"
  },
  {
    id: 9,
    type: "身份反差",
    approach: "语言",
    content: "在路上撒娇，被威胁再不听话要挨揍的时候，小声地说“我错了不罚了好不好”"
  },
  {
    id: 10,
    type: "身份反差",
    approach: "语言",
    content: "对方带笑的看着我说“刚才是学术论坛上发言的博士，而现在只是我的puppy”"
  },
  {
    id: 11,
    type: "身份反差",
    approach: "身体",
    content: "当我被要求保持跪姿，被牵引着跟随时，会觉得害羞。"
  },
  {
    id: 12,
    type: "身份反差",
    approach: "身体",
    content: "在身体接触中被引导到“仆从/宠物”等姿态，会让我有强烈的羞耻感。"
  },
  {
    id: 13,
    type: "想法反差",
    approach: "氛围",
    content: "当对方故意停顿、沉默，似乎在等我承认内心的小心思时，我会感到脸热。"
  },
  {
    id: 14,
    type: "想法反差",
    approach: "氛围",
    content: "对方在书桌上放置戒尺，并用表情暗示“今天一定不会好过”，让我觉得无处可逃。"
  },
  {
    id: 15,
    type: "想法反差",
    approach: "语言",
    content: "对方逼问我“想要什么，说出来才可能得到哦”，会让我变得更加渴望"
  },
  {
    id: 16,
    type: "想法反差",
    approach: "语言",
    content: "对方要求我反复且清晰陈述自己的想法和错误时，我觉得张不开口，在被迫说出后会更加害羞。"
  },
  {
    id: 17,
    type: "想法反差",
    approach: "身体",
    content: "对方靠近我的耳边，呼吸声清晰可见，说话的温热的气息扑在耳朵，会让我更红温。"
  },
  {
    id: 18,
    type: "想法反差",
    approach: "身体",
    content: "在我还没承认之前，对方抬起我的下巴要求直视眼睛，会让我羞得想躲。"
  }
];

// 按每页6题分组
export const questionPages = [
  questions.slice(0, 6),  // 第1页
  questions.slice(6, 12), // 第2页
  questions.slice(12, 18) // 第3页
];