"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum[UserStatusEnum["Active"] = 0] = "Active";
    UserStatusEnum[UserStatusEnum["Inactive"] = 1] = "Inactive";
    UserStatusEnum[UserStatusEnum["Banned"] = 2] = "Banned";
    UserStatusEnum[UserStatusEnum["TemporarilyBanned"] = 3] = "TemporarilyBanned";
})(UserStatusEnum = exports.UserStatusEnum || (exports.UserStatusEnum = {}));
var UserPermissionEnum;
(function (UserPermissionEnum) {
    UserPermissionEnum[UserPermissionEnum["Member"] = 0] = "Member";
    UserPermissionEnum[UserPermissionEnum["Vip"] = 1] = "Vip";
    UserPermissionEnum[UserPermissionEnum["Helper"] = 2] = "Helper";
    UserPermissionEnum[UserPermissionEnum["Moderator"] = 3] = "Moderator";
    UserPermissionEnum[UserPermissionEnum["Administrator"] = 4] = "Administrator";
    UserPermissionEnum[UserPermissionEnum["Director"] = 5] = "Director";
})(UserPermissionEnum = exports.UserPermissionEnum || (exports.UserPermissionEnum = {}));
//# sourceMappingURL=user.enum.js.map