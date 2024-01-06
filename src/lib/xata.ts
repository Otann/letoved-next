// Generated by Xata Codegen 0.28.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "resolutions",
    columns: [
      {
        name: "resolution",
        type: "string",
        notNull: true,
        defaultValue: "my resolution",
      },
      { name: "year", type: "int", notNull: true, defaultValue: "2023" },
      {
        name: "isCompleted",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
      { name: "user", type: "link", link: { table: "users" } },
    ],
  },
  {
    name: "users",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "password", type: "string" },
      { name: "telegramId", type: "int", unique: true },
      { name: "firstName", type: "string" },
      { name: "lastName", type: "string" },
    ],
    revLinks: [{ column: "user", table: "resolutions" }],
  },
  {
    name: "totp",
    columns: [
      { name: "telegramUser", type: "json" },
      { name: "wasUsed", type: "bool", notNull: true, defaultValue: "false" },
      { name: "code", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Resolutions = InferredTypes["resolutions"];
export type ResolutionsRecord = Resolutions & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type Totp = InferredTypes["totp"];
export type TotpRecord = Totp & XataRecord;

export type DatabaseSchema = {
  resolutions: ResolutionsRecord;
  users: UsersRecord;
  totp: TotpRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://anton-s-workspace-8sqcf1.eu-central-1.xata.sh/db/letoved",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
