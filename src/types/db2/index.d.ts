/* eslint max-len: 0 */
/* eslint camelcase: 0 */

interface AchievementDatabase{
    ID?: string;
    Faction?: string;
    Instance_ID?: string;
    Supercedes?: string;
    Title_lang?: string;
    Description_lang?: string;
    Category?: string;
    Points?: string;
    Ui_order?: string;
    Flags?: string;
    IconID?: string;
    Reward_lang?: string;
    Minimum_criteria?: string;
    Shares_criteria?: string;
    Criteria_tree?: string;
    IconFileID?: string;
    RewardItemID?: string;
    CovenantID?: string;
    Field_3_0_1_8471_007?: string;
    Field_3_0_1_8303_002?: string;
}
interface Achievement_CriteriaDatabase{
    ID?: string;
    Achievement_ID?: string;
    Type?: string;
    Asset_ID?: string;
    Quantity?: string;
    Start_event?: string;
    Start_asset?: string;
    Fail_event?: string;
    Fail_asset?: string;
    Description_lang?: string;
    Flags?: string;
    Timer_start_event?: string;
    Timer_asset_ID?: string;
    Timer_time?: string;
    Ui_order?: string;
    AdditionalConditionType?: string;
    AdditionalConditionValue?: string;
    WorldStateID?: string;
    RequiredWorldStateStatus?: string;
}
interface Achievement_CategoryDatabase{
    ID?: string;
    Parent?: string;
    Name_lang?: string;
    Ui_order?: string;
}
interface AdventureJournalDatabase{
    ID?: string;
    BattleMasterListID?: string;
    BonusPlayerConditionID?: string;
    BonusValue?: string;
    ButtonActionType?: string;
    ButtonText_lang?: string;
    ContinueDescription_lang?: string;
    CurrencyQuantity?: string;
    CurrencyType?: string;
    Description_lang?: string;
    Flags?: string;
    ItemID?: string;
    ItemQuantity?: string;
    LfgDungeonID?: string;
    Name_lang?: string;
    PlayerConditionID?: string;
    PriorityMax?: string;
    PriorityMin?: string;
    QuestID?: string;
    RewardDescription_lang?: string;
    TextureFileDataID?: string;
    Type?: string;
    WorldMapAreaID?: string;
    UIMapID?: string;
}
interface AdventureMapPOIDatabase{
    ID?: string;
    AreaTableID?: string;
    Description_lang?: string;
    DungeonMapID?: string;
    LfgDungeonID?: string;
    PlayerConditionID?: string;
    QuestID?: string;
    RewardItemID?: string;
    Title_lang?: string;
    Type?: string;
    UiTextureAtlasMemberID?: string;
    UiTextureKitID?: string;
    WorldMapAreaID?: string;
    WorldPosition?: string;
    MapID?: string;
}
interface AlliedRaceDatabase{
    ID?: string;
    BannerColor?: string;
    CrestTextureID?: string;
    FemaleCreatureDisplayID?: string;
    MaleCreatureDisplayID?: string;
    ModelBackgroundTextureID?: string;
    RaceID?: string;
    Ui_unlockAchievementID?: string;
    Ui_unlockSecondaryAchievementID?: string;
}
interface AlliedRaceRacialAbilityDatabase{
    ID?: string;
    AlliedRaceID?: string;
    Description_lang?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    OrderIndex?: string;
}
interface AnimKitDatabase{
    ID?: string;
    OneShotDuration?: string;
    OneShotStopAnimKitID?: string;
    LowDefAnimKitID?: string;
}
interface AnimKitBoneSetAliasDatabase{
    ID?: string;
    BoneDataID?: string;
    AnimKitBoneSetID?: string;
}
interface AnimKitBoneSetDatabase{
    ID?: string;
    Name?: string;
    BoneDataID?: string;
    ParentAnimKitBoneSetID?: string;
    ExtraBoneCount?: string;
    AltAnimKitBoneSetID?: string;
    AltBoneDataID?: string;
}
interface AnimKitConfigDatabase{
    ID?: string;
    ConfigFlags?: string;
}
interface AnimKitPriorityDatabase{
    ID?: string;
    Priority?: string;
}
interface AnimKitConfigBoneSetDatabase{
    ID?: string;
    ParentAnimKitConfigID?: string;
    AnimKitBoneSetID?: string;
    AnimKitPriorityID?: string;
}
interface AnimKitReplacementDatabase{
    ID?: string;
    DstAnimKitID?: string;
    ConditionalFlags?: string;
    ParentAnimReplacementSetID?: string;
    SrcAnimKitID?: string;
}
interface AnimReplacementDatabase{
    ID?: string;
    SrcAnimID?: string;
    DstAnimID?: string;
    ParentAnimReplacementSetID?: string;
    ConditionalFlags?: string;
}
interface AnimReplacementSetDatabase{
    ID?: string;
    ExecOrder?: string;
}
interface AnimKitSegmentDatabase{
    ID?: string;
    ParentAnimKitID?: string;
    OrderIndex?: string;
    AnimID?: string;
    AnimStartTime?: string;
    AnimKitConfigID?: string;
    StartCondition?: string;
    StartConditionParam?: string;
    StartConditionDelay?: string;
    EndCondition?: string;
    EndConditionParam?: string;
    EndConditionDelay?: string;
    Speed?: string;
    SegmentFlags?: string;
    ForcedVariation?: string;
    OverrideConfigFlags?: string;
    LoopToSegmentIndex?: string;
    BlendInTimeMs?: string;
    BlendOutTimeMs?: string;
    Field_9_0_1_34278_018?: string;
}
interface AnimaCableDatabase{
    ID?: string;
    ParticleModel?: string;
    Field_9_0_1_33978_001?: string;
    Field_9_0_1_33978_002?: string;
    Field_9_0_1_33978_003?: string;
    Field_9_0_1_33978_004?: string;
    Field_9_0_1_33978_005?: string;
    Field_9_0_1_33978_006?: string;
    Field_9_0_1_33978_007?: string;
    Field_9_0_1_33978_008?: string;
    Field_9_0_1_33978_009?: string;
    Flags?: string;
    Field_9_0_1_33978_011?: string;
    Field_9_0_1_33978_012?: string;
    Field_9_0_1_33978_013?: string;
    Field_9_0_1_33978_014?: string;
    Field_9_0_1_33978_015?: string;
    Field_9_0_1_33978_016?: string;
    Field_9_0_1_33978_017?: string;
    Field_9_0_1_33978_018?: string;
    Field_9_0_1_33978_019?: string;
    Field_9_0_1_33978_020?: string;
    Field_9_0_1_33978_021?: string;
    Field_9_0_1_33978_022?: string;
    Field_9_0_1_33978_023?: string;
    Field_9_0_1_33978_024?: string;
    Field_9_0_1_33978_025?: string;
    Field_9_0_1_33978_026?: string;
    Field_9_0_1_33978_027?: string;
    Field_9_0_1_33978_028?: string;
    Field_9_0_1_33978_029?: string;
    Field_9_0_1_33978_030?: string;
    Field_9_0_1_33978_031?: string;
    Field_9_0_1_33978_032?: string;
    Field_9_0_1_34199_033?: string;
    Field_9_0_1_34199_034?: string;
    Field_9_0_1_34199_035?: string;
    Field_9_0_1_34972_034?: string;
}
interface AnimaMaterialDatabase{
    ID?: string;
    Field_9_0_1_33978_000?: string;
    Field_9_0_1_33978_001?: string;
    Field_9_0_1_33978_002?: string;
    Field_9_0_1_33978_003?: string;
    Field_9_0_1_33978_004?: string;
    Field_9_0_1_33978_005?: string;
    Field_9_0_1_33978_006?: string;
    Field_9_0_1_33978_007?: string;
    Field_9_0_1_33978_008?: string;
    Field_9_0_1_33978_009?: string;
    Field_9_0_1_33978_010?: string;
    Field_9_0_1_33978_011?: string;
    Field_9_0_1_33978_012?: string;
    Field_9_0_1_33978_013?: string;
    Field_9_0_1_33978_014?: string;
    Field_9_0_1_33978_015?: string;
    Field_9_0_1_33978_016?: string;
    Field_9_0_1_33978_017?: string;
    Field_9_0_1_33978_018?: string;
    Field_9_0_1_33978_019?: string;
    Field_9_0_1_33978_020?: string;
    Field_9_0_1_33978_021?: string;
    Field_9_0_1_33978_022?: string;
    Field_9_0_1_33978_023?: string;
    RibbonTexture?: string;
    Field_9_0_1_33978_025?: string;
    Field_9_0_1_33978_026?: string;
    Flags?: string;
    Field_9_0_1_33978_028?: string;
    Field_9_0_1_33978_029?: string;
    EffectTexture?: string;
}
interface AnimaCylinderDatabase{
    ID?: string;
    AnimaCableID?: string;
    AnimaMaterialID?: string;
    Field_9_0_1_33978_002?: string;
    Field_9_0_1_33978_003?: string;
    Field_9_0_1_33978_004?: string;
    Order?: string;
    Field_9_0_1_33978_006?: string;
}
interface AnimationDataDatabase{
    ID?: string;
    Name?: string;
    Flags?: string;
    Fallback?: string;
    BehaviorID?: string;
    BehaviorTier?: string;
    Weaponflags?: string;
    Bodyflags?: string;
    Field_0_7_0_3694_004?: string;
}
interface AoiBoxDatabase{
    ID?: string;
    Bounds?: string;
    Flags?: string;
    EncounterID?: string;
    WorldStateID?: string;
    MapID?: string;
    InternalName?: string;
}
interface AreaConditionalDataDatabase{
    AreaName_lang?: string;
    ID?: string;
    OrderIndex?: string;
    PlayerConditionID?: string;
    AreaID?: string;
}
interface AnimationNamesDatabase{
    ID?: string;
    Name?: string;
}
interface AreaAssignmentDatabase{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    ChunkX?: string;
    ChunkY?: string;
}
interface AreaFarClipOverrideDatabase{
    ID?: string;
    AreaID?: string;
    Flags?: string;
    MinFarClip?: string;
    MinHorizonStart?: string;
}
interface AreaGroupMemberDatabase{
    ID?: string;
    AreaGroupID?: string;
    AreaID?: string;
}
interface AreaGroupDatabase{
    ID?: string;
    AreaID?: string;
    NextAreaID?: string;
}
interface AreaMIDIAmbiencesDatabase{
    ID?: string;
    DaySequence?: string;
    NightSequence?: string;
    DLSFile?: string;
    Volume?: string;
}
interface AreaPOIDatabase{
    ID?: string;
    Importance?: string;
    Icon?: string;
    FactionID?: string;
    Pos?: string;
    ContinentID?: string;
    Flags?: string;
    AreaID?: string;
    Name_lang?: string;
    Description_lang?: string;
    WorldStateID?: string;
    PlayerConditionID?: string;
    WorldMapLink?: string;
    PortLocID?: string;
    MapFloor?: string;
    PoiData?: string;
    PoiDataType?: string;
    UiTextureAtlasMemberID?: string;
    WMOGroupID?: string;
    UiWidgetSetID?: string;
    UiTextureKitID?: string;
    Field_9_1_0_38783_011?: string;
    Field_9_1_0_38783_017?: string;
}
interface AreaPOISortedWorldStateDatabase{
    ID?: string;
    WorldStateID?: string;
    CemeteryID?: string;
}
interface AreaPOIStateDatabase{
    ID?: string;
    AreaPoiID?: string;
    Description_lang?: string;
    IconEnumValue?: string;
    UiTextureAtlasMemberID?: string;
    WorldStateValue?: string;
}
interface AreaTableDatabase{
    ID?: string;
    ContinentID?: string;
    ParentAreaID?: string;
    AreaBit?: string;
    Flags?: string;
    SoundProviderPref?: string;
    SoundProviderPrefUnderwater?: string;
    AmbienceID?: string;
    ZoneMusic?: string;
    ZoneName?: string;
    IntroSound?: string;
    ExplorationLevel?: string;
    AreaName_lang?: string;
    FactionGroupMask?: string;
    LiquidTypeID?: string;
    MinElevation?: string;
    Ambient_multiplier?: string;
    LightID?: string;
    MountFlags?: string;
    UwIntroSound?: string;
    UwZoneMusic?: string;
    UwAmbience?: string;
    World_pvp_ID?: string;
    PvpCombatWorldStateID?: string;
    WildBattlePetLevelMin?: string;
    WildBattlePetLevelMax?: string;
    WindSettingsID?: string;
    AreaNumber?: string;
    ParentAreaNum?: string;
    MIDIAmbience?: string;
    MIDIAmbienceUnderwater?: string;
    IntroPriority?: string;
    ContentTuningID?: string;
}
interface AreaTriggerActionSetDatabase{
    ID?: string;
    Flags?: string;
}
interface AreaTriggerDatabase{
    ID?: string;
    ContinentID?: string;
    Pos?: string;
    PhaseUseFlags?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    Radius?: string;
    Box_length?: string;
    Box_width?: string;
    Box_height?: string;
    Box_yaw?: string;
    ShapeType?: string;
    ShapeID?: string;
    AreaTriggerActionSetID?: string;
    Flags?: string;
    PhaseShift?: string;
    Message_lang?: string;
}
interface AreaTriggerBoxDatabase{
    ID?: string;
    Extents?: string;
}
interface AreaTriggerSphereDatabase{
    ID?: string;
    MaxRadius?: string;
}
interface AreaTriggerCylinderDatabase{
    ID?: string;
    Radius?: string;
    Height?: string;
    ZOffset?: string;
}
interface ArmorLocationDatabase{
    ID?: string;
    Clothmodifier?: string;
    Leathermodifier?: string;
    Chainmodifier?: string;
    Platemodifier?: string;
    Modifier?: string;
}
interface ArenaCcItemDatabase{
    ID?: string;
    ItemID?: string;
    SpellID?: string;
}
interface AreaTriggerCreatePropertiesDatabase{
    ID?: string;
    ShapeType?: string;
    StartShapeID?: string;
}
interface ArtifactAppearanceSetDatabase{
    ID?: string;
    AltHandUICameraID?: string;
    ArtifactID?: string;
    Description_lang?: string;
    DisplayIndex?: string;
    Flags?: string;
    ForgeAttachmentOverride?: string;
    Name_lang?: string;
    UiCameraID?: string;
}
interface ArtifactCategoryDatabase{
    ID?: string;
    XpMultCurrencyID?: string;
    XpMultCurveID?: string;
}
interface ArtifactDatabase{
    ID?: string;
    ArtifactCategoryID?: string;
    ChrSpecializationID?: string;
    Flags?: string;
    Name_lang?: string;
    SpellVisualKitID?: string;
    UiBarBackgroundColor?: string;
    UiBarOverlayColor?: string;
    UiModelSceneID?: string;
    UiNameColor?: string;
    UiTextureKitID?: string;
}
interface ArtifactAppearanceDatabase{
    ID?: string;
    ArtifactAppearanceSetID?: string;
    DisplayIndex?: string;
    Flags?: string;
    ItemAppearanceModifierID?: string;
    Name_lang?: string;
    OverrideShapeshiftDisplayID?: string;
    OverrideShapeshiftFormID?: string;
    UiAltItemAppearanceID?: string;
    UiCameraID?: string;
    UiItemAppearanceID?: string;
    UiModelOpacity?: string;
    UiModelSaturation?: string;
    UiSwatchColor?: string;
    UnlockPlayerConditionID?: string;
    UsablePlayerConditionID?: string;
}
interface ArtifactPowerDatabase{
    ID?: string;
    ArtifactID?: string;
    DisplayPos?: string;
    Flags?: string;
    Label?: string;
    MaxPurchasableRank?: string;
    Tier?: string;
}
interface ArtifactItemToTransmogDatabase{
    ID?: string;
    ArtifactID?: string;
    ChildItemID?: string;
    ItemID?: string;
}
interface ArtifactPowerLinkDatabase{
    ID?: string;
    PowerA?: string;
    PowerB?: string;
}
interface ArtifactPowerPickerDatabase{
    ID?: string;
    PlayerConditionID?: string;
}
interface ArtifactQuestXPDatabase{
    ID?: string;
    Difficulty?: string;
}
interface ArtifactPowerRankDatabase{
    ID?: string;
    ArtifactPowerID?: string;
    AuraPointsOverride?: string;
    ItemBonusListID?: string;
    RankIndex?: string;
    SpellID?: string;
}
interface ArtifactTierDatabase{
    ID?: string;
    ArtifactTier?: string;
    KnowledgePlayerCondition?: string;
    MaxArtifactKnowledge?: string;
    MaxNumTraits?: string;
    MinimumEmpowerKnowledge?: string;
}
interface AttackAnimKitsDatabase{
    ID?: string;
    ItemSubclassID?: string;
    AnimTypeID?: string;
    AnimFrequency?: string;
    WhichHand?: string;
}
interface ArtifactUnlockDatabase{
    ID?: string;
    ArtifactID?: string;
    ItemBonusListID?: string;
    PlayerConditionID?: string;
    PowerID?: string;
    PowerRank?: string;
}
interface AttackAnimTypesDatabase{
    AnimID?: string;
    AnimName?: string;
}
interface AuctionHouseDatabase{
    ID?: string;
    FactionID?: string;
    DepositRate?: string;
    ConsignmentRate?: string;
    Name_lang?: string;
}
interface AzeriteEmpoweredItemDatabase{
    ID?: string;
    AzeritePowerSetID?: string;
    AzeriteTierUnlockSetID?: string;
    ItemID?: string;
}
interface AzeriteEssenceDatabase{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    SpecSetID?: string;
}
interface AzeriteEssencePowerDatabase{
    ID?: string;
    SourceAlliance_lang?: string;
    SourceHorde_lang?: string;
    AzeriteEssenceID?: string;
    Tier?: string;
    MajorPowerDescription?: string;
    MinorPowerDescription?: string;
    MajorPowerActual?: string;
    MinorPowerActual?: string;
}
interface AzeriteItemDatabase{
    ID?: string;
    ItemID?: string;
}
interface AzeriteLevelInfoDatabase{
    ID?: string;
    LevelXP?: string;
    TotalLevelXP?: string;
    ItemLevel?: string;
}
interface AzeriteKnowledgeMultiplierDatabase{
    ID?: string;
    Multiplier?: string;
}
interface AzeritePowerSetMemberDatabase{
    ID?: string;
    Class?: string;
    AzeritePowerID?: string;
    AzeritePowerSetID?: string;
    OrderIndex?: string;
    Tier?: string;
}
interface AzeriteItemMilestonePowerDatabase{
    ID?: string;
    AzeritePowerID?: string;
    RequiredLevel?: string;
    AzeriteEssenceType?: string;
    IsHeartEssenceUnlock?: string;
}
interface AzeritePowerDatabase{
    ID?: string;
    ItemBonusListID?: string;
    SpellID?: string;
    SpecSetID?: string;
    Flags?: string;
}
interface AzeriteTierUnlockSetDatabase{
    ID?: string;
    Flags?: string;
}
interface AzeriteUnlockMappingDatabase{
    ID?: string;
    MinItemLevel?: string;
    HeadBonus?: string;
    ShoulderBonus?: string;
    ChestBonus?: string;
    SetID?: string;
}
interface AzeriteTierUnlockDatabase{
    ID?: string;
    AzeriteLevel?: string;
    AzeriteTierUnlockSetID?: string;
    ItemCreationContext?: string;
    Tier?: string;
}
interface BarrageEffectDatabase{
    ID?: string;
    Field_8_1_0_28440_001?: string;
    Field_8_1_0_28440_002?: string;
    Field_8_1_0_28440_003Max?: string;
    Field_8_1_0_28440_003Min?: string;
    Field_8_1_0_28440_005?: string;
    ModelCountMax?: string;
    ModelCountMin?: string;
    AttachmentPoint?: string;
    SpellVisualEffectNameID?: string;
    ConeAngle?: string;
    Range?: string;
    Flags?: string;
    Field_8_1_0_28616_001Max?: string;
    Field_8_1_0_28616_001Min?: string;
}
interface BankBagSlotPricesDatabase{
    ID?: string;
    Cost?: string;
}
interface BannedAddonsDatabase{
    ID?: string;
    NameMD5?: string;
    VersionMD5?: string;
    LastModified?: string;
    Flags?: string;
    Name?: string;
    Version?: string;
}
interface BarberShopStyleDatabase{
    ID?: string;
    Type?: string;
    DisplayName_lang?: string;
    Description_lang?: string;
    Cost_Modifier?: string;
    Race?: string;
    Sex?: string;
    Data?: string;
}
interface BattlePetAbilityDatabase{
    ID?: string;
    BattlePetVisualID?: string;
    Cooldown?: string;
    Description_lang?: string;
    Flags?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    PetTypeEnum?: string;
}
interface BattlePetAbilityEffectDatabase{
    ID?: string;
    AuraBattlePetAbilityID?: string;
    BattlePetAbilityTurnID?: string;
    BattlePetEffectPropertiesID?: string;
    BattlePetVisualID?: string;
    OrderIndex?: string;
    Param?: string;
}
interface BattlePetAbilityStateDatabase{
    ID?: string;
    BattlePetAbilityID?: string;
    BattlePetStateID?: string;
    Value?: string;
}
interface BattlePetAbilityTurnDatabase{
    ID?: string;
    BattlePetAbilityID?: string;
    BattlePetVisualID?: string;
    EventTypeEnum?: string;
    OrderIndex?: string;
    TurnTypeEnum?: string;
}
interface BattlePetBreedQualityDatabase{
    StateMultiplier?: string;
    ID?: string;
    QualityEnum?: string;
}
interface BattlePetBreedStateDatabase{
    ID?: string;
    BattlePetBreedID?: string;
    BattlePetStateID?: string;
    Value?: string;
}
interface BattlePetDisplayOverrideDatabase{
    ID?: string;
    BattlePetSpeciesID?: string;
    CreatureDisplayInfoID?: string;
    PlayerConditionID?: string;
    PriorityCategory?: string;
}
interface BattlePetEffectPropertiesDatabase{
    ParamLabel?: string;
    ParamTypeEnum?: string;
    ID?: string;
    BattlePetVisualID?: string;
}
interface BattlePetNPCTeamMemberDatabase{
    Name_lang?: string;
    ID?: string;
}
interface BattlePetSpeciesStateDatabase{
    ID?: string;
    BattlePetSpeciesID?: string;
    BattlePetStateID?: string;
    Value?: string;
}
interface BattlePetSpeciesDatabase{
    ID?: string;
    CardUIModelSceneID?: string;
    CreatureID?: string;
    Description_lang?: string;
    Flags?: string;
    IconFileDataID?: string;
    LoadoutUIModelSceneID?: string;
    PetTypeEnum?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
    SummonSpellID?: string;
    CovenantID?: string;
}
interface BattlePetSpeciesXCovenantDatabase{
    ID?: string;
    CovenantID?: string;
    BattlePetSpeciesID?: string;
}
interface BattlePetSpeciesXAbilityDatabase{
    ID?: string;
    BattlePetAbilityID?: string;
    BattlePetSpeciesID?: string;
    RequiredLevel?: string;
    SlotEnum?: string;
}
interface BattlePetStateDatabase{
    LuaName?: string;
    ID?: string;
    BattlePetVisualID?: string;
    Flags?: string;
}
interface BattlePetVisualDatabase{
    SceneScriptFunction?: string;
    ID?: string;
    CastMilliSeconds?: string;
    Flags?: string;
    ImpactMilliSeconds?: string;
    RangeTypeEnum?: string;
    SceneScriptPackageID?: string;
    SpellVisualID?: string;
}
interface BattlemasterListDatabase{
    ID?: string;
    MapID?: string;
    InstanceType?: string;
    GroupsAllowed?: string;
    Name_lang?: string;
    MaxGroupSize?: string;
    HolidayWorldState?: string;
    Minlevel?: string;
    Maxlevel?: string;
    RatedPlayers?: string;
    MinPlayers?: string;
    MaxPlayers?: string;
    Flags?: string;
    IconFileDataID?: string;
    Gametype_lang?: string;
    LongDescription_lang?: string;
    Required_Player_Condition_ID?: string;
    ShortDescription_lang?: string;
    Field_2_4_0_8089_009?: string;
    Field_3_0_3_9183_010?: string;
    Field_2_0_0_5610_006?: string;
    Field_2_0_0_5610_005?: string;
}
interface BeamEffectDatabase{
    ID?: string;
    BeamID?: string;
    DestAttachID?: string;
    DestOffset?: string;
    DestPositionerID?: string;
    FixedLength?: string;
    Flags?: string;
    SourceAttachID?: string;
    SourceMinDistance?: string;
    SourceOffset?: string;
    SourcePositionerID?: string;
}
interface BeckonTriggerDatabase{
    ID?: string;
    Field_9_0_1_33978_001?: string;
    QuestID?: string;
    BroadcastTextID?: string;
    WorldEffectID?: string;
    Field_9_0_1_33978_005?: string;
    Field_9_0_1_33978_006?: string;
    PlayerConditionID?: string;
    CreatureID?: string;
}
interface BoneWindModifierModelDatabase{
    ID?: string;
    BoneWindModifierID?: string;
    FileDataID?: string;
}
interface BoneWindModifiersDatabase{
    ID?: string;
    Multiplier?: string;
    PhaseMultiplier?: string;
}
interface BonusRollDatabase{
    ID?: string;
    CurrencyCost?: string;
    CurrencyTypesID?: string;
    JournalEncounterID?: string;
    JournalInstanceID?: string;
}
interface BountyDatabase{
    ID?: string;
    BountySetID?: string;
    FactionID?: string;
    IconFileDataID?: string;
    QuestID?: string;
    TurninPlayerConditionID?: string;
}
interface BountySetDatabase{
    ID?: string;
    LockedQuestID?: string;
    VisiblePlayerConditionID?: string;
}
interface BroadcastTextDatabase{
    ID?: string;
    LanguageID?: string;
    EmoteID?: string;
    SoundEntriesID?: string;
    SoundKitID?: string;
    ConditionID?: string;
    EmoteDelay?: string;
    EmotesID?: string;
    Flags?: string;
    Text_lang?: string;
    Text1_lang?: string;
    ChatBubbleDurationMs?: string;
}
interface BroadcastTextDurationDatabase{
    ID?: string;
    BroadcastTextID?: string;
    Locale?: string;
    DurationMS?: string;
}
interface BroadcastTextSoundStateDatabase{
    ID?: string;
    Name?: string;
}
interface BroadcastTextVOStateDatabase{
    ID?: string;
    SoundStateID?: string;
}
interface CameraEffectDatabase{
    ID?: string;
    Flags?: string;
}
interface CameraEffectEntryDatabase{
    ID?: string;
    Amplitude?: string;
    AmplitudeB?: string;
    AmplitudeCurveID?: string;
    AttenuationType?: string;
    CameraEffectID?: string;
    Delay?: string;
    DirectionType?: string;
    Duration?: string;
    EffectType?: string;
    Flags?: string;
    Frequency?: string;
    MovementType?: string;
    OrderIndex?: string;
    Phase?: string;
    RadiusMax?: string;
    RadiusMin?: string;
}
interface CameraModeDatabase{
    ID?: string;
    Name?: string;
    Type?: string;
    Flags?: string;
    PositionOffset?: string;
    TargetOffset?: string;
    PositionSmoothing?: string;
    RotationSmoothing?: string;
    FieldOfView?: string;
    LockedPositionOffsetBase?: string;
    LockedPositionOffsetDirection?: string;
    LockedTargetOffsetBase?: string;
    LockedTargetOffsetDirection?: string;
}
interface CameraShakesDatabase{
    ID?: string;
    ShakeType?: string;
    Direction?: string;
    Amplitude?: string;
    Frequency?: string;
    Duration?: string;
    Phase?: string;
    Coefficient?: string;
    Flags?: string;
}
interface CampaignXConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    OrderIndex?: string;
    CampaignID?: string;
    Flags?: string;
    FailureReason_lang?: string;
}
interface CampaignDatabase{
    Title_lang?: string;
    InternalTitle?: string;
    Description_lang?: string;
    ID?: string;
    UiTextureKitID?: string;
    RewardQuestID?: string;
    Prerequisite?: string;
    Completed?: string;
    UiQuestDetailsThemeID?: string;
    Flags?: string;
    OnlyStallIf?: string;
    Field_9_0_1_35755_007?: string;
}
interface CampaignXQuestLineDatabase{
    ID?: string;
    CampaignID?: string;
    QuestLineID?: string;
    OrderIndex?: string;
}
interface CastableRaidBuffsDatabase{
    ID?: string;
    SpellID?: string;
    CastingSpellID?: string;
}
interface Cfg_CategoriesDatabase{
    ID?: string;
    LocaleMask?: string;
    Create_charsetMask?: string;
    Existing_charsetMask?: string;
    Flags?: string;
    Name_lang?: string;
    Order?: string;
    Field_0_10_0_3892_000?: string;
    Region_ID?: string;
}
interface Cfg_ConfigsDatabase{
    ID?: string;
    RealmType?: string;
    PlayerKillingAllowed?: string;
    Roleplaying?: string;
    PlayerAttackSpeedBase?: string;
    MaxDamageReductionPctPhysical?: string;
    GeneratedID?: string;
}
interface CelestialBodyDatabase{
    ID?: string;
    AtmosphericMaskFileDataID?: string;
    AtmosphericMaskScale?: string;
    AtmosphericModifiedFileDataID?: string;
    BaseFileDataID?: string;
    BodyBaseScale?: string;
    GlowMaskFileDataID?: string;
    GlowMaskScale?: string;
    GlowModifiedFileDataID?: string;
    LightMaskFileDataID?: string;
    Position?: string;
    RotateRate?: string;
    ScrollURate?: string;
    ScrollVRate?: string;
    SkyArrayBand?: string;
}
interface Cfg_RegionsDatabase{
    ID?: string;
    Tag?: string;
    Region_group_mask?: string;
    RulesetID?: string;
    Challenge_origin?: string;
    Raidorigin?: string;
    Region_ID?: string;
    Field_8_1_0_28048_006?: string;
}
interface ChallengeModeItemBonusOverrideDatabase{
    ID?: string;
    OverrideItemBonusTreeID?: string;
    Type?: string;
    Level?: string;
    MythicPlusSeasonID?: string;
    PvPSeasonID?: string;
    ParentItemBonusTreeID?: string;
}
interface CharBaseInfoDatabase{
    RaceID?: string;
    ClassID?: string;
    ID?: string;
    Padding_4_0_0_11792_003?: string;
    Proficiency?: string;
}
interface CharBaseSectionDatabase{
    ID?: string;
    FallbackID?: string;
    LayoutResType?: string;
    ResolutionVariationEnum?: string;
    VariationEnum?: string;
}
interface CharComponentTextureSectionsDatabase{
    ID?: string;
    CharComponentTextureLayoutID?: string;
    SectionType?: string;
    X?: string;
    Y?: string;
    Width?: string;
    Height?: string;
    OverlapSectionMask?: string;
}
interface CharComponentTextureLayoutsDatabase{
    ID?: string;
    Width?: string;
    Height?: string;
}
interface CharHairTexturesDatabase{
    ID?: string;
    Field_0_5_3_3368_001_race?: string;
    Field_0_5_3_3368_002_gender?: string;
    Field_0_5_3_3368_003?: string;
    Field_0_5_3_3368_004_mayberacemask?: string;
    Field_0_5_3_3368_005_the_x_in_hair_xy_blp?: string;
    Field_0_5_3_3368_006?: string;
    Field_0_5_3_3368_007?: string;
}
interface CharHairGeosetsDatabase{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    VariationID?: string;
    VariationType?: string;
    GeosetID?: string;
    GeosetType?: string;
    Showscalp?: string;
    ColorIndex?: string;
    CustomGeoFileDataID?: string;
    HdCustomGeoFileDataID?: string;
    Field_8_3_0_32044_010?: string;
}
interface CharSectionConditionDatabase{
    ID?: string;
    BaseSection?: string;
    Sex?: string;
    VariationIndex?: string;
    ColorIndex?: string;
    AchievementID?: string;
    RaceID?: string;
}
interface CharShipmentDatabase{
    Field_6_0_1_18179_005?: string;
    ID?: string;
    ContainerID?: string;
    DummyItemID?: string;
    Duration?: string;
    Flags?: string;
    GarrFollowerID?: string;
    MaxShipments?: string;
    OnCompleteSpellID?: string;
    SpellID?: string;
    TreasureID?: string;
}
interface CharSectionsDatabase{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    BaseSection?: string;
    TextureName?: string;
    Flags?: string;
    VariationIndex?: string;
    ColorIndex?: string;
    MaterialResourcesID?: string;
}
interface CharStartKitDatabase{
    ID?: string;
    ZoneName_lang?: string;
    ChrClassesID?: string;
    ZoneImageAtlas?: string;
    ChrRacesID?: string;
    CharacterCreationVisual?: string;
    CharacterCreationIdleVisual?: string;
    MaleCharacterCreationVisual?: string;
    MaleCharacterCreationIdleVisual?: string;
    FemaleCharacterCreationVisual?: string;
    FemaleCharacterCreationIdleVisual?: string;
    CharacterCreationIdleGroundVisual?: string;
    CharacterCreationGroundVisual?: string;
    AlteredFormCharacterCreationIdleVisual?: string;
    AlteredFormCustomizeOffset?: string;
    AlteredFormCustomizeRotation?: string;
    ChrModel_9_0_1_35522_001Override?: string;
    ChrModel_9_0_1_35522_001Override_Female?: string;
    CharacterCreationAnimLoopWaitTimeMs?: string;
}
interface CharShipmentContainerDatabase{
    ID?: string;
    BaseCapacity?: string;
    CompleteSpellVisualID?: string;
    CrossFactionID?: string;
    Description_lang?: string;
    Faction?: string;
    GarrBuildingType?: string;
    GarrTypeID?: string;
    LargeDisplayInfoID?: string;
    LargeThreshold?: string;
    MediumDisplayInfoID?: string;
    MediumThreshold?: string;
    PendingText_lang?: string;
    SmallDisplayInfoID?: string;
    UiTextureKitID?: string;
    WorkingDisplayInfoID?: string;
    WorkingSpellVisualID?: string;
}
interface CharStartOutfitDatabase{
    ID?: string;
    RaceID?: string;
    ClassID?: string;
    SexID?: string;
    OutfitID?: string;
    ItemID?: string;
    DisplayItemID?: string;
    InventoryType?: string;
    PetDisplayID?: string;
    PetFamilyID?: string;
}
interface CharTextureVariationsV2Database{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    SectionID?: string;
    VariationID?: string;
    ColorID?: string;
    IsNPC?: string;
    TextureName?: string;
}
interface CharVariationsDatabase{
    RaceID?: string;
    SexID?: string;
    TextureHoldLayer?: string;
}
interface CharTitlesDatabase{
    ID?: string;
    Condition_ID?: string;
    Name_lang?: string;
    Name1_lang?: string;
    Mask_ID?: string;
    Flags?: string;
}
interface CharacterCreateCamerasDatabase{
    Race?: string;
    Sex?: string;
    Camera?: string;
    Height?: string;
    Radius?: string;
    Target?: string;
}
interface CharacterFaceBoneSetDatabase{
    ID?: string;
    BoneSetFileDataID?: string;
    FaceVariationIndex?: string;
    RaceID?: string;
    Resolution?: string;
    SexID?: string;
    ModelFileDataID?: string;
}
interface CharacterFacialHairStylesDatabase{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    VariationID?: string;
    Geoset?: string;
    BeardGeoset?: string;
    MoustacheGeoset?: string;
    SideburnGeoset?: string;
}
interface CharacterLoadoutDatabase{
    ID?: string;
    ChrClassID?: string;
    Purpose?: string;
    Racemask?: string;
    Field_2_5_1_38043_004?: string;
}
interface CharacterLoadoutPetDatabase{
    ID?: string;
    CreatureID?: string;
    PetDisplayID?: string;
    PetFamilyID?: string;
    CharacterLoadoutID?: string;
}
interface CharacterLoadoutItemDatabase{
    ID?: string;
    CharacterLoadoutID?: string;
    ItemID?: string;
    ItemDisplayInfoID?: string;
    ItemInventoryType?: string;
}
interface CharacterServiceInfoDatabase{
    ID?: string;
    BoostLevel?: string;
    BoostType?: string;
    Expansion?: string;
    Flags?: string;
    FlowTitle_lang?: string;
    IconFileDataID?: string;
    PopupDescription_lang?: string;
    PopupTitle_lang?: string;
    PopupUITextureKitID?: string;
    Priority?: string;
    ProfessionLevel?: string;
}
interface ChatChannelsDatabase{
    ID?: string;
    Flags?: string;
    FactionGroup?: string;
    Name_lang?: string;
    Shortcut_lang?: string;
    Ruleset?: string;
}
interface ChatProfanityDatabase{
    ID?: string;
    Text?: string;
    Language?: string;
}
interface ChrClassRaceSexDatabase{
    ID?: string;
    ClassID?: string;
    Flags?: string;
    RaceID?: string;
    Sex?: string;
    SoundID?: string;
    VoiceSoundFilterID?: string;
}
interface ChrClassTitleDatabase{
    ID?: string;
    ChrClassID?: string;
    Name_female_lang?: string;
    Name_male_lang?: string;
}
interface ChrClassUIChrModelInfoDatabase{
    ID?: string;
    ChrModel_9_0_1_35522_001Override?: string;
    ChrModelID?: string;
    ChrClassesID?: string;
    ChrCreateFacingOverride?: string;
}
interface ChrClassUIDisplayDatabase{
    ID?: string;
    AdvGuidePlayerConditionID?: string;
    ChrClassesID?: string;
    SplashPlayerConditionID?: string;
}
interface ChrClassVillainDatabase{
    ID?: string;
    ChrClassID?: string;
    Gender?: string;
    Name_lang?: string;
}
interface ChrCreateClassAnimTargetDatabase{
    ID?: string;
    TargetPositionX?: string;
    TargetPositionY?: string;
    TargetPositionZ?: string;
    TimeStamp?: string;
    Field_9_0_1_34972_004?: string;
    Field_9_0_1_34972_005?: string;
    ChrCreateClassAnimTargetInfoID?: string;
}
interface ChrClassesDatabase{
    ID?: string;
    DisplayPower?: string;
    PetNameToken?: string;
    Name_lang?: string;
    Name_female_lang?: string;
    Name_male_lang?: string;
    Filename?: string;
    SpellClassSet?: string;
    Flags?: string;
    CinematicSequenceID?: string;
    AttackPowerPerStrength?: string;
    AttackPowerPerAgility?: string;
    RangedAttackPowerPerAgility?: string;
    DefaultSpec?: string;
    CreateScreenFileDataID?: string;
    SelectScreenFileDataID?: string;
    LowResScreenFileDataID?: string;
    IconFileDataID?: string;
    PrimaryStatPriority?: string;
    StartingLevel?: string;
    Required_expansion?: string;
    PlayerClass?: string;
    DamageBonusStat?: string;
    HasRelicSlot?: string;
    SpellTextureBlobFileDataID?: string;
    RolesMask?: string;
    ArmorTypeMask?: string;
    ChatColorR?: string;
    ChatColorG?: string;
    ChatColorB?: string;
    Description_lang?: string;
    RoleInfoString_lang?: string;
    DisabledString_lang?: string;
    Field_9_0_1_34490_018?: string;
    CharacterCreationVisualFallback?: string;
    CharacterCreationIdleVisualFallback?: string;
    MaleCharacterCreationVisualFallback?: string;
    MaleCharacterCreationIdleVisualFallback?: string;
    FemaleCharacterCreationVisualFallback?: string;
    FemaleCharacterCreationIdleVisualFallback?: string;
    CharacterCreationIdleGroundVisualFallback?: string;
    CharacterCreationGroundVisualFallback?: string;
    AlteredFormCharacterCreationIdleVisualFallback?: string;
    CharacterCreationAnimLoopWaitTimeMsFallback?: string;
    Field_2_0_0_6080_009?: string;
    Hyphenated_name_male_lang?: string;
    Hyphenated_name_female_lang?: string;
    Field_2_5_1_38043_011?: string;
}
interface ChrCreateClassAnimTargetInfoDatabase{
    ID?: string;
    ChrRacesID?: string;
    Sex?: string;
    ChrClassesID?: string;
}
interface ChrClassesXPowerTypesDatabase{
    ClassID?: string;
    PowerType?: string;
    ID?: string;
}
interface ChrCustomizationDatabase{
    ID?: string;
    BaseSection?: string;
    ComponentSection?: string;
    Flags?: string;
    Name_lang?: string;
    RaceID?: string;
    Sex?: string;
    UiCustomizationType?: string;
}
interface ChrCustomizationBoneSetDatabase{
    ID?: string;
    BoneFileDataID?: string;
    ModelFileDataID?: string;
}
interface ChrCustClientChoiceConversionDatabase{
    ID?: string;
    Field_9_0_1_34365_001?: string;
    ChrCustomizationReqID?: string;
    Field_9_0_1_34365_003?: string;
}
interface ChrCustomizationCategoryDatabase{
    CategoryName_lang?: string;
    ID?: string;
    CustomizeIcon?: string;
    CustomizeIconSelected?: string;
    OrderIndex?: string;
    CameraZoomLevel?: string;
    Flags?: string;
    SpellShapeshiftFormID?: string;
    CameraDistanceOffset?: string;
}
interface ChrCustomizationChoiceDatabase{
    Name_lang?: string;
    ID?: string;
    ChrCustomizationOptionID?: string;
    ChrCustomizationReqID?: string;
    OrderIndex?: string;
    UiOrderIndex?: string;
    Flags?: string;
    SwatchColor1?: string;
    SwatchColor2?: string;
    SwatchColor?: string;
}
interface ChrCustomizationDisplayInfoDatabase{
    ID?: string;
    SpellShapeshiftFormID?: string;
    CreatureDisplayInfoID?: string;
    BarberShopMinCameraDistance?: string;
    BarberShopHeightOffset?: string;
}
interface ChrCustItemGeoModifyDatabase{
    ID?: string;
    GeosetType?: string;
    Original?: string;
    Override?: string;
}
interface ChrCustomizationCondModelDatabase{
    ID?: string;
    CreatureModelDataID?: string;
    Field_9_0_1_34081_001?: string;
}
interface ChrCustomizationGeosetDatabase{
    ID?: string;
    GeosetType?: string;
    GeosetID?: string;
    Modifier?: string;
}
interface ChrCustomizationConversionDatabase{
    ID?: string;
    ChrRacesID?: string;
    Sex?: string;
    OptionID?: string;
    Data?: string;
    ChrCustomizationChoiceID?: string;
    DependentOptionID?: string;
    DependentData?: string;
}
interface ChrCustomizationMaterialDatabase{
    ID?: string;
    ChrModelTextureTargetID?: string;
    MaterialResourcesID?: string;
}
interface ChrCustomizationOptionDatabase{
    Name_lang?: string;
    ID?: string;
    SecondaryID?: string;
    ChrModelID?: string;
    ChrCustomizationID?: string;
    ChrCustomizationCategoryID?: string;
    OrderIndex?: string;
    SecondaryOrderIndex?: string;
    Flags?: string;
    OptionType?: string;
    BarberShopCostModifier?: string;
    Requirement?: string;
}
interface ChrCustomizationReqChoiceDatabase{
    ID?: string;
    ChrCustomizationChoiceID?: string;
    ChrCustomizationReqID?: string;
}
interface ChrCustomizationSkinnedModelDatabase{
    ID?: string;
    CollectionsFileDataID?: string;
    GeosetType?: string;
    GeosetID?: string;
    Modifier?: string;
}
interface ChrCustomizationElementDatabase{
    ID?: string;
    ChrCustomizationChoiceID?: string;
    RelatedChrCustomizationChoiceID?: string;
    ChrCustomizationGeosetID?: string;
    ChrCustomizationSkinnedModelID?: string;
    ChrCustomizationMaterialID?: string;
    ChrCustomizationBoneSetID?: string;
    ChrCustomizationCondModelID?: string;
    ChrCustomizationDisplayInfoID?: string;
    ChrCustItemGeoModifyID?: string;
}
interface ChrModelMaterialDatabase{
    ID?: string;
    CharComponentTextureLayoutsID?: string;
    TextureType?: string;
    Width?: string;
    Height?: string;
    SkinType?: string;
    Field_9_0_1_34615_006?: string;
}
interface ChrModelDatabase{
    FaceCustomizationOffset?: string;
    ID?: string;
    Sex?: string;
    DisplayID?: string;
    CharComponentTextureLayoutID?: string;
    Flags?: string;
    SkeletonFileDataID?: string;
    ModelFallbackChrModelID?: string;
    TextureFallbackChrModelID?: string;
    HelmVisFallbackChrModelID?: string;
    CustomizeScale?: string;
    CustomizeOffset?: string;
    CustomizeFacing?: string;
    CameraDistanceOffset?: string;
    BarberShopCameraOffsetScale?: string;
    BarberShopCameraRotationOffset?: string;
    Field_9_1_0_38312_015?: string;
}
interface ChrModelTextureLayerDatabase{
    ID?: string;
    TextureType?: string;
    Layer?: string;
    Flags?: string;
    BlendMode?: string;
    ChrModelTextureTargetID?: string;
    Field_9_0_1_34365_006?: string;
    TextureSectionTypeBitMask?: string;
    CharComponentTextureLayoutsID?: string;
}
interface ChrModelTextureTargetDatabase{
    Field_9_0_1_34081_000?: string;
}
interface ChrCustomizationReqDatabase{
    ID?: string;
    ReqType?: string;
    ClassMask?: string;
    ReqAchievementID?: string;
    OverrideArchive?: string;
    ReqItemModifiedAppearanceID?: string;
}
interface ChrProficiencyDatabase{
    ID?: string;
    Proficiency_minLevel?: string;
    Proficiency_acquireMethod?: string;
    Proficiency_itemClass?: string;
    Proficiency_itemSubClassMask?: string;
}
interface ChrRaceRacialAbilityDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    Icon?: string;
    Order?: string;
    ChrRacesID?: string;
    DescriptionShort_lang?: string;
}
interface ChrRaceXChrModelDatabase{
    ID?: string;
    ChrModelID?: string;
    ChrRacesID?: string;
}
interface ChrRacesDatabase{
    ID?: string;
    Flags?: string;
    FactionID?: string;
    ExplorationSoundID?: string;
    MaleDisplayID?: string;
    FemaleDisplayID?: string;
    ClientPrefix?: string;
    BaseLanguage?: string;
    CreatureType?: string;
    ResSicknessSpellID?: string;
    SplashSoundID?: string;
    ClientFileString?: string;
    CinematicSequenceID?: string;
    Alliance?: string;
    Name_lang?: string;
    Name_female_lang?: string;
    Name_male_lang?: string;
    FacialHairCustomization?: string;
    HairCustomization?: string;
    Race_related?: string;
    UnalteredVisualRaceID?: string;
    UaMaleCreatureSoundDataID?: string;
    UaFemaleCreatureSoundDataID?: string;
    CharComponentTextureLayoutID?: string;
    DefaultClassID?: string;
    CreateScreenFileDataID?: string;
    SelectScreenFileDataID?: string;
    MaleCustomizeOffset?: string;
    FemaleCustomizeOffset?: string;
    NeutralRaceID?: string;
    LowResScreenFileDataID?: string;
    HighResMaleDisplayID?: string;
    HighResFemaleDisplayID?: string;
    CharComponentTexLayoutHiResID?: string;
    AlteredFormFinishVisualKitID?: string;
    AlteredFormStartVisualKitID?: string;
    DisplayRaceID?: string;
    FemaleSkeletonFileDataID?: string;
    HeritageArmorAchievementID?: string;
    MaleSkeletonFileDataID?: string;
    Name_female_lowercase_lang?: string;
    Name_lowercase_lang?: string;
    StartingLevel?: string;
    UiDisplayOrder?: string;
    Required_expansion?: string;
    MountScale?: string;
    LoginEffectSpellID?: string;
    CombatStunSpellID?: string;
    StartingTaxiNodes?: string;
    FemaleModelFallbackArmor2Scale?: string;
    FemaleModelFallbackRaceID?: string;
    FemaleModelFallbackSex?: string;
    FemaleTextureFallbackRaceID?: string;
    FemaleTextureFallbackSex?: string;
    MaleModelFallbackArmor2Scale?: string;
    MaleModelFallbackRaceID?: string;
    MaleModelFallbackSex?: string;
    MaleTextureFallbackRaceID?: string;
    MaleTextureFallbackSex?: string;
    BaseRaceID?: string;
    TransmogrifyDisabledSlotMask?: string;
    Name_RS_lang?: string;
    Name_RS_female_lang?: string;
    Name_RS_lowercase_lang?: string;
    Name_RS_female_lowercase_lang?: string;
    Name_RL_lang?: string;
    Name_RL_female_lang?: string;
    Name_RL_lowercase_lang?: string;
    Name_RL_female_lowercase_lang?: string;
    PlayableRaceBit?: string;
    RaceFantasyDescription_lang?: string;
    UnalteredVisualCustomizationRaceID?: string;
    AlteredFormCustomizeOffsetFallback?: string;
    AlteredFormCustomizeRotationFallback?: string;
    Field_9_0_1_35256_033?: string;
    Field_9_0_1_35256_034?: string;
    HelmetAnimScalingRaceID?: string;
    Field_9_1_0_38312_030?: string;
    Field_9_1_0_38312_031?: string;
    Field_9_1_0_38783_022?: string;
    Field_9_1_0_38783_026?: string;
    Field_9_1_0_38783_033?: string;
    Field_9_1_0_38783_034?: string;
    Field_9_1_0_38783_035?: string;
    Field_9_1_0_38783_036?: string;
    Field_9_1_0_38783_038?: string;
    Field_9_1_0_38783_040?: string;
    Field_9_1_0_38783_047?: string;
    Field_9_1_0_38783_048?: string;
    Field_9_1_0_38783_049?: string;
    Field_9_1_0_38783_050?: string;
}
interface ChrUpgradeBucketDatabase{
    ID?: string;
    ChrSpecializationID?: string;
    ChrUpgradeTierID?: string;
}
interface ChrUpgradeBucketSpellDatabase{
    ID?: string;
    ChrUpgradeBucketID?: string;
    SpellID?: string;
}
interface ChrUpgradeTierDatabase{
    ID?: string;
    DisplayName_lang?: string;
    NumTalents?: string;
    OrderIndex?: string;
}
interface CinematicDatabase{
    ID?: string;
    Type?: string;
    File?: string;
}
interface CinematicSequencesDatabase{
    ID?: string;
    SoundID?: string;
    Camera?: string;
}
interface ClientSceneEffectDatabase{
    ID?: string;
    SceneScriptPackageID?: string;
}
interface ChrSpecializationDatabase{
    ID?: string;
    BackgroundFile?: string;
    ClassID?: string;
    MasterySpellID?: string;
    OrderIndex?: string;
    PetTalentType?: string;
    Role?: string;
    SpellIconID?: string;
    RaidBuffs?: string;
    Flags?: string;
    Name_lang?: string;
    Description_lang?: string;
    MaxBuffs?: string;
    PrimaryStatOrder?: string;
    AnimReplacements?: string;
    FemaleName_lang?: string;
    PrimaryStatPriority?: string;
    SpellIconFileID?: string;
}
interface CloakDampeningDatabase{
    ID?: string;
    Angle?: string;
    Dampening?: string;
    ExpectedWeaponSize?: string;
    TabardAngle?: string;
    TabardDampening?: string;
    TailAngle?: string;
    TailDampening?: string;
}
interface CinematicCameraDatabase{
    ID?: string;
    Model?: string;
    SoundID?: string;
    Origin?: string;
    OriginFacing?: string;
    FileDataID?: string;
}
interface CinematicSubtitleDatabase{
    ID?: string;
    Flags?: string;
    StartTimestamp?: string;
    EndTimestamp?: string;
    Text_lang?: string;
}
interface CloneEffectDatabase{
    ID?: string;
    DurationMs?: string;
    DelayMs?: string;
    FadeInTimeMs?: string;
    FadeOutTimeMs?: string;
    StateSpellVisualKitID?: string;
    StartSpellVisualKitID?: string;
    OffsetMatrixID?: string;
    Flags?: string;
}
interface ColorBandingDatabase{
    ID?: string;
    Field_9_0_1_34490_000?: string;
    Field_9_0_1_34490_001?: string;
    Field_9_0_1_34490_002?: string;
    Field_9_0_1_34490_003?: string;
    Field_9_0_1_34490_004?: string;
}
interface CombatConditionDatabase{
    ID?: string;
    WorldStateExpressionID?: string;
    SelfConditionID?: string;
    TargetConditionID?: string;
    FriendConditionID?: string;
    FriendConditionOp?: string;
    FriendConditionCount?: string;
    FriendConditionLogic?: string;
    EnemyConditionID?: string;
    EnemyConditionOp?: string;
    EnemyConditionCount?: string;
    EnemyConditionLogic?: string;
}
interface CommentatorTrackedCooldownDatabase{
    ID?: string;
    ChrSpecID?: string;
    Flags?: string;
    Priority?: string;
    SpellID?: string;
}
interface ComponentModelFileDataDatabase{
    ID?: string;
    ClassID?: string;
    GenderIndex?: string;
    PositionIndex?: string;
    RaceID?: string;
}
interface CommentatorIndirectSpellDatabase{
    ID?: string;
    TalentSpellID?: string;
    TriggeredAuraSpellID?: string;
    ChrSpecID?: string;
}
interface ComponentTextureFileDataDatabase{
    ID?: string;
    ClassID?: string;
    GenderIndex?: string;
    RaceID?: string;
}
interface CommentatorStartLocationDatabase{
    ID?: string;
    MapID?: string;
    Pos?: string;
}
interface CommunityIconDatabase{
    IconFileID?: string;
    ID?: string;
    OrderIndex?: string;
}
interface ConditionalContentTuningDatabase{
    ID?: string;
    OrderIndex?: string;
    ReplacementTuning?: string;
    ConditionMask?: string;
    NormalTuning?: string;
}
interface ConsoleScriptsDatabase{
    ID?: string;
    Name?: string;
    Script?: string;
}
interface ConfigurationWarningDatabase{
    ID?: string;
    Type?: string;
    Warning_lang?: string;
}
interface ContentTuningDatabase{
    ID?: string;
    Flags?: string;
    MaxLevel?: string;
    MinLevel?: string;
    ExpectedStatModID?: string;
    DifficultyESMID?: string;
    ExpansionLevel?: string;
    LowerBoundSemantics?: string;
    UpperBoundSemantics?: string;
    Field_9_0_1_34490_007?: string;
    TargetLevelDelta?: string;
    TargetLevelMaxDelta?: string;
    TargetLevelMin?: string;
    TargetLevelMax?: string;
    MinItemLevel?: string;
}
interface ContentTuningDescriptionDatabase{
    ID?: string;
    Description?: string;
}
interface ContentTuningXExpectedDatabase{
    ID?: string;
    ContentTuningID?: string;
    ExpectedStatModID?: string;
    MythicPlusSeasonID?: string;
    MythicPlusSeasonID_2?: string;
}
interface ContentTuningXExpectedStatModDatabase{
    ID?: string;
    ContentTuningID?: string;
    ExpectedStatModID?: string;
}
interface ContributionStyleDatabase{
    ID?: string;
    StateName_lang?: string;
    TooltipLine_lang?: string;
    StateColor?: string;
    Flags?: string;
    StatusBarAtlas?: string;
    BorderAtlas?: string;
    BannerAtlas?: string;
}
interface ContributionDatabase{
    ID?: string;
    Description_lang?: string;
    ManagedWorldStateInputID?: string;
    Name_lang?: string;
    OrderIndex?: string;
    UiTextureAtlasMemberID?: string;
    ContributionStyleContainer?: string;
}
interface ContributionStyleContainerDatabase{
    ID?: string;
    ContributionStyleID?: string;
}
interface CreatureDatabase{
    Field_6_0_1_18179_008?: string;
    ID?: string;
    AlwaysItem?: string;
    Classification?: string;
    CreatureFamily?: string;
    CreatureType?: string;
    DisplayID?: string;
    DisplayProbability?: string;
    MountCreatureID?: string;
    Name_lang?: string;
    NameAlt_lang?: string;
    StartAnimState?: string;
    Title_lang?: string;
    TitleAlt_lang?: string;
    Field_5_0_1_15464_001?: string;
    Field_5_0_1_15464_002?: string;
    Field_5_0_1_15464_004?: string;
    Field_5_0_1_15464_005?: string;
    Field_5_0_1_15464_006?: string;
    Field_5_0_1_15464_009?: string;
    Field_5_0_1_15589_002?: string;
    Field_5_0_1_15589_003?: string;
    Field_5_0_1_15589_004?: string;
    Field_5_0_1_15650_002?: string;
    Field_5_0_1_15650_003?: string;
}
interface CovenantDatabase{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    BountySetID?: string;
    SkillLineID?: string;
    DeathTeleportSpellID?: string;
    Field_9_0_2_36165_006?: string;
    Field_9_0_2_36165_007?: string;
    Field_9_1_0_38783_007?: string;
}
interface CorruptionEffectsDatabase{
    ID?: string;
    MinimumCorruption?: string;
    Aura?: string;
    PlayerConditionID?: string;
    Flags?: string;
}
interface ConversationLineDatabase{
    ID?: string;
    AdditionalDuration?: string;
    AnimKitID?: string;
    BroadcastTextID?: string;
    EndAnimation?: string;
    NextConversationLineID?: string;
    SpeechType?: string;
    SpellVisualKitID?: string;
    StartAnimation?: string;
}
interface CreatureDispXUiCameraDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    UiCameraID?: string;
}
interface CreatureDifficultyDatabase{
    ID?: string;
    CreatureID?: string;
    ExpansionID?: string;
    FactionID?: string;
    Flags?: string;
    MaxLevel?: string;
    MinLevel?: string;
    ContentTuningID?: string;
    Field_9_0_1_35522_003Min?: string;
    Field_9_0_1_35522_003Max?: string;
    DifficultyID?: string;
}
interface CreatureDisplayInfoDatabase{
    ID?: string;
    ModelID?: string;
    SoundID?: string;
    ExtendedDisplayInfoID?: string;
    CreatureModelScale?: string;
    CreatureModelAlpha?: string;
    TextureVariation?: string;
    PortraitTextureName?: string;
    PortraitCreatureDisplayInfoID?: string;
    SizeClass?: string;
    BloodID?: string;
    NPCSoundID?: string;
    ParticleColorID?: string;
    CreatureGeosetData?: string;
    ObjectEffectPackageID?: string;
    AnimReplacementSetID?: string;
    Flags?: string;
    Gender?: string;
    StateSpellVisualKitID?: string;
    DissolveEffectID?: string;
    MountPoofSpellVisualKitID?: string;
    PetInstanceScale?: string;
    PlayerOverrideScale?: string;
    PortraitTextureFileDataID?: string;
    TextureVariationFileDataID?: string;
    UnarmedWeaponType?: string;
    CreatureModelMinLod?: string;
    DissolveOutEffectID?: string;
    Field_7_3_2_25549_010?: string;
    Field_2_1_0_6692_010?: string;
    Field_2_1_0_6692_011?: string;
    Field_2_1_0_6692_012?: string;
    Field_2_1_0_6692_013?: string;
    Field_2_1_0_6692_014?: string;
    Field_2_1_0_6692_015?: string;
    Field_2_1_0_6692_016?: string;
    Field_2_1_0_6692_017?: string;
    Field_2_1_0_6692_018?: string;
}
interface CreatureDisplayInfoCondDatabase{
    ID?: string;
    ClassMask?: string;
    CreatureDisplayInfoID?: string;
    CreatureModelDataID?: string;
    CustomOption0_Mask?: string;
    CustomOption1_Mask?: string;
    CustomOption2_Mask?: string;
    FaceStyleMask?: string;
    FacialHairStyleMask?: string;
    Gender?: string;
    HairColorMask?: string;
    HairStyleMask?: string;
    OrderIndex?: string;
    RaceMask?: string;
    SkinColorMask?: string;
    TextureVariationFileDataID?: string;
}
interface CreatureDisplayInfoCondXChoiceDatabase{
    ID?: string;
    CreatureDisplayInfoCondID?: string;
    ChrCustomizationChoiceID?: string;
}
interface CreatureDisplayInfoTrnDatabase{
    ID?: string;
    DissolveEffectID?: string;
    DstCreatureDisplayInfoID?: string;
    FinishVisualKitID?: string;
    MaxTime?: string;
    SrcCreatureDisplayInfoID?: string;
    StartVisualKitID?: string;
}
interface CreatureDisplayInfoEvtDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    Flags?: string;
    Fourcc?: string;
    SpellVisualKitID?: string;
}
interface CreatureDisplayInfoExtraDatabase{
    ID?: string;
    DisplayRaceID?: string;
    DisplaySexID?: string;
    SkinID?: string;
    FaceID?: string;
    HairStyleID?: string;
    HairColorID?: string;
    FacialHairID?: string;
    NPCItemDisplay?: string;
    Flags?: string;
    FileDataID?: string;
    HdFileDataID?: string;
    HDBakeMaterialResourcesID?: string;
    BakeMaterialResourcesID?: string;
    CustomDisplayOption?: string;
    DisplayClassID?: string;
    BakeName?: string;
}
interface CreatureDisplayInfoGeosetDataDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    GeosetIndex?: string;
    GeosetValue?: string;
}
interface CreatureDisplayInfoOptionDatabase{
    ID?: string;
    ChrCustomizationOptionID?: string;
    ChrCustomizationChoiceID?: string;
    CreatureDisplayInfoExtraID?: string;
}
interface CreatureImmunitiesDatabase{
    ID?: string;
    School?: string;
    DispelType?: string;
    MechanicsAllowed?: string;
    Mechanic?: string;
    EffectsAllowed?: string;
    Effect?: string;
    StatesAllowed?: string;
    State?: string;
    Flags?: string;
}
interface CreatureModelDataDatabase{
    ID?: string;
    Flags?: string;
    FileDataID?: string;
    SizeClass?: string;
    ModelScale?: string;
    BloodID?: string;
    FootprintTextureID?: string;
    FootprintTextureLength?: string;
    FootprintTextureWidth?: string;
    FootprintParticleScale?: string;
    FoleyMaterialID?: string;
    FootstepShakeSize?: string;
    DeathThudShakeSize?: string;
    SoundID?: string;
    CollisionWidth?: string;
    CollisionHeight?: string;
    MountHeight?: string;
    GeoBoxMin?: string;
    GeoBoxMax?: string;
    WorldEffectScale?: string;
    AttachedEffectScale?: string;
    MissileCollisionRadius?: string;
    MissileCollisionPush?: string;
    MissileCollisionRaise?: string;
    OverrideLootEffectScale?: string;
    OverrideNameScale?: string;
    OverrideSelectionRadius?: string;
    TamedPetBaseScale?: string;
    CreatureGeosetDataID?: string;
    HoverHeight?: string;
    DeathThudCameraEffectID?: string;
    FootstepCameraEffectID?: string;
    GeoBox?: string;
    ModelName?: string;
    GeoBoxMinX?: string;
    GeoBoxMinY?: string;
    GeoBoxMinZ?: string;
    GeoBoxMaxX?: string;
    GeoBoxMaxY?: string;
    GeoBoxMaxZ?: string;
    AnimModelName?: string;
    MountScaleOtherIndex?: string;
    MountScaleSelf?: string;
    MountScaleOther?: string;
}
interface CreatureMovementInfoDatabase{
    ID?: string;
    SmoothFacingChaseRate?: string;
}
interface CreatureSoundDataDatabase{
    ID?: string;
    SoundExertionID?: string;
    SoundExertionCriticalID?: string;
    SoundInjuryID?: string;
    SoundInjuryCriticalID?: string;
    SoundInjuryCrushingBlowID?: string;
    SoundDeathID?: string;
    SoundStunID?: string;
    SoundStandID?: string;
    SoundFootstepID?: string;
    SoundAggroID?: string;
    SoundWingFlapID?: string;
    SoundWingGlideID?: string;
    SoundAlertID?: string;
    SoundFidget?: string;
    CustomAttack?: string;
    NPCSoundID?: string;
    LoopSoundID?: string;
    CreatureImpactType?: string;
    SoundJumpStartID?: string;
    SoundJumpEndID?: string;
    SoundPetAttackID?: string;
    SoundPetOrderID?: string;
    SoundPetDismissID?: string;
    FidgetDelaySecondsMin?: string;
    FidgetDelaySecondsMax?: string;
    BirthSoundID?: string;
    SpellCastDirectedSoundID?: string;
    SubmergeSoundID?: string;
    SubmergedSoundID?: string;
    CreatureSoundDataIDPet?: string;
    TransformSoundID?: string;
    TransformAnimatedSoundID?: string;
    BattleShoutCriticalSoundID?: string;
    BattleShoutSoundID?: string;
    ChargeCriticalSoundID?: string;
    ChargeSoundID?: string;
    TauntSoundID?: string;
    WindupCriticalSoundID?: string;
    WindupSoundID?: string;
}
interface CreatureSpellDataDatabase{
    ID?: string;
    Spells?: string;
    Availability?: string;
}
interface CreatureFamilyDatabase{
    ID?: string;
    MinScale?: string;
    MinScaleLevel?: string;
    MaxScale?: string;
    MaxScaleLevel?: string;
    SkillLine?: string;
    PetFoodMask?: string;
    PetTalentType?: string;
    CategoryEnumID?: string;
    Name_lang?: string;
    IconFile?: string;
    IconFileID?: string;
}
interface CreatureTypeDatabase{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
}
interface CreatureXContributionDatabase{
    ID?: string;
    ContributionID?: string;
    CreatureID?: string;
}
interface CreatureXDisplayInfoDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    CreatureID?: string;
    Probability?: string;
    Scale?: string;
    OrderIndex?: string;
}
interface CreatureXUiWidgetSetDatabase{
    ID?: string;
    CreatureID?: string;
    UiWidgetSetID?: string;
    Field_9_0_1_34821_002?: string;
}
interface CriteriaDatabase{
    ID?: string;
    Type?: string;
    Asset?: string;
    Start_event?: string;
    Start_asset?: string;
    Start_timer?: string;
    Fail_event?: string;
    Fail_asset?: string;
    Modifier_tree_ID?: string;
    Flags?: string;
    Eligibility_world_state_ID?: string;
    Eligibility_world_state_value?: string;
}
interface CriteriaTreeDatabase{
    ID?: string;
    CriteriaID?: string;
    Amount?: string;
    Operator?: string;
    Parent?: string;
    Flags?: string;
    Description_lang?: string;
    OrderIndex?: string;
    Padding_6_0_1_18179_008?: string;
}
interface CriteriaTreeXEffectDatabase{
    ID?: string;
    CriteriaTreeID?: string;
    WorldEffectID?: string;
}
interface CurrencyCategoryDatabase{
    ID?: string;
    Flags?: string;
    Name_lang?: string;
    ExpansionID?: string;
}
interface CurrencyContainerDatabase{
    ID?: string;
    ContainerDescription_lang?: string;
    ContainerIconID?: string;
    ContainerName_lang?: string;
    ContainerQuality?: string;
    CurrencyTypeID?: string;
    MaxAmount?: string;
    MinAmount?: string;
    OnLootSpellVisualKitID?: string;
}
interface CurrencyTypesDatabase{
    ID?: string;
    CategoryID?: string;
    Name_lang?: string;
    InventoryIcon?: string;
    SpellWeight?: string;
    SpellCategory?: string;
    MaxQty?: string;
    MaxEarnablePerWeek?: string;
    Flags?: string;
    Quality?: string;
    Description_lang?: string;
    InventoryIconFileID?: string;
    ItemID?: string;
    BitIndex?: string;
    FactionID?: string;
    ItemGroupSoundsID?: string;
    AwardConditionID?: string;
    MaxQtyWorldStateID?: string;
    XpQuestDifficulty?: string;
}
interface CurvePointDatabase{
    Pos?: string;
    ID?: string;
    CurveID?: string;
    OrderIndex?: string;
    PosPreSquish?: string;
}
interface CurveDatabase{
    ID?: string;
    Flags?: string;
    Type?: string;
}
interface DanceMovesDatabase{
    ID?: string;
    Type?: string;
    Param?: string;
    Fallback?: string;
    Racemask?: string;
    Internal_name?: string;
    Name_lang?: string;
    LockID?: string;
}
interface DeathThudLookupsDatabase{
    ID?: string;
    SizeClass?: string;
    TerrainTypeSoundID?: string;
    SoundEntryID?: string;
    SoundEntryIDWater?: string;
}
interface DecalPropertiesDatabase{
    ID?: string;
    BlendMode?: string;
    BotTextureBlendSetID?: string;
    CasterDecalPropertiesID?: string;
    FadeIn?: string;
    FadeOut?: string;
    FileDataID?: string;
    Flags?: string;
    Gain?: string;
    GameFlags?: string;
    InnerRadius?: string;
    ModX?: string;
    OuterRadius?: string;
    Priority?: string;
    Rim?: string;
    Scale?: string;
    TopTextureBlendSetID?: string;
    ArbitraryBoxHeight?: string;
    Field_9_0_1_33978_018?: string;
    Field_9_0_1_33978_019?: string;
    Field_9_0_1_33978_020?: string;
    Field_9_0_1_33978_021?: string;
}
interface DeclinedWordDatabase{
    ID?: string;
    Word?: string;
}
interface DeclinedWordCasesDatabase{
    ID?: string;
    DeclinedWordID?: string;
    CaseIndex?: string;
    DeclinedWord?: string;
}
interface DestructibleModelDataDatabase{
    ID?: string;
    State0WMO?: string;
    State0ImpactEffectDoodadSet?: string;
    State0AmbientDoodadSet?: string;
    State0NameSet?: string;
    State1WMO?: string;
    State1DestructionDoodadSet?: string;
    State1ImpactEffectDoodadSet?: string;
    State1AmbientDoodadSet?: string;
    State1NameSet?: string;
    State2WMO?: string;
    State2DestructionDoodadSet?: string;
    State2ImpactEffectDoodadSet?: string;
    State2AmbientDoodadSet?: string;
    State2NameSet?: string;
    State3WMO?: string;
    State3InitDoodadSet?: string;
    State3AmbientDoodadSet?: string;
    State3NameSet?: string;
    EjectDirection?: string;
    RepairGroundFx?: string;
    DoNotHighlight?: string;
    HealEffect?: string;
    HealEffectSpeed?: string;
}
interface DeviceBlacklistDatabase{
    ID?: string;
    DeviceID?: string;
    VendorID?: string;
}
interface DeviceDefaultSettingsDatabase{
    ID?: string;
    DefaultSetting?: string;
    DeviceID?: string;
    VendorID?: string;
}
interface DissolveEffectDatabase{
    ID?: string;
    AttachID?: string;
    CurveID?: string;
    Duration?: string;
    EndValue?: string;
    FadeInTime?: string;
    FadeOutTime?: string;
    Flags?: string;
    FresnelIntensity?: string;
    Priority?: string;
    ProjectionType?: string;
    Ramp?: string;
    Scale?: string;
    StartValue?: string;
    TextureBlendSetID?: string;
}
interface DifficultyDatabase{
    ID?: string;
    FallbackDifficultyID?: string;
    InstanceType?: string;
    MinPlayers?: string;
    MaxPlayers?: string;
    OldEnumValue?: string;
    Flags?: string;
    ToggleDifficultyID?: string;
    GroupSizeHealthCurveID?: string;
    GroupSizeDmgCurveID?: string;
    GroupSizeSpellPointsCurveID?: string;
    Name_lang?: string;
    ItemContext?: string;
    OrderIndex?: string;
    Field_8_1_0_28151_011?: string;
    Field_8_1_0_28151_012?: string;
    Field_8_1_0_28151_013?: string;
}
interface DriverBlacklistDatabase{
    ID?: string;
    DeviceID?: string;
    DriverVersionHi?: string;
    DriverVersionLow?: string;
    Flags?: string;
    OsBits?: string;
    OsVersion?: string;
    VendorID?: string;
}
interface DungeonEncounterDatabase{
    ID?: string;
    MapID?: string;
    DifficultyID?: string;
    OrderIndex?: string;
    Bit?: string;
    Name_lang?: string;
    CreatureDisplayID?: string;
    SpellIconID?: string;
    Flags?: string;
    SpellIconFileID?: string;
    Difficulty?: string;
    Faction?: string;
    IsEncounterComplete?: string;
}
interface DungeonMapChunkDatabase{
    ID?: string;
    MapID?: string;
    WMOGroupID?: string;
    DungeonMapID?: string;
    MinZ?: string;
    DoodadPlacementID?: string;
    Field_1_13_0_28211_000?: string;
    Field_1_13_0_28211_001?: string;
    Field_1_13_0_28211_002?: string;
    Field_1_13_0_28211_003?: string;
    Field_1_13_0_28211_004?: string;
}
interface DungeonMapDatabase{
    ID?: string;
    MapID?: string;
    FloorIndex?: string;
    Min?: string;
    Max?: string;
    ParentWorldMapID?: string;
    Flags?: string;
    RelativeHeightIndex?: string;
    MinX?: string;
    MaxX?: string;
    MinY?: string;
    MaxY?: string;
}
interface DurabilityCostsDatabase{
    ID?: string;
    WeaponSubClassCost?: string;
    ArmorSubClassCost?: string;
}
interface EmoteAnimsDatabase{
    ID?: string;
    ProcessedAnimIndex?: string;
    AnimName?: string;
}
interface DurabilityQualityDatabase{
    ID?: string;
    Data?: string;
}
interface EdgeGlowEffectDatabase{
    ID?: string;
    CurveID?: string;
    Duration?: string;
    FadeIn?: string;
    FadeOut?: string;
    Flags?: string;
    FresnelCoefficient?: string;
    GlowAlpha?: string;
    GlowBlue?: string;
    GlowGreen?: string;
    GlowMultiplier?: string;
    GlowRed?: string;
    InitialDelay?: string;
    Priority?: string;
}
interface EmotesDatabase{
    ID?: string;
    EmoteSlashCommand?: string;
    AnimID?: string;
    EmoteFlags?: string;
    EmoteSpecProc?: string;
    EmoteSpecProcParam?: string;
    EventSoundID?: string;
    SpellVisualKitID?: string;
    ClassMask?: string;
    RaceMask?: string;
    EmoteAnimID?: string;
}
interface EmotesTextDatabase{
    ID?: string;
    Name?: string;
    EmoteID?: string;
    EmoteText?: string;
}
interface EmotesTextDataDatabase{
    ID?: string;
    Text_lang?: string;
    EmotesTextID?: string;
    RelationshipFlags?: string;
}
interface EmotesTextSoundDatabase{
    ID?: string;
    EmotesTextID?: string;
    RaceID?: string;
    SexID?: string;
    SoundID?: string;
    ClassID?: string;
}
interface EnumeratedStringDatabase{
    ID?: string;
    Value?: string;
    Index?: string;
    Flags?: string;
    EnumID?: string;
}
interface ExhaustionDatabase{
    ID?: string;
    Xp?: string;
    Factor?: string;
    OutdoorHours?: string;
    InnHours?: string;
    Name_lang?: string;
    Threshold?: string;
    CombatLogText?: string;
}
interface ExpectedStatDatabase{
    ID?: string;
    ArmorConstant?: string;
    CreatureArmor?: string;
    CreatureAutoAttackDps?: string;
    CreatureHealth?: string;
    ExpansionID?: string;
    Lvl?: string;
    PlayerHealth?: string;
    PlayerMana?: string;
    PlayerPrimaryStat?: string;
    PlayerSecondaryStat?: string;
    CreatureSpellDamage?: string;
}
interface EnvironmentalDamageDatabase{
    ID?: string;
    EnumID?: string;
    VisualkitID?: string;
}
interface ExpectedStatModDatabase{
    ID?: string;
    ArmorConstantMod?: string;
    CreatureArmorMod?: string;
    CreatureAutoAttackDPSMod?: string;
    CreatureHealthMod?: string;
    CreatureSpellDamageMod?: string;
    PlayerHealthMod?: string;
    PlayerManaMod?: string;
    PlayerPrimaryStatMod?: string;
    PlayerSecondaryStatMod?: string;
}
interface ExtraAbilityInfoDatabase{
    TutorialText_lang?: string;
    ID?: string;
    SpellID?: string;
    ActionBarOverrideSpellID?: string;
    SpellLabel?: string;
    UiTextureKitID?: string;
    UiPriority?: string;
}
interface FactionGroupDatabase{
    ID?: string;
    MaskID?: string;
    InternalName?: string;
    Name_lang?: string;
    ConquestCurrencyTextureFileID?: string;
    HonorCurrencyTextureFileID?: string;
}
interface FactionDatabase{
    ID?: string;
    ReputationIndex?: string;
    ReputationRaceMask?: string;
    ReputationClassMask?: string;
    ReputationBase?: string;
    ReputationFlags?: string;
    ParentFactionID?: string;
    ParentFactionMod?: string;
    ParentFactionCap?: string;
    Name_lang?: string;
    Description_lang?: string;
    Expansion?: string;
    Flags?: string;
    FriendshipRepID?: string;
    ParagonFactionID?: string;
    ReputationMax?: string;
}
interface FactionTemplateDatabase{
    ID?: string;
    Faction?: string;
    Flags?: string;
    FactionGroup?: string;
    FriendGroup?: string;
    EnemyGroup?: string;
    Enemies?: string;
    Friend?: string;
}
interface FileDataDatabase{
    ID?: string;
    Filename?: string;
    Filepath?: string;
}
interface FileDataCompleteDatabase{
    ID?: string;
    Filename?: string;
    Filepath?: string;
}
interface FilePathsDatabase{
    ID?: string;
    FileDataID?: string;
    FileName?: string;
    FilePath?: string;
}
interface FootprintTexturesDatabase{
    ID?: string;
    FootstepFilename?: string;
    FileDataID?: string;
    Flags?: string;
    TextureBlendsetID?: string;
}
interface FriendshipRepReactionDatabase{
    ID?: string;
    FriendshipRepID?: string;
    ReactionThreshold?: string;
    Reaction_lang?: string;
}
interface FootstepTerrainLookupDatabase{
    ID?: string;
    CreatureFootstepID?: string;
    TerrainSoundID?: string;
    SoundID?: string;
    SoundIDSplash?: string;
}
interface FriendshipReputationDatabase{
    ID?: string;
    FactionID?: string;
    TextureFileID?: string;
    Description_lang?: string;
    StandingModified_lang?: string;
    StandingChangedText_lang?: string;
    Flags?: string;
}
interface FullScreenEffectDatabase{
    ID?: string;
    BlurIntensity?: string;
    BlurMultiplier?: string;
    BlurOffsetY?: string;
    BlurPower?: string;
    ColorAdditionBlue?: string;
    ColorAdditionGreen?: string;
    ColorAdditionMultiplier?: string;
    ColorAdditionOffsetY?: string;
    ColorAdditionPower?: string;
    ColorAdditionRed?: string;
    ColorMultiplyBlue?: string;
    ColorMultiplyGreen?: string;
    ColorMultiplyMultiplier?: string;
    ColorMultiplyOffsetY?: string;
    ColorMultiplyPower?: string;
    ColorMultiplyRed?: string;
    EffectFadeInMs?: string;
    EffectFadeOutMs?: string;
    Flags?: string;
    GammaBlue?: string;
    GammaGreen?: string;
    GammaRed?: string;
    MaskOffsetY?: string;
    MaskPower?: string;
    MaskSizeMultiplier?: string;
    Saturation?: string;
    TextureBlendSetID?: string;
    OverlayTextureFileDataID?: string;
}
interface GMSurveyCurrentSurveyDatabase{
    LANGID?: string;
    GMSURVEY_ID?: string;
    ID?: string;
}
interface GMSurveyAnswersDatabase{
    ID?: string;
    Sort_Index?: string;
    GMSurveyQuestionID?: string;
    Answer_lang?: string;
}
interface GMSurveyQuestionsDatabase{
    ID?: string;
    Question_lang?: string;
    Question?: string;
}
interface GMSurveySurveysDatabase{
    ID?: string;
    Q?: string;
}
interface GMTicketCategoryDatabase{
    ID?: string;
    Category_lang?: string;
}
interface GameClockDebugDatabase{
    ID?: string;
    Offset?: string;
}
interface GameObjectAnimGroupMemberDatabase{
    ID?: string;
    GameObjectAnimGroupID?: string;
    GameObjectID?: string;
    Flags?: string;
    AnimationID?: string;
}
interface GameObjectArtKitDatabase{
    ID?: string;
    TextureVariation?: string;
    AttachModel?: string;
    AttachModelFileID?: string;
    TextureVariationFileID?: string;
}
interface GameObjectDiffAnimMapDatabase{
    ID?: string;
    GameObjectDiffAnimID?: string;
    DifficultyID?: string;
    Animation?: string;
    AttachmentDisplayID?: string;
}
interface GameObjectDisplayInfoDatabase{
    ID?: string;
    FileDataID?: string;
    Sound?: string;
    GeoBoxMin?: string;
    GeoBoxMax?: string;
    ObjectEffectPackageID?: string;
    OverrideLootEffectScale?: string;
    OverrideNameScale?: string;
    GeoBox?: string;
    ModelName?: string;
}
interface GameObjectDisplayInfoXSoundKitDatabase{
    ID?: string;
    EventIndex?: string;
    GameObjectDisplayInfoID?: string;
    SoundKitID?: string;
}
interface GameObjectsClientDatabase{
    ID?: string;
    OwnerID?: string;
    DisplayID?: string;
    Pos?: string;
    Rot?: string;
    Scale?: string;
    TypeID?: string;
    PropValue?: string;
    Name?: string;
}
interface GameObjectsDatabase{
    ID?: string;
    DisplayID?: string;
    Name_lang?: string;
    OwnerID?: string;
    PhaseGroupID?: string;
    PhaseID?: string;
    PhaseUseFlags?: string;
    Pos?: string;
    PropValue?: string;
    Rot?: string;
    Scale?: string;
    TypeID?: string;
}
interface GameParameterDatabase{
    ID?: string;
    Type?: string;
    Field_9_0_1_33978_001?: string;
    Field_9_0_1_33978_002?: string;
    IndexIntoXXX?: string;
    Field_9_0_1_33978_004?: string;
}
interface GameTablesDatabase{
    Name?: string;
    NumRows?: string;
    NumColumns?: string;
    ID?: string;
}
interface GameTipsDatabase{
    ID?: string;
    Text_lang?: string;
    Min_level?: string;
    Max_level?: string;
    SortIndex?: string;
    ContentTuningID?: string;
}
interface GarrAbilityDatabase{
    ID?: string;
    Description_lang?: string;
    FactionChangeGarrAbilityID?: string;
    Flags?: string;
    GarrAbilityCategoryID?: string;
    GarrFollowerTypeID?: string;
    IconFileDataID?: string;
    Name_lang?: string;
}
interface GarrAbilityCategoryDatabase{
    ID?: string;
    Name_lang?: string;
}
interface GarrAutoCombatantDatabase{
    ID?: string;
    HealthBase?: string;
    HealthGainPerLevel?: string;
    AttackBase?: string;
    AttackGainPerLevel?: string;
    AttackSpellID?: string;
    AbilitySpellID?: string;
    AbilitySpellID2?: string;
    PassiveSpellID?: string;
    Role?: string;
}
interface GarrAutoSpellDatabase{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    Cooldown?: string;
    Duration?: string;
    Flags?: string;
    SchoolMask?: string;
    IconFileDataID?: string;
}
interface GarrAbilityEffectDatabase{
    Field_6_0_1_18179_005?: string;
    ID?: string;
    AbilityAction?: string;
    AbilityTargetType?: string;
    ActionHours?: string;
    ActionRace?: string;
    ActionRecordID?: string;
    ActionValueFlat?: string;
    CombatWeightBase?: string;
    CombatWeightMax?: string;
    Flags?: string;
    GarrAbilityID?: string;
    GarrMechanicTypeID?: string;
}
interface GarrAutoSpellEffectDatabase{
    ID?: string;
    SpellID?: string;
    EffectIndex?: string;
    Effect?: string;
    Points?: string;
    TargetType?: string;
    Flags?: string;
    Period?: string;
}
interface GarrBuildingDatabase{
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_010?: string;
    Field_6_0_1_18179_012?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_016?: string;
    Field_6_0_1_18179_017?: string;
    Field_6_0_1_18179_018?: string;
    Field_6_0_1_18179_019?: string;
    ID?: string;
    AllianceGameObjectID?: string;
    AllianceName_lang?: string;
    AllianceSceneScriptPackageID?: string;
    AllianceUiTextureKitID?: string;
    BonusGarrAbilityID?: string;
    BuildSeconds?: string;
    BuildingType?: string;
    CurrencyQty?: string;
    CurrencyTypeID?: string;
    Description_lang?: string;
    Flags?: string;
    GarrAbilityID?: string;
    GarrSiteID?: string;
    GarrTypeID?: string;
    GoldCost?: string;
    HordeGameObjectID?: string;
    HordeName_lang?: string;
    HordeSceneScriptPackageID?: string;
    HordeUiTextureKitID?: string;
    IconFileDataID?: string;
    MaxAssignments?: string;
    ShipmentCapacity?: string;
    Tooltip_lang?: string;
    UpgradeLevel?: string;
}
interface GarrBuildingDoodadSetDatabase{
    ID?: string;
    AllianceDoodadSet?: string;
    GarrBuildingID?: string;
    HordeDoodadSet?: string;
    SpecializationID?: string;
    Type?: string;
}
interface GarrBuildingPlotInstDatabase{
    ID?: string;
    GarrBuildingID?: string;
    GarrSiteLevelPlotInstID?: string;
    MapOffset?: string;
    UiTextureAtlasMemberID?: string;
}
interface GarrClassSpecPlayerCondDatabase{
    ID?: string;
    FlavorGarrStringID?: string;
    GarrClassSpecID?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    OrderIndex?: string;
    PlayerConditionID?: string;
}
interface GarrClassSpecDatabase{
    ID?: string;
    ClassSpec_lang?: string;
    ClassSpec_Female_lang?: string;
    ClassSpec_Male_lang?: string;
    Flags?: string;
    FollowerClassLimit?: string;
    GarrFollItemSetID?: string;
    UiTextureAtlasMemberID?: string;
}
interface GarrEncounterDatabase{
    ID?: string;
    CreatureID?: string;
    Name_lang?: string;
    PortraitFileDataID?: string;
    UiAnimHeight?: string;
    UiAnimScale?: string;
    UiTextureKitID?: string;
    Flags?: string;
    AutoCombatantID?: string;
}
interface GarrEncounterSetXEncounterDatabase{
    ID?: string;
    GarrEncounterID?: string;
    GarrEncounterSetID?: string;
}
interface GarrEncounterXMechanicDatabase{
    ID?: string;
    GarrEncounterID?: string;
    GarrMechanicID?: string;
    GarrMechanicSetID?: string;
}
interface GarrFamilyNameDatabase{
    FamilyName?: string;
    ID?: string;
}
interface GarrFollItemSetDatabase{
    ID?: string;
}
interface GarrFollItemSetMemberDatabase{
    ID?: string;
    GarrFollItemSetID?: string;
    ItemID?: string;
    ItemSlot?: string;
    MinItemLevel?: string;
}
interface GarrFollSupportSpellDatabase{
    ID?: string;
    AllianceSpellID?: string;
    GarrFollowerID?: string;
    HordeSpellID?: string;
    OrderIndex?: string;
}
interface GarrFollowerLevelXPDatabase{
    ID?: string;
    FollowerLevel?: string;
    GarrFollowerTypeID?: string;
    ShipmentXP?: string;
    XpToNextLevel?: string;
}
interface GarrFollowerDatabase{
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    Field_6_0_1_18179_006?: string;
    Field_6_0_1_18179_007?: string;
    Field_6_0_1_18179_008?: string;
    Field_6_0_1_18179_009?: string;
    Field_6_0_1_18179_010?: string;
    Field_6_0_1_18179_011?: string;
    Field_6_0_1_18179_012?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_015?: string;
    ID?: string;
    AllianceCreatureID?: string;
    AllianceFlavorGarrStringID?: string;
    AllianceGarrClassSpecID?: string;
    AllianceGarrFollItemSetID?: string;
    AllianceGarrFollRaceID?: string;
    AllianceIconFileDataID?: string;
    AllianceSourceText_lang?: string;
    AllianceSourceTypeEnum?: string;
    AllianceUITextureKitID?: string;
    AllySlottingBroadcastTextID?: string;
    ChrClassID?: string;
    Flags?: string;
    FollowerLevel?: string;
    GarrFollowerTypeID?: string;
    GarrTypeID?: string;
    Gender?: string;
    HordeCreatureID?: string;
    HordeFlavorGarrStringID?: string;
    HordeGarrClassSpecID?: string;
    HordeGarrFollItemSetID?: string;
    HordeGarrFollRaceID?: string;
    HordeIconFileDataID?: string;
    HordeSlottingBroadcastTextID?: string;
    HordeSourceText_lang?: string;
    HordeSourceTypeEnum?: string;
    HordeUITextureKitID?: string;
    ItemLevelArmor?: string;
    ItemLevelWeapon?: string;
    Quality?: string;
    TitleName_lang?: string;
    Vitality?: string;
    AutoCombatantID?: string;
    CovenantID?: string;
}
interface GarrFollowerQualityDatabase{
    ID?: string;
    AbilityCount?: string;
    ClassSpecID?: string;
    GarrFollowerTypeID?: string;
    Quality?: string;
    ShipmentXP?: string;
    TraitCount?: string;
    XpToNextQuality?: string;
}
interface GarrFollowerSetXFollowerDatabase{
    ID?: string;
    GarrFollowerID?: string;
    GarrFollowerSetID?: string;
    Field_7_3_2_25549_000?: string;
    Field_7_3_2_25549_001?: string;
}
interface GarrFollowerTypeDatabase{
    ID?: string;
    Flags?: string;
    GarrTypeID?: string;
    ItemLevelRangeBias?: string;
    LevelRangeBias?: string;
    MaxFollowerBuildingType?: string;
    MaxFollowers?: string;
    MaxItemLevel?: string;
}
interface GarrFollowerUICreatureDatabase{
    ID?: string;
    CreatureID?: string;
    FactionIndex?: string;
    Flags?: string;
    GarrFollowerID?: string;
    OrderIndex?: string;
    Scale?: string;
}
interface GarrFollowerXAbilityDatabase{
    ID?: string;
    FactionIndex?: string;
    GarrAbilityID?: string;
    GarrFollowerID?: string;
    OrderIndex?: string;
}
interface GarrGivenNameDatabase{
    ID?: string;
    Name?: string;
    Field_6_0_1_18179_002?: string;
}
interface GarrItemLevelUpgradeDataDatabase{
    ID?: string;
    FollowerTypeID?: string;
    MaxItemLevel?: string;
    MinItemLevel?: string;
    Operation?: string;
}
interface GarrMechanicSetXMechanicDatabase{
    ID?: string;
    GarrMechanicID?: string;
    GarrMechanicSetID?: string;
}
interface GarrMechanicDatabase{
    ID?: string;
    Factor?: string;
    GarrAbilityID?: string;
    GarrMechanicTypeID?: string;
}
interface GarrMechanicTypeDatabase{
    ID?: string;
    Category?: string;
    Description_lang?: string;
    IconFileDataID?: string;
    Name_lang?: string;
}
interface GarrMissionSetDatabase{
    ID?: string;
    GarrTypeID?: string;
    Field_9_0_2_36294_001?: string;
    CooldownSeconds?: string;
    Condition_9_0_2_36294_003?: string;
    Field_9_0_2_36294_004?: string;
    Field_9_0_2_36294_005?: string;
}
interface GarrMissionDatabase{
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    Field_6_0_1_18179_006?: string;
    Field_6_0_1_18179_008?: string;
    Field_6_0_1_18179_009?: string;
    Field_6_0_1_18179_011?: string;
    Field_6_0_1_18179_012?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_015?: string;
    ID?: string;
    AreaID?: string;
    BaseCompletionChance?: string;
    BaseFollowerXP?: string;
    Description_lang?: string;
    EnvGarrMechanicID?: string;
    EnvGarrMechanicTypeID?: string;
    Flags?: string;
    FollowerDeathChance?: string;
    GarrFollowerTypeID?: string;
    GarrMissionSetID?: string;
    GarrMissionTypeID?: string;
    GarrTypeID?: string;
    Location_lang?: string;
    MapPos?: string;
    MaxFollowers?: string;
    MissionCost?: string;
    MissionCostCurrencyTypesID?: string;
    MissionDuration?: string;
    Name_lang?: string;
    OfferDuration?: string;
    OfferedGarrMissionTextureID?: string;
    OvermaxRewardPackID?: string;
    PlayerConditionID?: string;
    TargetItemLevel?: string;
    TargetLevel?: string;
    TravelDuration?: string;
    UiTextureKitID?: string;
    WorldPos?: string;
    AutoMissionScalar?: string;
    AutoMissionScalarCurveID?: string;
    AutoCombatantEnvCasterID?: string;
}
interface GarrMissionTextureDatabase{
    ID?: string;
    Pos?: string;
    UiTextureKitID?: string;
}
interface GarrMissionTypeDatabase{
    ID?: string;
    Name_lang?: string;
    UiTextureAtlasMemberID?: string;
    UiTextureKitID?: string;
}
interface GarrMissionXEncounterDatabase{
    ID?: string;
    GarrEncounterID?: string;
    GarrEncounterSetID?: string;
    GarrMissionID?: string;
    OrderIndex?: string;
    Field_9_0_1_33978_004?: string;
}
interface GarrMissionXFollowerDatabase{
    ID?: string;
    GarrFollowerID?: string;
    GarrFollowerSetID?: string;
    GarrMissionID?: string;
    Field_9_0_1_33978_002?: string;
}
interface GarrMssnBonusAbilityDatabase{
    ID?: string;
    DurationSecs?: string;
    GarrAbilityID?: string;
    GarrFollowerTypeID?: string;
    GarrMissionTextureID?: string;
    Radius?: string;
}
interface GarrPlotDatabase{
    Name?: string;
    UpgradeRequirement?: string;
    ID?: string;
    AllianceConstructObjID?: string;
    Flags?: string;
    HordeConstructObjID?: string;
    PlotType?: string;
    UiCategoryID?: string;
}
interface GarrPlotBuildingDatabase{
    ID?: string;
    GarrBuildingID?: string;
    GarrPlotID?: string;
}
interface GarrPlotInstanceDatabase{
    Name?: string;
    ID?: string;
    GarrPlotID?: string;
}
interface GarrPlotUICategoryDatabase{
    CategoryName_lang?: string;
    ID?: string;
    PlotType?: string;
}
interface GarrSiteLevelDatabase{
    ID?: string;
    GarrLevel?: string;
    GarrSiteID?: string;
    MapID?: string;
    MaxBuildingLevel?: string;
    TownHallUiPos?: string;
    UiTextureKitID?: string;
    UpgradeCost?: string;
    UpgradeGoldCost?: string;
    UpgradeMovieID?: string;
}
interface GarrSpecializationDatabase{
    ID?: string;
    BuildingType?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    Param?: string;
    RequiredUpgradeLevel?: string;
    SpecType?: string;
    Tooltip_lang?: string;
}
interface GarrSiteLevelPlotInstDatabase{
    ID?: string;
    GarrPlotInstanceID?: string;
    GarrSiteLevelID?: string;
    UiMarkerPos?: string;
    UiMarkerSize?: string;
}
interface GarrStringDatabase{
    ID?: string;
    Text_lang?: string;
}
interface GarrTalTreeXGarrTalResearchDatabase{
    ID?: string;
    GarrTalentTreeID?: string;
    GarrTalentResearchID?: string;
    OrderIndex?: string;
}
interface GarrTalentRankDatabase{
    ID?: string;
    ResearchCost?: string;
    ResearchDurationSecs?: string;
    RespecCost?: string;
    RespecDurationSecs?: string;
    ResearchCostCurrencyTypesID?: string;
    RespecCostCurrencyTypesID?: string;
    GarrTalentID?: string;
    PerkPlayerConditionID?: string;
    PerkSpellID?: string;
    Rank?: string;
    ResearchGoldCost?: string;
    RespecGoldCost?: string;
    AlternateResearchCost?: string;
    AlternateResearchCostCurrencyTypesID?: string;
    AlternateResearchGoldCost?: string;
    AlternateResearchDurationSecs?: string;
    Field_9_1_0_38627_003?: string;
}
interface GarrTalentResearchDatabase{
    ID?: string;
    GoldCost?: string;
    CurrencyTypesID?: string;
    CurrencyTypesCost?: string;
    DurationSecs?: string;
    RespecGoldCost?: string;
    RespecCurrencyTypesID?: string;
    RespecCurrencyTypesCost?: string;
    RespecDurationSecs?: string;
}
interface GarrTalentMapPOIDatabase{
    ID?: string;
    Position?: string;
    GarrTalentID?: string;
}
interface GarrTalentDatabase{
    ID?: string;
    Description_lang?: string;
    Flags?: string;
    GarrAbilityID?: string;
    GarrTalentTreeID?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    PerkPlayerConditionID?: string;
    PerkSpellID?: string;
    PlayerConditionID?: string;
    ResearchCost?: string;
    ResearchCostCurrencyTypesID?: string;
    ResearchDurationSecs?: string;
    ResearchGoldCost?: string;
    RespecCost?: string;
    RespecCostCurrencyTypesID?: string;
    RespecDurationSecs?: string;
    RespecGoldCost?: string;
    Tier?: string;
    UiOrder?: string;
    TalentType?: string;
    PrerequisiteTalentID?: string;
    ResearchCostSource?: string;
    ActiveDurationSecs?: string;
    GarrTalentSocketPropertiesID?: string;
}
interface GarrTalentCostDatabase{
    ID?: string;
    GarrTalentTreeID?: string;
    GarrTalentID?: string;
    RankIndex?: string;
    GarrTalentRankID?: string;
    CostType?: string;
    CurrencyTypesID?: string;
    CurrencyQuantity?: string;
    MoneyQuantity?: string;
}
interface GarrTalentSocketPropertiesDatabase{
    ID?: string;
    GarrTalentSocketType?: string;
    GarrTalentSocketSubtype?: string;
}
interface GarrTalentTreeDatabase{
    ID?: string;
    ClassID?: string;
    GarrTypeID?: string;
    MaxTiers?: string;
    UiOrder?: string;
    UiTextureKitID?: string;
    Title_lang?: string;
    Flags?: string;
    GarrTalentTreeType?: string;
    PlayerConditionID?: string;
    FeatureTypeIndex?: string;
    FeatureSubtypeIndex?: string;
    CurrencyID?: string;
}
interface GarrUiAnimClassInfoDatabase{
    ID?: string;
    GarrClassSpecID?: string;
    SpellVisualID?: string;
    MovementType?: string;
    ImpactDelaySecs?: string;
    CastKit?: string;
    ImpactKit?: string;
    TargetImpactKit?: string;
}
interface GarrTypeDatabase{
    ID?: string;
    ExpansionID?: string;
    Flags?: string;
    MapIDs?: string;
    PrimaryCurrencyTypeID?: string;
    SecondaryCurrencyTypeID?: string;
    AutoFollowerHealRate?: string;
    MissionCostCurveID?: string;
    Field_9_0_2_36512_006?: string;
}
interface GarrUiAnimRaceInfoDatabase{
    ID?: string;
    ChrRaceID?: string;
    Scale?: string;
    Height?: string;
    SingleModelScale?: string;
    SingleModelHeight?: string;
    FemaleFollowerPageHeight?: string;
    FemaleFollowerPageScale?: string;
    FemaleHeight?: string;
    FemaleScale?: string;
    FemaleSingleModelHeight?: string;
    FemaleSingleModelScale?: string;
    GarrFollRaceID?: string;
    MaleFollowerPageHeight?: string;
    MaleFollowerPageScale?: string;
    MaleHeight?: string;
    MaleScale?: string;
    MaleSingleModelHeight?: string;
    MaleSingleModelScale?: string;
}
interface GlobalPlayerConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    GlobalPlayerConditionSetID?: string;
}
interface GlobalCurveDatabase{
    ID?: string;
    CurveID?: string;
    Type?: string;
}
interface GlobalPlayerConditionSetDatabase{
    ID?: string;
    What?: string;
}
interface GlobalStringsDatabase{
    ID?: string;
    BaseTag?: string;
    Flags?: string;
    TagText_lang?: string;
}
interface GemPropertiesDatabase{
    ID?: string;
    Enchant_ID?: string;
    Maxcount_inv?: string;
    Maxcount_item?: string;
    Type?: string;
    Min_item_level?: string;
}
interface GlobalGameContentTuningDatabase{
    ID?: string;
    ContentTuningID?: string;
    ExpansionID?: string;
}
interface GlueScreenEmoteDatabase{
    ID?: string;
    ClassID?: string;
    RaceID?: string;
    SexID?: string;
    LeftHandItemType?: string;
    RightHandItemType?: string;
    AnimKitID?: string;
    SpellVisualKitID?: string;
}
interface GlobalTable_PlayerConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    What?: string;
}
interface GlyphBindableSpellDatabase{
    ID?: string;
    GlyphPropertiesID?: string;
    SpellID?: string;
}
interface GlyphRequiredSpecDatabase{
    ID?: string;
    ChrSpecializationID?: string;
    GlyphPropertiesID?: string;
}
interface GlyphPropertiesDatabase{
    ID?: string;
    SpellID?: string;
    GlyphType?: string;
    SpellIconID?: string;
    GlyphExclusiveCategoryID?: string;
    GlyphSlotFlags?: string;
    SpellIconFileDataID?: string;
}
interface GlyphExclusiveCategoryDatabase{
    ID?: string;
    Name_lang?: string;
}
interface GradientEffectDatabase{
    ID?: string;
    Colors0_r?: string;
    Colors0_g?: string;
    Colors0_b?: string;
    Colors1_r?: string;
    Colors1_g?: string;
    Colors1_b?: string;
    Colors2_r?: string;
    Colors2_g?: string;
    Colors2_b?: string;
    Alpha1?: string;
    Alpha2?: string;
    EdgeColor_r?: string;
    EdgeColor_g?: string;
    EdgeColor_b?: string;
    Field_8_1_0_28440_014?: string;
    Field_8_1_0_28440_015?: string;
}
interface GroundEffectDoodadDatabase{
    ID?: string;
    Doodadpath?: string;
    Flags?: string;
    Animscale?: string;
    Pushscale?: string;
    ModelFileID?: string;
    DoodadIdTag?: string;
    Size_variation_min?: string;
    Size_variation_max?: string;
    Rotation_variation_min?: string;
    Rotation_variation_max?: string;
    TerrainColorGradingRampID?: string;
}
interface GroupFinderActivityDatabase{
    Field_6_0_1_18179_006?: string;
    ID?: string;
    AreaID?: string;
    DifficultyID?: string;
    DisplayType?: string;
    Flags?: string;
    FullName_lang?: string;
    GroupFinderActivityGrpID?: string;
    GroupFinderCategoryID?: string;
    MapID?: string;
    MaxLevelSuggestion?: string;
    MaxPlayers?: string;
    MinGearLevelSuggestion?: string;
    MinLevel?: string;
    OrderIndex?: string;
    ShortName_lang?: string;
    PlayerConditionID?: string;
    OverrideContentTuningID?: string;
    Field_2_5_1_38043_005?: string;
    Field_2_5_1_38043_013?: string;
}
interface GlyphSlotDatabase{
    ID?: string;
    Type?: string;
    Tooltip?: string;
}
interface GossipXUIDisplayInfoDatabase{
    ID?: string;
    GossipMenuID?: string;
    UiTextureKitID?: string;
    CustomGossipDescriptionString_lang?: string;
}
interface GroupFinderActivityGrpDatabase{
    ID?: string;
    Name_lang?: string;
    OrderIndex?: string;
}
interface GroundEffectTextureDatabase{
    ID?: string;
    DoodadID?: string;
    DoodadWeight?: string;
    Density?: string;
    Sound?: string;
    ContinentID?: string;
    ZoneID?: string;
    TextureID?: string;
    TextureName?: string;
    Datestamp?: string;
    SplatDensity?: string;
}
interface GuildColorBorderDatabase{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_6_0_1_18179_004?: string;
    ID?: string;
}
interface GuildColorEmblemDatabase{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_6_0_1_18179_004?: string;
    ID?: string;
}
interface GuildColorBackgroundDatabase{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_6_0_1_18179_004?: string;
    ID?: string;
}
interface GroupFinderCategoryDatabase{
    Name_lang?: string;
    ID?: string;
    Flags?: string;
    OrderIndex?: string;
}
interface GuildShirtBackgroundDatabase{
    ID?: string;
    Component?: string;
    FileDataID?: string;
    ShirtID?: string;
    Color?: string;
}
interface GuildTabardBackgroundDatabase{
    ID?: string;
    Tier?: string;
    Component?: string;
    FileDataID?: string;
    Color?: string;
}
interface GuildEmblemDatabase{
    ID?: string;
    EmblemID?: string;
    TextureFileDataID?: string;
}
interface GuildTabardBorderDatabase{
    ID?: string;
    BorderID?: string;
    Tier?: string;
    Component?: string;
    FileDataID?: string;
    Color?: string;
}
interface GuildShirtBorderDatabase{
    ID?: string;
    Tier?: string;
    Component?: string;
    ShirtID?: string;
    FileDataID?: string;
    Color?: string;
}
interface GuildPerkSpellsDatabase{
    ID?: string;
    GuildLevel?: string;
    SpellID?: string;
}
interface HeirloomDatabase{
    ID?: string;
    Flags?: string;
    ItemID?: string;
    LegacyItemID?: string;
    LegacyUpgradedItemID?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
    StaticUpgradedItemID?: string;
    UpgradeItemBonusListID?: string;
    UpgradeItemID?: string;
}
interface HelmetAnimScalingDatabase{
    ID?: string;
    HelmetGeosetVisDataID?: string;
    RaceID?: string;
    Amount?: string;
}
interface GuildTabardEmblemDatabase{
    ID?: string;
    Component?: string;
    Color?: string;
    FileDataID?: string;
    EmblemID?: string;
}
interface HelmetGeosetDataDatabase{
    ID?: string;
    RaceID?: string;
    HideGeosetGroup?: string;
    HelmetGeosetVisDataID?: string;
    RaceBitSelection?: string;
}
interface HelmetGeosetVisDataDatabase{
    ID?: string;
    HideGeoset?: string;
    DefaultFlags?: string;
    PreferredFlags?: string;
    HideFlags?: string;
    Field_0_5_5_3494_001?: string;
    Field_0_5_5_3494_002?: string;
    Field_0_5_5_3494_003?: string;
    Field_0_5_5_3494_004?: string;
    Field_0_5_5_3494_005?: string;
    Field_0_5_5_3494_006?: string;
    Field_0_5_5_3494_007?: string;
    Field_0_5_5_3494_008?: string;
    Field_0_5_5_3494_009?: string;
    Field_0_5_5_3494_010?: string;
    Field_0_5_5_3494_011?: string;
    Field_0_5_5_3494_012?: string;
    Field_0_5_5_3494_013?: string;
    Field_0_5_5_3494_014?: string;
    Field_0_5_5_3494_015?: string;
    Field_0_5_5_3494_016?: string;
    Field_0_5_5_3494_017?: string;
    Field_0_5_5_3494_018?: string;
    Field_0_5_5_3494_019?: string;
    Field_0_5_5_3494_020?: string;
    Field_0_5_5_3494_021?: string;
    Field_0_5_5_3494_022?: string;
    Field_0_5_5_3494_023?: string;
    Field_0_5_5_3494_024?: string;
    Field_0_5_5_3494_025?: string;
    Field_0_5_5_3494_026?: string;
    Field_0_5_5_3494_027?: string;
    Field_0_5_5_3494_028?: string;
    Field_0_5_5_3494_029?: string;
    Field_0_5_5_3494_030?: string;
    Field_0_5_5_3494_031?: string;
    Field_0_5_5_3494_032?: string;
}
interface HighlightColorDatabase{
    ID?: string;
    EndColor?: string;
    Flags?: string;
    MidColor?: string;
    StartColor?: string;
    Type?: string;
}
interface HolidayDescriptionsDatabase{
    ID?: string;
    Description_lang?: string;
}
interface HotfixDatabase{
    ID?: string;
    Flags?: string;
    Object_ID?: string;
    Tablename?: string;
}
interface HolidaysDatabase{
    ID?: string;
    Duration?: string;
    Date?: string;
    Region?: string;
    Looping?: string;
    CalendarFlags?: string;
    HolidayNameID?: string;
    HolidayDescriptionID?: string;
    TextureFileName?: string;
    Priority?: string;
    CalendarFilterType?: string;
    Flags?: string;
    TextureFileDataID?: string;
    Field_1_13_2_30073_008?: string;
}
interface ImportPriceArmorDatabase{
    ID?: string;
    ClothModifier?: string;
    LeatherModifier?: string;
    ChainModifier?: string;
    PlateModifier?: string;
}
interface HolidayNamesDatabase{
    ID?: string;
    Name_lang?: string;
}
interface HotfixesDatabase{
    ID?: string;
    Flags?: string;
    Object_ID?: string;
    Tablename?: string;
    PushID?: string;
}
interface InvasionClientDataDatabase{
    ID?: string;
    AreaTableID?: string;
    IconLocation?: string;
    InvasionEnabledWorldStateID?: string;
    Name_lang?: string;
    ScenarioID?: string;
    UiTextureAtlasMemberID?: string;
    WorldQuestID?: string;
    WorldStateID?: string;
    WorldStateValue?: string;
}
interface ImportPriceShieldDatabase{
    ID?: string;
    Data?: string;
}
interface ImportPriceQualityDatabase{
    ID?: string;
    Data?: string;
}
interface ImportPriceWeaponDatabase{
    ID?: string;
    Data?: string;
}
interface Item_sparseDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Flags?: string;
    PriceRandomValue?: string;
    PriceVariance?: string;
    Field_6_0_1_18179_005?: string;
    BuyPrice?: string;
    SellPrice?: string;
    InventoryType?: string;
    Field_6_0_1_18179_009?: string;
    Field_6_0_1_18179_010?: string;
    ItemLevel?: string;
    RequiredLevel?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_015?: string;
    Field_6_0_1_18179_016?: string;
    Field_6_0_1_18179_017?: string;
    Field_6_0_1_18179_018?: string;
    Field_6_0_1_18179_019?: string;
    Field_6_0_1_18179_020?: string;
    Field_6_0_1_18179_021?: string;
    ContainerSlots?: string;
    StatModifier_bonusStat?: string;
    Field_6_0_1_18179_024?: string;
    Field_6_0_1_18179_025?: string;
    Field_6_0_1_18179_026?: string;
    Field_6_0_1_18179_027?: string;
    Field_6_0_1_18179_028?: string;
    Field_6_0_1_18179_029?: string;
    Field_6_0_1_18179_030?: string;
    Field_6_0_1_18179_031?: string;
    Display_lang?: string;
    Display1_lang?: string;
    Display2_lang?: string;
    Display3_lang?: string;
    Description_lang?: string;
    Field_6_0_1_18179_037?: string;
    Field_6_0_1_18179_038?: string;
    Field_6_0_1_18179_039?: string;
    Field_6_0_1_18179_040?: string;
    LockID?: string;
    Field_6_0_1_18179_042?: string;
    Field_6_0_1_18179_043?: string;
    Field_6_0_1_18179_044?: string;
    Field_6_0_1_18179_045?: string;
    Field_6_0_1_18179_046?: string;
    Field_6_0_1_18179_047?: string;
    Field_6_0_1_18179_048?: string;
    Field_6_0_1_18179_049?: string;
    Field_6_0_1_18179_050?: string;
    Field_6_0_1_18179_051?: string;
    Field_6_0_1_18179_052?: string;
    Field_6_0_1_18179_053?: string;
    Field_6_0_1_18179_054?: string;
    Field_6_0_1_18179_055?: string;
    Field_6_0_1_18179_056?: string;
    Field_6_0_1_18179_057?: string;
    DmgVariance?: string;
    Field_6_0_1_18179_059?: string;
    Field_6_0_1_18179_060?: string;
    Field_6_0_1_18179_061?: string;
}
interface ItemAppearanceDatabase{
    ID?: string;
    DefaultIconFileDataID?: string;
    DisplayType?: string;
    ItemDisplayInfoID?: string;
    UiOrder?: string;
    Field_8_2_5_31812_001?: string;
    PlayerConditionID?: string;
}
interface ItemDatabase{
    ID?: string;
    ClassID?: string;
    IconFileDataID?: string;
    InventoryType?: string;
    ItemGroupSoundsID?: string;
    Material?: string;
    SheatheType?: string;
    Sound_override_subclassID?: string;
    SubclassID?: string;
    DisplayInfoID?: string;
    MaxDurability?: string;
    AmmoType?: string;
    DamageMin?: string;
    DamageMax?: string;
    DamageType?: string;
    DefensiveStats?: string;
    ModifiedCraftingReagentItemID?: string;
    RequiredLevel?: string;
    RandomSelect?: string;
    ItemRandomSuffixGroupID?: string;
    Field_2_5_1_38043_012?: string;
    Field_2_5_1_38043_013?: string;
}
interface ItemAppearanceXUiCameraDatabase{
    ID?: string;
    ItemAppearanceID?: string;
    UiCameraID?: string;
}
interface ItemArmorTotalDatabase{
    ID?: string;
    ItemLevel?: string;
    Cloth?: string;
    Leather?: string;
    Mail?: string;
    Plate?: string;
}
interface ItemArmorShieldDatabase{
    ID?: string;
    ItemLevel?: string;
    Quality?: string;
}
interface ItemArmorQualityDatabase{
    ID?: string;
    Qualitymod?: string;
    ItemLevel?: string;
}
interface ItemBagFamilyDatabase{
    ID?: string;
    Name_lang?: string;
}
interface ItemBonusListDatabase{
    ID?: string;
    InternalName?: string;
    Flags?: string;
}
interface ItemBonusListGroupEntryDatabase{
    ID?: string;
    ItemBonusListID?: string;
    ItemLevelSelectorID?: string;
    OrderIndex?: string;
    ItemExtendedCostID?: string;
    ItemBonusListGroupID?: string;
    UnlockCondition?: string;
    Flags?: string;
}
interface ItemBonusDatabase{
    Field_6_0_1_18179_001?: string;
    ID?: string;
    OrderIndex?: string;
    ParentItemBonusListID?: string;
    Type?: string;
    Value?: string;
}
interface ItemBonusListGroupDatabase{
    ID?: string;
    SequenceSpellID?: string;
    Field_9_1_0_38783_001?: string;
}
interface ItemBonusListWarforgeLevelDeltaDatabase{
    ID?: string;
    ItemLevelDelta?: string;
}
interface ItemBonusListLevelDeltaDatabase{
    ID?: string;
    ItemLevelDelta?: string;
}
interface ItemBonusTreeDatabase{
    ID?: string;
    Field_9_0_2_35854_000?: string;
    InventoryTypeMask?: string;
}
interface ItemBonusSequenceSpellDatabase{
    ID?: string;
    SpellID?: string;
    ItemID?: string;
}
interface ItemBonusTreeNodeDatabase{
    ID?: string;
    ChildItemBonusListID?: string;
    ChildItemBonusTreeID?: string;
    ChildItemLevelSelectorID?: string;
    ItemContext?: string;
    ParentItemBonusTreeID?: string;
    ItemBonusListGroupID?: string;
    ParentItemBonusTreeNodeID?: string;
}
interface ItemChildEquipmentDatabase{
    ID?: string;
    ChildItemEquipSlot?: string;
    ChildItemID?: string;
    ParentItemID?: string;
}
interface ItemClassDatabase{
    ClassID?: string;
    Flags?: string;
    PriceModifier?: string;
    ClassName_lang?: string;
    ID?: string;
    SubclassMapID?: string;
}
interface ItemCurrencyCostDatabase{
    ID?: string;
    ItemID?: string;
}
interface ItemCurrencyValueDatabase{
    ID?: string;
    CurrencyValue?: string;
    Currency?: string;
    ItemID?: string;
}
interface ItemCondExtCostsDatabase{
    ID?: string;
    CondExtendedCost?: string;
    ItemExtendedCostEntry?: string;
    ArenaSeason?: string;
}
interface ItemContextPickerEntryDatabase{
    ID?: string;
    Flags?: string;
    ItemContextPickerID?: string;
    ItemCreationContext?: string;
    OrderIndex?: string;
    PVal?: string;
    PlayerConditionID?: string;
}
interface ItemDamageAmmoDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageOneHandDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageRangedDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageOneHandCasterDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageThrownDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageTwoHandDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageTwoHandCasterDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDisenchantLootDatabase{
    ID?: string;
    Class?: string;
    Subclass?: string;
    Quality?: string;
    MinLevel?: string;
    MaxLevel?: string;
    SkillRequired?: string;
    ExpansionID?: string;
}
interface ItemDamageWandDatabase{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDisplayInfoDatabase{
    ID?: string;
    ModelName?: string;
    ModelTexture?: string;
    GeosetGroup?: string;
    Flags?: string;
    SpellVisualID?: string;
    HelmetGeosetVis?: string;
    Texture?: string;
    ItemVisual?: string;
    ParticleColorID?: string;
    AttachmentGeosetGroup?: string;
    ItemRangedDisplayInfoID?: string;
    ModelMaterialResourcesID?: string;
    ModelResourcesID?: string;
    ModelType1?: string;
    OverrideSwooshSoundKitID?: string;
    SheatheTransformMatrixID?: string;
    SheathedSpellVisualKitID?: string;
    StateSpellVisualKitID?: string;
    UnsheathedSpellVisualKitID?: string;
    InventoryIcon?: string;
    GroupSoundIndex?: string;
    GroundModel?: string;
    ItemSize?: string;
    HelmetGeosetVisID?: string;
    Field_8_2_0_30080_011?: string;
}
interface ItemDisplayXUiCameraDatabase{
    ID?: string;
    ItemDisplayInfoID?: string;
    UiCameraID?: string;
}
interface ItemEffectDatabase{
    ID?: string;
    CategoryCoolDownMSec?: string;
    Charges?: string;
    ChrSpecializationID?: string;
    CoolDownMSec?: string;
    LegacySlotIndex?: string;
    ParentItemID?: string;
    SpellCategoryID?: string;
    SpellID?: string;
    TriggerType?: string;
}
interface ItemDisplayInfoMaterialResDatabase{
    ID?: string;
    ComponentSection?: string;
    ItemDisplayInfoID?: string;
    MaterialResourcesID?: string;
}
interface ItemExtendedCostDatabase{
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_007?: string;
    Field_6_0_1_18179_010?: string;
    Field_6_0_1_18179_011?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    ID?: string;
    ArenaBracket?: string;
    CurrencyCount?: string;
    CurrencyID?: string;
    Flags?: string;
    ItemCount?: string;
    ItemID?: string;
    MinFactionID?: string;
    MinReputation?: string;
    RequiredAchievement?: string;
    RequiredArenaRating?: string;
    HonorPoints?: string;
    ArenaPoints?: string;
    ItemPurchaseGroup?: string;
    RequiredGuildLevel?: string;
}
interface ItemLevelSelectorDatabase{
    ID?: string;
    ItemLevelSelectorQualitySetID?: string;
    MinItemLevel?: string;
    AzeriteUnlockMappingSetID?: string;
}
interface ItemFallbackVisualDatabase{
    ID?: string;
    InventorySlot?: string;
    ArmorSubClass?: string;
    FallbackItemID?: string;
}
interface ItemGroupSoundsDatabase{
    ID?: string;
    Sound?: string;
}
interface ItemLevelSelectorQualityDatabase{
    ID?: string;
    ParentILSQualitySetID?: string;
    Quality?: string;
    QualityItemBonusListID?: string;
}
interface ItemLimitCategoryDatabase{
    ID?: string;
    Name_lang?: string;
    Quantity?: string;
    Flags?: string;
}
interface ItemLimitCategoryConditionDatabase{
    ID?: string;
    AddQuantity?: string;
    ParentItemLimitCategoryID?: string;
    PlayerConditionID?: string;
}
interface ItemLevelSelectorQualitySetDatabase{
    ID?: string;
    IlvlEpic?: string;
    IlvlRare?: string;
}
interface ItemModifiedAppearanceDatabase{
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    ID?: string;
    ItemAppearanceID?: string;
    ItemAppearanceModifierID?: string;
    ItemID?: string;
    OrderIndex?: string;
    TransmogSourceTypeEnum?: string;
}
interface ItemModifiedAppearanceExtraDatabase{
    ID?: string;
    DisplayInventoryType?: string;
    DisplayWeaponSubclassID?: string;
    IconFileDataID?: string;
    SheatheType?: string;
    UnequippedIconFileDataID?: string;
}
interface ItemNameDescriptionDatabase{
    ID?: string;
    Description_lang?: string;
    Color?: string;
}
interface ItemNameSlotOverrideDatabase{
    ID?: string;
    OverrideNameString_lang?: string;
    SlotMask?: string;
    ItemNameDescriptionID?: string;
}
interface ItemPetFoodDatabase{
    ID?: string;
    Name_lang?: string;
}
interface ItemPurchaseGroupDatabase{
    ID?: string;
    ItemID?: string;
    Name_lang?: string;
}
interface ItemPriceBaseDatabase{
    ID?: string;
    ItemLevel?: string;
    Armor?: string;
    Weapon?: string;
}
interface ItemRangedDisplayInfoDatabase{
    ID?: string;
    AutoAttackSpellVisualID?: string;
    CastSpellVisualID?: string;
    MissileSpellVisualEffectNameID?: string;
    QuiverFileDataID?: string;
}
interface ItemRandomPropertiesDatabase{
    ID?: string;
    Name?: string;
    Enchantment?: string;
    Name_lang?: string;
}
interface ItemRandomSuffixDatabase{
    ID?: string;
    Name_lang?: string;
    InternalName?: string;
    Enchantment?: string;
    AllocationPct?: string;
}
interface ItemReforgeDatabase{
    ID?: string;
    Source_stat?: string;
    Source_multiplier?: string;
    Target_stat?: string;
    Target_multiplier?: string;
}
interface ItemSetSpellDatabase{
    ID?: string;
    ItemSetID?: string;
    SpellID?: string;
    Threshold?: string;
    ChrSpecID?: string;
}
interface ItemSetDatabase{
    ID?: string;
    Name_lang?: string;
    ItemID?: string;
    RequiredSkill?: string;
    RequiredSkillRank?: string;
    SetFlags?: string;
    SetSpellID?: string;
    SetThreshold?: string;
}
interface ItemSearchNameDatabase{
    ID?: string;
    AllowableClass?: string;
    AllowableRace?: string;
    Display_lang?: string;
    ExpansionID?: string;
    Flags?: string;
    ItemLevel?: string;
    MinFactionID?: string;
    MinReputation?: string;
    OverallQualityID?: string;
    RequiredAbility?: string;
    RequiredLevel?: string;
    RequiredSkill?: string;
    RequiredSkillRank?: string;
    Field_7_3_2_25549_009?: string;
}
interface ItemSpecOverrideDatabase{
    ID?: string;
    ItemID?: string;
    SpecID?: string;
}
interface ItemSparseDatabase{
    ID?: string;
    AllowableClass?: string;
    AllowableRace?: string;
    ArtifactID?: string;
    BagFamily?: string;
    Bonding?: string;
    BuyPrice?: string;
    ContainerSlots?: string;
    Damage_damageType?: string;
    Description_lang?: string;
    Display_lang?: string;
    Display1_lang?: string;
    Display2_lang?: string;
    Display3_lang?: string;
    DmgVariance?: string;
    DurationInInventory?: string;
    ExpansionID?: string;
    Flags?: string;
    Gem_properties?: string;
    InstanceBound?: string;
    InventoryType?: string;
    ItemDelay?: string;
    ItemLevel?: string;
    ItemNameDescriptionID?: string;
    ItemRandomSuffixGroupID?: string;
    ItemRange?: string;
    ItemSet?: string;
    LanguageID?: string;
    LimitCategory?: string;
    LockID?: string;
    Material?: string;
    MaxCount?: string;
    MinFactionID?: string;
    MinReputation?: string;
    OverallQualityID?: string;
    PageID?: string;
    PageMaterialID?: string;
    PriceRandomValue?: string;
    PriceVariance?: string;
    QualityModifier?: string;
    RandomSelect?: string;
    RequiredAbility?: string;
    RequiredHoliday?: string;
    RequiredLevel?: string;
    RequiredPVPMedal?: string;
    RequiredPVPRank?: string;
    RequiredSkill?: string;
    RequiredSkillRank?: string;
    RequiredTransmogHoliday?: string;
    ScalingStatDistributionID?: string;
    SellPrice?: string;
    SheatheType?: string;
    SocketType?: string;
    Socket_match_enchantment_ID?: string;
    SpellWeight?: string;
    SpellWeightCategory?: string;
    Stackable?: string;
    StartQuestID?: string;
    StatModifier_bonusStat?: string;
    StatPercentEditor?: string;
    StatPercentageOfSocket?: string;
    TotemCategoryID?: string;
    VendorStackCount?: string;
    ZoneBound?: string;
    OppositeFactionItemID?: string;
    StatValue?: string;
    MaxDurability?: string;
    DamageMin?: string;
    DamageMax?: string;
    DefensiveStats?: string;
    AmmoType?: string;
    DamageType?: string;
    ModifiedCraftingReagentItemID?: string;
    ContentTuningID?: string;
    PlayerLevelToItemLevelCurveID?: string;
    Field_7_3_2_25549_048?: string;
    Field_7_3_2_25549_049?: string;
}
interface ItemSpecDatabase{
    ID?: string;
    MinLevel?: string;
    MaxLevel?: string;
    ItemType?: string;
    PrimaryStat?: string;
    SecondaryStat?: string;
    SpecializationID?: string;
}
interface ItemSubClassMaskDatabase{
    ClassID?: string;
    Mask?: string;
    Name_lang?: string;
    ID?: string;
}
interface ItemSubClassDatabase{
    ClassID?: string;
    SubClassID?: string;
    PrerequisiteProficiency?: string;
    PostrequisiteProficiency?: string;
    Flags?: string;
    DisplayFlags?: string;
    WeaponParrySeq?: string;
    WeaponReadySeq?: string;
    WeaponAttackSeq?: string;
    WeaponSwingSize?: string;
    DisplayName_lang?: string;
    VerboseName_lang?: string;
    ID?: string;
    AuctionHouseSortOrder?: string;
}
interface ItemToBattlePetDatabase{
    ItemID?: string;
    Field_6_0_1_18179_001?: string;
    SpeciesID?: string;
}
interface ItemToMountSpellDatabase{
    ItemID?: string;
    SpellID?: string;
}
interface ItemUpgradePathDatabase{
    ID?: string;
}
interface ItemVisualEffectsDatabase{
    ID?: string;
    Model?: string;
}
interface ItemUpgradeDatabase{
    ID?: string;
    CurrencyAmount?: string;
    CurrencyType?: string;
    ItemLevelIncrement?: string;
    ItemUpgradePathID?: string;
    PrerequisiteID?: string;
}
interface ItemVisualsDatabase{
    ID?: string;
    Slot?: string;
    ModelFileID?: string;
    SpellVisualKitId1?: string;
    SpellVisualKitId2?: string;
}
interface ItemVisualsXEffectDatabase{
    ID?: string;
    AttachmentID?: string;
    DisplayWeaponSubclassID?: string;
    SpellVisualKitID?: string;
    AttachmentModelFileID?: string;
    ItemVisualsID?: string;
    Scale?: string;
}
interface ItemXBonusTreeDatabase{
    ID?: string;
    ItemBonusTreeID?: string;
    ItemID?: string;
}
interface ItemXItemEffectDatabase{
    ID?: string;
    ItemEffectID?: string;
    ItemID?: string;
}
interface JournalEncounterDatabase{
    ID?: string;
    DungeonMapID?: string;
    WorldMapAreaID?: string;
    Map?: string;
    FirstSectionID?: string;
    JournalInstanceID?: string;
    OrderIndex?: string;
    DifficultyMask?: string;
    Name_lang?: string;
    Description_lang?: string;
    Flags?: string;
    MapDisplayConditionID?: string;
    UiMapID?: string;
    DungeonEncounterID?: string;
}
interface JournalEncounterItemDatabase{
    ID?: string;
    JournalEncounterID?: string;
    ItemID?: string;
    DifficultyMask?: string;
    FactionMask?: string;
    Flags?: string;
}
interface JournalEncounterXDifficultyDatabase{
    ID?: string;
    JournalEncounterID?: string;
    DifficultyID?: string;
}
interface JournalEncounterXMapLocDatabase{
    ID?: string;
    DungeonMapID?: string;
    Flags?: string;
    JournalEncounterID?: string;
    Map?: string;
    MapDisplayConditionID?: string;
    WorldMapAreaID?: string;
    UiMapID?: string;
}
interface JournalEncounterCreatureDatabase{
    ID?: string;
    JournalEncounterID?: string;
    CreatureDisplayInfoID?: string;
    OrderIndex?: string;
    FileDataID?: string;
    Name_lang?: string;
    Description_lang?: string;
    UiModelSceneID?: string;
}
interface JournalEncounterSectionDatabase{
    ID?: string;
    JournalEncounterID?: string;
    NextSiblingSectionID?: string;
    FirstChildSectionID?: string;
    ParentSectionID?: string;
    OrderIndex?: string;
    Type?: string;
    Flags?: string;
    IconFlags?: string;
    Title_lang?: string;
    BodyText_lang?: string;
    DifficultyMask?: string;
    IconCreatureDisplayInfoID?: string;
    SpellID?: string;
    IconFileDataID?: string;
    UiModelSceneID?: string;
}
interface JournalItemXDifficultyDatabase{
    ID?: string;
    JournalEncounterItemID?: string;
    DifficultyID?: string;
}
interface JournalInstanceDatabase{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    ButtonFileDataID?: string;
    ButtonSmallFileDataID?: string;
    BackgroundFileDataID?: string;
    LoreFileDataID?: string;
    Name_lang?: string;
    Description_lang?: string;
    Flags?: string;
    OrderIndex?: string;
    Field_4_2_0_14333_006?: string;
}
interface JournalSectionXDifficultyDatabase{
    ID?: string;
    JournalEncounterSectionID?: string;
    DifficultyID?: string;
}
interface JournalTierDatabase{
    ID?: string;
    Name_lang?: string;
    PlayerConditionID?: string;
    Expansion?: string;
}
interface JournalTierXInstanceDatabase{
    JournalTierID?: string;
    JournalInstanceID?: string;
    ID?: string;
}
interface KeychainDatabase{
    ID?: string;
    Key?: string;
}
interface KeystoneAffixDatabase{
    ID?: string;
    Description_lang?: string;
    FiledataID?: string;
    Name_lang?: string;
}
interface LFGDungeonExpansionDatabase{
    ID?: string;
    Lfg_ID?: string;
    Expansion_level?: string;
    Random_ID?: string;
    Hard_level_min?: string;
    Hard_level_max?: string;
    Target_level_min?: string;
    Target_level_max?: string;
}
interface LFGDungeonGroupDatabase{
    ID?: string;
    Name_lang?: string;
    Order_index?: string;
    Parent_group_ID?: string;
    TypeID?: string;
}
interface LFGDungeonsDatabase{
    ID?: string;
    Name_lang?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Target_level?: string;
    Target_level_min?: string;
    Target_level_max?: string;
    MapID?: string;
    DifficultyID?: string;
    Flags?: string;
    TypeID?: string;
    Faction?: string;
    TextureFilename?: string;
    ExpansionLevel?: string;
    Order_index?: string;
    Group_ID?: string;
    Description_lang?: string;
    Random_ID?: string;
    Count_tank?: string;
    Count_healer?: string;
    Count_damage?: string;
    Min_count_tank?: string;
    Min_count_healer?: string;
    Min_count_damage?: string;
    ScenarioID?: string;
    Subtype?: string;
    Bonus_reputation_amount?: string;
    MentorCharLevel?: string;
    MentorItemLevel?: string;
    FinalEncounterID?: string;
    IconTextureFileID?: string;
    MinGear?: string;
    PopupBgTextureFileID?: string;
    Required_player_condition_ID?: string;
    RewardsBgTextureFileID?: string;
    Difficulty?: string;
    ContentTuningID?: string;
}
interface LFGRoleRequirementDatabase{
    ID?: string;
    PlayerConditionID?: string;
    RoleType?: string;
    LfgDungeonsID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
}
interface LanguageWordsDatabase{
    ID?: string;
    LanguageID?: string;
    Word?: string;
}
interface LanguagesDatabase{
    ID?: string;
    Name_lang?: string;
}
interface LfgDungeonsGroupingMapDatabase{
    ID?: string;
    LfgDungeonsID?: string;
    Random_lfgDungeonsID?: string;
    Group_ID?: string;
}
interface LightDatabase{
    ID?: string;
    ContinentID?: string;
    LightParamsID?: string;
    GameCoords?: string;
    GameFalloffEnd?: string;
    GameFalloffStart?: string;
}
interface LightDataDatabase{
    ID?: string;
    LightParamID?: string;
    Time?: string;
    DirectColor?: string;
    AmbientColor?: string;
    SkyTopColor?: string;
    SkyMiddleColor?: string;
    SkyBand1Color?: string;
    SkyBand2Color?: string;
    SkySmogColor?: string;
    SkyFogColor?: string;
    SunColor?: string;
    CloudSunColor?: string;
    CloudEmissiveColor?: string;
    CloudLayer1AmbientColor?: string;
    CloudLayer2AmbientColor?: string;
    OceanCloseColor?: string;
    OceanFarColor?: string;
    RiverCloseColor?: string;
    RiverFarColor?: string;
    ShadowOpacity?: string;
    FogEnd?: string;
    FogScaler?: string;
    CloudDensity?: string;
    FogDensity?: string;
    ColorGradingFileDataID?: string;
    EndFogColor?: string;
    EndFogColorDistance?: string;
    FogHeight?: string;
    FogHeightColor?: string;
    FogHeightDensity?: string;
    FogHeightScaler?: string;
    GroundAmbientColor?: string;
    HorizonAmbientColor?: string;
    SunFogAngle?: string;
    SunFogColor?: string;
    SunFogStrength?: string;
    FogHeightCoefficients?: string;
    Field_9_0_1_33978_026?: string;
    DarkerColorGradingFileDataID?: string;
    MainFogCoefficients?: string;
    Field_9_1_0_38312_027?: string;
    Field_9_1_0_38312_028?: string;
    Field_9_1_0_38312_037?: string;
    Field_9_1_0_38312_041?: string;
    Field_9_1_0_38312_044?: string;
}
interface LightIntBandDatabase{
    ID?: string;
    Num?: string;
    Time?: string;
    Data?: string;
}
interface LightFloatBandDatabase{
    ID?: string;
    Num?: string;
    Time?: string;
    Data?: string;
}
interface LightParamsDatabase{
    ID?: string;
    HighlightSky?: string;
    LightSkyboxID?: string;
    CloudTypeID?: string;
    Glow?: string;
    WaterShallowAlpha?: string;
    WaterDeepAlpha?: string;
    OceanShallowAlpha?: string;
    OceanDeepAlpha?: string;
    Flags?: string;
    OverrideCelestialSphere?: string;
    SsaoSettingsID?: string;
}
interface LightSkyboxDatabase{
    ID?: string;
    Name?: string;
    Flags?: string;
    CelestialSkyboxFileDataID?: string;
    SkyboxFileDataID?: string;
}
interface LightningDatabase{
    ID?: string;
    BoltBrightnessScalar?: string;
    BoltColor?: string;
    BoltDirection?: string;
    BoltDirectionVariance?: string;
    Brightness?: string;
    CloudBrightnessScalar?: string;
    FlashColor?: string;
    GroundBrightnessScalar?: string;
    MaxBoltHeight?: string;
    MaxBoltWidth?: string;
    MaxCloudDepth?: string;
    MaxConvergenceSpeed?: string;
    MaxDivergence?: string;
    MaxEndTime?: string;
    MaxFadeInStrength?: string;
    MaxFadeTime?: string;
    MaxSegmentCount?: string;
    MaxStrikeStrength?: string;
    MaxStrikeTime?: string;
    MinBoltHeight?: string;
    MinBoltWidth?: string;
    MinCloudDepth?: string;
    MinConvergenceSpeed?: string;
    MinDivergence?: string;
    MinEndTime?: string;
    MinFadeInStrength?: string;
    MinFadeTime?: string;
    MinStrikeStrength?: string;
    MinStrikeTime?: string;
    SegmentSize?: string;
    SoundEmitterDistance?: string;
    SoundKitID?: string;
    Field_1_13_2_30073_020Min?: string;
    Field_1_13_2_30073_021Max?: string;
}
interface LiquidObjectDatabase{
    ID?: string;
    FlowDirection?: string;
    FlowSpeed?: string;
    LiquidTypeID?: string;
    Fishable?: string;
    Reflection?: string;
}
interface LiquidMaterialDatabase{
    ID?: string;
    LVF?: string;
    Flags?: string;
}
interface LiquidTypeDatabase{
    ID?: string;
    Name?: string;
    Flags?: string;
    SoundBank?: string;
    SoundID?: string;
    SpellID?: string;
    MaxDarkenDepth?: string;
    FogDarkenIntensity?: string;
    AmbDarkenIntensity?: string;
    DirDarkenIntensity?: string;
    LightID?: string;
    ParticleScale?: string;
    ParticleMovement?: string;
    ParticleTexSlots?: string;
    MaterialID?: string;
    Texture?: string;
    Color?: string;
    Float?: string;
    Int?: string;
    Coefficient?: string;
    FrameCountTexture?: string;
    MinimapStaticCol?: string;
    MinDetail?: string;
    LoDetail_ID?: string;
    HiDetail_ID?: string;
    Field_3_0_1_8334_006?: string;
}
interface LoadingScreenSkinDatabase{
    ID?: string;
    UiTextureAtlasElementID?: string;
    FileDataID?: string;
}
interface LiquidTypeXTextureDatabase{
    ID?: string;
    FileDataID?: string;
    OrderIndex?: string;
    LiquidTypeID?: string;
    Type?: string;
}
interface LoadingScreenTaxiSplinesDatabase{
    ID?: string;
    PathID?: string;
    Locx?: string;
    Locy?: string;
    LegIndex?: string;
    LoadingScreenID?: string;
}
interface LoadingScreensDatabase{
    ID?: string;
    Name?: string;
    FileName?: string;
    HasWideScreen?: string;
    NarrowScreenFileDataID?: string;
    WideScreen169FileDataID?: string;
    WideScreenFileDataID?: string;
    LoadingScreenSkinID?: string;
    MainImageFileDataID?: string;
    LogoFileDataID?: string;
    Field_8_1_5_28938_006?: string;
    Field_8_1_5_28938_007?: string;
    Field_8_1_5_28938_008?: string;
    Field_8_1_5_28938_009?: string;
}
interface LocationDatabase{
    ID?: string;
    Pos?: string;
    Rot?: string;
}
interface LocaleDatabase{
    Field_6_0_1_18179_001?: string;
    ID?: string;
    ClientDisplayExpansion?: string;
    FontFileDataID?: string;
    Secondary?: string;
    WowLocale?: string;
    Cfg_regionsID?: string;
    Field_5_0_2_15827_001?: string;
}
interface LockDatabase{
    ID?: string;
    Type?: string;
    Index?: string;
    Skill?: string;
    Action?: string;
    Flags?: string;
}
interface LockTypeDatabase{
    ID?: string;
    Name_lang?: string;
    ResourceName_lang?: string;
    Verb_lang?: string;
    CursorName?: string;
    EnumID?: string;
}
interface LookAtControllerDatabase{
    ID?: string;
    Flags?: string;
    HeadSpeedFactor?: string;
    MaxHeadPitch?: string;
    MaxHeadYaw?: string;
    MaxTorsoPitchDown?: string;
    MaxTorsoPitchUp?: string;
    MaxTorsoYaw?: string;
    MaxTorsoYawWhileMoving?: string;
    ReactionEnableDistance?: string;
    ReactionEnableFOVDeg?: string;
    ReactionGiveupDistance?: string;
    ReactionGiveupFOVDeg?: string;
    ReactionGiveupTimeMS?: string;
    ReactionIgnoreTimeMaxMS?: string;
    ReactionIgnoreTimeMinMS?: string;
    ReactionWarmUpTimeMSMax?: string;
    ReactionWarmUpTimeMSMin?: string;
    TorsoSpeedFactor?: string;
}
interface LoreTextDatabase{
    ID?: string;
    Text_lang?: string;
    Title_lang?: string;
    ConditionID?: string;
}
interface LoreTextPublicDatabase{
    LoreTextID?: string;
    CampaignID?: string;
    ConditionID?: string;
    Flags?: string;
    Order?: string;
    ParentID?: string;
}
interface MailTemplateDatabase{
    ID?: string;
    Subject_lang?: string;
    Body_lang?: string;
}
interface MCRSlotXMCRCategoryDatabase{
    ID?: string;
    ModifiedCraftingCategoryID?: string;
    ModifiedCraftingReagentSlotID?: string;
}
interface ManagedWorldStateDatabase{
    ID?: string;
    CurrentStageWorldStateID?: string;
    OccurrencesWorldStateID?: string;
    ProgressWorldStateID?: string;
    AccumulationAmountPerMinute?: string;
    AccumulationStateTargetValue?: string;
    DepletionAmountPerMinute?: string;
    DepletionStateTargetValue?: string;
    DownTimeSecs?: string;
    UpTimeSecs?: string;
    Field_8_1_5_29418_009?: string;
}
interface ManagedWorldStateBuffDatabase{
    ID?: string;
    BuffSpellID?: string;
    ManagedWorldStateID?: string;
    OccurrenceValue?: string;
    PlayerConditionID?: string;
}
interface ManagedWorldStateInputDatabase{
    ID?: string;
    ManagedWorldStateID?: string;
    QuestID?: string;
    ValidInputConditionID?: string;
}
interface ManifestInterfaceActionIconDatabase{
    ID?: string;
}
interface ManifestInterfaceDataDatabase{
    ID?: string;
    FilePath?: string;
    FileName?: string;
}
interface ManifestInterfaceItemIconDatabase{
    ID?: string;
}
interface ManifestInterfaceTOCDataDatabase{
    ID?: string;
    FilePath?: string;
}
interface ManifestMP3Database{
    ID?: string;
}
interface MapChallengeModeDatabase{
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    ID?: string;
    CriteriaCount?: string;
    Flags?: string;
    MapID?: string;
    Name_lang?: string;
    ExpansionLevel?: string;
    Field_5_0_1_15464_002?: string;
    Field_5_0_1_15464_003?: string;
    Field_5_0_1_15464_004?: string;
}
interface MapCelestialBodyDatabase{
    ID?: string;
    CelestialBodyID?: string;
    MapID?: string;
    PlayerConditionID?: string;
}
interface MapDatabase{
    ID?: string;
    Directory?: string;
    PVP?: string;
    IsInMap?: string;
    MapName_lang?: string;
    InstanceType?: string;
    MapType?: string;
    MinLevel?: string;
    MaxLevel?: string;
    MaxPlayers?: string;
    Unk0?: string;
    Unk1?: string;
    Unk2?: string;
    ParentMapID?: string;
    MapDescription0_lang?: string;
    MapDescription1_lang?: string;
    LoadingScreenID?: string;
    RaidOffset?: string;
    Continentname?: string;
    Unk3?: string;
    AreaTableID?: string;
    MinimapIconScale?: string;
    Unk4?: string;
    TimeOfDayOverride?: string;
    ExpansionID?: string;
    Flags?: string;
    CorpseMapID?: string;
    Corpse?: string;
    CosmeticParentMapID?: string;
    TimeOffset?: string;
    WindSettingsID?: string;
    PvpShortDescription_lang?: string;
    PvpLongDescription_lang?: string;
    CorpseX?: string;
    CorpseY?: string;
    ZmpFileDataID?: string;
    WdtFileDataID?: string;
    InternalName?: string;
    Field_0_7_0_3694_007?: string;
    Field_0_7_0_3694_008?: string;
    Field_2_0_3_6299_023?: string;
    Field_2_0_3_6299_024?: string;
    Field_2_0_3_6299_025?: string;
    Field_0_8_0_3734_004?: string;
    Field_0_8_0_3734_005?: string;
    Field_1_5_0_4442_006?: string;
    Field_0_7_0_3694_006?: string;
    Field_3_0_2_9056_013?: string;
    Field_2_0_0_5610_018_lang?: string;
    Field_2_0_0_5610_019_lang?: string;
    Field_2_0_0_5610_020_lang?: string;
    Field_1_5_0_4442_014?: string;
    Field_3_0_2_9056_021?: string;
    Field_1_7_0_4671_015?: string;
}
interface MapDifficultyDatabase{
    ID?: string;
    MapID?: string;
    DifficultyID?: string;
    Message_lang?: string;
    RaidDuration?: string;
    MaxPlayers?: string;
    LockID?: string;
    Flags?: string;
    ItemContext?: string;
    ItemContextPickerID?: string;
    ResetInterval?: string;
    Difficulty?: string;
    Difficultystring?: string;
    ContentTuningID?: string;
}
interface MapDifficultyXConditionDatabase{
    ID?: string;
    FailureDescription_lang?: string;
    MapDifficultyID?: string;
    OrderIndex?: string;
    PlayerConditionID?: string;
}
interface MapLoadingScreenDatabase{
    ID?: string;
    LoadingScreenID?: string;
    MapID?: string;
    Max?: string;
    Min?: string;
    OrderIndex?: string;
}
interface MarketingPromotionsXLocaleDatabase{
    ID?: string;
    AcceptButtonTexture?: string;
    AcceptURL?: string;
    AdTexture?: string;
    DeclineButtonTexture?: string;
    LocaleID?: string;
    LogoTexture?: string;
    PromotionID?: string;
}
interface MaterialDatabase{
    ID?: string;
    Flags?: string;
    FoleySoundID?: string;
    SheatheSoundID?: string;
    UnsheatheSoundID?: string;
    MaterialID?: string;
}
interface MawPowerDatabase{
    ID?: string;
    SpellID?: string;
    MawPowerRarityID?: string;
}
interface MissileTargetingDatabase{
    ID?: string;
    ArcRepeat?: string;
    ArcSpeed?: string;
    ArcTextureFileID?: string;
    ArcWidth?: string;
    EndOpacity?: string;
    ImpactModelFileID?: string;
    ImpactRadius?: string;
    ImpactTexRadius?: string;
    ImpactTextureFileID?: string;
    MouseLingering?: string;
    PitchLingering?: string;
    TurnLingering?: string;
}
interface MawPowerRarityDatabase{
    ID?: string;
    Color?: string;
    Border?: string;
}
interface ModelAnimCloakDampeningDatabase{
    ID?: string;
    AnimationDataID?: string;
    CloakDampeningID?: string;
    FileDataID?: string;
}
interface MinorTalentDatabase{
    ID?: string;
    ChrSpecializationID?: string;
    SpellID?: string;
    OrderIndex?: string;
}
interface ModelFileDataDatabase{
    FileDataID?: string;
    Flags?: string;
    LodCount?: string;
    ModelResourcesID?: string;
}
interface ModelManifestDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Padding_6_0_1_18179_005?: string;
    Field_6_0_1_18179_006?: string;
    Field_6_0_1_18179_007?: string;
}
interface ModelNameToManifestDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
}
interface ModifiedCraftingCategoryDatabase{
    ID?: string;
    DisplayName_lang?: string;
    Field_9_0_1_33978_001?: string;
}
interface ModelRibbonQualityDatabase{
    ID?: string;
    FileDataID?: string;
    RibbonQualityID?: string;
}
interface ModifiedCraftingReagentSlotDatabase{
    ID?: string;
    Name_lang?: string;
    Field_9_0_1_33978_001?: string;
    PlayerConditionID?: string;
}
interface ModifiedCraftingSpellSlotDatabase{
    ID?: string;
    SpellID?: string;
    Slot?: string;
    ModifiedCraftingReagentSlotID?: string;
    Field_9_0_1_35679_003?: string;
}
interface ModifierTreeDatabase{
    ID?: string;
    Type?: string;
    Asset?: string;
    SecondaryAsset?: string;
    Operator?: string;
    Amount?: string;
    Parent?: string;
    TertiaryAsset?: string;
}
interface ModifiedCraftingReagentItemDatabase{
    ID?: string;
    Description_lang?: string;
    ModifiedCraftingCategoryID?: string;
    ItemBonusTreeID?: string;
    Flags?: string;
    Field_9_1_0_38312_004?: string;
    Field_9_1_0_38511_004?: string;
    Field_9_1_0_38511_005?: string;
}
interface ModifiedReagentItemDatabase{
    ItemID?: string;
    ModifiedCraftingReagentItemID?: string;
}
interface MountDatabase{
    CreatureDisplayInfoID?: string;
    Field_6_0_1_18179_007?: string;
    ID?: string;
    Description_lang?: string;
    Flags?: string;
    MountFlyRideHeight?: string;
    MountTypeID?: string;
    Name_lang?: string;
    PlayerConditionID?: string;
    SourceSpellID?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
    UiModelSceneID?: string;
    MountSpecialRiderAnimKitID?: string;
    MountSpecialSpellVisualKitID?: string;
}
interface MountCapabilityDatabase{
    ID?: string;
    Flags?: string;
    ReqRidingSkill?: string;
    ReqAreaID?: string;
    ReqSpellAuraID?: string;
    ReqSpellKnownID?: string;
    ModSpellAuraID?: string;
    ReqMapID?: string;
    PlayerConditionID?: string;
}
interface MountEquipmentDatabase{
    ID?: string;
    Item?: string;
    BuffSpell?: string;
    Field_8_2_0_30080_002?: string;
    LearnedBySpell?: string;
}
interface MountTypeDatabase{
    ID?: string;
    Capability?: string;
}
interface MountTypeXCapabilityDatabase{
    ID?: string;
    MountCapabilityID?: string;
    MountTypeID?: string;
    OrderIndex?: string;
}
interface MountXSpellVisualKitPickerDatabase{
    ID?: string;
    SpellVisualKitPickerID?: string;
    Index?: string;
    Purpose?: string;
    Priority?: string;
    MountID?: string;
}
interface MountXDisplayDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    MountID?: string;
    PlayerConditionID?: string;
}
interface MovieDatabase{
    ID?: string;
    Volume?: string;
    KeyID?: string;
    AudioFileDataID?: string;
    SubtitleFileDataID?: string;
    Filename?: string;
}
interface MovieOverlaysDatabase{
    ID?: string;
    MovieID?: string;
    LocaleMask?: string;
    OverlayRangeBegin?: string;
    OverlayRangeEnd?: string;
}
interface MovieVariationDatabase{
    ID?: string;
    MovieID?: string;
    FileDataID?: string;
    OverlayFileDataID?: string;
}
interface MultiStatePropertiesDatabase{
    ID?: string;
    CollisionHull?: string;
    Facing?: string;
    Flags?: string;
    GameEventID?: string;
    GameObjectID?: string;
    MultiPropertiesID?: string;
    Offset?: string;
    StateIndex?: string;
    TransitionInID?: string;
    TransitionOutID?: string;
    SpellVisualKitID?: string;
}
interface MovieFileDataDatabase{
    FileDataID?: string;
    Resolution?: string;
    ID?: string;
}
interface MythicPlusSeasonRewardLevelsDatabase{
    ID?: string;
    DifficultyLevel?: string;
    WeeklyRewardLevel?: string;
    EndOfRunRewardLevel?: string;
    Season?: string;
    MythicPlusSeasonID?: string;
}
interface MythicPlusSeasonTrackedAffixDatabase{
    ID?: string;
    KeystoneAffixID?: string;
    Season?: string;
    Field_9_1_0_38511_003?: string;
    Field_9_1_0_38511_004?: string;
}
interface MythicPlusSeasonDatabase{
    ID?: string;
    Season?: string;
    ExpansionLevel?: string;
    SomeItemLevel?: string;
}
interface MultiTransitionPropertiesDatabase{
    ID?: string;
    DurationMS?: string;
    TransitionType?: string;
    Flags?: string;
    StartSpellVisualKitID?: string;
    EndSpellVisualKitID?: string;
}
interface NPCModelItemSlotDisplayInfoDatabase{
    ID?: string;
    ItemDisplayInfoID?: string;
    ItemSlot?: string;
    NpcModelID?: string;
}
interface NameGenDatabase{
    ID?: string;
    Name?: string;
    RaceID?: string;
    Sex?: string;
}
interface NPCSoundsDatabase{
    ID?: string;
    SoundID?: string;
}
interface NamesProfanityDatabase{
    ID?: string;
    Name?: string;
    Language?: string;
}
interface NamesReservedLocaleDatabase{
    ID?: string;
    Name?: string;
    LocaleMask?: string;
}
interface NamesReservedDatabase{
    ID?: string;
    Name?: string;
    Language?: string;
}
interface ObjectEffectGroupDatabase{
    ID?: string;
    Name?: string;
}
interface NumTalentsAtLevelDatabase{
    ID?: string;
    NumTalents?: string;
    NumTalentsDeathKnight?: string;
    NumTalentsDemonHunter?: string;
    Level?: string;
    NumberOfTalents?: string;
}
interface ObjectEffectDatabase{
    ID?: string;
    Name?: string;
    ObjectEffectGroupID?: string;
    TriggerType?: string;
    EventType?: string;
    EffectRecType?: string;
    EffectRecID?: string;
    Attachment?: string;
    Offset?: string;
    ObjectEffectModifierID?: string;
}
interface ObjectEffectPackageDatabase{
    ID?: string;
    Name?: string;
}
interface ObjectEffectModifierDatabase{
    ID?: string;
    InputType?: string;
    MapType?: string;
    OutputType?: string;
    Param?: string;
}
interface ObjectEffectPackageElemDatabase{
    ID?: string;
    ObjectEffectPackageID?: string;
    ObjectEffectGroupID?: string;
    StateType?: string;
}
interface ObjectEffectStateNameDatabase{
    Name?: string;
    Value?: string;
}
interface OccluderDatabase{
    ID?: string;
    MapID?: string;
    Type?: string;
    SplineType?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Alpha?: string;
    Flags?: string;
}
interface OccluderCurtainDatabase{
    ID?: string;
    MapID?: string;
    Field_2_5_1_38043_001?: string;
    Field_2_5_1_38043_002?: string;
    Field_2_5_1_38043_003?: string;
    Field_2_5_1_38043_004?: string;
    Field_2_5_1_38043_005?: string;
}
interface OccluderNodeDatabase{
    ID?: string;
    OccluderID?: string;
    Sequence?: string;
    LocationID?: string;
}
interface OccluderLocationDatabase{
    ID?: string;
    MapID?: string;
    Pos?: string;
    Rot?: string;
}
interface OverrideSpellDataDatabase{
    ID?: string;
    Spells?: string;
    Flags?: string;
    PlayerActionbarFileDataID?: string;
    PlayerActionbar?: string;
}
interface OutlineEffectDatabase{
    ID?: string;
    Flags?: string;
    HighlightColorID?: string;
    PassiveHighlightColorID?: string;
    Priority?: string;
    Range?: string;
    UnitConditionID?: string;
}
interface PVPBracketTypesDatabase{
    ID?: string;
    BracketID?: string;
    WeeklyQuestID?: string;
}
interface PVPDifficultyDatabase{
    ID?: string;
    MapID?: string;
    RangeIndex?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Difficulty?: string;
}
interface PVPScoreboardCellInfoDatabase{
    ID?: string;
    PVPScoreboardColumnHeaderID?: string;
    Icon?: string;
    Team?: string;
}
interface PVPScoreboardColumnHeaderDatabase{
    Tooltip_lang?: string;
    Name_lang?: string;
    ID?: string;
    Field_8_2_0_30430_003?: string;
}
interface PVPItemDatabase{
    ID?: string;
    ItemID?: string;
    ItemLevelDelta?: string;
}
interface PVPStatDatabase{
    Description_lang?: string;
    ID?: string;
    MapID?: string;
}
interface PVPScoreboardLayoutDatabase{
    ID?: string;
    PVPStatID?: string;
    PVPScoreboardColumnHeaderID?: string;
    OrderIndex?: string;
}
interface PageTextMaterialDatabase{
    ID?: string;
    Name?: string;
}
interface PackageDatabase{
    ID?: string;
    Icon?: string;
    Cost?: string;
    Name_lang?: string;
}
interface ParticleColorDatabase{
    ID?: string;
    Start?: string;
    MID?: string;
    End?: string;
}
interface ParagonReputationDatabase{
    ID?: string;
    FactionID?: string;
    LevelThreshold?: string;
    QuestID?: string;
}
interface PaperDollItemFrameDatabase{
    ItemButtonName?: string;
    SlotIcon?: string;
    SlotNumber?: string;
    ID?: string;
    SlotIconFileID?: string;
}
interface ParticulateDatabase{
    ID?: string;
    MapID?: string;
    PlayerConditionID?: string;
}
interface ParticulateSoundDatabase{
    ID?: string;
    ParticulateID?: string;
    DaySound?: string;
    NightSound?: string;
    EnterSound?: string;
    ExitSound?: string;
}
interface PathDatabase{
    ID?: string;
    Alpha?: string;
    Blue?: string;
    Flags?: string;
    Green?: string;
    Red?: string;
    SplineType?: string;
    Type?: string;
}
interface PathEdgeDatabase{
    ID?: string;
    PathNodeID?: string;
    PathID?: string;
}
interface PathNodeDatabase{
    ID?: string;
    LocationID?: string;
    PathID?: string;
    Sequence?: string;
}
interface PathNodePropertyDatabase{
    ID?: string;
    PathID?: string;
    PropertyIndex?: string;
    Sequence?: string;
    Value?: string;
    Field_8_1_0_27934_003?: string;
}
interface PathPropertyDatabase{
    ID?: string;
    PathID?: string;
    PropertyIndex?: string;
    Value?: string;
}
interface PetPersonalityDatabase{
    ID?: string;
    Name_lang?: string;
    HappinessThreshold?: string;
    HappinessDamage?: string;
    DamageModifier?: string;
    Field_1_13_0_28211_003?: string;
}
interface PetitionTypeDatabase{
    ID?: string;
    Name?: string;
    Type?: string;
}
interface PetLoyaltyDatabase{
    ID?: string;
    Name_lang?: string;
}
interface PhaseDatabase{
    ID?: string;
    Name?: string;
    Flags?: string;
    MapID?: string;
    PhaseShift?: string;
    ChildMap?: string;
    ParentMapID?: string;
}
interface PhaseXPhaseGroupDatabase{
    ID?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
}
interface PhaseShiftZoneSoundsDatabase{
    ID?: string;
    AreaID?: string;
    WMOAreaID?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    PhaseUseFlags?: string;
    ZoneIntroMusicID?: string;
    ZoneMusicID?: string;
    SoundAmbienceID?: string;
    SoundProviderPreferencesID?: string;
    UWZoneIntroMusicID?: string;
    UWZoneMusicID?: string;
    UWSoundAmbienceID?: string;
    UWSoundProviderPreferencesID?: string;
}
interface PositionerDatabase{
    ID?: string;
    FirstStateID?: string;
    Flags?: string;
    StartLife?: string;
    StartLifePercent?: string;
}
interface PositionerStateDatabase{
    ID?: string;
    EndLife?: string;
    EndLifePercent?: string;
    Flags?: string;
    NextStateID?: string;
    PosEntryID?: string;
    RotEntryID?: string;
    ScaleEntryID?: string;
    TransformMatrixID?: string;
}
interface PowerTypeDatabase{
    ID?: string;
    CenterPower?: string;
    CostGlobalStringTag?: string;
    DefaultPower?: string;
    DisplayModifier?: string;
    Flags?: string;
    MaxBasePower?: string;
    MinPower?: string;
    NameGlobalStringTag?: string;
    PowerTypeEnum?: string;
    RegenCombat?: string;
    RegenInterruptTimeMS?: string;
    RegenPeace?: string;
}
interface PlayerConditionDatabase{
    ID?: string;
    Flags?: string;
    MinLevel?: string;
    MaxLevel?: string;
    RaceMask?: string;
    ClassMask?: string;
    Gender?: string;
    NativeGender?: string;
    SkillID?: string;
    MinSkill?: string;
    MaxSkill?: string;
    SkillLogic?: string;
    LanguageID?: string;
    MinLanguage?: string;
    MaxLanguage?: string;
    MinFactionID?: string;
    MaxFactionID?: string;
    MinReputation?: string;
    MaxReputation?: string;
    ReputationLogic?: string;
    MinPVPRank?: string;
    MaxPVPRank?: string;
    PvpMedal?: string;
    PrevQuestLogic?: string;
    PrevQuestID?: string;
    CurrQuestLogic?: string;
    CurrQuestID?: string;
    CurrentCompletedQuestLogic?: string;
    CurrentCompletedQuestID?: string;
    SpellLogic?: string;
    SpellID?: string;
    ItemLogic?: string;
    ItemID?: string;
    ItemCount?: string;
    ItemFlags?: string;
    Explored?: string;
    Time?: string;
    AuraSpellLogic?: string;
    AuraSpellID?: string;
    WorldStateExpressionID?: string;
    WeatherID?: string;
    PartyStatus?: string;
    LifetimeMaxPVPRank?: string;
    AchievementLogic?: string;
    Achievement?: string;
    LfgLogic?: string;
    LfgStatus?: string;
    LfgCompare?: string;
    LfgValue?: string;
    AreaLogic?: string;
    AreaID?: string;
    CurrencyLogic?: string;
    CurrencyID?: string;
    CurrencyCount?: string;
    QuestKillID?: string;
    QuestKillLogic?: string;
    QuestKillMonster?: string;
    MinExpansionLevel?: string;
    MaxExpansionLevel?: string;
    MinExpansionTier?: string;
    MaxExpansionTier?: string;
    MinGuildLevel?: string;
    MaxGuildLevel?: string;
    PhaseUseFlags?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    MinAvgItemLevel?: string;
    MaxAvgItemLevel?: string;
    MinAvgEquippedItemLevel?: string;
    MaxAvgEquippedItemLevel?: string;
    ChrSpecializationIndex?: string;
    ChrSpecializationRole?: string;
    Failure_description_lang?: string;
    PowerType?: string;
    PowerTypeComp?: string;
    PowerTypeValue?: string;
    AuraStacks?: string;
    CurrentPvpFaction?: string;
    ModifierTreeID?: string;
    MovementFlags?: string;
    WeaponSubclassMask?: string;
    ContentTuningID?: string;
    CovenantID?: string;
    Field_7_3_2_25549_029?: string;
}
interface PositionerStateEntryDatabase{
    ID?: string;
    CurveID?: string;
    DstType?: string;
    DstVal?: string;
    DstValType?: string;
    EntryType?: string;
    ParamA?: string;
    ParamB?: string;
    SrcType?: string;
    SrcVal?: string;
    SrcValType?: string;
    Style?: string;
}
interface PowerDisplayDatabase{
    ID?: string;
    ActualType?: string;
    GlobalStringBaseTag?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_4_0_0_11792_006?: string;
}
interface PrestigeLevelInfoDatabase{
    ID?: string;
    BadgeTextureFileDataID?: string;
    Flags?: string;
    Name_lang?: string;
    PrestigeLevel?: string;
    HonorLevel?: string;
    AwardedAchievementID?: string;
}
interface PvpBrawlDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    Objective_lang?: string;
    BattlemasterListID?: string;
    LFGDungeonsID?: string;
    RewardsQuestID?: string;
}
interface PvpScalingEffectDatabase{
    ID?: string;
    PvpScalingEffectTypeID?: string;
    SpecializationID?: string;
    Value?: string;
}
interface PvpRewardDatabase{
    ID?: string;
    HonorLevel?: string;
    PrestigeLevel?: string;
    RewardPackID?: string;
}
interface PvpScalingEffectTypeDatabase{
    ID?: string;
    Name?: string;
}
interface PvpSeasonRewardLevelsDatabase{
    ID?: string;
    Tier?: string;
    EndOfMatchILvl?: string;
    WeeklyCacheILvl?: string;
    PvpSeasonID?: string;
}
interface PvpSeasonDatabase{
    ID?: string;
    Season?: string;
}
interface PvpTalentDatabase{
    ID?: string;
    ActionBarSpellID?: string;
    Description_lang?: string;
    Flags?: string;
    LevelRequired?: string;
    OverridesSpellID?: string;
    PvpTalentCategoryID?: string;
    SpecID?: string;
    SpellID?: string;
    ClassID?: string;
    Field_1_13_0_28211_005?: string;
    Field_1_13_0_28211_006?: string;
    Field_1_13_0_28211_010?: string;
}
interface PvpTalentCategoryDatabase{
    ID?: string;
    TalentSlotMask?: string;
}
interface PvpTalentUnlockDatabase{
    ID?: string;
    Field_1_13_0_28211_001?: string;
    Field_1_13_0_28211_002?: string;
    Field_1_13_0_28211_003?: string;
}
interface PvpTalentSlotUnlockDatabase{
    ID?: string;
    DeathKnightLevelRequired?: string;
    DemonHunterLevelRequired?: string;
    LevelRequired?: string;
    Slot?: string;
}
interface QuestFactionRewardDatabase{
    ID?: string;
    Difficulty?: string;
}
interface PvpTierDatabase{
    ID?: string;
    Name_lang?: string;
    PrevTier?: string;
    NextTier?: string;
    MinRating?: string;
    MaxRating?: string;
    BracketID?: string;
    Rank?: string;
    RankIcon?: string;
}
interface QuestInfoDatabase{
    ID?: string;
    InfoName_lang?: string;
    Modifiers?: string;
    Profession?: string;
    Type?: string;
}
interface QuestFeedbackEffectDatabase{
    ID?: string;
    FileDataID?: string;
    AttachPoint?: string;
    Minimapobject?: string;
    Priority?: string;
    Flags?: string;
    MinimapAtlasMemberID?: string;
    PassiveHighlightColorType?: string;
    InteractCursor?: string;
    SpellID?: string;
}
interface QuestLineDatabase{
    Name_lang?: string;
    ID?: string;
    QuestID?: string;
    Description_lang?: string;
    PlayerConditionID?: string;
}
interface QuestLineXQuestDatabase{
    ID?: string;
    OrderIndex?: string;
    QuestID?: string;
    QuestLineID?: string;
}
interface QuestObjectiveDatabase{
    ID?: string;
    QuestID?: string;
    OrderIndex?: string;
    StorageIndex?: string;
    Amount?: string;
    Type?: string;
    ObjectID?: string;
    Description_lang?: string;
    Flags?: string;
}
interface QuestMoneyRewardDatabase{
    ID?: string;
    Difficulty?: string;
}
interface QuestPOIBlobDatabase{
    ID?: string;
    NumPoints?: string;
    MapID?: string;
    WorldMapAreaID?: string;
    Floor?: string;
    ObjectiveIndex?: string;
    QuestID?: string;
    PlayerConditionID?: string;
    UiMapID?: string;
    ObjectiveID?: string;
    Field_9_0_1_34490_008?: string;
}
interface QuestPackageItemDatabase{
    ID?: string;
    DisplayType?: string;
    ItemID?: string;
    ItemQuantity?: string;
    PackageID?: string;
}
interface QuestPOIPointDatabase{
    ID?: string;
    X?: string;
    Y?: string;
    QuestPOIBlobID?: string;
    Z?: string;
}
interface QuestSortDatabase{
    ID?: string;
    SortName_lang?: string;
    UiOrderIndex?: string;
}
interface QuestV2Database{
    ID?: string;
    UniqueBitFlag?: string;
}
interface QuestV2CliTaskDatabase{
    ID?: string;
    BreadCrumbID?: string;
    QuestTitle_lang?: string;
    BulletText_lang?: string;
    ConditionID?: string;
    FiltClasses?: string;
    FiltRaces?: string;
    FiltActiveQuest?: string;
    FiltNonActiveQuest?: string;
    FiltCompletedQuest?: string;
    FiltCompletedQuestLogic?: string;
    FiltMaxFactionID?: string;
    FiltMaxFactionValue?: string;
    FiltMaxLevel?: string;
    FiltMinFactionID?: string;
    FiltMinFactionValue?: string;
    FiltMinLevel?: string;
    FiltMinSkillID?: string;
    FiltMinSkillValue?: string;
    QuestInfoID?: string;
    SandboxScalingID?: string;
    StartItem?: string;
    UniqueBitFlag?: string;
    WorldStateExpressionID?: string;
    ContentTuningID?: string;
    Flags?: string;
    CovenantID?: string;
    Field_9_0_2_36206_022?: string;
    Field_2_5_1_38043_019?: string;
    Field_2_5_1_38043_020?: string;
    Field_2_5_1_38043_021?: string;
    Field_2_5_1_38043_022?: string;
}
interface QuestXGroupActivityDatabase{
    ID?: string;
    GroupFinderActivityID?: string;
    QuestID?: string;
}
interface QuestXPDatabase{
    ID?: string;
    Difficulty?: string;
}
interface QuestXUIQuestDetailsThemeDatabase{
    ID?: string;
    QuestID?: string;
    UiQuestDetailsThemeID?: string;
}
interface QuestXUiWidgetSetDatabase{
    ID?: string;
    QuestID?: string;
    UiWidgetSetID?: string;
}
interface RTPCDatabase{
    ID?: string;
    SoundParameterID?: string;
    GameParameterID?: string;
    CurveID?: string;
    Field_9_0_1_33978_004?: string;
    SoundKitID?: string;
}
interface RTPCDataDatabase{
    ID?: string;
    RTPCID?: string;
    Field_9_0_1_33978_001?: string;
    CreatureID?: string;
    SpellID?: string;
    Field_9_0_1_33978_004?: string;
}
interface RafActivityDatabase{
    ID?: string;
    CriteriaTreeID?: string;
    RewardQuestID?: string;
}
interface RacialMountsDatabase{
    ID?: string;
    Race?: string;
    Spell_ID?: string;
}
interface RecipeProgressionGroupEntryDatabase{
    ID?: string;
    RecipeProgressionGroupID?: string;
    SkillLineAbilityID?: string;
    Order?: string;
    RequiredRecipeExperience?: string;
    EarnedExperienceMask?: string;
    Field_9_0_1_35256_005?: string;
}
interface RandPropPointsDatabase{
    ID?: string;
    Epic?: string;
    Superior?: string;
    Good?: string;
    DamageReplaceStat?: string;
    DamageSecondary?: string;
    DamageReplaceStatF?: string;
    DamageSecondaryF?: string;
    EpicF?: string;
    SuperiorF?: string;
    GoodF?: string;
}
interface RenownRewardsDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    Level?: string;
    CovenantID?: string;
    Flags?: string;
    UiOrder?: string;
    Icon?: string;
    CharTitlesID?: string;
    GarrFollowerID?: string;
    ItemID?: string;
    MountID?: string;
    SpellID?: string;
    TransmogID?: string;
    TransmogIllusionID?: string;
    TransmogSetID?: string;
    QuestID?: string;
    PlayerConditionID?: string;
    ToastDescription_lang?: string;
}
interface RelicSlotTierRequirementDatabase{
    ID?: string;
    PlayerConditionID?: string;
    RelicIndex?: string;
    RelicTier?: string;
}
interface ResearchBranchDatabase{
    ID?: string;
    Name_lang?: string;
    ResearchFieldID?: string;
    CurrencyID?: string;
    Texture?: string;
    ItemID?: string;
    BigTextureFileID?: string;
    TextureFileID?: string;
}
interface ResearchProjectDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    Rarity?: string;
    ResearchBranchID?: string;
    SpellID?: string;
    NumSockets?: string;
    Texture?: string;
    RequiredWeight?: string;
    TextureFileID?: string;
    Field_7_3_0_24473_003?: string;
}
interface ResearchFieldDatabase{
    ID?: string;
    Name_lang?: string;
    Slot?: string;
}
interface ResistancesDatabase{
    ID?: string;
    Flags?: string;
    FizzleSoundID?: string;
    Name_lang?: string;
}
interface RelicTalentDatabase{
    ID?: string;
    ArtifactPowerID?: string;
    ArtifactPowerLabel?: string;
    Flags?: string;
    PVal?: string;
    Type?: string;
}
interface RewardPackDatabase{
    ID?: string;
    ArtifactXPCategoryID?: string;
    ArtifactXPDifficulty?: string;
    ArtifactXPMultiplier?: string;
    CharTitleID?: string;
    Money?: string;
    TreasurePickerID?: string;
}
interface RibbonQualityDatabase{
    ID?: string;
    AngleThreshold?: string;
    Flags?: string;
    MaxSampleTimeDelta?: string;
    MinDistancePerSlice?: string;
    NumStrips?: string;
}
interface RewardPackXItemDatabase{
    ID?: string;
    ItemID?: string;
    ItemQuantity?: string;
    RewardPackID?: string;
}
interface RewardPackXCurrencyTypeDatabase{
    ID?: string;
    CurrencyTypeID?: string;
    Quantity?: string;
    RewardPackID?: string;
}
interface ResearchSiteDatabase{
    ID?: string;
    MapID?: string;
    QuestPOIBlobID?: string;
    Name_lang?: string;
    AreaPOIIconEnum?: string;
}
interface RopeEffectDatabase{
    ID?: string;
    Flags?: string;
    Field_8_3_0_32712_001?: string;
    Field_8_3_0_32712_002?: string;
    Field_8_3_0_32712_003?: string;
    NumberOfJoints?: string;
    Field_8_3_0_32712_005?: string;
    Stiffness?: string;
    Damping?: string;
    IntegrateAtJointIndex?: string;
}
interface RulesetRaidLootUpgradeDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    ItemUpgradeID?: string;
    Field_6_0_1_18179_004?: string;
}
interface RulesetItemUpgradeDatabase{
    Field_6_0_1_18179_001?: string;
    ID?: string;
    ItemID?: string;
    ItemUpgradeID?: string;
}
interface RulesetRaidOverrideDatabase{
    ID?: string;
    MapID?: string;
    DifficultyID?: string;
    RulesetID?: string;
    SharedLock?: string;
    Raidduration?: string;
}
interface RuneforgeLegendaryAbilityDatabase{
    Name_lang?: string;
    ID?: string;
    SpecSetID?: string;
    InventoryTypeMask?: string;
    SpellID?: string;
    ItemBonusListID?: string;
    PlayerConditionID?: string;
    Field_9_0_1_34972_007?: string;
    UnlockItemID?: string;
    CovenantID?: string;
    Field_9_1_0_38549_010?: string;
}
interface SSAOSettingsDatabase{
    ID?: string;
    Field_8_2_0_30080_001?: string;
    Field_8_2_0_30080_002?: string;
    Field_8_2_0_30080_003?: string;
    Radius?: string;
    ShadowMult?: string;
    ShadowPower?: string;
    ShadowClamp?: string;
}
interface SDReplacementModelDatabase{
    ID?: string;
    SdFileDataID?: string;
}
interface SandboxScalingDatabase{
    ID?: string;
    Flags?: string;
    MaxLevel?: string;
    MinLevel?: string;
}
interface ScalingStatDistributionDatabase{
    ID?: string;
    StatID?: string;
    Bonus?: string;
    Minlevel?: string;
    Maxlevel?: string;
    PlayerLevelToItemLevelCurveID?: string;
}
interface ScalingStatValuesDatabase{
    ID?: string;
    Charlevel?: string;
    EffectiveLevel?: string;
    WeaponDPS1H?: string;
    WeaponDPS2H?: string;
    SpellcasterDPS1H?: string;
    SpellcasterDPS2H?: string;
    RangedDPS?: string;
    WandDPS?: string;
    SpellPower?: string;
    BudgetPrimary?: string;
    BudgetSecondary?: string;
    BudgetTertiary?: string;
    BudgetSub?: string;
    BudgetTrivial?: string;
    ArmorShoulder?: string;
    ArmorChest?: string;
    ArmorHead?: string;
    ArmorLegs?: string;
    ArmorFeet?: string;
    ArmorWaist?: string;
    ArmorHands?: string;
    ArmorWrists?: string;
    ArmorBack?: string;
    ArmorShield?: string;
    ShoulderBudget?: string;
    TrinketBudget?: string;
    WeaponBudget1H?: string;
    RangedBudget?: string;
    ClothShoulderArmor?: string;
    LeatherShoulderArmor?: string;
    MailShoulderArmor?: string;
    PlateShoulderArmor?: string;
    PrimaryBudget?: string;
    TertiaryBudget?: string;
    ClothCloakArmor?: string;
    ClothChestArmor?: string;
    LeatherChestArmor?: string;
    MailChestArmor?: string;
    PlateChestArmor?: string;
    Field_4_0_0_12911_002?: string;
    Field_4_0_0_12911_003?: string;
    Field_4_0_0_12911_004?: string;
    Field_4_0_0_12911_005?: string;
    Field_4_0_0_12911_006?: string;
    Field_4_0_0_12911_007?: string;
    Field_4_0_0_12911_008?: string;
    Field_4_0_0_12911_009?: string;
    Field_4_0_0_12911_010?: string;
    Field_4_0_0_12911_011?: string;
    Field_4_0_0_12911_012?: string;
    Field_4_0_0_12911_013?: string;
    Field_4_0_0_12911_022?: string;
    Field_5_0_1_15464_003?: string;
    Field_5_0_1_15464_004?: string;
    Field_5_0_1_15464_005?: string;
    Field_5_0_1_15464_006?: string;
    Field_5_0_1_15464_007?: string;
    Field_5_0_1_15464_008?: string;
    Field_5_0_1_15464_013?: string;
    Field_5_0_1_15464_023?: string;
    Field_5_3_0_16844_003?: string;
    Field_5_3_0_16844_004?: string;
    Field_5_3_0_16844_005?: string;
    Field_5_3_0_16844_006?: string;
    Field_5_3_0_16844_007?: string;
    Field_5_3_0_16844_008?: string;
    Field_5_3_0_16844_009?: string;
    Field_5_3_0_16844_010?: string;
    Field_5_3_0_16844_011?: string;
    Field_5_3_0_16844_012?: string;
    Field_5_3_0_16844_021?: string;
    Field_5_3_0_16844_022?: string;
    Field_5_3_0_16844_023?: string;
    Field_5_3_0_16844_024?: string;
    Field_3_0_1_8471_017?: string;
    Field_3_0_1_8471_018?: string;
    Field_3_0_1_8471_019?: string;
    Field_3_0_1_8885_018?: string;
    Field_3_2_0_10192_018?: string;
}
interface ScenarioDatabase{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
    AreaTableID?: string;
    Type?: string;
    UiTextureKitID?: string;
}
interface ScenarioStepDatabase{
    ID?: string;
    CriteriatreeID?: string;
    ScenarioID?: string;
    OrderIndex?: string;
    Description_lang?: string;
    Title_lang?: string;
    Flags?: string;
    RelatedStep?: string;
    Supersedes?: string;
    RewardQuestID?: string;
    VisibilityPlayerConditionID?: string;
    WidgetSetID?: string;
}
interface ScenarioEventEntryDatabase{
    ID?: string;
    TriggerType?: string;
    TriggerAsset?: string;
}
interface SceneScriptPackageDatabase{
    Name?: string;
    ID?: string;
}
interface SceneScriptGlobalTextDatabase{
    ID?: string;
    Name?: string;
    Script?: string;
}
interface SceneScriptDatabase{
    Name?: string;
    Script?: string;
    ID?: string;
    FirstSceneScriptID?: string;
    NextSceneScriptID?: string;
}
interface SceneScriptTextDatabase{
    ID?: string;
    Name?: string;
    Script?: string;
}
interface SceneScriptPackageMemberDatabase{
    ID?: string;
    ChildSceneScriptPackageID?: string;
    OrderIndex?: string;
    SceneScriptID?: string;
    SceneScriptPackageID?: string;
}
interface ScheduledIntervalDatabase{
    ID?: string;
    DateAlignmentType?: string;
    DurationSecs?: string;
    Flags?: string;
    OffsetSecs?: string;
    RepeatType?: string;
}
interface ScheduledWorldStateDatabase{
    ID?: string;
    DurationSecs?: string;
    Flags?: string;
    OrderIndex?: string;
    ScheduledWorldStateGroupID?: string;
    UniqueCategory?: string;
    Value?: string;
    Weight?: string;
    WorldStateID?: string;
}
interface ScheduledWorldStateGroupDatabase{
    ID?: string;
    Flags?: string;
    Priority?: string;
    ScheduledIntervalID?: string;
    SelectionCount?: string;
    SelectionType?: string;
}
interface ScreenEffectDatabase{
    ID?: string;
    Name?: string;
    Effect?: string;
    Param?: string;
    LightParamsID?: string;
    LightParamsFadeIn?: string;
    LightParamsFadeOut?: string;
    LightFlags?: string;
    SoundAmbienceID?: string;
    ZoneMusicID?: string;
    TimeOfDayOverride?: string;
    EffectMask?: string;
    FullScreenEffectID?: string;
    Field_3_0_1_8303_001?: string;
}
interface ScreenEffectTypeDatabase{
    ID?: string;
    Priority?: string;
}
interface ScheduledWorldStateXUniqCatDatabase{
    ID?: string;
    ScheduledUniqueCategoryID?: string;
    ScheduledWorldStateID?: string;
}
interface ScreenLocationDatabase{
    ID?: string;
    Name?: string;
}
interface SeamlessSiteDatabase{
    ID?: string;
    MapID?: string;
}
interface SheatheSoundLookupsDatabase{
    ID?: string;
    ClassID?: string;
    SubclassID?: string;
    Material?: string;
    CheckMaterial?: string;
    SheatheSound?: string;
    UnsheatheSound?: string;
}
interface ServerMessagesDatabase{
    ID?: string;
    Text_lang?: string;
}
interface ShadowyEffectDatabase{
    ID?: string;
    AttachPos?: string;
    CurveID?: string;
    Duration?: string;
    FadeInTime?: string;
    FadeOutTime?: string;
    Flags?: string;
    InitialDelay?: string;
    InnerStrength?: string;
    OuterStrength?: string;
    PrimaryColor?: string;
    Priority?: string;
    SecondaryColor?: string;
    Value?: string;
}
interface SiegeablePropertiesDatabase{
    ID?: string;
    DamageSpellVisualKitID?: string;
    Flags?: string;
    HealingSpellVisualKitID?: string;
    Health?: string;
}
interface SkillCostsDataDatabase{
    ID?: string;
    SkillCostsID?: string;
    Cost?: string;
}
interface SkillLineDatabase{
    ID?: string;
    CategoryID?: string;
    DisplayName_lang?: string;
    Description_lang?: string;
    SpellIconID?: string;
    AlternateVerb_lang?: string;
    CanLink?: string;
    ParentSkillLineID?: string;
    Flags?: string;
    HordeDisplayName_lang?: string;
    ParentTierIndex?: string;
    SpellIconFileID?: string;
    SkillCostsID?: string;
    RaceMask?: string;
    ClassMask?: string;
    ExcludeRace?: string;
    ExcludeClass?: string;
    SkillType?: string;
    MinCharLevel?: string;
    MaxRank?: string;
    Abandonable?: string;
    NeutralDisplayName?: string;
    SpellBookSpellID?: string;
}
interface SkillLineAbilityDatabase{
    ID?: string;
    SkillLine?: string;
    Spell?: string;
    RaceMask?: string;
    ClassMask?: string;
    MinSkillLineRank?: string;
    SupercedesSpell?: string;
    AcquireMethod?: string;
    TrivialSkillLineRankHigh?: string;
    TrivialSkillLineRankLow?: string;
    NumSkillUps?: string;
    UniqueBit?: string;
    TradeSkillCategoryID?: string;
    Flags?: string;
    SkillupSkillLineID?: string;
    ExcludeRace?: string;
    ExcludeClass?: string;
    SupercededBySpell?: string;
    CharacterPoints?: string;
    Abandonable?: string;
    Field_0_5_5_3494_012?: string;
}
interface SkillLineAbilitySortedSpellDatabase{
    ID?: string;
    Spell?: string;
}
interface SkillLineCategoryDatabase{
    ID?: string;
    Name_lang?: string;
    SortIndex?: string;
}
interface SkySceneXPlayerConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    SkySceneID?: string;
}
interface SkillRaceClassInfoDatabase{
    ID?: string;
    SkillID?: string;
    RaceMask?: string;
    ClassMask?: string;
    Flags?: string;
    Availability?: string;
    MinLevel?: string;
    SkillTierID?: string;
    SkillCostIndex?: string;
}
interface SkillTiersDatabase{
    ID?: string;
    Value?: string;
    Cost?: string;
}
interface SoulbindConduitItemDatabase{
    ID?: string;
    ItemID?: string;
    ConduitID?: string;
}
interface SoulbindDatabase{
    Name_lang?: string;
    ID?: string;
    CovenantID?: string;
    GarrTalentTreeID?: string;
    CreatureID?: string;
    GarrFollowerID?: string;
    PlayerConditionID?: string;
}
interface SoulbindConduitEnhancedSocketDatabase{
    ID?: string;
    GarrTalentID?: string;
    PlayerConditionID?: string;
}
interface SoulbindConduitDatabase{
    ID?: string;
    SpellID?: string;
    ConduitType?: string;
    CovenantID?: string;
    SpecSetID?: string;
    Flags?: string;
}
interface SoulbindConduitRankPropertiesDatabase{
    ID?: string;
    Rank?: string;
    ItemLevel?: string;
    QualityID?: string;
}
interface SoulbindConduitRankDatabase{
    ID?: string;
    RankIndex?: string;
    SpellID?: string;
    AuraPointsOverride?: string;
    SoulbindConduitID?: string;
}
interface SoundAmbienceDatabase{
    ID?: string;
    AmbienceID?: string;
    Flags?: string;
    FlavorSoundFilterID?: string;
    SoundFilterID?: string;
    AmbienceStartID?: string;
    AmbienceStopID?: string;
    SoundKitID?: string;
}
interface SoulbindUIDisplayInfoDatabase{
    Description_lang?: string;
    ID?: string;
    SoulbindID?: string;
    CreatureDisplayInfoID?: string;
    ModelSceneActorID?: string;
    Portrait?: string;
    TextureKitID?: string;
    OrderIndex?: string;
    GlobalOrderIndex?: string;
    ActivationSoundKitID?: string;
}
interface SoundAmbienceFlavorDatabase{
    ID?: string;
    SoundAmbienceID?: string;
    SoundEntriesIDDay?: string;
    SoundEntriesIDNight?: string;
}
interface SoundBusNameDatabase{
    EnumID?: string;
    Name?: string;
}
interface SoundBusDatabase{
    ID?: string;
    Parent?: string;
    DefaultPriority?: string;
    DefaultPriorityPenalty?: string;
    RaidPriority?: string;
    RaidPriorityPenalty?: string;
    DefaultVolume?: string;
    RaidVolume?: string;
    DefaultPlaybackLimit?: string;
    RaidPlaybackLimit?: string;
    BusEnumID?: string;
    Flags?: string;
}
interface SoundBusOverrideDatabase{
    ID?: string;
    PlaybackLimit?: string;
    PlayerConditionID?: string;
    Priority?: string;
    PriorityPenalty?: string;
    SoundBusID?: string;
    Volume?: string;
}
interface SoundCharacterMacroLinesDatabase{
    ID?: string;
    Category?: string;
    Sex?: string;
    Race?: string;
    SoundID?: string;
}
interface SoundEmitterPillPointsDatabase{
    ID?: string;
    SoundEmittersID?: string;
    Position?: string;
}
interface SoundEntriesAdvancedDatabase{
    ID?: string;
    SoundEntryID?: string;
    InnerRadius2D?: string;
    TimeA?: string;
    TimeB?: string;
    TimeC?: string;
    TimeD?: string;
    RandomOffsetRange?: string;
    Usage?: string;
    TimeIntervalMin?: string;
    TimeIntervalMax?: string;
    VolumeSliderCategory?: string;
    DuckToSFX?: string;
    DuckToMusic?: string;
    DuckToAmbience?: string;
    InnerRadiusOfInfluence?: string;
    OuterRadiusOfInfluence?: string;
    TimeToDuck?: string;
    TimeToUnduck?: string;
    InsideAngle?: string;
    OutsideAngle?: string;
    OutsideVolume?: string;
    OuterRadius2D?: string;
    MinRandomPosOffset?: string;
    MaxRandomPosOffset?: string;
    DuckToDialog?: string;
    DuckToSuppressors?: string;
    MsOffset?: string;
    Volume?: string;
    Name?: string;
    Field_4_3_2_15211_025?: string;
    Field_5_1_0_16309_025?: string;
    Field_5_1_0_16309_026?: string;
}
interface SoundEntriesFallbacksDatabase{
    ID?: string;
    SoundEntriesID?: string;
    FallbackSoundEntriesID?: string;
}
interface SoundFilterDatabase{
    ID?: string;
    Name?: string;
}
interface SoundEnvelopeDatabase{
    ID?: string;
    CurveID?: string;
    DecayIndex?: string;
    EnvelopeType?: string;
    Flags?: string;
    ReleaseIndex?: string;
    SoundKitID?: string;
    SustainIndex?: string;
}
interface SoundFilterElemDatabase{
    ID?: string;
    SoundFilterID?: string;
    OrderIndex?: string;
    FilterType?: string;
    Params?: string;
}
interface SoundKitDatabase{
    EAXDef?: string;
    ID?: string;
    BusOverwriteID?: string;
    DialogType?: string;
    DistanceCutoff?: string;
    Flags?: string;
    MaxInstances?: string;
    MinDistance?: string;
    PitchAdjust?: string;
    PitchVariationMinus?: string;
    PitchVariationPlus?: string;
    SoundKitAdvancedID?: string;
    SoundType?: string;
    VolumeFloat?: string;
    VolumeVariationMinus?: string;
    VolumeVariationPlus?: string;
    Field_7_3_0_24473_008?: string;
}
interface SoundKitAdvancedDatabase{
    ID?: string;
    ChanceToPlay?: string;
    DelayMax?: string;
    DelayMin?: string;
    DuckToAmbience?: string;
    DuckToDialog?: string;
    DuckToMusic?: string;
    DuckToSFX?: string;
    DuckToSuppressors?: string;
    InnerRadius2D?: string;
    InnerRadiusOfInfluence?: string;
    InsideAngle?: string;
    MaxInstancesBehavior?: string;
    MaxRandomPosOffset?: string;
    MinRandomPosOffset?: string;
    MsOffset?: string;
    OuterRadius2D?: string;
    OuterRadiusOfInfluence?: string;
    OutsideAngle?: string;
    OutsideVolume?: string;
    RandomOffsetRange?: string;
    SoundKitID?: string;
    TimeA?: string;
    TimeB?: string;
    TimeC?: string;
    TimeCooldownMax?: string;
    TimeCooldownMin?: string;
    TimeD?: string;
    TimeIntervalMax?: string;
    TimeIntervalMin?: string;
    TimeToDuck?: string;
    TimeToUnduck?: string;
    Usage?: string;
    VolumeControlType?: string;
    VolumeFadeInCurveID?: string;
    VolumeFadeInTimeMax?: string;
    VolumeFadeInTimeMin?: string;
    VolumeFadeOutCurveID?: string;
    VolumeFadeOutTimeMax?: string;
    VolumeFadeOutTimeMin?: string;
    VolumeSliderCategory?: string;
    DuckToCinematicSFX?: string;
    DuckToCinematicMusic?: string;
    RolloffType?: string;
    RolloffParam0?: string;
    Field_8_1_5_28938_045?: string;
    Field_8_1_5_28938_046?: string;
    Field_8_2_0_30080_045?: string;
    Field_8_2_0_30080_046?: string;
    Field_8_2_0_30080_047?: string;
    Field_8_2_0_30080_048?: string;
    Field_8_3_0_32044_049?: string;
    Field_8_3_0_32044_050?: string;
    Field_8_3_0_32044_051?: string;
    Field_8_3_0_32044_052?: string;
    Field_8_3_0_32044_053?: string;
    Field_8_3_0_32044_054?: string;
    Field_9_1_0_38312_055?: string;
    Field_9_1_0_38312_056?: string;
}
interface SoundKitChildDatabase{
    ID?: string;
    ParentSoundKitID?: string;
    SoundKitID?: string;
}
interface SoundKitNameDatabase{
    ID?: string;
    Name?: string;
}
interface SoundKitFallbackDatabase{
    ID?: string;
    FallbackSoundKitID?: string;
    SoundKitID?: string;
}
interface SoundOverrideDatabase{
    ID?: string;
    WowEditLock?: string;
    WowEditLockUser?: string;
    ZoneIntroMusicID?: string;
    ZoneMusicID?: string;
    SoundAmbienceID?: string;
    SoundProviderPreferencesID?: string;
    Flags?: string;
}
interface SoundParameterDatabase{
    ID?: string;
    Field_9_0_1_33978_000?: string;
    Field_9_0_1_33978_001?: string;
    Field_9_0_1_33978_002?: string;
    Field_9_0_1_33978_003?: string;
    Field_9_0_1_33978_004?: string;
}
interface SoundProviderPreferencesDatabase{
    ID?: string;
    Description?: string;
    Flags?: string;
    EAXEnvironmentSelection?: string;
    EAXDecayTime?: string;
    EAX2EnvironmentSize?: string;
    EAX2EnvironmentDiffusion?: string;
    EAX2Room?: string;
    EAX2RoomHF?: string;
    EAX2DecayHFRatio?: string;
    EAX2Reflections?: string;
    EAX2ReflectionsDelay?: string;
    EAX2Reverb?: string;
    EAX2ReverbDelay?: string;
    EAX2RoomRolloff?: string;
    EAX2AirAbsorption?: string;
    EAX3RoomLF?: string;
    EAX3DecayLFRatio?: string;
    EAX3EchoTime?: string;
    EAX3EchoDepth?: string;
    EAX3ModulationTime?: string;
    EAX3ModulationDepth?: string;
    EAX3HFReference?: string;
    EAX3LFReference?: string;
    EAXEffectVolume?: string;
    EAXDamping?: string;
}
interface SoundEntriesDatabase{
    ID?: string;
    SoundType?: string;
    Name?: string;
    FileDataID?: string;
    Freq?: string;
    VolumeFloat?: string;
    Flags?: string;
    MinDistance?: string;
    DistanceCutoff?: string;
    EAXDef?: string;
    SoundEntriesAdvancedID?: string;
    Volumevariationplus?: string;
    Volumevariationminus?: string;
    Pitchvariationplus?: string;
    Pitchvariationminus?: string;
    PitchAdjust?: string;
    Dialogtype?: string;
    BusOverwriteID?: string;
    File?: string;
    DirectoryBase?: string;
    Pitch?: string;
    PitchVariation?: string;
    Priority?: string;
    Channel?: string;
    MaxDistance?: string;
}
interface SoundEmittersDatabase{
    ID?: string;
    Position?: string;
    Direction?: string;
    SoundEntriesID?: string;
    MapID?: string;
    Name?: string;
    EmitterType?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    PhaseUseFlags?: string;
    Flags?: string;
    WorldStateExpressionID?: string;
    SoundEntryAdvancedID?: string;
}
interface SoundKitEntryDatabase{
    ID?: string;
    FileDataID?: string;
    SoundKitID?: string;
    Frequency?: string;
    Volume?: string;
}
interface SoundWaterTypeDatabase{
    ID?: string;
    SoundType?: string;
    SoundSubtype?: string;
    SoundID?: string;
}
interface SpecSetMemberDatabase{
    ID?: string;
    ChrSpecializationID?: string;
    SpecSet?: string;
}
interface SpamMessagesDatabase{
    ID?: string;
    Text?: string;
}
interface SpecializationSpellsDisplayDatabase{
    ID?: string;
    SpecializationID?: string;
    SpellID?: string;
}
interface SoundSamplePreferencesDatabase{
    ID?: string;
    EAX1EffectLevel?: string;
    EAX2SampleDirect?: string;
    EAX2SampleDirectHF?: string;
    EAX2SampleRoom?: string;
    EAX2SampleRoomHF?: string;
    EAX2SampleObstruction?: string;
    EAX2SampleObstructionLFRatio?: string;
    EAX2SampleOcclusion?: string;
    EAX2SampleOcclusionLFRatio?: string;
    EAX2SampleOcclusionRoomRatio?: string;
    EAX2SampleRoomRolloff?: string;
    EAX2SampleAirAbsorption?: string;
    EAX2SampleOutsideVolumeHF?: string;
    EAX3SampleOcclusionDirectRatio?: string;
    EAX3SampleExclusion?: string;
    EAX3SampleExclusionLFRatio?: string;
    EAX3SampleDopplerFactor?: string;
    Fast2DPredelayTime?: string;
    Fast2DDamping?: string;
    Fast2DReverbTime?: string;
    Field_0_6_0_3592_001?: string;
    Field_0_6_0_3592_002?: string;
    Field_0_6_0_3592_004?: string;
    Field_0_6_0_3592_005?: string;
    Field_0_6_0_3592_006?: string;
    Field_0_6_0_3592_007?: string;
    Field_0_6_0_3592_010?: string;
    Field_0_6_0_3592_012?: string;
    Field_0_6_0_3592_013?: string;
    Field_0_6_0_3592_015?: string;
    Field_0_6_0_3592_016?: string;
}
interface SpecializationSpellsDatabase{
    ID?: string;
    SpecID?: string;
    SpellID?: string;
    OverridesSpellID?: string;
    Description_lang?: string;
    DisplayOrder?: string;
    Field_5_0_1_15464_004?: string;
}
interface SourceInfoDatabase{
    ID?: string;
    PvpFaction?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
    SpellID?: string;
}
interface SpellActionBarPrefDatabase{
    ID?: string;
    PreferredActionBarMask?: string;
    SpellID?: string;
}
interface SpellAuraNamesDatabase{
    EnumID?: string;
    SpecialMiscValue?: string;
    Globalstrings_tag?: string;
    Name_lang?: string;
}
interface SpellAuraOptionsDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    CumulativeAura?: string;
    ProcChance?: string;
    ProcCharges?: string;
    ProcTypeMask?: string;
    ProcCategoryRecovery?: string;
    SpellProcsPerMinuteID?: string;
}
interface SpellDatabase{
    ID?: string;
    Name_lang?: string;
    NameSubtext_lang?: string;
    Description_lang?: string;
    AuraDescription_lang?: string;
    RuneCostID?: string;
    SpellMissileID?: string;
    DescriptionVariablesID?: string;
    ScalingID?: string;
    AuraOptionsID?: string;
    AuraRestrictionsID?: string;
    CastingRequirementsID?: string;
    CategoriesID?: string;
    ClassOptionsID?: string;
    CooldownsID?: string;
    EquippedItemsID?: string;
    InterruptsID?: string;
    LevelsID?: string;
    ReagentsID?: string;
    ShapeshiftID?: string;
    TargetRestrictionsID?: string;
    TotemsID?: string;
    RequiredProjectID?: string;
    MiscID?: string;
    Category?: string;
    DispelType?: string;
    Mechanic?: string;
    Attributes?: string;
    AttributesEx?: string;
    AttributesExB?: string;
    AttributesExC?: string;
    AttributesExD?: string;
    AttributesExE?: string;
    AttributesExF?: string;
    AttributesExG?: string;
    AttributesExH?: string;
    ShapeshiftMask?: string;
    ShapeshiftExclude?: string;
    Targets?: string;
    TargetCreatureType?: string;
    RequiresSpellFocus?: string;
    FacingCasterFlags?: string;
    CasterAuraState?: string;
    TargetAuraState?: string;
    ExcludeCasterAuraState?: string;
    ExcludeTargetAuraState?: string;
    CasterAuraSpell?: string;
    TargetAuraSpell?: string;
    ExcludeCasterAuraSpell?: string;
    ExcludeTargetAuraSpell?: string;
    CastingTimeIndex?: string;
    RecoveryTime?: string;
    CategoryRecoveryTime?: string;
    InterruptFlags?: string;
    AuraInterruptFlags?: string;
    ChannelInterruptFlags?: string;
    ProcTypeMask?: string;
    ProcChance?: string;
    ProcCharges?: string;
    MaxLevel?: string;
    BaseLevel?: string;
    SpellLevel?: string;
    DurationIndex?: string;
    PowerType?: string;
    ManaCost?: string;
    ManaCostPerLevel?: string;
    ManaPerSecond?: string;
    RangeIndex?: string;
    Speed?: string;
    ModalNextSpell?: string;
    CumulativeAura?: string;
    Totem?: string;
    Reagent?: string;
    ReagentCount?: string;
    EquippedItemClass?: string;
    EquippedItemSubclass?: string;
    EquippedItemInvTypes?: string;
    Effect?: string;
    EffectDieSides?: string;
    EffectRealPointsPerLevel?: string;
    EffectBasePoints?: string;
    EffectMechanic?: string;
    ImplicitTargetA?: string;
    ImplicitTargetB?: string;
    EffectRadiusIndex?: string;
    EffectRadiusIndexB?: string;
    EffectAura?: string;
    EffectAuraPeriod?: string;
    EffectAmplitude?: string;
    EffectChainTargets?: string;
    EffectItemType?: string;
    EffectMiscValue?: string;
    EffectMiscValueB?: string;
    EffectTriggerSpell?: string;
    EffectPointsPerCombo?: string;
    EffectSpellClassMaskA?: string;
    EffectSpellClassMaskB?: string;
    EffectSpellClassMaskC?: string;
    SpellVisualID?: string;
    SpellIconID?: string;
    ActiveIconID?: string;
    ManaCostPct?: string;
    StartRecoveryCategory?: string;
    StartRecoveryTime?: string;
    MaxTargetLevel?: string;
    SpellClassSet?: string;
    SpellClassMask?: string;
    MaxTargets?: string;
    DefenseType?: string;
    PreventionType?: string;
    StanceBarOrder?: string;
    EffectChainAmplitude?: string;
    MinFactionID?: string;
    MinReputation?: string;
    RequiredAuraVision?: string;
    RequiredTotemCategoryID?: string;
    RequiredAreasID?: string;
    SchoolMask?: string;
    PowerDisplayID?: string;
    EffectBonusCoefficient?: string;
    Difficulty?: string;
    CastUI?: string;
    ManaPerSecondPerLevel?: string;
    EffectBaseDice?: string;
    EffectDicePerLevel?: string;
    SpellPriority?: string;
    RequiredAreaID?: string;
    School?: string;
    ProcFlags?: string;
    Field_7_3_2_25549_006?: string;
    Field_1_1_2_4125_076?: string;
    Field_3_0_1_8622_021?: string;
    Field_3_0_1_8622_022?: string;
    Field_3_0_1_8622_023?: string;
    Field_3_0_1_8622_024?: string;
    Field_4_0_0_12911_036?: string;
    AttributesExI?: string;
    AttributesExJ?: string;
    BonusCoefficient?: string;
    Field_4_0_0_12232_044?: string;
    Field_4_0_0_12232_035?: string;
    Field_4_0_0_12232_045?: string;
    Field_4_0_0_12232_046?: string;
    Field_4_0_0_11927_106?: string;
    Field_4_0_0_11927_107?: string;
    Field_4_0_0_11927_108?: string;
}
interface SpellActivationOverlayDatabase{
    ID?: string;
    SpellID?: string;
    OverlayFileDataID?: string;
    ScreenLocationID?: string;
    Color?: string;
    Scale?: string;
    IconHighlightSpellClassMask?: string;
    TriggerType?: string;
    SoundEntriesID?: string;
    TriggerSpell?: string;
    Field_4_0_0_12911_007?: string;
}
interface SpellAuraRestrictionsDatabase{
    ID?: string;
    CasterAuraSpell?: string;
    CasterAuraState?: string;
    DifficultyID?: string;
    ExcludeCasterAuraSpell?: string;
    ExcludeCasterAuraState?: string;
    ExcludeTargetAuraSpell?: string;
    ExcludeTargetAuraState?: string;
    SpellID?: string;
    TargetAuraSpell?: string;
    TargetAuraState?: string;
}
interface SpellAuraRestrictionsDifficultyDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
}
interface SpellAuraVisXChrSpecDatabase{
    ID?: string;
    SpellAuraVisibilityID?: string;
    ChrSpecializationID?: string;
}
interface SpellAuraVisXTalentTabDatabase{
    ID?: string;
    SpellAuraVisibilityID?: string;
    TalentTabID?: string;
}
interface SpellAuraVisibilityDatabase{
    ID?: string;
    SpellID?: string;
    Type?: string;
    Flags?: string;
}
interface SpellCastTimesDatabase{
    ID?: string;
    Base?: string;
    PerLevel?: string;
    Minimum?: string;
}
interface SpellCastingRequirementsDatabase{
    ID?: string;
    FacingCasterFlags?: string;
    MinFactionID?: string;
    MinReputation?: string;
    RequiredAreasID?: string;
    RequiredAuraVision?: string;
    RequiresSpellFocus?: string;
    SpellID?: string;
}
interface SpellCategoriesDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    Category?: string;
    DefenseType?: string;
    DispelType?: string;
    Mechanic?: string;
    PreventionType?: string;
    StartRecoveryCategory?: string;
    ChargeCategory?: string;
}
interface SpellCategoryDatabase{
    ID?: string;
    Flags?: string;
    UsesPerWeek?: string;
    Padding_6_0_1_18179_003?: string;
    Name_lang?: string;
    MaxCharges?: string;
    ChargeRecoveryTime?: string;
    TypeMask?: string;
}
interface SpellChainEffectsDatabase{
    ID?: string;
    AvgSegLen?: string;
    Width?: string;
    NoiseScale?: string;
    TexCoordScale?: string;
    SegDuration?: string;
    SegDelay?: string;
    Flags?: string;
    JointCount?: string;
    JointOffsetRadius?: string;
    JointsPerMinorJoint?: string;
    MinorJointsPerMajorJoint?: string;
    MinorJointScale?: string;
    MajorJointScale?: string;
    JointMoveSpeed?: string;
    JointSmoothness?: string;
    MinDurationBetweenJointJumps?: string;
    MaxDurationBetweenJointJumps?: string;
    WaveHeight?: string;
    WaveFreq?: string;
    WaveSpeed?: string;
    MinWaveAngle?: string;
    MaxWaveAngle?: string;
    MinWaveSpin?: string;
    MaxWaveSpin?: string;
    ArcHeight?: string;
    MinArcAngle?: string;
    MaxArcAngle?: string;
    MinArcSpin?: string;
    MaxArcSpin?: string;
    DelayBetweenEffects?: string;
    MinFlickerOnDuration?: string;
    MaxFlickerOnDuration?: string;
    MinFlickerOffDuration?: string;
    MaxFlickerOffDuration?: string;
    PulseSpeed?: string;
    PulseOnLength?: string;
    PulseFadeLength?: string;
    Alpha?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    BlendMode?: string;
    Padding_5_3_0_16965_043?: string;
    RenderLayer?: string;
    TextureLength?: string;
    WavePhase?: string;
    SpellChainEffectID?: string;
    Texture?: string;
    EndWidth?: string;
    NumFlipFramesU?: string;
    NumFlipFramesV?: string;
    ParticleEmissionRateMultiplier?: string;
    ParticleScaleMultiplier?: string;
    SoundKitID?: string;
    StartWidth?: string;
    TextureCoordScaleU?: string;
    TextureCoordScaleV?: string;
    TextureFileDataID?: string;
    TextureParticleFileDataID?: string;
    TextureRepeatLengthU?: string;
    TextureRepeatLengthV?: string;
    TimePerFlipFrame?: string;
    VariancePerFlipFrame?: string;
    WidthScaleCurveID?: string;
    Padding_4_0_0_11792_044?: string;
    Combo?: string;
}
interface SpellClutterAreaEffectCountsDatabase{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClassOptionsDatabase{
    SpellClassMask?: string;
    ID?: string;
    ModalNextSpell?: string;
    SpellClassSet?: string;
    SpellID?: string;
    Description_lang?: string;
}
interface SpellClutterFrameRatesDatabase{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterImpactModelCountsDatabase{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterKitDistancesDatabase{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterWeaponTrailDistDatabase{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterMissileDistDatabase{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellCraftUIDatabase{
    ID?: string;
    CastUI?: string;
}
interface SpellCooldownsDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    CategoryRecoveryTime?: string;
    RecoveryTime?: string;
    StartRecoveryTime?: string;
}
interface SpellDescriptionVariablesDatabase{
    ID?: string;
    Variables?: string;
}
interface SpellDifficultyDatabase{
    ID?: string;
    DifficultySpellID?: string;
}
interface SpellDispelTypeDatabase{
    ID?: string;
    Name_lang?: string;
    Mask?: string;
    ImmunityPossible?: string;
    InternalName?: string;
}
interface SpellDurationDatabase{
    ID?: string;
    Duration?: string;
    DurationPerLevel?: string;
    MaxDuration?: string;
}
interface SpellEffectCameraShakesDatabase{
    ID?: string;
    CameraShake?: string;
}
interface SpellEffectEmissionDatabase{
    ID?: string;
    AreaModelID?: string;
    EmissionRate?: string;
    Flags?: string;
    ModelScale?: string;
}
interface SpellEffectScalingDatabase{
    ID?: string;
    Coefficient?: string;
    Variance?: string;
    ResourceCoefficient?: string;
    SpellEffectID?: string;
    Field_5_4_0_17266_004?: string;
}
interface SpellEffectNamesDatabase{
    EnumID?: string;
    Name_lang?: string;
}
interface SpellEffectDatabase{
    ID?: string;
    DifficultyID?: string;
    Effect?: string;
    EffectAmplitude?: string;
    EffectAura?: string;
    EffectAuraPeriod?: string;
    EffectBasePoints?: string;
    EffectBonusCoefficient?: string;
    EffectChainAmplitude?: string;
    EffectChainTargets?: string;
    EffectDieSides?: string;
    EffectItemType?: string;
    EffectMechanic?: string;
    EffectMiscValue?: string;
    EffectPointsPerResource?: string;
    EffectRadiusIndex?: string;
    EffectRealPointsPerLevel?: string;
    EffectSpellClassMask?: string;
    EffectTriggerSpell?: string;
    EffectPos_facing?: string;
    ImplicitTarget?: string;
    SpellID?: string;
    EffectIndex?: string;
    EffectAttributes?: string;
    BonusCoefficientFromAP?: string;
    Coefficient?: string;
    GroupSizeBasePointsCoefficient?: string;
    PvpMultiplier?: string;
    ResourceCoefficient?: string;
    Variance?: string;
    EffectBasePointsF?: string;
    Field_7_3_2_25549_010?: string;
    Field_9_1_0_38511_023?: string;
}
interface SpellEffectGroupSizeDatabase{
    ID?: string;
    SpellEffectID?: string;
    Coefficient?: string;
}
interface SpellFlyoutItemDatabase{
    ID?: string;
    SpellFlyoutID?: string;
    SpellID?: string;
    Slot?: string;
}
interface SpellEquippedItemsDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    EquippedItemClass?: string;
    EquippedItemInvTypes?: string;
    EquippedItemSubclass?: string;
}
interface SpellIconDatabase{
    ID?: string;
    TextureFilename?: string;
}
interface SpellFocusObjectDatabase{
    ID?: string;
    Name_lang?: string;
}
interface SpellFlyoutDatabase{
    ID?: string;
    Flags?: string;
    RaceMask?: string;
    ClassMask?: string;
    SpellIconID?: string;
    Name_lang?: string;
    Description_lang?: string;
    SpellIconFileID?: string;
}
interface SpellInterruptsDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    AuraInterruptFlags?: string;
    ChannelInterruptFlags?: string;
    InterruptFlags?: string;
}
interface SpellItemEnchantmentDatabase{
    ID?: string;
    Charges?: string;
    Effect?: string;
    EffectPointsMin?: string;
    EffectArg?: string;
    Name_lang?: string;
    ItemVisual?: string;
    Flags?: string;
    Src_itemID?: string;
    Condition_ID?: string;
    RequiredSkillID?: string;
    RequiredSkillRank?: string;
    MinLevel?: string;
    MaxLevel?: string;
    ItemLevel?: string;
    ScalingClass?: string;
    ScalingClassRestricted?: string;
    EffectScalingPoints?: string;
    HordeName_lang?: string;
    IconFileDataID?: string;
    TransmogCost?: string;
    TransmogUnlockConditionID?: string;
    TransmogUseConditionID?: string;
    EffectPointsMax?: string;
    ItemLevelMin?: string;
    ItemLevelMax?: string;
    Field_5_0_1_15464_015?: string;
    Field_5_0_1_15464_016?: string;
}
interface SpellLabelDatabase{
    ID?: string;
    LabelID?: string;
    SpellID?: string;
}
interface SpellKeyboundOverrideDatabase{
    ID?: string;
    Function?: string;
    Data?: string;
    Type?: string;
    FunctionID?: string;
    Field_5_0_1_15657_002?: string;
    Field_9_1_0_38709_003?: string;
}
interface SpellMasteryDatabase{
    ID?: string;
    SpellID?: string;
    Page?: string;
    ClassID?: string;
}
interface SpellItemEnchantmentConditionDatabase{
    ID?: string;
    Lt_operandType?: string;
    Padding_6_0_1_18179_002?: string;
    Lt_operand?: string;
    Operator?: string;
    Rt_operandType?: string;
    Padding_6_0_1_18179_006?: string;
    Rt_operand?: string;
    Logic?: string;
    Padding_6_0_1_18179_009?: string;
    Field_7_3_2_25549_000?: string;
    Field_7_3_2_25549_001?: string;
    Field_7_3_2_25549_002?: string;
    Field_7_3_2_25549_003?: string;
    Field_7_3_2_25549_004?: string;
    Field_7_3_2_25549_005?: string;
}
interface SpellMiscDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    Attributes?: string;
    CastingTimeIndex?: string;
    DurationIndex?: string;
    RangeIndex?: string;
    Speed?: string;
    SpellVisualID?: string;
    SpellIconID?: string;
    ActiveIconID?: string;
    SchoolMask?: string;
    ActiveIconFileDataID?: string;
    LaunchDelay?: string;
    SpellIconFileDataID?: string;
    MinDuration?: string;
    ContentTuningID?: string;
    ShowFutureSpellPlayerConditionID?: string;
    SpellVisualScript?: string;
    ActiveSpellVisualScript?: string;
}
interface SpellLevelsDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    BaseLevel?: string;
    MaxLevel?: string;
    SpellLevel?: string;
    MaxPassiveAuraLevel?: string;
}
interface SpellLearnSpellDatabase{
    ID?: string;
    LearnSpellID?: string;
    OverridesSpellID?: string;
    SpellID?: string;
}
interface SpellMechanicDatabase{
    ID?: string;
    StateName_lang?: string;
    State?: string;
}
interface SpellEffectAutoDescriptionDatabase{
    ID?: string;
    AuraDescription_lang?: string;
    AuraEffectType?: string;
    AuraOrderIndex?: string;
    EffectDescription_lang?: string;
    EffectOrderIndex?: string;
    PointsSign?: string;
    SchoolMask?: string;
    SpellEffectType?: string;
    TargetType?: string;
    OrderIndex?: string;
}
interface SpellMissileDatabase{
    ID?: string;
    CollisionRadius?: string;
    DefaultPitchMax?: string;
    DefaultPitchMin?: string;
    DefaultSpeedMax?: string;
    DefaultSpeedMin?: string;
    Flags?: string;
    Gravity?: string;
    MaxDuration?: string;
    RandomizeFacingMax?: string;
    RandomizeFacingMin?: string;
    RandomizePitchMax?: string;
    RandomizePitchMin?: string;
    RandomizeSpeedMax?: string;
    RandomizeSpeedMin?: string;
    SpellID?: string;
}
interface SpellMissileMotionDatabase{
    ID?: string;
    Flags?: string;
    MissileCount?: string;
    Name?: string;
    ScriptBody?: string;
}
interface SpellNameDatabase{
    ID?: string;
    Name_lang?: string;
}
interface SpellMiscDifficultyDatabase{
    SpellID?: string;
    DifficultyID?: string;
    SpellMiscID?: string;
}
interface SpellOverrideNameDatabase{
    ID?: string;
    OverrideName_lang?: string;
    Flags?: string;
    Field_9_1_0_38709_001_lang?: string;
}
interface SpellPowerDatabase{
    Field_6_0_1_18179_012?: string;
    ID?: string;
    AltPowerBarID?: string;
    ManaCost?: string;
    ManaCostPerLevel?: string;
    ManaPerSecond?: string;
    OptionalCost?: string;
    OrderIndex?: string;
    PowerCostMaxPct?: string;
    PowerCostPct?: string;
    PowerDisplayID?: string;
    PowerPctPerSecond?: string;
    PowerType?: string;
    RequiredAuraSpellID?: string;
    SpellID?: string;
    PowerCost?: string;
}
interface SpellProceduralEffectDatabase{
    ID?: string;
    Type?: string;
    Value?: string;
}
interface SpellPowerDifficultyDatabase{
    ID?: string;
    DifficultyID?: string;
    OrderIndex?: string;
}
interface SpellProcsPerMinuteDatabase{
    ID?: string;
    BaseProcRate?: string;
    Flags?: string;
}
interface SpellProcsPerMinuteModDatabase{
    ID?: string;
    Type?: string;
    Param?: string;
    Coeff?: string;
    SpellProcsPerMinuteID?: string;
}
interface SpellRadiusDatabase{
    ID?: string;
    Radius?: string;
    RadiusPerLevel?: string;
    RadiusMin?: string;
    RadiusMax?: string;
}
interface SpellRangeDatabase{
    ID?: string;
    RangeMin?: string;
    RangeMax?: string;
    Flags?: string;
    DisplayName_lang?: string;
    DisplayNameShort_lang?: string;
}
interface SpellRuneCostDatabase{
    ID?: string;
    Blood?: string;
    Unholy?: string;
    Frost?: string;
    Chromatic?: string;
    RunicPower?: string;
    Field_3_0_1_8303_004?: string;
}
interface SpellReagentsCurrencyDatabase{
    ID?: string;
    CurrencyCount?: string;
    CurrencyTypesID?: string;
    SpellID?: string;
}
interface SpellReagentsDatabase{
    ID?: string;
    SpellID?: string;
    Reagent?: string;
    ReagentCount?: string;
    CurrencyID?: string;
    CurrencyCount?: string;
}
interface SpellScalingDatabase{
    ID?: string;
    CastTimeMin?: string;
    CastTimeMax?: string;
    CastTimeMaxLevel?: string;
    Class?: string;
    NerfFactor?: string;
    NerfMaxLevel?: string;
    MaxScalingLevel?: string;
    ScalesFromItemLevel?: string;
    MinScalingLevel?: string;
    SpellID?: string;
    Coefficient?: string;
    Variance?: string;
    ComboPointsCoefficient?: string;
}
interface SpellScriptDatabase{
    Name?: string;
    Script?: string;
    LastEditUser?: string;
    ID?: string;
    Field_9_0_1_33978_004?: string;
    Arguments?: string;
}
interface SpellScriptTextDatabase{
    Script?: string;
    ID?: string;
    PrevText?: string;
    NextText?: string;
    SpellScriptID?: string;
}
interface SpellShapeshiftDatabase{
    ID?: string;
    ShapeshiftExclude?: string;
    ShapeshiftMask?: string;
    StanceBarOrder?: string;
    SpellID?: string;
}
interface SpellSpecialUnitEffectDatabase{
    EnumID?: string;
    SpellVisualEffectNameID?: string;
    ID?: string;
    PositionerID?: string;
}
interface SpellShapeshiftFormDatabase{
    ID?: string;
    BonusActionBar?: string;
    Name_lang?: string;
    Flags?: string;
    CreatureType?: string;
    AttackIconID?: string;
    CombatRoundTime?: string;
    CreatureDisplayID?: string;
    PresetSpellID?: string;
    MountTypeID?: string;
    ExitSoundEntriesID?: string;
    AttackIconFileID?: string;
    DamageVariance?: string;
}
interface SpellTargetRestrictionsDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    ConeAngle?: string;
    Width?: string;
    MaxTargets?: string;
    MaxTargetLevel?: string;
    TargetCreatureType?: string;
    Targets?: string;
    ConeDegrees?: string;
}
interface SpellVisualAnimDatabase{
    ID?: string;
    AnimKitID?: string;
    InitialAnimID?: string;
    LoopAnimID?: string;
}
interface SpellTotemsDatabase{
    ID?: string;
    RequiredTotemCategoryID?: string;
    Totem?: string;
    SpellID?: string;
}
interface SpellVisualAnimNameDatabase{
    AnimID?: string;
    Name?: string;
}
interface SpellVisualDatabase{
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_006?: string;
    Field_6_0_1_18179_007?: string;
    Field_6_0_1_18179_010?: string;
    Field_6_0_1_18179_011?: string;
    Field_6_0_1_18179_012?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_015?: string;
    Field_6_0_1_18179_016?: string;
    Field_6_0_1_18179_017?: string;
    Field_6_0_1_18179_018?: string;
    Field_6_0_1_18179_021?: string;
    Field_6_0_1_18179_022?: string;
    Field_6_0_1_18179_023?: string;
    Field_6_0_1_18179_024?: string;
    ID?: string;
    AnimEventSoundID?: string;
    CasterSpellVisualID?: string;
    DamageNumberDelay?: string;
    Flags?: string;
    HostileSpellVisualID?: string;
    LowViolenceSpellVisualID?: string;
    MissileAttachment?: string;
    MissileCastOffset?: string;
    MissileCastPositionerID?: string;
    MissileDestinationAttachment?: string;
    MissileImpactOffset?: string;
    MissileImpactPositionerID?: string;
    MissileTargetingKit?: string;
    SpellVisualMissileSetID?: string;
    PrecastKit?: string;
    CastKit?: string;
    ImpactKit?: string;
    StateKit?: string;
    StateDoneKit?: string;
    ChannelKit?: string;
    HasMissile?: string;
    MissileModel?: string;
    MissilePathType?: string;
    MissileSound?: string;
    CasterImpactKit?: string;
    TargetImpactKit?: string;
    MissileFollowGroundHeight?: string;
    MissileFollowGroundDropSpeed?: string;
    MissileFollowGroundApproach?: string;
    MissileFollowGroundFlags?: string;
    MissileMotion?: string;
    InstantAreaKit?: string;
    ImpactAreaKit?: string;
    PersistentAreaKit?: string;
    HasAreaEffect?: string;
    AreaModel?: string;
    AreaKit?: string;
    WeaponTrailRed?: string;
    WeaponTrailGreen?: string;
    WeaponTrailBlue?: string;
    WeaponTrailAlpha?: string;
    WeaponTrailFadeoutRate?: string;
    WeaponTrailDuration?: string;
    RaidSpellVisualMissileSetID?: string;
    Field_7_3_0_24473_009?: string;
    Field_4_1_0_13914_028?: string;
    Field_5_0_1_15464_001?: string;
    Field_5_0_1_15464_021?: string;
    Field_5_0_1_15668_031?: string;
    Field_5_0_1_15668_032?: string;
    Field_5_0_1_15668_033?: string;
    Field_5_4_0_17266_010?: string;
    Field_5_4_0_17266_021?: string;
    Field_5_4_0_17266_022?: string;
    Field_5_4_0_17266_023?: string;
    Field_5_4_0_17266_024?: string;
    ReducedUnexpectedCameraMovementSpellVisualID?: string;
}
interface SpellVisualEffectNameDatabase{
    Padding_5_4_0_17266_007?: string;
    ID?: string;
    Alpha?: string;
    BaseMissileSpeed?: string;
    DissolveEffectID?: string;
    EffectRadius?: string;
    Flags?: string;
    GenericID?: string;
    MaxAllowedScale?: string;
    MinAllowedScale?: string;
    ModelFileDataID?: string;
    RibbonQualityID?: string;
    Scale?: string;
    TextureFileDataID?: string;
    Type?: string;
    Name?: string;
    FileName?: string;
    AreaEffectSize?: string;
    VisualEffectNameFlags?: string;
    ModelPosition?: string;
    SpecialID?: string;
    SpecialAttachPoint?: string;
    Field_2_0_0_6080_003?: string;
    Field_9_1_0_38549_014?: string;
}
interface SpellVisualColorEffectDatabase{
    ID?: string;
    AlphaCurveID?: string;
    BlueCurveID?: string;
    Color?: string;
    ColorMultiplier?: string;
    Duration?: string;
    Flags?: string;
    GreenCurveID?: string;
    OpacityCurveID?: string;
    PositionerID?: string;
    RedCurveID?: string;
    Type?: string;
}
interface SpellVisualEventDatabase{
    ID?: string;
    EndEvent?: string;
    EndMaxOffsetMs?: string;
    EndMinOffsetMs?: string;
    SpellVisualID?: string;
    SpellVisualKitID?: string;
    StartEvent?: string;
    StartMaxOffsetMs?: string;
    StartMinOffsetMs?: string;
    TargetType?: string;
}
interface SpellVisualKitAreaModelDatabase{
    ID?: string;
    EmissionRate?: string;
    Flags?: string;
    LifeTime?: string;
    ModelFileDataID?: string;
    ModelScale?: string;
    Spacing?: string;
    Name?: string;
    EnumID?: string;
}
interface SpellVisualKitEffectDatabase{
    ID?: string;
    Effect?: string;
    EffectType?: string;
    ParentSpellVisualKitID?: string;
}
interface SpellVisualKitDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    Field_6_0_1_18179_006?: string;
    Field_6_0_1_18179_007?: string;
    Field_6_0_1_18179_008?: string;
    Field_6_0_1_18179_009?: string;
    Field_6_0_1_18179_010?: string;
    Field_6_0_1_18179_011?: string;
    Field_6_0_1_18179_012?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_015?: string;
    Field_6_0_1_18179_016?: string;
    Field_6_0_1_18179_017?: string;
    Field_6_0_1_18179_018?: string;
    Field_6_0_1_18179_019?: string;
    Field_6_0_1_18179_020?: string;
    Field_6_0_1_18179_021?: string;
    Field_6_0_1_18179_022?: string;
    DelayMax?: string;
    DelayMin?: string;
    FallbackPriority?: string;
    FallbackSpellVisualKitID?: string;
    Flags?: string;
    StartAnimID?: string;
    AnimID?: string;
    AnimKitID?: string;
    HeadEffect?: string;
    ChestEffect?: string;
    BaseEffect?: string;
    LeftHandEffect?: string;
    RightHandEffect?: string;
    BreathEffect?: string;
    LeftWeaponEffect?: string;
    RightWeaponEffect?: string;
    SpecialEffect?: string;
    WorldEffect?: string;
    SoundID?: string;
    ShakeID?: string;
    CharProc?: string;
    CharParamZero?: string;
    CharParamOne?: string;
    CharParamTwo?: string;
    CharParamThree?: string;
    KitType?: string;
    Anim?: string;
    CharacterParam?: string;
    CharacterProcedure?: string;
    ClutterLevel?: string;
    Field_7_3_2_25549_001?: string;
}
interface SpellVisualKitModelAttachDatabase{
    Field_6_0_1_18179_008?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    ID?: string;
    AnimID?: string;
    AnimKitID?: string;
    AttachmentID?: string;
    EndAnimID?: string;
    Flags?: string;
    LowDefModelAttachID?: string;
    Offset?: string;
    OffsetVariation?: string;
    ParentSpellVisualKitID?: string;
    Pitch?: string;
    PitchVariation?: string;
    PositionerID?: string;
    Roll?: string;
    RollVariation?: string;
    Scale?: string;
    ScaleVariation?: string;
    SpellVisualEffectNameID?: string;
    StartAnimID?: string;
    StartDelay?: string;
    Yaw?: string;
    YawVariation?: string;
    Field_4_0_6_13623_008?: string;
    Field_9_0_1_33978_021?: string;
    Field_7_3_2_25549_000?: string;
}
interface SpellVisualKitPickerEntryDatabase{
    ID?: string;
    SpellVisualKitID?: string;
    Probability?: string;
    SpellVisualKitPickerID?: string;
}
interface SpellVisualKitPickerDatabase{
    ID?: string;
    PlayerConditionID?: string;
    Field_9_0_5_37503_002?: string;
}
interface SpellVisualPrecastTransitionsDatabase{
    ID?: string;
    PrecastLoadAnimName?: string;
    PrecastHoldAnimName?: string;
}
interface SpellVisualMissileDatabase{
    ID?: string;
    AnimKitID?: string;
    Attachment?: string;
    CastOffset?: string;
    CastPositionerID?: string;
    DestinationAttachment?: string;
    Flags?: string;
    FollowGroundApproach?: string;
    FollowGroundDropSpeed?: string;
    FollowGroundHeight?: string;
    ImpactOffset?: string;
    ImpactPositionerID?: string;
    SoundEntriesID?: string;
    SpellMissileMotionID?: string;
    SpellVisualEffectNameID?: string;
    SpellVisualMissileSetID?: string;
    ClutterLevel?: string;
    Field_9_0_1_33978_016?: string;
    Field_5_4_0_17266_006?: string;
}
interface SpellVisualScreenEffectDatabase{
    ID?: string;
    ScreenEffectID?: string;
    ScreenEffectTypeID?: string;
}
interface SpellXDescriptionVariablesDatabase{
    ID?: string;
    SpellDescriptionVariablesID?: string;
    SpellID?: string;
}
interface StableSlotPricesDatabase{
    ID?: string;
    Cost?: string;
}
interface SpellXSpellVisualDatabase{
    ID?: string;
    ActiveIconFileID?: string;
    CasterPlayerConditionID?: string;
    CasterUnitConditionID?: string;
    DifficultyID?: string;
    Flags?: string;
    Priority?: string;
    Probability?: string;
    SpellID?: string;
    SpellIconFileID?: string;
    SpellVisualID?: string;
    ViewerPlayerConditionID?: string;
    ViewerUnitConditionID?: string;
    Field_7_3_2_25549_003?: string;
}
interface StartupFilesDatabase{
    ID?: string;
    BytesRequired?: string;
    FileDataID?: string;
    Locale?: string;
}
interface Startup_StringsDatabase{
    ID?: string;
    Name?: string;
    Message_lang?: string;
}
interface StationeryDatabase{
    ID?: string;
    ItemID?: string;
    Texture?: string;
    Flags?: string;
    TextureFileDataID?: string;
}
interface StringLookupsDatabase{
    ID?: string;
    String?: string;
}
interface TabardBackgroundTexturesDatabase{
    ID?: string;
    TorsoTexture?: string;
}
interface SummonPropertiesDatabase{
    ID?: string;
    Control?: string;
    Faction?: string;
    Title?: string;
    Slot?: string;
    Flags?: string;
}
interface TactKeyDatabase{
    ID?: string;
    Key?: string;
}
interface TabardEmblemTexturesDatabase{
    ID?: string;
    TorsoTexture?: string;
}
interface TactKeyLookupDatabase{
    ID?: string;
    TACTID?: string;
}
interface TalentTabDatabase{
    ID?: string;
    Name_lang?: string;
    SpellIconID?: string;
    RaceMask?: string;
    ClassMask?: string;
    PetTalentMask?: string;
    OrderIndex?: string;
    BackgroundFile?: string;
    CategoryEnumID?: string;
    Description_lang?: string;
    RoleMask?: string;
    MasterySpellID?: string;
}
interface TalentDatabase{
    ID?: string;
    SpecID?: string;
    TierID?: string;
    ColumnIndex?: string;
    SpellID?: string;
    Flags?: string;
    CategoryMask?: string;
    ClassID?: string;
    OverridesSpellID?: string;
    Description_lang?: string;
    TabID?: string;
    SpellRank?: string;
    PrereqTalent?: string;
    PrereqRank?: string;
    RequiredSpellID?: string;
}
interface TalentTreePrimarySpellsDatabase{
    ID?: string;
    TalentTabID?: string;
    SpellID?: string;
    Flags?: string;
}
interface TaxiNodesDatabase{
    ID?: string;
    ContinentID?: string;
    Pos?: string;
    Name_lang?: string;
    MountCreatureID?: string;
    ConditionID?: string;
    Flags?: string;
    MapOffset?: string;
    CharacterBitNumber?: string;
    Facing?: string;
    FlightMapOffset?: string;
    SpecialIconConditionID?: string;
    UiTextureKitID?: string;
    MinimapAtlasMemberID?: string;
    VisibilityConditionID?: string;
}
interface TeamContributionPointsDatabase{
    ID?: string;
    Data?: string;
}
interface TaxiPathDatabase{
    ID?: string;
    FromTaxiNode?: string;
    ToTaxiNode?: string;
    Cost?: string;
}
interface TerrainColorGradingRampDatabase{
    ID?: string;
    Min?: string;
    Max?: string;
    Texture0?: string;
    Texture1?: string;
}
interface TaxiPathNodeDatabase{
    ID?: string;
    PathID?: string;
    NodeIndex?: string;
    ContinentID?: string;
    Loc?: string;
    Flags?: string;
    Delay?: string;
    ArrivalEventID?: string;
    DepartureEventID?: string;
}
interface TerrainMaterialDatabase{
    ID?: string;
    Name?: string;
    Shader?: string;
    EnvMapPath?: string;
    EnvMapDiffuseFileID?: string;
    EnvMapSpecularFileID?: string;
}
interface TerrainTypeSoundsDatabase{
    ID?: string;
    Name?: string;
}
interface TerrainTypeDatabase{
    ID?: string;
    TerrainID?: string;
    TerrainDesc?: string;
    FootstepSprayRun?: string;
    FootstepSprayWalk?: string;
    SoundID?: string;
    Flags?: string;
}
interface TextureBlendSetDatabase{
    ID?: string;
    ModX?: string;
    SwizzleAlpha?: string;
    SwizzleBlue?: string;
    SwizzleGreen?: string;
    SwizzleRed?: string;
    TextureFileDataID?: string;
    TextureScaleU?: string;
    TextureScaleV?: string;
    TextureScrollRateU?: string;
    TextureScrollRateV?: string;
    Flags?: string;
}
interface TextureFileDataDatabase{
    Field_6_0_1_18179_000?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    FileDataID?: string;
    MaterialResourcesID?: string;
    UsageType?: string;
}
interface TierTransitionDatabase{
    ID?: string;
    Field_9_0_1_33978_000_tier?: string;
    Field_9_0_1_33978_001_animationdataID?: string;
    Field_9_0_1_33978_002_animationdataID?: string;
    Field_9_0_1_33978_003_milliseconds?: string;
}
interface TradeSkillCategoryDatabase{
    ID?: string;
    SkillLineID?: string;
    ParentTradeSkillCategoryID?: string;
    OrderIndex?: string;
    Name_lang?: string;
    Flags?: string;
    HordeName_lang?: string;
}
interface TotemCategoryDatabase{
    ID?: string;
    Name_lang?: string;
    TotemCategoryType?: string;
    TotemCategoryMask?: string;
}
interface ToyDatabase{
    ID?: string;
    Flags?: string;
    ItemID?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
}
interface TradeSkillItemDatabase{
    ID?: string;
    ItemLevel?: string;
    RequiredLevel?: string;
}
interface TransmogDefaultLevelDatabase{
    ID?: string;
    ExpansionID?: string;
    Characterlevel?: string;
    PlayerConditionID?: string;
}
interface TransformMatrixDatabase{
    ID?: string;
    Pitch?: string;
    Pos?: string;
    Roll?: string;
    Scale?: string;
    Yaw?: string;
}
interface TransmogHolidayDatabase{
    ID?: string;
    RequiredTransmogHoliday?: string;
}
interface TransmogSetDatabase{
    ID?: string;
    ClassMask?: string;
    ExpansionID?: string;
    Flags?: string;
    ItemNameDescriptionID?: string;
    Name_lang?: string;
    ParentTransmogSetID?: string;
    TrackingQuestID?: string;
    TransmogSetGroupID?: string;
    UiOrder?: string;
    Field_8_1_0_28294_008?: string;
    PatchIntroduced?: string;
    ConditionID?: string;
}
interface TransmogIllusionDatabase{
    ID?: string;
    UnlockConditionID?: string;
    TransmogCost?: string;
    SpellItemEnchantmentID?: string;
    Flags?: string;
}
interface TransmogSetItemDatabase{
    ID?: string;
    Flags?: string;
    ItemModifiedAppearanceID?: string;
    TransmogSetID?: string;
}
interface TransmogSetGroupDatabase{
    ID?: string;
    Name_lang?: string;
}
interface TransportPhysicsDatabase{
    ID?: string;
    WaveAmp?: string;
    WaveTimeScale?: string;
    RollAmp?: string;
    RollTimeScale?: string;
    PitchAmp?: string;
    PitchTimeScale?: string;
    MaxBank?: string;
    MaxBankTurnSpeed?: string;
    SpeedDampThresh?: string;
    SpeedDamp?: string;
}
interface TransportAnimationDatabase{
    ID?: string;
    TransportID?: string;
    TimeIndex?: string;
    Pos?: string;
    SequenceID?: string;
}
interface TransportRotationDatabase{
    ID?: string;
    GameObjectsID?: string;
    TimeIndex?: string;
    Rot?: string;
}
interface TrophyDatabase{
    ID?: string;
    GameObjectDisplayInfoID?: string;
    Name_lang?: string;
    PlayerConditionID?: string;
    TrophyTypeID?: string;
}
interface UICovenantPreviewDatabase{
    ID?: string;
    CovenantID?: string;
    UiMapID?: string;
    Crest?: string;
    TransmogSetID0?: string;
    TransmogSetID1?: string;
    TransmogSetID2?: string;
    TransmogSetID3?: string;
    TextureKit?: string;
    MountID?: string;
    PlayerChoiceResponseID?: string;
    Field_9_0_1_33978_008?: string;
    Field_9_0_1_34902_009?: string;
    FeatureName_lang?: string;
    FeatureDescription_lang?: string;
    FeatureTextureID?: string;
}
interface TrophyInstanceDatabase{
    ID?: string;
}
interface TrophyTypeDatabase{
    ID?: string;
}
interface UIChromieTimeExpansionInfoDatabase{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    SpellID?: string;
    UiTextureAtlasElementLarge?: string;
    UiTextureAtlasElementSmall?: string;
    AlreadyOn?: string;
    ExpansionLevelMask?: string;
    ContentTuningID?: string;
    Completed?: string;
    DescriptionAlliance_lang?: string;
    DescriptionHorde_lang?: string;
}
interface UIDungeonScoreRarityDatabase{
    ID?: string;
    ScoreColor?: string;
    DungeonScoreMin?: string;
    DungeonScoreMax?: string;
    OrderIndex?: string;
    KeystoneLevelMin?: string;
    KeystoneLevelMax?: string;
    Field_9_1_0_38627_007?: string;
    Field_9_1_0_38627_008?: string;
    Field_9_1_0_38950_009?: string;
    Field_9_1_0_38950_010?: string;
}
interface UICovenantAbilityDatabase{
    ID?: string;
    CovenantPreviewID?: string;
    SpellID?: string;
    AbilityType?: string;
    SoulbindDisplayInfoID?: string;
}
interface UIEventToastDatabase{
    Title_lang?: string;
    Subtitle_lang?: string;
    InstructionText_lang?: string;
    SubIcon_lang?: string;
    EventToastID?: string;
    PlayerConditionID?: string;
    UiTextureAtlasMemberID?: string;
    UiTextureKitID?: string;
    EventType?: string;
    DisplayType?: string;
    EventAsset?: string;
    Field_9_1_0_38312_011?: string;
    IconFileID?: string;
    UiWidgetSetID?: string;
    ExtraUiWidgetSetID?: string;
    TitleTooltip_lang?: string;
    SubtitleTooltip_lang?: string;
    TitleTooltipUiWidgetSetID?: string;
    SubtitleTooltipUiWidgetSetID?: string;
    ShowSoundKitID?: string;
    HideSoundKitID?: string;
}
interface UIExpansionDisplayInfoIconDatabase{
    ID?: string;
    FeatureDescription_lang?: string;
    FeatureIcon?: string;
    ParentID?: string;
}
interface UIExpansionDisplayInfoDatabase{
    ID?: string;
    ExpansionBanner?: string;
    ExpansionLevel?: string;
    ExpansionLogo?: string;
}
interface UISoundLookupsDatabase{
    ID?: string;
    SoundID?: string;
    SoundName?: string;
}
interface UIScriptedAnimationEffectDatabase{
    ID?: string;
    Visual?: string;
    VisualScale?: string;
    Duration?: string;
    Trajectory?: string;
    StartSoundKitID?: string;
    FinishSoundKitID?: string;
    StartBehavior?: string;
    FinishBehavior?: string;
    FinishEffectID?: string;
    YawRadians?: string;
    PitchRadians?: string;
    RollRadians?: string;
    OffsetX?: string;
    OffsetY?: string;
    OffsetZ?: string;
    AnimationSpeed?: string;
    Animation?: string;
    AnimationStartOffset?: string;
    Alpha?: string;
    StartAlphaFade?: string;
    StartAlphaFadeDuration?: string;
    EndAlphaFade?: string;
    EndAlphaFadeDuration?: string;
    LoopingSoundKitID?: string;
    ParticleOverrideScale?: string;
    Flags?: string;
}
interface UiCamFbackTransmogChrRaceDatabase{
    ID?: string;
    ChrRaceID?: string;
    Gender?: string;
    InventoryType?: string;
    UiCameraID?: string;
    Variation?: string;
}
interface UISplashScreenDatabase{
    Header_lang?: string;
    TopLeftFeatureTitle_lang?: string;
    TopLeftFeatureDesc_lang?: string;
    BottomLeftFeatureTitle_lang?: string;
    BottomLeftFeatureDesc_lang?: string;
    RightFeatureTitle_lang?: string;
    RightFeatureDesc_lang?: string;
    ID?: string;
    AllianceQuestID?: string;
    HordeQuestID?: string;
    ScreenType?: string;
    TextureKitID?: string;
    SoundKitID?: string;
    PlayerConditionID?: string;
    Field_9_0_1_33978_014?: string;
    Field_9_0_1_33978_015?: string;
}
interface UiCamFbackTransmogWeaponDatabase{
    ID?: string;
    InventoryType?: string;
    ItemClass?: string;
    ItemSubclass?: string;
    UiCameraID?: string;
}
interface UiCameraDatabase{
    ID?: string;
    AnimFrame?: string;
    AnimID?: string;
    AnimVariation?: string;
    Flags?: string;
    LookAt?: string;
    Name?: string;
    Pos?: string;
    UiCameraTypeID?: string;
    Up?: string;
}
interface UiCameraTypeDatabase{
    ID?: string;
    Height?: string;
    Name?: string;
    Width?: string;
}
interface UiCanvasDatabase{
    ID?: string;
    Height?: string;
    Width?: string;
}
interface UiCovenantDisplayInfoDatabase{
    ID?: string;
    CovenantID?: string;
    UiTextureKitID?: string;
    CelebrationSoundKitID?: string;
    AnimaChannelSelectSoundKitID?: string;
    AnimaChannelActiveSoundKitID?: string;
    AnimaGemsFullSoundKitID?: string;
    AnimaNewGemSoundKitID?: string;
    AnimaReinforceSelectSoundKitID?: string;
    UpgradeTabSelectSoundKitID?: string;
    ReservoirFullSoundKitID?: string;
    BeginResearchSoundKitID?: string;
    RenownFanfareSoundKitID?: string;
}
interface UiItemInteractionDatabase{
    ID?: string;
    CloseSoundKitID?: string;
    OpenSoundKitID?: string;
    InteractionSpellID?: string;
    UiTextureKitID?: string;
    ButtonText_lang?: string;
    Description_lang?: string;
    TitleText_lang?: string;
    TutorialText_lang?: string;
    Cost?: string;
    ItemInteractionFrameType?: string;
    CurrencyTypeID?: string;
    Field_8_3_0_32414_012?: string;
    TakeOutSlotSoundKitID?: string;
    DropInSlotSoundKitID?: string;
}
interface UiMapDatabase{
    ID?: string;
    BkgFileDataID?: string;
    BountyDisplayLocation?: string;
    BountySetID?: string;
    Flags?: string;
    HelpTextPosition?: string;
    LevelRangeMax?: string;
    LevelRangeMin?: string;
    Name_lang?: string;
    ParentUiMapID?: string;
    System?: string;
    Type?: string;
    VisibilityPlayerConditionID?: string;
    BkgAtlasID?: string;
    AlternateUiMapGroup?: string;
    ContentTuningID?: string;
}
interface UiMapArtDatabase{
    ID?: string;
    HighlightFileDataID?: string;
    UiMapArtStyleID?: string;
    HighlightAtlasID?: string;
}
interface UiMapArtStyleLayerDatabase{
    ID?: string;
    AdditionalZoomSteps?: string;
    LayerHeight?: string;
    LayerIndex?: string;
    LayerWidth?: string;
    MaxScale?: string;
    MinScale?: string;
    TileHeight?: string;
    TileWidth?: string;
    UiMapArtStyleID?: string;
}
interface UiMapAssignmentDatabase{
    ID?: string;
    AreaID?: string;
    MapID?: string;
    OrderIndex?: string;
    Region?: string;
    UiMapID?: string;
    UiMax?: string;
    UiMin?: string;
    WMODoodadPlacementID?: string;
    WMOGroupID?: string;
}
interface UiMapArtTileDatabase{
    ID?: string;
    ColIndex?: string;
    FileDataID?: string;
    LayerIndex?: string;
    RowIndex?: string;
    UiMapArtID?: string;
}
interface UiMapFogOfWarDatabase{
    ID?: string;
    PlayerConditionID?: string;
    UiMapFogOfWarVisID?: string;
    UiMapID?: string;
}
interface UiMapFogOfWarVisualizationDatabase{
    ID?: string;
    BackgroundAtlasID?: string;
    MaskAtlasID?: string;
    MaskScalar?: string;
}
interface UiMapGroupMemberDatabase{
    ID?: string;
    FloorIndex?: string;
    Name_lang?: string;
    RelativeHeightIndex?: string;
    UiMapGroupID?: string;
    UiMapID?: string;
}
interface UiMapLinkDatabase{
    ID?: string;
    ChildUiMapID?: string;
    OrderIndex?: string;
    ParentUiMapID?: string;
    UiMax?: string;
    UiMin?: string;
    OverrideHighlightFdID?: string;
    OverrideHighlightAtlasID?: string;
    Flags?: string;
}
interface UiMapPOIDatabase{
    ID?: string;
    ContinentID?: string;
    Flags?: string;
    PoiData?: string;
    PoiDataType?: string;
    UiTextureAtlasMemberID?: string;
    WorldLoc?: string;
}
interface UiMapXMapArtDatabase{
    ID?: string;
    PhaseID?: string;
    UiMapArtID?: string;
    UiMapID?: string;
}
interface UiModelSceneDatabase{
    ID?: string;
    Flags?: string;
    UiSystemType?: string;
}
interface UiModelSceneActorDatabase{
    ID?: string;
    Flags?: string;
    NormalizedScale?: string;
    OrientationPitch?: string;
    OrientationRoll?: string;
    OrientationYaw?: string;
    Position?: string;
    ScriptTag?: string;
    UiModelSceneActorDisplayID?: string;
    UiModelSceneID?: string;
}
interface UiModelSceneActorDisplayDatabase{
    ID?: string;
    Alpha?: string;
    AnimSpeed?: string;
    AnimationID?: string;
    Scale?: string;
    SequenceVariation?: string;
    AnimKitID?: string;
    SpellVisualKitID?: string;
}
interface UiModelSceneCameraDatabase{
    ID?: string;
    CameraType?: string;
    Flags?: string;
    MaxZoomDistance?: string;
    MinZoomDistance?: string;
    Pitch?: string;
    Roll?: string;
    ScriptTag?: string;
    Target?: string;
    UiModelSceneID?: string;
    Yaw?: string;
    ZoomDistance?: string;
    ZoomedPitchOffset?: string;
    ZoomedRollOffset?: string;
    ZoomedTargetOffset?: string;
    ZoomedYawOffset?: string;
}
interface UiPartyPoseDatabase{
    ID?: string;
    MapID?: string;
    UiModelSceneID?: string;
    UiWidgetSetID?: string;
    VictoryUiModelSceneID?: string;
    DefeatUiModelSceneID?: string;
    VictorySoundKitID?: string;
    DefeatSoundKitID?: string;
}
interface UiQuestDetailsThemeDatabase{
    ID?: string;
    Signature_lang?: string;
    BackgroundTexture?: string;
    SealTexture?: string;
    PoiIcon?: string;
}
interface UiTextureAtlasDatabase{
    ID?: string;
    AtlasHeight?: string;
    AtlasWidth?: string;
    FileDataID?: string;
    UiCanvasID?: string;
}
interface UiTextureAtlasElementOverrideDatabase{
    ID?: string;
    UiTextureAtlasElement?: string;
    ReplacementElement?: string;
}
interface UiTextureAtlasMemberDatabase{
    ID?: string;
    CommittedBottom?: string;
    CommittedFlags?: string;
    CommittedLeft?: string;
    CommittedName?: string;
    CommittedRight?: string;
    CommittedTop?: string;
    UiTextureAtlasID?: string;
    UiCanvasID?: string;
    UiTextureAtlasElementID?: string;
    OverrideWidth?: string;
    OverrideHeight?: string;
}
interface UiTextureAtlasElementDatabase{
    ID?: string;
    Name?: string;
}
interface UiWidgetDatabase{
    ID?: string;
    MapID?: string;
    OrderIndex?: string;
    ParentSetID?: string;
    PlayerConditionID?: string;
    VisID?: string;
    WidgetTag?: string;
    Field_8_2_5_31337_006?: string;
    LayoutDirection?: string;
}
interface UiTextureKitDatabase{
    KitPrefix?: string;
    ID?: string;
}
interface UiWidgetDataSourceDatabase{
    ID?: string;
    ParentWidgetID?: string;
    ReqID?: string;
    SourceID?: string;
    SourceType?: string;
}
interface UiWidgetConstantSourceDatabase{
    ID?: string;
    ParentWidgetID?: string;
    ReqID?: string;
    Value?: string;
}
interface UiWidgetSetDatabase{
    ID?: string;
    LayoutDirection?: string;
    VerticalPadding?: string;
}
interface UiWidgetStringSourceDatabase{
    ID?: string;
    ParentWidgetID?: string;
    ReqID?: string;
    Value_lang?: string;
}
interface UiWidgetVisTypeDataReqDatabase{
    ID?: string;
    VisType?: string;
    ValueType?: string;
    Field_8_1_5_28938_002?: string;
    Name?: string;
    Default?: string;
}
interface UiWidgetMapDatabase{
    ID?: string;
    ParentWidgetID?: string;
    MapID?: string;
}
interface UiWidgetXWidgetSetDatabase{
    ID?: string;
    ParentSet?: string;
    UiWidgetID?: string;
}
interface UiWidgetVisualizationDatabase{
    ID?: string;
    TextureKit?: string;
    VisType?: string;
    FrameTextureKit?: string;
    SizeSetting?: string;
    Name?: string;
    InAnimType?: string;
    OutAnimType?: string;
    WidgetScale?: string;
    ScriptedAnimationEffectID?: string;
    ModelSceneLayer?: string;
}
interface UnitBloodLevelsDatabase{
    ID?: string;
    Violencelevel?: string;
}
interface UnitBloodDatabase{
    ID?: string;
    CombatBloodSpurtFront?: string;
    CombatBloodSpurtBack?: string;
    GroundBlood?: string;
    DefaultBloodSpurtID?: string;
    DefaultOmniBloodSpurtID?: string;
    PlayerCritBloodSpurtID?: string;
    PlayerHitBloodSpurtID?: string;
    PlayerOmniCritBloodSpurtID?: string;
    PlayerOmniHitBloodSpurtID?: string;
}
interface UnitPowerBarDatabase{
    ID?: string;
    MinPower?: string;
    MaxPower?: string;
    StartPower?: string;
    CenterPower?: string;
    RegenerationPeace?: string;
    RegenerationCombat?: string;
    BarType?: string;
    FileDataID?: string;
    Color?: string;
    Flags?: string;
    Name_lang?: string;
    Cost_lang?: string;
    OutOfError_lang?: string;
    ToolTip_lang?: string;
    StartInset?: string;
    EndInset?: string;
}
interface UnitConditionDatabase{
    ID?: string;
    Flags?: string;
    Variable?: string;
    Op?: string;
    Value?: string;
}
interface UnitTestSparseDatabase{
    ID?: string;
    Field_0?: string;
    Field_2?: string;
}
interface UnitTestDatabase{
    Field_1_13_0_28211_000?: string;
    Field_1_13_0_28211_001?: string;
    ID?: string;
    Field_1_13_0_28211_003?: string;
    Field_1_13_0_28211_004?: string;
}
interface VehicleDatabase{
    ID?: string;
    Flags?: string;
    FlagsB?: string;
    TurnSpeed?: string;
    PitchSpeed?: string;
    PitchMin?: string;
    PitchMax?: string;
    SeatID?: string;
    MouseLookOffsetPitch?: string;
    CameraFadeDistScalarMin?: string;
    CameraFadeDistScalarMax?: string;
    CameraPitchOffset?: string;
    FacingLimitRight?: string;
    FacingLimitLeft?: string;
    MsslTrgtTurnLingering?: string;
    MsslTrgtPitchLingering?: string;
    MsslTrgtMouseLingering?: string;
    MsslTrgtEndOpacity?: string;
    MsslTrgtArcSpeed?: string;
    MsslTrgtArcRepeat?: string;
    MsslTrgtArcWidth?: string;
    MsslTrgtImpactRadius?: string;
    MsslTrgtArcTexture?: string;
    MsslTrgtImpactTexture?: string;
    MsslTrgtImpactModel?: string;
    CameraYawOffset?: string;
    UiLocomotionType?: string;
    MsslTrgtImpactTexRadius?: string;
    VehicleUIIndicatorID?: string;
    PowerDisplayID?: string;
    MissileTargetingID?: string;
    PowerType?: string;
    PowerToken?: string;
    UiSeatIndicatorType?: string;
    VehiclePOITypeID?: string;
    Field_3_0_1_8788_028?: string;
    Field_3_0_1_8788_029?: string;
    Field_3_0_1_8622_017?: string;
    Field_3_0_1_8622_011?: string;
    Field_3_0_1_8622_012?: string;
    Field_3_0_1_8622_013?: string;
    Field_3_0_1_8622_014?: string;
    Field_3_0_1_8622_015?: string;
    Field_3_0_1_8622_016?: string;
}
interface VehicleUIIndSeatDatabase{
    ID?: string;
    VehicleUIIndicatorID?: string;
    VirtualSeatIndex?: string;
    XPos?: string;
    YPos?: string;
}
interface VehicleUIIndicatorDatabase{
    ID?: string;
    BackgroundTexture?: string;
    BackgroundTextureFileID?: string;
}
interface VehicleSeatDatabase{
    ID?: string;
    Flags?: string;
    AttachmentID?: string;
    AttachmentOffset?: string;
    EnterPreDelay?: string;
    EnterSpeed?: string;
    EnterGravity?: string;
    EnterMinDuration?: string;
    EnterMaxDuration?: string;
    EnterMinArcHeight?: string;
    EnterMaxArcHeight?: string;
    EnterAnimStart?: string;
    EnterAnimLoop?: string;
    RideAnimStart?: string;
    RideAnimLoop?: string;
    RideUpperAnimStart?: string;
    RideUpperAnimLoop?: string;
    ExitPreDelay?: string;
    ExitSpeed?: string;
    ExitGravity?: string;
    ExitMinDuration?: string;
    ExitMaxDuration?: string;
    ExitMinArcHeight?: string;
    ExitMaxArcHeight?: string;
    ExitAnimStart?: string;
    ExitAnimLoop?: string;
    ExitAnimEnd?: string;
    PassengerYaw?: string;
    PassengerPitch?: string;
    PassengerRoll?: string;
    PassengerAttachmentID?: string;
    VehicleEnterAnim?: string;
    VehicleExitAnim?: string;
    VehicleRideAnimLoop?: string;
    VehicleEnterAnimBone?: string;
    VehicleExitAnimBone?: string;
    VehicleRideAnimLoopBone?: string;
    VehicleEnterAnimDelay?: string;
    VehicleExitAnimDelay?: string;
    VehicleAbilityDisplay?: string;
    EnterUISoundID?: string;
    ExitUISoundID?: string;
    FlagsB?: string;
    CameraEnteringDelay?: string;
    CameraEnteringDuration?: string;
    CameraExitingDelay?: string;
    CameraExitingDuration?: string;
    CameraOffset?: string;
    CameraPosChaseRate?: string;
    CameraFacingChaseRate?: string;
    CameraEnteringZoom?: string;
    CameraSeatZoomMin?: string;
    CameraSeatZoomMax?: string;
    EnterAnimKitID?: string;
    RideAnimKitID?: string;
    ExitAnimKitID?: string;
    VehicleEnterAnimKitID?: string;
    VehicleRideAnimKitID?: string;
    VehicleExitAnimKitID?: string;
    CameraModeID?: string;
    FlagsC?: string;
    UiSkinFileDataID?: string;
    UiSkin?: string;
    Field_3_3_5_12213_001?: string;
    Field_3_3_5_12213_004?: string;
    Field_3_3_5_12213_017?: string;
    Field_3_3_5_12213_027?: string;
    Field_3_3_5_12213_029?: string;
    Field_3_3_5_12213_034?: string;
    Field_3_3_5_12213_037?: string;
    Field_3_3_5_12213_038?: string;
    Field_3_3_5_12213_041?: string;
    Field_3_3_5_12213_043?: string;
    Field_3_3_5_12213_044?: string;
    Field_3_3_5_12213_045?: string;
    Field_3_3_5_12213_046?: string;
    Field_3_3_5_12213_047?: string;
    Field_3_3_5_12213_048?: string;
    Field_3_3_5_12213_049?: string;
    Field_3_3_5_12213_050?: string;
    Field_3_3_5_12213_051?: string;
    Field_3_3_5_12213_052?: string;
    Field_3_3_5_12213_053?: string;
    Field_3_3_5_12213_054?: string;
    Field_3_3_5_12213_055?: string;
    Field_3_1_0_9767_001?: string;
    Field_3_1_0_9767_004?: string;
    Field_3_1_0_9767_017?: string;
    Field_3_1_0_9767_029?: string;
    Field_3_1_0_9767_034?: string;
    Field_3_1_0_9767_037?: string;
    Field_3_1_0_9767_038?: string;
    Field_3_1_0_9767_041?: string;
    Field_3_1_0_9767_044?: string;
    Field_3_1_0_9767_045?: string;
    Field_3_1_0_9767_046?: string;
    Field_3_1_0_9767_047?: string;
    Field_3_1_0_9767_048?: string;
    Field_3_1_0_9767_049?: string;
    Field_3_1_0_9767_050?: string;
    Field_3_1_0_9767_051?: string;
    Field_3_1_0_9767_052?: string;
    Field_3_1_0_9767_053?: string;
    Field_3_1_0_9767_054?: string;
    Field_3_1_0_9767_055?: string;
}
interface VehiclePOITypeDatabase{
    ID?: string;
    Flags?: string;
    TextureWidth?: string;
    TextureHeight?: string;
    OccupiedTexture?: string;
    UnoccupiedTexture?: string;
}
interface VideoHardwareDatabase{
    ID?: string;
    VendorID?: string;
    DeviceID?: string;
    FarclipIdx?: string;
    TerrainLODDistIdx?: string;
    TerrainShadowLOD?: string;
    DetailDoodadDensityIdx?: string;
    DetailDoodadAlpha?: string;
    AnimatingDoodadIdx?: string;
    Trilinear?: string;
    NumLights?: string;
    Specularity?: string;
    WaterLODIdx?: string;
    ParticleDensityIdx?: string;
    UnitDrawDistIdx?: string;
    SmallCullDistIdx?: string;
    ResolutionIdx?: string;
    BaseMipLevel?: string;
    OglOverrides?: string;
    D3dOverrides?: string;
    FixLag?: string;
    Multisample?: string;
    Atlasdisable?: string;
    OglPixelShader?: string;
    D3dPixelShader?: string;
}
interface VirtualAttachmentCustomizationDatabase{
    ID?: string;
    FileDataID?: string;
    PositionerID?: string;
    VirtualAttachmentID?: string;
}
interface VirtualAttachmentDatabase{
    ID?: string;
    Name?: string;
    PositionerID?: string;
}
interface VignetteDatabase{
    Name_lang?: string;
    ID?: string;
    Flags?: string;
    MaxHeight?: string;
    MinHeight?: string;
    PlayerConditionID?: string;
    QuestFeedbackEffectID?: string;
    VisibleTrackingQuestID?: string;
    VignetteType?: string;
    RewardQuestID?: string;
    UiWidgetSetID?: string;
}
interface VocalUISoundsDatabase{
    ID?: string;
    VocalUIEnum?: string;
    RaceID?: string;
    NormalSoundID?: string;
    PissedSoundID?: string;
    ClassID?: string;
}
interface VolumeFogConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    WhenFalse?: string;
    WhenTrue?: string;
    VFOG_uID?: string;
}
interface WMOMinimapTextureDatabase{
    ID?: string;
    WMOID?: string;
    BlockX?: string;
    BlockY?: string;
    FileDataID?: string;
    GroupNum?: string;
}
interface WMOAreaTableDatabase{
    ID?: string;
    WMOID?: string;
    NameSetID?: string;
    WMOGroupID?: string;
    SoundProviderPref?: string;
    SoundProviderPrefUnderwater?: string;
    AmbienceID?: string;
    ZoneMusic?: string;
    IntroSound?: string;
    Flags?: string;
    AreaTableID?: string;
    AreaName_lang?: string;
    UwIntroSound?: string;
    UwZoneMusic?: string;
    UwAmbience?: string;
    DayAmbienceSoundID?: string;
    NightAmbienceSoundID?: string;
    MIDIAmbience?: string;
    MIDIAmbienceUnderwater?: string;
    IntroPriority?: string;
    InlineWMOID?: string;
    Field_0_7_0_3694_010?: string;
}
interface WaterfallDataDatabase{
    ID?: string;
    Field_8_1_5_28938_000?: string;
    Field_8_1_5_28938_001?: string;
    Field_8_1_5_28938_002?: string;
    Field_8_1_5_28938_003?: string;
    Field_8_1_5_28938_004?: string;
    Field_8_1_5_28938_005?: string;
    Field_8_1_5_28938_006?: string;
    Field_8_1_5_28938_007?: string;
    Field_8_1_5_28938_008?: string;
    Field_8_1_5_28938_009?: string;
    Field_8_1_5_28938_010?: string;
    Field_8_1_5_28938_011?: string;
    Field_8_1_5_28938_012?: string;
    Field_8_1_5_28938_013?: string;
    Field_8_1_5_28938_014?: string;
    Field_8_1_5_28938_015?: string;
    Field_8_1_5_28938_016?: string;
    Field_8_1_5_28938_017?: string;
    Field_8_1_5_28938_018?: string;
}
interface WaypointSafeLocsDatabase{
    ID?: string;
    Pos?: string;
    MapID?: string;
}
interface WaypointEdgeDatabase{
    ID?: string;
    Start?: string;
    End?: string;
    Flags?: string;
    PlayerConditionID?: string;
    Field_8_1_5_29281_005?: string;
}
interface WaypointNodeDatabase{
    Name_lang?: string;
    ID?: string;
    SafeLocID?: string;
    PlayerConditionID?: string;
    Field_8_1_5_29281_003?: string;
    Field_8_1_5_29281_004?: string;
    Flags?: string;
    Field_8_2_0_30080_005?: string;
    Field_8_2_0_30080_006?: string;
}
interface WbCertBlacklistDatabase{
    ID?: string;
    Field_5_3_0_16965_001?: string;
    Field_5_3_0_16965_002?: string;
}
interface WbAccessControlListDatabase{
    RegionFlags?: string;
    ID?: string;
    URL?: string;
    GrantFlags?: string;
    RegionID?: string;
    RevokeFlags?: string;
    WowEditInternal?: string;
}
interface WeaponImpactSoundsDatabase{
    ID?: string;
    WeaponSubClassID?: string;
    ParrySoundType?: string;
    ImpactSoundID?: string;
    CritImpactSoundID?: string;
    ImpactSource?: string;
    PierceCritImpactSoundID?: string;
    PierceImpactSoundID?: string;
}
interface WbCertWhitelistDatabase{
    Padding_5_3_0_16965_004?: string;
    ID?: string;
    Domain?: string;
    GrantAccess?: string;
    RevokeAccess?: string;
    WowEditInternal?: string;
}
interface WeaponSwingSounds2Database{
    ID?: string;
    SwingType?: string;
    Crit?: string;
    SoundID?: string;
}
interface WbPermissionsDatabase{
    ID?: string;
    FilePath?: string;
    GrantAccess?: string;
    Field_5_3_0_16965_001?: string;
    Field_5_3_0_16965_002?: string;
}
interface WeaponTrailDatabase{
    ID?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    FileDataID?: string;
    Pitch?: string;
    Roll?: string;
    TextureFileDataID?: string;
    TextureScaleU?: string;
    TextureScaleV?: string;
    TextureScrollRateU?: string;
    TextureScrollRateV?: string;
    Yaw?: string;
}
interface WeatherDatabase{
    ID?: string;
    AmbienceID?: string;
    Type?: string;
    EffectType?: string;
    Intensity?: string;
    TransitionSkyBox?: string;
    EffectColor?: string;
    EffectTexture?: string;
    SoundAmbienceID?: string;
    WindSettingsID?: string;
    EffectTextureFileDataID?: string;
    FallModifier?: string;
    ParticulateFileDataID?: string;
    RotationalSpeed?: string;
    Scale?: string;
    TwinkleIntensity?: string;
    Volatility?: string;
    LightningID?: string;
    OverrideColor?: string;
    OverrideCount?: string;
    OverrideOpacity?: string;
    VolumeEdgeFadeStart?: string;
    VolumeFlags?: string;
    OverrideColorIntensity?: string;
    Field_9_0_1_33978_001?: string;
}
interface WeaponTrailParamDatabase{
    ID?: string;
    Duration?: string;
    EdgeLifeSpan?: string;
    FadeOutTime?: string;
    Flags?: string;
    Hand?: string;
    InitialDelay?: string;
    OverrideAttachBot?: string;
    OverrideAttachTop?: string;
    SmoothSampleAngle?: string;
    WeaponTrailID?: string;
}
interface WeatherXParticulateDatabase{
    ID?: string;
    FileDataID?: string;
    ParentWeatherID?: string;
}
interface WindSettingsDatabase{
    ID?: string;
    BaseDir?: string;
    BaseMag?: string;
    Duration?: string;
    Flags?: string;
    Frequency?: string;
    MaxStepDir?: string;
    MaxStepMag?: string;
    VarianceDir?: string;
    VarianceMagOver?: string;
    VarianceMagUnder?: string;
}
interface WeeklyRewardChestThresholdDatabase{
    ID?: string;
    Type?: string;
    Index?: string;
    Threshold?: string;
}
interface WeaponTrailModelDefDatabase{
    ID?: string;
    AnimEnumID?: string;
    LowDefFileDataID?: string;
    WeaponTrailID?: string;
    ModelFileDataID?: string;
}
interface WorldElapsedTimerDatabase{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
    Type?: string;
}
interface WorldEffectDatabase{
    ID?: string;
    TargetType?: string;
    TargetAsset?: string;
    QuestFeedbackEffectID?: string;
    PlayerConditionID?: string;
    CombatConditionID?: string;
    WhenToDisplay?: string;
}
interface WorldBossLockoutDatabase{
    Name_lang?: string;
    ID?: string;
    TrackingQuestID?: string;
}
interface WorldChunkSoundsDatabase{
    MapID?: string;
    ChunkX?: string;
    ChunkY?: string;
    SubchunkX?: string;
    SubchunkY?: string;
    SoundOverrideID?: string;
    ID?: string;
    WorldMapContinentID?: string;
    ZoneIntroMusicID?: string;
    ZoneMusicID?: string;
    SoundAmbienceID?: string;
    SoundProviderPreferencesID?: string;
}
interface WorldMapOverlayTileDatabase{
    ID?: string;
    ColIndex?: string;
    FileDataID?: string;
    LayerIndex?: string;
    RowIndex?: string;
    WorldMapOverlayID?: string;
}
interface WorldMapAreaDatabase{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    AreaName?: string;
    LocLeft?: string;
    LocRight?: string;
    LocTop?: string;
    LocBottom?: string;
    DisplayMapID?: string;
    DefaultDungeonFloor?: string;
    ParentWorldMapID?: string;
    Flags?: string;
    LevelRangeMin?: string;
    LevelRangeMax?: string;
    BountyDisplayLocation?: string;
    BountySetID?: string;
    VisibilityPlayerConditionID?: string;
    LeftBoundary?: string;
    RightBoundary?: string;
    TopBoundary?: string;
    BottomBoundary?: string;
}
interface WorldMapContinentDatabase{
    ID?: string;
    MapID?: string;
    LeftBoundary?: string;
    RightBoundary?: string;
    TopBoundary?: string;
    BottomBoundary?: string;
    ContinentOffset?: string;
    Scale?: string;
    TaxiMin?: string;
    TaxiMax?: string;
    WorldMapID?: string;
    Flags?: string;
    ContinentOffsetX?: string;
    ContinentOffsetY?: string;
}
interface WorldMapOverlayDatabase{
    ID?: string;
    MapAreaID?: string;
    AreaID?: string;
    TextureName?: string;
    TextureWidth?: string;
    TextureHeight?: string;
    OffsetX?: string;
    OffsetY?: string;
    HitRectTop?: string;
    HitRectLeft?: string;
    HitRectBottom?: string;
    HitRectRight?: string;
    PlayerConditionID?: string;
    Flags?: string;
    MapPointX?: string;
    MapPointY?: string;
    UiMapArtID?: string;
    Field_7_3_2_25549_012?: string;
}
interface WorldMapTransformsDatabase{
    ID?: string;
    MapID?: string;
    RegionMin?: string;
    RegionMax?: string;
    NewMapID?: string;
    RegionOffset?: string;
    NewDungeonMapID?: string;
    Flags?: string;
    NewAreaID?: string;
    RegionScale?: string;
    AreaID?: string;
    Priority?: string;
    Region?: string;
}
interface WorldSafeLocsDatabase{
    ID?: string;
    Continent?: string;
    Loc?: string;
    Facing?: string;
    AreaName_lang?: string;
}
interface WorldStateUIDatabase{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    PhaseUseFlags?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    Icon?: string;
    String_lang?: string;
    Tooltip_lang?: string;
    StateVariable?: string;
    Type?: string;
    DynamicIcon?: string;
    DynamicTooltip_lang?: string;
    ExtendedUI?: string;
    ExtendedUIStateVariable?: string;
    DynamicFlashIconFileID?: string;
    DynamicIconFileID?: string;
    OrderIndex?: string;
    PhaseShift?: string;
    FactionID?: string;
}
interface WorldStateDatabase{
    ID?: string;
}
interface WorldStateExpressionDatabase{
    ID?: string;
    Expression?: string;
}
interface WowError_StringsDatabase{
    ID?: string;
    Name?: string;
    Description_lang?: string;
}
interface World_PVP_AreaDatabase{
    ID?: string;
    Area_ID?: string;
    Next_time_worldstate?: string;
    Game_time_worldstate?: string;
    Battle_populate_time?: string;
    Min_level?: string;
    Max_level?: string;
    Map_ID?: string;
}
interface ZoneLightDatabase{
    ID?: string;
    Name?: string;
    MapID?: string;
    LightID?: string;
    Flags?: string;
    Zmin?: string;
    Zmax?: string;
    TransitionType?: string;
    PlayerConditionID?: string;
}
interface WorldStateZoneSoundsDatabase{
    ID?: string;
    WorldStateID?: string;
    WorldStateValue?: string;
    AreaID?: string;
    WMOAreaID?: string;
    ZoneIntroMusicID?: string;
    ZoneMusicID?: string;
    SoundAmbienceID?: string;
    SoundProviderPreferencesID?: string;
    OrderBy?: string;
}
interface ZoneIntroMusicTableDatabase{
    ID?: string;
    Name?: string;
    SoundID?: string;
    Priority?: string;
    MinDelayMinutes?: string;
}
interface ZoneStoryDatabase{
    ID?: string;
    DisplayAchievementID?: string;
    DisplayWorldMapAreaID?: string;
    PlayerFactionGroupID?: string;
    PlayerWorldMapAreaID?: string;
    DisplayUIMapID?: string;
    PlayerUIMapID?: string;
}
interface ZoneLightPointDatabase{
    ID?: string;
    ZoneLightID?: string;
    Pos?: string;
    PointOrder?: string;
}
interface gtBarberShopCostBaseDatabase{
    Data?: string;
    ID?: string;
}
interface ZoneMusicDatabase{
    ID?: string;
    SetName?: string;
    SilenceIntervalMin?: string;
    SilenceIntervalMax?: string;
    Sounds?: string;
    VolumeFloat?: string;
    MusicFile?: string;
    SegmentLength?: string;
    SegmentPlayMin?: string;
    SegmentPlayMax?: string;
}
interface gtBattlePetXPDatabase{
    ID?: string;
    Data?: string;
}
interface gtBattlePetTypeDamageModDatabase{
    ID?: string;
    Data?: string;
}
interface gtChanceToMeleeCritBaseDatabase{
    Data?: string;
    ID?: string;
}
interface gtChanceToMeleeCritDatabase{
    Data?: string;
    ID?: string;
}
interface gtArmorMitigationByLvlDatabase{
    ID?: string;
    Data?: string;
}
interface gtChanceToSpellCritBaseDatabase{
    Data?: string;
    ID?: string;
}
interface gtChanceToSpellCritDatabase{
    Data?: string;
    ID?: string;
}
interface gtCombatRatingsDatabase{
    Data?: string;
    ID?: string;
}
interface gtMasteryMultipliersDatabase{
    ID?: string;
    Data?: string;
}
interface gtItemSocketCostPerLevelDatabase{
    ID?: string;
    Data?: string;
}
interface gtNPCManaCostScalerDatabase{
    Data?: string;
    ID?: string;
}
interface gtOCTBaseHPByClassDatabase{
    ID?: string;
    Data?: string;
}
interface gtOCTBaseMPByClassDatabase{
    ID?: string;
    Data?: string;
}
interface gtOCTHpPerStaminaDatabase{
    ID?: string;
    Data?: string;
}
interface gtOCTRegenMPDatabase{
    ID?: string;
    Data?: string;
}
interface gtOCTClassCombatRatingScalarDatabase{
    ID?: string;
    Data?: string;
}
interface gtOCTLevelExperienceDatabase{
    ID?: string;
    Data?: string;
}
interface gtOCTRegenHPDatabase{
    ID?: string;
    Data?: string;
}
interface gtResilienceDRDatabase{
    ID?: string;
    Data?: string;
}
interface gtSpellScalingDatabase{
    Data?: string;
    ID?: string;
}
interface gtRegenMPPerSptDatabase{
    Data?: string;
    ID?: string;
}
interface gtRegenHPPerSptDatabase{
    ID?: string;
    Data?: string;
}
interface FetchDB2Func{
    (db: 'Achievement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AchievementDatabase[]>;
    (db: 'Achievement_Category', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Achievement_CategoryDatabase[]>;
    (db: 'Achievement_Criteria', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Achievement_CriteriaDatabase[]>;
    (db: 'AdventureJournal', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AdventureJournalDatabase[]>;
    (db: 'AdventureMapPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AdventureMapPOIDatabase[]>;
    (db: 'AlliedRace', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AlliedRaceDatabase[]>;
    (db: 'AlliedRaceRacialAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AlliedRaceRacialAbilityDatabase[]>;
    (db: 'AnimKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitDatabase[]>;
    (db: 'AnimKitBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitBoneSetDatabase[]>;
    (db: 'AnimKitBoneSetAlias', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitBoneSetAliasDatabase[]>;
    (db: 'AnimKitConfig', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitConfigDatabase[]>;
    (db: 'AnimKitConfigBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitConfigBoneSetDatabase[]>;
    (db: 'AnimKitPriority', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitPriorityDatabase[]>;
    (db: 'AnimKitReplacement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitReplacementDatabase[]>;
    (db: 'AnimKitSegment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitSegmentDatabase[]>;
    (db: 'AnimReplacement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimReplacementDatabase[]>;
    (db: 'AnimReplacementSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimReplacementSetDatabase[]>;
    (db: 'AnimaCable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimaCableDatabase[]>;
    (db: 'AnimaCylinder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimaCylinderDatabase[]>;
    (db: 'AnimaMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimaMaterialDatabase[]>;
    (db: 'AnimationData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimationDataDatabase[]>;
    (db: 'AnimationNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimationNamesDatabase[]>;
    (db: 'AoiBox', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AoiBoxDatabase[]>;
    (db: 'AreaAssignment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaAssignmentDatabase[]>;
    (db: 'AreaConditionalData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaConditionalDataDatabase[]>;
    (db: 'AreaFarClipOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaFarClipOverrideDatabase[]>;
    (db: 'AreaGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaGroupDatabase[]>;
    (db: 'AreaGroupMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaGroupMemberDatabase[]>;
    (db: 'AreaMIDIAmbiences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaMIDIAmbiencesDatabase[]>;
    (db: 'AreaPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaPOIDatabase[]>;
    (db: 'AreaPOISortedWorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaPOISortedWorldStateDatabase[]>;
    (db: 'AreaPOIState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaPOIStateDatabase[]>;
    (db: 'AreaTable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTableDatabase[]>;
    (db: 'AreaTrigger', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerDatabase[]>;
    (db: 'AreaTriggerActionSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerActionSetDatabase[]>;
    (db: 'AreaTriggerBox', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerBoxDatabase[]>;
    (db: 'AreaTriggerCreateProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerCreatePropertiesDatabase[]>;
    (db: 'AreaTriggerCylinder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerCylinderDatabase[]>;
    (db: 'AreaTriggerSphere', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerSphereDatabase[]>;
    (db: 'ArenaCcItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArenaCcItemDatabase[]>;
    (db: 'ArmorLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArmorLocationDatabase[]>;
    (db: 'Artifact', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactDatabase[]>;
    (db: 'ArtifactAppearance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactAppearanceDatabase[]>;
    (db: 'ArtifactAppearanceSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactAppearanceSetDatabase[]>;
    (db: 'ArtifactCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactCategoryDatabase[]>;
    (db: 'ArtifactItemToTransmog', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactItemToTransmogDatabase[]>;
    (db: 'ArtifactPower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPowerDatabase[]>;
    (db: 'ArtifactPowerLink', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPowerLinkDatabase[]>;
    (db: 'ArtifactPowerPicker', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPowerPickerDatabase[]>;
    (db: 'ArtifactPowerRank', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPowerRankDatabase[]>;
    (db: 'ArtifactQuestXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactQuestXPDatabase[]>;
    (db: 'ArtifactTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactTierDatabase[]>;
    (db: 'ArtifactUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactUnlockDatabase[]>;
    (db: 'AttackAnimKits', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AttackAnimKitsDatabase[]>;
    (db: 'AttackAnimTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AttackAnimTypesDatabase[]>;
    (db: 'AuctionHouse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AuctionHouseDatabase[]>;
    (db: 'AzeriteEmpoweredItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteEmpoweredItemDatabase[]>;
    (db: 'AzeriteEssence', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteEssenceDatabase[]>;
    (db: 'AzeriteEssencePower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteEssencePowerDatabase[]>;
    (db: 'AzeriteItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteItemDatabase[]>;
    (db: 'AzeriteItemMilestonePower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteItemMilestonePowerDatabase[]>;
    (db: 'AzeriteKnowledgeMultiplier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteKnowledgeMultiplierDatabase[]>;
    (db: 'AzeriteLevelInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteLevelInfoDatabase[]>;
    (db: 'AzeritePower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeritePowerDatabase[]>;
    (db: 'AzeritePowerSetMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeritePowerSetMemberDatabase[]>;
    (db: 'AzeriteTierUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteTierUnlockDatabase[]>;
    (db: 'AzeriteTierUnlockSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteTierUnlockSetDatabase[]>;
    (db: 'AzeriteUnlockMapping', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteUnlockMappingDatabase[]>;
    (db: 'BankBagSlotPrices', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BankBagSlotPricesDatabase[]>;
    (db: 'BannedAddons', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BannedAddonsDatabase[]>;
    (db: 'BarberShopStyle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BarberShopStyleDatabase[]>;
    (db: 'BarrageEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BarrageEffectDatabase[]>;
    (db: 'BattlePetAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbilityDatabase[]>;
    (db: 'BattlePetAbilityEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbilityEffectDatabase[]>;
    (db: 'BattlePetAbilityState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbilityStateDatabase[]>;
    (db: 'BattlePetAbilityTurn', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbilityTurnDatabase[]>;
    (db: 'BattlePetBreedQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetBreedQualityDatabase[]>;
    (db: 'BattlePetBreedState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetBreedStateDatabase[]>;
    (db: 'BattlePetDisplayOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetDisplayOverrideDatabase[]>;
    (db: 'BattlePetEffectProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetEffectPropertiesDatabase[]>;
    (db: 'BattlePetNPCTeamMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetNPCTeamMemberDatabase[]>;
    (db: 'BattlePetSpecies', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpeciesDatabase[]>;
    (db: 'BattlePetSpeciesState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpeciesStateDatabase[]>;
    (db: 'BattlePetSpeciesXAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpeciesXAbilityDatabase[]>;
    (db: 'BattlePetSpeciesXCovenant', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpeciesXCovenantDatabase[]>;
    (db: 'BattlePetState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetStateDatabase[]>;
    (db: 'BattlePetVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetVisualDatabase[]>;
    (db: 'BattlemasterList', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlemasterListDatabase[]>;
    (db: 'BeamEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BeamEffectDatabase[]>;
    (db: 'BeckonTrigger', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BeckonTriggerDatabase[]>;
    (db: 'BoneWindModifierModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BoneWindModifierModelDatabase[]>;
    (db: 'BoneWindModifiers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BoneWindModifiersDatabase[]>;
    (db: 'BonusRoll', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BonusRollDatabase[]>;
    (db: 'Bounty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BountyDatabase[]>;
    (db: 'BountySet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BountySetDatabase[]>;
    (db: 'BroadcastText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastTextDatabase[]>;
    (db: 'BroadcastTextDuration', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastTextDurationDatabase[]>;
    (db: 'BroadcastTextSoundState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastTextSoundStateDatabase[]>;
    (db: 'BroadcastTextVOState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastTextVOStateDatabase[]>;
    (db: 'CameraEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraEffectDatabase[]>;
    (db: 'CameraEffectEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraEffectEntryDatabase[]>;
    (db: 'CameraMode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraModeDatabase[]>;
    (db: 'CameraShakes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraShakesDatabase[]>;
    (db: 'Campaign', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CampaignDatabase[]>;
    (db: 'CampaignXCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CampaignXConditionDatabase[]>;
    (db: 'CampaignXQuestLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CampaignXQuestLineDatabase[]>;
    (db: 'CastableRaidBuffs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CastableRaidBuffsDatabase[]>;
    (db: 'CelestialBody', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CelestialBodyDatabase[]>;
    (db: 'Cfg_Categories', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Cfg_CategoriesDatabase[]>;
    (db: 'Cfg_Configs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Cfg_ConfigsDatabase[]>;
    (db: 'Cfg_Regions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Cfg_RegionsDatabase[]>;
    (db: 'ChallengeModeItemBonusOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChallengeModeItemBonusOverrideDatabase[]>;
    (db: 'CharBaseInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharBaseInfoDatabase[]>;
    (db: 'CharBaseSection', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharBaseSectionDatabase[]>;
    (db: 'CharComponentTextureLayouts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharComponentTextureLayoutsDatabase[]>;
    (db: 'CharComponentTextureSections', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharComponentTextureSectionsDatabase[]>;
    (db: 'CharHairGeosets', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharHairGeosetsDatabase[]>;
    (db: 'CharHairTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharHairTexturesDatabase[]>;
    (db: 'CharSectionCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharSectionConditionDatabase[]>;
    (db: 'CharSections', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharSectionsDatabase[]>;
    (db: 'CharShipment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharShipmentDatabase[]>;
    (db: 'CharShipmentContainer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharShipmentContainerDatabase[]>;
    (db: 'CharStartKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharStartKitDatabase[]>;
    (db: 'CharStartOutfit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharStartOutfitDatabase[]>;
    (db: 'CharTextureVariationsV2', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharTextureVariationsV2Database[]>;
    (db: 'CharTitles', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharTitlesDatabase[]>;
    (db: 'CharVariations', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharVariationsDatabase[]>;
    (db: 'CharacterCreateCameras', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterCreateCamerasDatabase[]>;
    (db: 'CharacterFaceBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterFaceBoneSetDatabase[]>;
    (db: 'CharacterFacialHairStyles', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterFacialHairStylesDatabase[]>;
    (db: 'CharacterLoadout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterLoadoutDatabase[]>;
    (db: 'CharacterLoadoutItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterLoadoutItemDatabase[]>;
    (db: 'CharacterLoadoutPet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterLoadoutPetDatabase[]>;
    (db: 'CharacterServiceInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterServiceInfoDatabase[]>;
    (db: 'ChatChannels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChatChannelsDatabase[]>;
    (db: 'ChatProfanity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChatProfanityDatabase[]>;
    (db: 'ChrClassRaceSex', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassRaceSexDatabase[]>;
    (db: 'ChrClassTitle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassTitleDatabase[]>;
    (db: 'ChrClassUIChrModelInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassUIChrModelInfoDatabase[]>;
    (db: 'ChrClassUIDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassUIDisplayDatabase[]>;
    (db: 'ChrClassVillain', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassVillainDatabase[]>;
    (db: 'ChrClasses', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassesDatabase[]>;
    (db: 'ChrClassesXPowerTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassesXPowerTypesDatabase[]>;
    (db: 'ChrCreateClassAnimTarget', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCreateClassAnimTargetDatabase[]>;
    (db: 'ChrCreateClassAnimTargetInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCreateClassAnimTargetInfoDatabase[]>;
    (db: 'ChrCustClientChoiceConversion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustClientChoiceConversionDatabase[]>;
    (db: 'ChrCustItemGeoModify', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustItemGeoModifyDatabase[]>;
    (db: 'ChrCustomization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationDatabase[]>;
    (db: 'ChrCustomizationBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationBoneSetDatabase[]>;
    (db: 'ChrCustomizationCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationCategoryDatabase[]>;
    (db: 'ChrCustomizationChoice', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationChoiceDatabase[]>;
    (db: 'ChrCustomizationCondModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationCondModelDatabase[]>;
    (db: 'ChrCustomizationConversion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationConversionDatabase[]>;
    (db: 'ChrCustomizationDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationDisplayInfoDatabase[]>;
    (db: 'ChrCustomizationElement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationElementDatabase[]>;
    (db: 'ChrCustomizationGeoset', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationGeosetDatabase[]>;
    (db: 'ChrCustomizationMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationMaterialDatabase[]>;
    (db: 'ChrCustomizationOption', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationOptionDatabase[]>;
    (db: 'ChrCustomizationReq', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationReqDatabase[]>;
    (db: 'ChrCustomizationReqChoice', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationReqChoiceDatabase[]>;
    (db: 'ChrCustomizationSkinnedModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationSkinnedModelDatabase[]>;
    (db: 'ChrModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModelDatabase[]>;
    (db: 'ChrModelMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModelMaterialDatabase[]>;
    (db: 'ChrModelTextureLayer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModelTextureLayerDatabase[]>;
    (db: 'ChrModelTextureTarget', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModelTextureTargetDatabase[]>;
    (db: 'ChrProficiency', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrProficiencyDatabase[]>;
    (db: 'ChrRaceRacialAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrRaceRacialAbilityDatabase[]>;
    (db: 'ChrRaceXChrModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrRaceXChrModelDatabase[]>;
    (db: 'ChrRaces', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrRacesDatabase[]>;
    (db: 'ChrSpecialization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrSpecializationDatabase[]>;
    (db: 'ChrUpgradeBucket', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrUpgradeBucketDatabase[]>;
    (db: 'ChrUpgradeBucketSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrUpgradeBucketSpellDatabase[]>;
    (db: 'ChrUpgradeTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrUpgradeTierDatabase[]>;
    (db: 'Cinematic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CinematicDatabase[]>;
    (db: 'CinematicCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CinematicCameraDatabase[]>;
    (db: 'CinematicSequences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CinematicSequencesDatabase[]>;
    (db: 'CinematicSubtitle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CinematicSubtitleDatabase[]>;
    (db: 'ClientSceneEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ClientSceneEffectDatabase[]>;
    (db: 'CloakDampening', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CloakDampeningDatabase[]>;
    (db: 'CloneEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CloneEffectDatabase[]>;
    (db: 'ColorBanding', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ColorBandingDatabase[]>;
    (db: 'CombatCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CombatConditionDatabase[]>;
    (db: 'CommentatorIndirectSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommentatorIndirectSpellDatabase[]>;
    (db: 'CommentatorStartLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommentatorStartLocationDatabase[]>;
    (db: 'CommentatorTrackedCooldown', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommentatorTrackedCooldownDatabase[]>;
    (db: 'CommunityIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommunityIconDatabase[]>;
    (db: 'ComponentModelFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ComponentModelFileDataDatabase[]>;
    (db: 'ComponentTextureFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ComponentTextureFileDataDatabase[]>;
    (db: 'ConditionalContentTuning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConditionalContentTuningDatabase[]>;
    (db: 'ConfigurationWarning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConfigurationWarningDatabase[]>;
    (db: 'ConsoleScripts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConsoleScriptsDatabase[]>;
    (db: 'ContentTuning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuningDatabase[]>;
    (db: 'ContentTuningDescription', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuningDescriptionDatabase[]>;
    (db: 'ContentTuningXExpected', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuningXExpectedDatabase[]>;
    (db: 'ContentTuningXExpectedStatMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuningXExpectedStatModDatabase[]>;
    (db: 'Contribution', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContributionDatabase[]>;
    (db: 'ContributionStyle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContributionStyleDatabase[]>;
    (db: 'ContributionStyleContainer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContributionStyleContainerDatabase[]>;
    (db: 'ConversationLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConversationLineDatabase[]>;
    (db: 'CorruptionEffects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CorruptionEffectsDatabase[]>;
    (db: 'Covenant', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CovenantDatabase[]>;
    (db: 'Creature', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDatabase[]>;
    (db: 'CreatureDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDifficultyDatabase[]>;
    (db: 'CreatureDispXUiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDispXUiCameraDatabase[]>;
    (db: 'CreatureDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoDatabase[]>;
    (db: 'CreatureDisplayInfoCond', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoCondDatabase[]>;
    (db: 'CreatureDisplayInfoCondXChoice', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoCondXChoiceDatabase[]>;
    (db: 'CreatureDisplayInfoEvt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoEvtDatabase[]>;
    (db: 'CreatureDisplayInfoExtra', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoExtraDatabase[]>;
    (db: 'CreatureDisplayInfoGeosetData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoGeosetDataDatabase[]>;
    (db: 'CreatureDisplayInfoOption', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoOptionDatabase[]>;
    (db: 'CreatureDisplayInfoTrn', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoTrnDatabase[]>;
    (db: 'CreatureFamily', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureFamilyDatabase[]>;
    (db: 'CreatureImmunities', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureImmunitiesDatabase[]>;
    (db: 'CreatureModelData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureModelDataDatabase[]>;
    (db: 'CreatureMovementInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureMovementInfoDatabase[]>;
    (db: 'CreatureSoundData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureSoundDataDatabase[]>;
    (db: 'CreatureSpellData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureSpellDataDatabase[]>;
    (db: 'CreatureType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureTypeDatabase[]>;
    (db: 'CreatureXContribution', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureXContributionDatabase[]>;
    (db: 'CreatureXDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureXDisplayInfoDatabase[]>;
    (db: 'CreatureXUiWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureXUiWidgetSetDatabase[]>;
    (db: 'Criteria', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CriteriaDatabase[]>;
    (db: 'CriteriaTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CriteriaTreeDatabase[]>;
    (db: 'CriteriaTreeXEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CriteriaTreeXEffectDatabase[]>;
    (db: 'CurrencyCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurrencyCategoryDatabase[]>;
    (db: 'CurrencyContainer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurrencyContainerDatabase[]>;
    (db: 'CurrencyTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurrencyTypesDatabase[]>;
    (db: 'Curve', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurveDatabase[]>;
    (db: 'CurvePoint', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurvePointDatabase[]>;
    (db: 'DanceMoves', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DanceMovesDatabase[]>;
    (db: 'DeathThudLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeathThudLookupsDatabase[]>;
    (db: 'DecalProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DecalPropertiesDatabase[]>;
    (db: 'DeclinedWord', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeclinedWordDatabase[]>;
    (db: 'DeclinedWordCases', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeclinedWordCasesDatabase[]>;
    (db: 'DestructibleModelData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DestructibleModelDataDatabase[]>;
    (db: 'DeviceBlacklist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeviceBlacklistDatabase[]>;
    (db: 'DeviceDefaultSettings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeviceDefaultSettingsDatabase[]>;
    (db: 'Difficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DifficultyDatabase[]>;
    (db: 'DissolveEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DissolveEffectDatabase[]>;
    (db: 'DriverBlacklist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DriverBlacklistDatabase[]>;
    (db: 'DungeonEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DungeonEncounterDatabase[]>;
    (db: 'DungeonMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DungeonMapDatabase[]>;
    (db: 'DungeonMapChunk', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DungeonMapChunkDatabase[]>;
    (db: 'DurabilityCosts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DurabilityCostsDatabase[]>;
    (db: 'DurabilityQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DurabilityQualityDatabase[]>;
    (db: 'EdgeGlowEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EdgeGlowEffectDatabase[]>;
    (db: 'EmoteAnims', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmoteAnimsDatabase[]>;
    (db: 'Emotes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmotesDatabase[]>;
    (db: 'EmotesText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmotesTextDatabase[]>;
    (db: 'EmotesTextData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmotesTextDataDatabase[]>;
    (db: 'EmotesTextSound', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmotesTextSoundDatabase[]>;
    (db: 'EnumeratedString', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EnumeratedStringDatabase[]>;
    (db: 'EnvironmentalDamage', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EnvironmentalDamageDatabase[]>;
    (db: 'Exhaustion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ExhaustionDatabase[]>;
    (db: 'ExpectedStat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ExpectedStatDatabase[]>;
    (db: 'ExpectedStatMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ExpectedStatModDatabase[]>;
    (db: 'ExtraAbilityInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ExtraAbilityInfoDatabase[]>;
    (db: 'Faction', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FactionDatabase[]>;
    (db: 'FactionGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FactionGroupDatabase[]>;
    (db: 'FactionTemplate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FactionTemplateDatabase[]>;
    (db: 'FileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FileDataDatabase[]>;
    (db: 'FileDataComplete', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FileDataCompleteDatabase[]>;
    (db: 'FilePaths', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FilePathsDatabase[]>;
    (db: 'FootprintTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FootprintTexturesDatabase[]>;
    (db: 'FootstepTerrainLookup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FootstepTerrainLookupDatabase[]>;
    (db: 'FriendshipRepReaction', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FriendshipRepReactionDatabase[]>;
    (db: 'FriendshipReputation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FriendshipReputationDatabase[]>;
    (db: 'FullScreenEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FullScreenEffectDatabase[]>;
    (db: 'GMSurveyAnswers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveyAnswersDatabase[]>;
    (db: 'GMSurveyCurrentSurvey', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveyCurrentSurveyDatabase[]>;
    (db: 'GMSurveyQuestions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveyQuestionsDatabase[]>;
    (db: 'GMSurveySurveys', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveySurveysDatabase[]>;
    (db: 'GMTicketCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMTicketCategoryDatabase[]>;
    (db: 'GameClockDebug', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameClockDebugDatabase[]>;
    (db: 'GameObjectAnimGroupMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectAnimGroupMemberDatabase[]>;
    (db: 'GameObjectArtKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectArtKitDatabase[]>;
    (db: 'GameObjectDiffAnimMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectDiffAnimMapDatabase[]>;
    (db: 'GameObjectDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectDisplayInfoDatabase[]>;
    (db: 'GameObjectDisplayInfoXSoundKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectDisplayInfoXSoundKitDatabase[]>;
    (db: 'GameObjects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectsDatabase[]>;
    (db: 'GameObjectsClient', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectsClientDatabase[]>;
    (db: 'GameParameter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameParameterDatabase[]>;
    (db: 'GameTables', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameTablesDatabase[]>;
    (db: 'GameTips', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameTipsDatabase[]>;
    (db: 'GarrAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAbilityDatabase[]>;
    (db: 'GarrAbilityCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAbilityCategoryDatabase[]>;
    (db: 'GarrAbilityEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAbilityEffectDatabase[]>;
    (db: 'GarrAutoCombatant', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAutoCombatantDatabase[]>;
    (db: 'GarrAutoSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAutoSpellDatabase[]>;
    (db: 'GarrAutoSpellEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAutoSpellEffectDatabase[]>;
    (db: 'GarrBuilding', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrBuildingDatabase[]>;
    (db: 'GarrBuildingDoodadSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrBuildingDoodadSetDatabase[]>;
    (db: 'GarrBuildingPlotInst', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrBuildingPlotInstDatabase[]>;
    (db: 'GarrClassSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrClassSpecDatabase[]>;
    (db: 'GarrClassSpecPlayerCond', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrClassSpecPlayerCondDatabase[]>;
    (db: 'GarrEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrEncounterDatabase[]>;
    (db: 'GarrEncounterSetXEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrEncounterSetXEncounterDatabase[]>;
    (db: 'GarrEncounterXMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrEncounterXMechanicDatabase[]>;
    (db: 'GarrFamilyName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFamilyNameDatabase[]>;
    (db: 'GarrFollItemSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollItemSetDatabase[]>;
    (db: 'GarrFollItemSetMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollItemSetMemberDatabase[]>;
    (db: 'GarrFollSupportSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollSupportSpellDatabase[]>;
    (db: 'GarrFollower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerDatabase[]>;
    (db: 'GarrFollowerLevelXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerLevelXPDatabase[]>;
    (db: 'GarrFollowerQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerQualityDatabase[]>;
    (db: 'GarrFollowerSetXFollower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerSetXFollowerDatabase[]>;
    (db: 'GarrFollowerType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerTypeDatabase[]>;
    (db: 'GarrFollowerUICreature', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerUICreatureDatabase[]>;
    (db: 'GarrFollowerXAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerXAbilityDatabase[]>;
    (db: 'GarrGivenName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrGivenNameDatabase[]>;
    (db: 'GarrItemLevelUpgradeData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrItemLevelUpgradeDataDatabase[]>;
    (db: 'GarrMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMechanicDatabase[]>;
    (db: 'GarrMechanicSetXMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMechanicSetXMechanicDatabase[]>;
    (db: 'GarrMechanicType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMechanicTypeDatabase[]>;
    (db: 'GarrMission', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionDatabase[]>;
    (db: 'GarrMissionSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionSetDatabase[]>;
    (db: 'GarrMissionTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionTextureDatabase[]>;
    (db: 'GarrMissionType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionTypeDatabase[]>;
    (db: 'GarrMissionXEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionXEncounterDatabase[]>;
    (db: 'GarrMissionXFollower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionXFollowerDatabase[]>;
    (db: 'GarrMssnBonusAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMssnBonusAbilityDatabase[]>;
    (db: 'GarrPlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlotDatabase[]>;
    (db: 'GarrPlotBuilding', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlotBuildingDatabase[]>;
    (db: 'GarrPlotInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlotInstanceDatabase[]>;
    (db: 'GarrPlotUICategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlotUICategoryDatabase[]>;
    (db: 'GarrSiteLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrSiteLevelDatabase[]>;
    (db: 'GarrSiteLevelPlotInst', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrSiteLevelPlotInstDatabase[]>;
    (db: 'GarrSpecialization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrSpecializationDatabase[]>;
    (db: 'GarrString', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrStringDatabase[]>;
    (db: 'GarrTalTreeXGarrTalResearch', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalTreeXGarrTalResearchDatabase[]>;
    (db: 'GarrTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentDatabase[]>;
    (db: 'GarrTalentCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentCostDatabase[]>;
    (db: 'GarrTalentMapPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentMapPOIDatabase[]>;
    (db: 'GarrTalentRank', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentRankDatabase[]>;
    (db: 'GarrTalentResearch', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentResearchDatabase[]>;
    (db: 'GarrTalentSocketProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentSocketPropertiesDatabase[]>;
    (db: 'GarrTalentTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentTreeDatabase[]>;
    (db: 'GarrType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTypeDatabase[]>;
    (db: 'GarrUiAnimClassInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrUiAnimClassInfoDatabase[]>;
    (db: 'GarrUiAnimRaceInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrUiAnimRaceInfoDatabase[]>;
    (db: 'GemProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GemPropertiesDatabase[]>;
    (db: 'GlobalCurve', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalCurveDatabase[]>;
    (db: 'GlobalGameContentTuning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalGameContentTuningDatabase[]>;
    (db: 'GlobalPlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalPlayerConditionDatabase[]>;
    (db: 'GlobalPlayerConditionSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalPlayerConditionSetDatabase[]>;
    (db: 'GlobalStrings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalStringsDatabase[]>;
    (db: 'GlobalTable_PlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalTable_PlayerConditionDatabase[]>;
    (db: 'GlueScreenEmote', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlueScreenEmoteDatabase[]>;
    (db: 'GlyphBindableSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphBindableSpellDatabase[]>;
    (db: 'GlyphExclusiveCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphExclusiveCategoryDatabase[]>;
    (db: 'GlyphProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphPropertiesDatabase[]>;
    (db: 'GlyphRequiredSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphRequiredSpecDatabase[]>;
    (db: 'GlyphSlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphSlotDatabase[]>;
    (db: 'GossipXUIDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GossipXUIDisplayInfoDatabase[]>;
    (db: 'GradientEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GradientEffectDatabase[]>;
    (db: 'GroundEffectDoodad', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroundEffectDoodadDatabase[]>;
    (db: 'GroundEffectTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroundEffectTextureDatabase[]>;
    (db: 'GroupFinderActivity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroupFinderActivityDatabase[]>;
    (db: 'GroupFinderActivityGrp', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroupFinderActivityGrpDatabase[]>;
    (db: 'GroupFinderCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroupFinderCategoryDatabase[]>;
    (db: 'GuildColorBackground', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildColorBackgroundDatabase[]>;
    (db: 'GuildColorBorder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildColorBorderDatabase[]>;
    (db: 'GuildColorEmblem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildColorEmblemDatabase[]>;
    (db: 'GuildEmblem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildEmblemDatabase[]>;
    (db: 'GuildPerkSpells', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildPerkSpellsDatabase[]>;
    (db: 'GuildShirtBackground', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildShirtBackgroundDatabase[]>;
    (db: 'GuildShirtBorder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildShirtBorderDatabase[]>;
    (db: 'GuildTabardBackground', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildTabardBackgroundDatabase[]>;
    (db: 'GuildTabardBorder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildTabardBorderDatabase[]>;
    (db: 'GuildTabardEmblem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildTabardEmblemDatabase[]>;
    (db: 'Heirloom', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HeirloomDatabase[]>;
    (db: 'HelmetAnimScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HelmetAnimScalingDatabase[]>;
    (db: 'HelmetGeosetData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HelmetGeosetDataDatabase[]>;
    (db: 'HelmetGeosetVisData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HelmetGeosetVisDataDatabase[]>;
    (db: 'HighlightColor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HighlightColorDatabase[]>;
    (db: 'HolidayDescriptions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HolidayDescriptionsDatabase[]>;
    (db: 'HolidayNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HolidayNamesDatabase[]>;
    (db: 'Holidays', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HolidaysDatabase[]>;
    (db: 'Hotfix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HotfixDatabase[]>;
    (db: 'Hotfixes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HotfixesDatabase[]>;
    (db: 'ImportPriceArmor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceArmorDatabase[]>;
    (db: 'ImportPriceQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceQualityDatabase[]>;
    (db: 'ImportPriceShield', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceShieldDatabase[]>;
    (db: 'ImportPriceWeapon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceWeaponDatabase[]>;
    (db: 'InvasionClientData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<InvasionClientDataDatabase[]>;
    (db: 'Item-sparse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Item_sparseDatabase[]>;
    (db: 'Item', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDatabase[]>;
    (db: 'ItemAppearance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemAppearanceDatabase[]>;
    (db: 'ItemAppearanceXUiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemAppearanceXUiCameraDatabase[]>;
    (db: 'ItemArmorQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemArmorQualityDatabase[]>;
    (db: 'ItemArmorShield', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemArmorShieldDatabase[]>;
    (db: 'ItemArmorTotal', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemArmorTotalDatabase[]>;
    (db: 'ItemBagFamily', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBagFamilyDatabase[]>;
    (db: 'ItemBonus', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusDatabase[]>;
    (db: 'ItemBonusList', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListDatabase[]>;
    (db: 'ItemBonusListGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListGroupDatabase[]>;
    (db: 'ItemBonusListGroupEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListGroupEntryDatabase[]>;
    (db: 'ItemBonusListLevelDelta', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListLevelDeltaDatabase[]>;
    (db: 'ItemBonusListWarforgeLevelDelta', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListWarforgeLevelDeltaDatabase[]>;
    (db: 'ItemBonusSequenceSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusSequenceSpellDatabase[]>;
    (db: 'ItemBonusTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusTreeDatabase[]>;
    (db: 'ItemBonusTreeNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusTreeNodeDatabase[]>;
    (db: 'ItemChildEquipment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemChildEquipmentDatabase[]>;
    (db: 'ItemClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemClassDatabase[]>;
    (db: 'ItemCondExtCosts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemCondExtCostsDatabase[]>;
    (db: 'ItemContextPickerEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemContextPickerEntryDatabase[]>;
    (db: 'ItemCurrencyCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemCurrencyCostDatabase[]>;
    (db: 'ItemCurrencyValue', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemCurrencyValueDatabase[]>;
    (db: 'ItemDamageAmmo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageAmmoDatabase[]>;
    (db: 'ItemDamageOneHand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageOneHandDatabase[]>;
    (db: 'ItemDamageOneHandCaster', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageOneHandCasterDatabase[]>;
    (db: 'ItemDamageRanged', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageRangedDatabase[]>;
    (db: 'ItemDamageThrown', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageThrownDatabase[]>;
    (db: 'ItemDamageTwoHand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageTwoHandDatabase[]>;
    (db: 'ItemDamageTwoHandCaster', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageTwoHandCasterDatabase[]>;
    (db: 'ItemDamageWand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageWandDatabase[]>;
    (db: 'ItemDisenchantLoot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisenchantLootDatabase[]>;
    (db: 'ItemDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisplayInfoDatabase[]>;
    (db: 'ItemDisplayInfoMaterialRes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisplayInfoMaterialResDatabase[]>;
    (db: 'ItemDisplayXUiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisplayXUiCameraDatabase[]>;
    (db: 'ItemEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemEffectDatabase[]>;
    (db: 'ItemExtendedCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemExtendedCostDatabase[]>;
    (db: 'ItemFallbackVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemFallbackVisualDatabase[]>;
    (db: 'ItemGroupSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemGroupSoundsDatabase[]>;
    (db: 'ItemLevelSelector', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLevelSelectorDatabase[]>;
    (db: 'ItemLevelSelectorQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLevelSelectorQualityDatabase[]>;
    (db: 'ItemLevelSelectorQualitySet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLevelSelectorQualitySetDatabase[]>;
    (db: 'ItemLimitCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLimitCategoryDatabase[]>;
    (db: 'ItemLimitCategoryCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLimitCategoryConditionDatabase[]>;
    (db: 'ItemModifiedAppearance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemModifiedAppearanceDatabase[]>;
    (db: 'ItemModifiedAppearanceExtra', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemModifiedAppearanceExtraDatabase[]>;
    (db: 'ItemNameDescription', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemNameDescriptionDatabase[]>;
    (db: 'ItemNameSlotOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemNameSlotOverrideDatabase[]>;
    (db: 'ItemPetFood', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemPetFoodDatabase[]>;
    (db: 'ItemPriceBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemPriceBaseDatabase[]>;
    (db: 'ItemPurchaseGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemPurchaseGroupDatabase[]>;
    (db: 'ItemRandomProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemRandomPropertiesDatabase[]>;
    (db: 'ItemRandomSuffix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemRandomSuffixDatabase[]>;
    (db: 'ItemRangedDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemRangedDisplayInfoDatabase[]>;
    (db: 'ItemReforge', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemReforgeDatabase[]>;
    (db: 'ItemSearchName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSearchNameDatabase[]>;
    (db: 'ItemSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSetDatabase[]>;
    (db: 'ItemSetSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSetSpellDatabase[]>;
    (db: 'ItemSparse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSparseDatabase[]>;
    (db: 'ItemSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSpecDatabase[]>;
    (db: 'ItemSpecOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSpecOverrideDatabase[]>;
    (db: 'ItemSubClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSubClassDatabase[]>;
    (db: 'ItemSubClassMask', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSubClassMaskDatabase[]>;
    (db: 'ItemToBattlePet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemToBattlePetDatabase[]>;
    (db: 'ItemToMountSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemToMountSpellDatabase[]>;
    (db: 'ItemUpgrade', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemUpgradeDatabase[]>;
    (db: 'ItemUpgradePath', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemUpgradePathDatabase[]>;
    (db: 'ItemVisualEffects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemVisualEffectsDatabase[]>;
    (db: 'ItemVisuals', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemVisualsDatabase[]>;
    (db: 'ItemVisualsXEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemVisualsXEffectDatabase[]>;
    (db: 'ItemXBonusTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemXBonusTreeDatabase[]>;
    (db: 'ItemXItemEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemXItemEffectDatabase[]>;
    (db: 'JournalEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterDatabase[]>;
    (db: 'JournalEncounterCreature', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterCreatureDatabase[]>;
    (db: 'JournalEncounterItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterItemDatabase[]>;
    (db: 'JournalEncounterSection', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterSectionDatabase[]>;
    (db: 'JournalEncounterXDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterXDifficultyDatabase[]>;
    (db: 'JournalEncounterXMapLoc', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterXMapLocDatabase[]>;
    (db: 'JournalInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalInstanceDatabase[]>;
    (db: 'JournalItemXDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalItemXDifficultyDatabase[]>;
    (db: 'JournalSectionXDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalSectionXDifficultyDatabase[]>;
    (db: 'JournalTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalTierDatabase[]>;
    (db: 'JournalTierXInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalTierXInstanceDatabase[]>;
    (db: 'Keychain', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<KeychainDatabase[]>;
    (db: 'KeystoneAffix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<KeystoneAffixDatabase[]>;
    (db: 'LFGDungeonExpansion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGDungeonExpansionDatabase[]>;
    (db: 'LFGDungeonGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGDungeonGroupDatabase[]>;
    (db: 'LFGDungeons', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGDungeonsDatabase[]>;
    (db: 'LFGRoleRequirement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGRoleRequirementDatabase[]>;
    (db: 'LanguageWords', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LanguageWordsDatabase[]>;
    (db: 'Languages', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LanguagesDatabase[]>;
    (db: 'LfgDungeonsGroupingMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LfgDungeonsGroupingMapDatabase[]>;
    (db: 'Light', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightDatabase[]>;
    (db: 'LightData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightDataDatabase[]>;
    (db: 'LightFloatBand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightFloatBandDatabase[]>;
    (db: 'LightIntBand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightIntBandDatabase[]>;
    (db: 'LightParams', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightParamsDatabase[]>;
    (db: 'LightSkybox', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightSkyboxDatabase[]>;
    (db: 'Lightning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightningDatabase[]>;
    (db: 'LiquidMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidMaterialDatabase[]>;
    (db: 'LiquidObject', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidObjectDatabase[]>;
    (db: 'LiquidType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidTypeDatabase[]>;
    (db: 'LiquidTypeXTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidTypeXTextureDatabase[]>;
    (db: 'LoadingScreenSkin', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoadingScreenSkinDatabase[]>;
    (db: 'LoadingScreenTaxiSplines', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoadingScreenTaxiSplinesDatabase[]>;
    (db: 'LoadingScreens', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoadingScreensDatabase[]>;
    (db: 'Locale', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LocaleDatabase[]>;
    (db: 'Location', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LocationDatabase[]>;
    (db: 'Lock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LockDatabase[]>;
    (db: 'LockType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LockTypeDatabase[]>;
    (db: 'LookAtController', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LookAtControllerDatabase[]>;
    (db: 'LoreText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoreTextDatabase[]>;
    (db: 'LoreTextPublic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoreTextPublicDatabase[]>;
    (db: 'MCRSlotXMCRCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MCRSlotXMCRCategoryDatabase[]>;
    (db: 'MailTemplate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MailTemplateDatabase[]>;
    (db: 'ManagedWorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManagedWorldStateDatabase[]>;
    (db: 'ManagedWorldStateBuff', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManagedWorldStateBuffDatabase[]>;
    (db: 'ManagedWorldStateInput', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManagedWorldStateInputDatabase[]>;
    (db: 'ManifestInterfaceActionIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceActionIconDatabase[]>;
    (db: 'ManifestInterfaceData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceDataDatabase[]>;
    (db: 'ManifestInterfaceItemIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceItemIconDatabase[]>;
    (db: 'ManifestInterfaceTOCData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceTOCDataDatabase[]>;
    (db: 'ManifestMP3', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestMP3Database[]>;
    (db: 'Map', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapDatabase[]>;
    (db: 'MapCelestialBody', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapCelestialBodyDatabase[]>;
    (db: 'MapChallengeMode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapChallengeModeDatabase[]>;
    (db: 'MapDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapDifficultyDatabase[]>;
    (db: 'MapDifficultyXCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapDifficultyXConditionDatabase[]>;
    (db: 'MapLoadingScreen', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapLoadingScreenDatabase[]>;
    (db: 'MarketingPromotionsXLocale', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MarketingPromotionsXLocaleDatabase[]>;
    (db: 'Material', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MaterialDatabase[]>;
    (db: 'MawPower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MawPowerDatabase[]>;
    (db: 'MawPowerRarity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MawPowerRarityDatabase[]>;
    (db: 'MinorTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MinorTalentDatabase[]>;
    (db: 'MissileTargeting', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MissileTargetingDatabase[]>;
    (db: 'ModelAnimCloakDampening', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelAnimCloakDampeningDatabase[]>;
    (db: 'ModelFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelFileDataDatabase[]>;
    (db: 'ModelManifest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelManifestDatabase[]>;
    (db: 'ModelNameToManifest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelNameToManifestDatabase[]>;
    (db: 'ModelRibbonQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelRibbonQualityDatabase[]>;
    (db: 'ModifiedCraftingCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingCategoryDatabase[]>;
    (db: 'ModifiedCraftingReagentItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingReagentItemDatabase[]>;
    (db: 'ModifiedCraftingReagentSlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingReagentSlotDatabase[]>;
    (db: 'ModifiedCraftingSpellSlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingSpellSlotDatabase[]>;
    (db: 'ModifiedReagentItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedReagentItemDatabase[]>;
    (db: 'ModifierTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifierTreeDatabase[]>;
    (db: 'Mount', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountDatabase[]>;
    (db: 'MountCapability', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountCapabilityDatabase[]>;
    (db: 'MountEquipment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountEquipmentDatabase[]>;
    (db: 'MountType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountTypeDatabase[]>;
    (db: 'MountTypeXCapability', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountTypeXCapabilityDatabase[]>;
    (db: 'MountXDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountXDisplayDatabase[]>;
    (db: 'MountXSpellVisualKitPicker', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountXSpellVisualKitPickerDatabase[]>;
    (db: 'Movie', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MovieDatabase[]>;
    (db: 'MovieFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MovieFileDataDatabase[]>;
    (db: 'MovieOverlays', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MovieOverlaysDatabase[]>;
    (db: 'MovieVariation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MovieVariationDatabase[]>;
    (db: 'MultiStateProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MultiStatePropertiesDatabase[]>;
    (db: 'MultiTransitionProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MultiTransitionPropertiesDatabase[]>;
    (db: 'MythicPlusSeason', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MythicPlusSeasonDatabase[]>;
    (db: 'MythicPlusSeasonRewardLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MythicPlusSeasonRewardLevelsDatabase[]>;
    (db: 'MythicPlusSeasonTrackedAffix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MythicPlusSeasonTrackedAffixDatabase[]>;
    (db: 'NPCModelItemSlotDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NPCModelItemSlotDisplayInfoDatabase[]>;
    (db: 'NPCSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NPCSoundsDatabase[]>;
    (db: 'NameGen', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NameGenDatabase[]>;
    (db: 'NamesProfanity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NamesProfanityDatabase[]>;
    (db: 'NamesReserved', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NamesReservedDatabase[]>;
    (db: 'NamesReservedLocale', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NamesReservedLocaleDatabase[]>;
    (db: 'NumTalentsAtLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NumTalentsAtLevelDatabase[]>;
    (db: 'ObjectEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectDatabase[]>;
    (db: 'ObjectEffectGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectGroupDatabase[]>;
    (db: 'ObjectEffectModifier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectModifierDatabase[]>;
    (db: 'ObjectEffectPackage', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectPackageDatabase[]>;
    (db: 'ObjectEffectPackageElem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectPackageElemDatabase[]>;
    (db: 'ObjectEffectStateName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectStateNameDatabase[]>;
    (db: 'Occluder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OccluderDatabase[]>;
    (db: 'OccluderCurtain', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OccluderCurtainDatabase[]>;
    (db: 'OccluderLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OccluderLocationDatabase[]>;
    (db: 'OccluderNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OccluderNodeDatabase[]>;
    (db: 'OutlineEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OutlineEffectDatabase[]>;
    (db: 'OverrideSpellData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OverrideSpellDataDatabase[]>;
    (db: 'PVPBracketTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPBracketTypesDatabase[]>;
    (db: 'PVPDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPDifficultyDatabase[]>;
    (db: 'PVPItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPItemDatabase[]>;
    (db: 'PVPScoreboardCellInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPScoreboardCellInfoDatabase[]>;
    (db: 'PVPScoreboardColumnHeader', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPScoreboardColumnHeaderDatabase[]>;
    (db: 'PVPScoreboardLayout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPScoreboardLayoutDatabase[]>;
    (db: 'PVPStat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPStatDatabase[]>;
    (db: 'Package', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PackageDatabase[]>;
    (db: 'PageTextMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PageTextMaterialDatabase[]>;
    (db: 'PaperDollItemFrame', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PaperDollItemFrameDatabase[]>;
    (db: 'ParagonReputation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ParagonReputationDatabase[]>;
    (db: 'ParticleColor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ParticleColorDatabase[]>;
    (db: 'Particulate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ParticulateDatabase[]>;
    (db: 'ParticulateSound', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ParticulateSoundDatabase[]>;
    (db: 'Path', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathDatabase[]>;
    (db: 'PathEdge', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathEdgeDatabase[]>;
    (db: 'PathNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathNodeDatabase[]>;
    (db: 'PathNodeProperty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathNodePropertyDatabase[]>;
    (db: 'PathProperty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathPropertyDatabase[]>;
    (db: 'PetLoyalty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PetLoyaltyDatabase[]>;
    (db: 'PetPersonality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PetPersonalityDatabase[]>;
    (db: 'PetitionType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PetitionTypeDatabase[]>;
    (db: 'Phase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PhaseDatabase[]>;
    (db: 'PhaseShiftZoneSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PhaseShiftZoneSoundsDatabase[]>;
    (db: 'PhaseXPhaseGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PhaseXPhaseGroupDatabase[]>;
    (db: 'PlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PlayerConditionDatabase[]>;
    (db: 'Positioner', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PositionerDatabase[]>;
    (db: 'PositionerState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PositionerStateDatabase[]>;
    (db: 'PositionerStateEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PositionerStateEntryDatabase[]>;
    (db: 'PowerDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PowerDisplayDatabase[]>;
    (db: 'PowerType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PowerTypeDatabase[]>;
    (db: 'PrestigeLevelInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PrestigeLevelInfoDatabase[]>;
    (db: 'PvpBrawl', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpBrawlDatabase[]>;
    (db: 'PvpReward', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpRewardDatabase[]>;
    (db: 'PvpScalingEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpScalingEffectDatabase[]>;
    (db: 'PvpScalingEffectType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpScalingEffectTypeDatabase[]>;
    (db: 'PvpSeason', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpSeasonDatabase[]>;
    (db: 'PvpSeasonRewardLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpSeasonRewardLevelsDatabase[]>;
    (db: 'PvpTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalentDatabase[]>;
    (db: 'PvpTalentCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalentCategoryDatabase[]>;
    (db: 'PvpTalentSlotUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalentSlotUnlockDatabase[]>;
    (db: 'PvpTalentUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalentUnlockDatabase[]>;
    (db: 'PvpTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTierDatabase[]>;
    (db: 'QuestFactionReward', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestFactionRewardDatabase[]>;
    (db: 'QuestFeedbackEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestFeedbackEffectDatabase[]>;
    (db: 'QuestInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestInfoDatabase[]>;
    (db: 'QuestLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestLineDatabase[]>;
    (db: 'QuestLineXQuest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestLineXQuestDatabase[]>;
    (db: 'QuestMoneyReward', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestMoneyRewardDatabase[]>;
    (db: 'QuestObjective', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestObjectiveDatabase[]>;
    (db: 'QuestPOIBlob', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestPOIBlobDatabase[]>;
    (db: 'QuestPOIPoint', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestPOIPointDatabase[]>;
    (db: 'QuestPackageItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestPackageItemDatabase[]>;
    (db: 'QuestSort', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestSortDatabase[]>;
    (db: 'QuestV2', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestV2Database[]>;
    (db: 'QuestV2CliTask', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestV2CliTaskDatabase[]>;
    (db: 'QuestXGroupActivity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXGroupActivityDatabase[]>;
    (db: 'QuestXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXPDatabase[]>;
    (db: 'QuestXUIQuestDetailsTheme', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXUIQuestDetailsThemeDatabase[]>;
    (db: 'QuestXUiWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXUiWidgetSetDatabase[]>;
    (db: 'RTPC', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RTPCDatabase[]>;
    (db: 'RTPCData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RTPCDataDatabase[]>;
    (db: 'RacialMounts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RacialMountsDatabase[]>;
    (db: 'RafActivity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RafActivityDatabase[]>;
    (db: 'RandPropPoints', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RandPropPointsDatabase[]>;
    (db: 'RecipeProgressionGroupEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RecipeProgressionGroupEntryDatabase[]>;
    (db: 'RelicSlotTierRequirement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RelicSlotTierRequirementDatabase[]>;
    (db: 'RelicTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RelicTalentDatabase[]>;
    (db: 'RenownRewards', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RenownRewardsDatabase[]>;
    (db: 'ResearchBranch', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchBranchDatabase[]>;
    (db: 'ResearchField', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchFieldDatabase[]>;
    (db: 'ResearchProject', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchProjectDatabase[]>;
    (db: 'ResearchSite', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchSiteDatabase[]>;
    (db: 'Resistances', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResistancesDatabase[]>;
    (db: 'RewardPack', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RewardPackDatabase[]>;
    (db: 'RewardPackXCurrencyType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RewardPackXCurrencyTypeDatabase[]>;
    (db: 'RewardPackXItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RewardPackXItemDatabase[]>;
    (db: 'RibbonQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RibbonQualityDatabase[]>;
    (db: 'RopeEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RopeEffectDatabase[]>;
    (db: 'RulesetItemUpgrade', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RulesetItemUpgradeDatabase[]>;
    (db: 'RulesetRaidLootUpgrade', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RulesetRaidLootUpgradeDatabase[]>;
    (db: 'RulesetRaidOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RulesetRaidOverrideDatabase[]>;
    (db: 'RuneforgeLegendaryAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RuneforgeLegendaryAbilityDatabase[]>;
    (db: 'SDReplacementModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SDReplacementModelDatabase[]>;
    (db: 'SSAOSettings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SSAOSettingsDatabase[]>;
    (db: 'SandboxScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SandboxScalingDatabase[]>;
    (db: 'ScalingStatDistribution', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScalingStatDistributionDatabase[]>;
    (db: 'ScalingStatValues', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScalingStatValuesDatabase[]>;
    (db: 'Scenario', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScenarioDatabase[]>;
    (db: 'ScenarioEventEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScenarioEventEntryDatabase[]>;
    (db: 'ScenarioStep', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScenarioStepDatabase[]>;
    (db: 'SceneScript', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptDatabase[]>;
    (db: 'SceneScriptGlobalText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptGlobalTextDatabase[]>;
    (db: 'SceneScriptPackage', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptPackageDatabase[]>;
    (db: 'SceneScriptPackageMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptPackageMemberDatabase[]>;
    (db: 'SceneScriptText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptTextDatabase[]>;
    (db: 'ScheduledInterval', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledIntervalDatabase[]>;
    (db: 'ScheduledWorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledWorldStateDatabase[]>;
    (db: 'ScheduledWorldStateGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledWorldStateGroupDatabase[]>;
    (db: 'ScheduledWorldStateXUniqCat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledWorldStateXUniqCatDatabase[]>;
    (db: 'ScreenEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScreenEffectDatabase[]>;
    (db: 'ScreenEffectType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScreenEffectTypeDatabase[]>;
    (db: 'ScreenLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScreenLocationDatabase[]>;
    (db: 'SeamlessSite', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SeamlessSiteDatabase[]>;
    (db: 'ServerMessages', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ServerMessagesDatabase[]>;
    (db: 'ShadowyEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ShadowyEffectDatabase[]>;
    (db: 'SheatheSoundLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SheatheSoundLookupsDatabase[]>;
    (db: 'SiegeableProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SiegeablePropertiesDatabase[]>;
    (db: 'SkillCostsData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillCostsDataDatabase[]>;
    (db: 'SkillLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLineDatabase[]>;
    (db: 'SkillLineAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLineAbilityDatabase[]>;
    (db: 'SkillLineAbilitySortedSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLineAbilitySortedSpellDatabase[]>;
    (db: 'SkillLineCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLineCategoryDatabase[]>;
    (db: 'SkillRaceClassInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillRaceClassInfoDatabase[]>;
    (db: 'SkillTiers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillTiersDatabase[]>;
    (db: 'SkySceneXPlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkySceneXPlayerConditionDatabase[]>;
    (db: 'Soulbind', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindDatabase[]>;
    (db: 'SoulbindConduit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitDatabase[]>;
    (db: 'SoulbindConduitEnhancedSocket', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitEnhancedSocketDatabase[]>;
    (db: 'SoulbindConduitItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitItemDatabase[]>;
    (db: 'SoulbindConduitRank', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitRankDatabase[]>;
    (db: 'SoulbindConduitRankProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitRankPropertiesDatabase[]>;
    (db: 'SoulbindUIDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindUIDisplayInfoDatabase[]>;
    (db: 'SoundAmbience', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundAmbienceDatabase[]>;
    (db: 'SoundAmbienceFlavor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundAmbienceFlavorDatabase[]>;
    (db: 'SoundBus', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundBusDatabase[]>;
    (db: 'SoundBusName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundBusNameDatabase[]>;
    (db: 'SoundBusOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundBusOverrideDatabase[]>;
    (db: 'SoundCharacterMacroLines', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundCharacterMacroLinesDatabase[]>;
    (db: 'SoundEmitterPillPoints', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEmitterPillPointsDatabase[]>;
    (db: 'SoundEmitters', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEmittersDatabase[]>;
    (db: 'SoundEntries', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEntriesDatabase[]>;
    (db: 'SoundEntriesAdvanced', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEntriesAdvancedDatabase[]>;
    (db: 'SoundEntriesFallbacks', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEntriesFallbacksDatabase[]>;
    (db: 'SoundEnvelope', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEnvelopeDatabase[]>;
    (db: 'SoundFilter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundFilterDatabase[]>;
    (db: 'SoundFilterElem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundFilterElemDatabase[]>;
    (db: 'SoundKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitDatabase[]>;
    (db: 'SoundKitAdvanced', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitAdvancedDatabase[]>;
    (db: 'SoundKitChild', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitChildDatabase[]>;
    (db: 'SoundKitEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitEntryDatabase[]>;
    (db: 'SoundKitFallback', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitFallbackDatabase[]>;
    (db: 'SoundKitName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitNameDatabase[]>;
    (db: 'SoundOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundOverrideDatabase[]>;
    (db: 'SoundParameter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundParameterDatabase[]>;
    (db: 'SoundProviderPreferences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundProviderPreferencesDatabase[]>;
    (db: 'SoundSamplePreferences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundSamplePreferencesDatabase[]>;
    (db: 'SoundWaterType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundWaterTypeDatabase[]>;
    (db: 'SourceInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SourceInfoDatabase[]>;
    (db: 'SpamMessages', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpamMessagesDatabase[]>;
    (db: 'SpecSetMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpecSetMemberDatabase[]>;
    (db: 'SpecializationSpells', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpecializationSpellsDatabase[]>;
    (db: 'SpecializationSpellsDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpecializationSpellsDisplayDatabase[]>;
    (db: 'Spell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDatabase[]>;
    (db: 'SpellActionBarPref', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellActionBarPrefDatabase[]>;
    (db: 'SpellActivationOverlay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellActivationOverlayDatabase[]>;
    (db: 'SpellAuraNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraNamesDatabase[]>;
    (db: 'SpellAuraOptions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraOptionsDatabase[]>;
    (db: 'SpellAuraRestrictions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraRestrictionsDatabase[]>;
    (db: 'SpellAuraRestrictionsDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraRestrictionsDifficultyDatabase[]>;
    (db: 'SpellAuraVisXChrSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraVisXChrSpecDatabase[]>;
    (db: 'SpellAuraVisXTalentTab', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraVisXTalentTabDatabase[]>;
    (db: 'SpellAuraVisibility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraVisibilityDatabase[]>;
    (db: 'SpellCastTimes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCastTimesDatabase[]>;
    (db: 'SpellCastingRequirements', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCastingRequirementsDatabase[]>;
    (db: 'SpellCategories', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCategoriesDatabase[]>;
    (db: 'SpellCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCategoryDatabase[]>;
    (db: 'SpellChainEffects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellChainEffectsDatabase[]>;
    (db: 'SpellClassOptions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClassOptionsDatabase[]>;
    (db: 'SpellClutterAreaEffectCounts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterAreaEffectCountsDatabase[]>;
    (db: 'SpellClutterFrameRates', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterFrameRatesDatabase[]>;
    (db: 'SpellClutterImpactModelCounts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterImpactModelCountsDatabase[]>;
    (db: 'SpellClutterKitDistances', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterKitDistancesDatabase[]>;
    (db: 'SpellClutterMissileDist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterMissileDistDatabase[]>;
    (db: 'SpellClutterWeaponTrailDist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterWeaponTrailDistDatabase[]>;
    (db: 'SpellCooldowns', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCooldownsDatabase[]>;
    (db: 'SpellCraftUI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCraftUIDatabase[]>;
    (db: 'SpellDescriptionVariables', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDescriptionVariablesDatabase[]>;
    (db: 'SpellDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDifficultyDatabase[]>;
    (db: 'SpellDispelType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDispelTypeDatabase[]>;
    (db: 'SpellDuration', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDurationDatabase[]>;
    (db: 'SpellEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectDatabase[]>;
    (db: 'SpellEffectAutoDescription', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectAutoDescriptionDatabase[]>;
    (db: 'SpellEffectCameraShakes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectCameraShakesDatabase[]>;
    (db: 'SpellEffectEmission', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectEmissionDatabase[]>;
    (db: 'SpellEffectGroupSize', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectGroupSizeDatabase[]>;
    (db: 'SpellEffectNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectNamesDatabase[]>;
    (db: 'SpellEffectScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectScalingDatabase[]>;
    (db: 'SpellEquippedItems', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEquippedItemsDatabase[]>;
    (db: 'SpellFlyout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellFlyoutDatabase[]>;
    (db: 'SpellFlyoutItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellFlyoutItemDatabase[]>;
    (db: 'SpellFocusObject', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellFocusObjectDatabase[]>;
    (db: 'SpellIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellIconDatabase[]>;
    (db: 'SpellInterrupts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellInterruptsDatabase[]>;
    (db: 'SpellItemEnchantment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellItemEnchantmentDatabase[]>;
    (db: 'SpellItemEnchantmentCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellItemEnchantmentConditionDatabase[]>;
    (db: 'SpellKeyboundOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellKeyboundOverrideDatabase[]>;
    (db: 'SpellLabel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellLabelDatabase[]>;
    (db: 'SpellLearnSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellLearnSpellDatabase[]>;
    (db: 'SpellLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellLevelsDatabase[]>;
    (db: 'SpellMastery', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMasteryDatabase[]>;
    (db: 'SpellMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMechanicDatabase[]>;
    (db: 'SpellMisc', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMiscDatabase[]>;
    (db: 'SpellMiscDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMiscDifficultyDatabase[]>;
    (db: 'SpellMissile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMissileDatabase[]>;
    (db: 'SpellMissileMotion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMissileMotionDatabase[]>;
    (db: 'SpellName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellNameDatabase[]>;
    (db: 'SpellOverrideName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellOverrideNameDatabase[]>;
    (db: 'SpellPower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellPowerDatabase[]>;
    (db: 'SpellPowerDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellPowerDifficultyDatabase[]>;
    (db: 'SpellProceduralEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellProceduralEffectDatabase[]>;
    (db: 'SpellProcsPerMinute', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellProcsPerMinuteDatabase[]>;
    (db: 'SpellProcsPerMinuteMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellProcsPerMinuteModDatabase[]>;
    (db: 'SpellRadius', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellRadiusDatabase[]>;
    (db: 'SpellRange', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellRangeDatabase[]>;
    (db: 'SpellReagents', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellReagentsDatabase[]>;
    (db: 'SpellReagentsCurrency', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellReagentsCurrencyDatabase[]>;
    (db: 'SpellRuneCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellRuneCostDatabase[]>;
    (db: 'SpellScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellScalingDatabase[]>;
    (db: 'SpellScript', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellScriptDatabase[]>;
    (db: 'SpellScriptText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellScriptTextDatabase[]>;
    (db: 'SpellShapeshift', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellShapeshiftDatabase[]>;
    (db: 'SpellShapeshiftForm', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellShapeshiftFormDatabase[]>;
    (db: 'SpellSpecialUnitEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellSpecialUnitEffectDatabase[]>;
    (db: 'SpellTargetRestrictions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellTargetRestrictionsDatabase[]>;
    (db: 'SpellTotems', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellTotemsDatabase[]>;
    (db: 'SpellVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualDatabase[]>;
    (db: 'SpellVisualAnim', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualAnimDatabase[]>;
    (db: 'SpellVisualAnimName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualAnimNameDatabase[]>;
    (db: 'SpellVisualColorEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualColorEffectDatabase[]>;
    (db: 'SpellVisualEffectName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualEffectNameDatabase[]>;
    (db: 'SpellVisualEvent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualEventDatabase[]>;
    (db: 'SpellVisualKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitDatabase[]>;
    (db: 'SpellVisualKitAreaModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitAreaModelDatabase[]>;
    (db: 'SpellVisualKitEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitEffectDatabase[]>;
    (db: 'SpellVisualKitModelAttach', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitModelAttachDatabase[]>;
    (db: 'SpellVisualKitPicker', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitPickerDatabase[]>;
    (db: 'SpellVisualKitPickerEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitPickerEntryDatabase[]>;
    (db: 'SpellVisualMissile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualMissileDatabase[]>;
    (db: 'SpellVisualPrecastTransitions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualPrecastTransitionsDatabase[]>;
    (db: 'SpellVisualScreenEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualScreenEffectDatabase[]>;
    (db: 'SpellXDescriptionVariables', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellXDescriptionVariablesDatabase[]>;
    (db: 'SpellXSpellVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellXSpellVisualDatabase[]>;
    (db: 'StableSlotPrices', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<StableSlotPricesDatabase[]>;
    (db: 'StartupFiles', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<StartupFilesDatabase[]>;
    (db: 'Startup_Strings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Startup_StringsDatabase[]>;
    (db: 'Stationery', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<StationeryDatabase[]>;
    (db: 'StringLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<StringLookupsDatabase[]>;
    (db: 'SummonProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SummonPropertiesDatabase[]>;
    (db: 'TabardBackgroundTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TabardBackgroundTexturesDatabase[]>;
    (db: 'TabardEmblemTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TabardEmblemTexturesDatabase[]>;
    (db: 'TactKey', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TactKeyDatabase[]>;
    (db: 'TactKeyLookup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TactKeyLookupDatabase[]>;
    (db: 'Talent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TalentDatabase[]>;
    (db: 'TalentTab', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TalentTabDatabase[]>;
    (db: 'TalentTreePrimarySpells', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TalentTreePrimarySpellsDatabase[]>;
    (db: 'TaxiNodes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TaxiNodesDatabase[]>;
    (db: 'TaxiPath', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TaxiPathDatabase[]>;
    (db: 'TaxiPathNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TaxiPathNodeDatabase[]>;
    (db: 'TeamContributionPoints', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TeamContributionPointsDatabase[]>;
    (db: 'TerrainColorGradingRamp', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainColorGradingRampDatabase[]>;
    (db: 'TerrainMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainMaterialDatabase[]>;
    (db: 'TerrainType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainTypeDatabase[]>;
    (db: 'TerrainTypeSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainTypeSoundsDatabase[]>;
    (db: 'TextureBlendSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TextureBlendSetDatabase[]>;
    (db: 'TextureFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TextureFileDataDatabase[]>;
    (db: 'TierTransition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TierTransitionDatabase[]>;
    (db: 'TotemCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TotemCategoryDatabase[]>;
    (db: 'Toy', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ToyDatabase[]>;
    (db: 'TradeSkillCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TradeSkillCategoryDatabase[]>;
    (db: 'TradeSkillItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TradeSkillItemDatabase[]>;
    (db: 'TransformMatrix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransformMatrixDatabase[]>;
    (db: 'TransmogDefaultLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogDefaultLevelDatabase[]>;
    (db: 'TransmogHoliday', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogHolidayDatabase[]>;
    (db: 'TransmogIllusion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogIllusionDatabase[]>;
    (db: 'TransmogSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogSetDatabase[]>;
    (db: 'TransmogSetGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogSetGroupDatabase[]>;
    (db: 'TransmogSetItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogSetItemDatabase[]>;
    (db: 'TransportAnimation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransportAnimationDatabase[]>;
    (db: 'TransportPhysics', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransportPhysicsDatabase[]>;
    (db: 'TransportRotation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransportRotationDatabase[]>;
    (db: 'Trophy', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TrophyDatabase[]>;
    (db: 'TrophyInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TrophyInstanceDatabase[]>;
    (db: 'TrophyType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TrophyTypeDatabase[]>;
    (db: 'UIChromieTimeExpansionInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIChromieTimeExpansionInfoDatabase[]>;
    (db: 'UICovenantAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UICovenantAbilityDatabase[]>;
    (db: 'UICovenantPreview', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UICovenantPreviewDatabase[]>;
    (db: 'UIDungeonScoreRarity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIDungeonScoreRarityDatabase[]>;
    (db: 'UIEventToast', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIEventToastDatabase[]>;
    (db: 'UIExpansionDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIExpansionDisplayInfoDatabase[]>;
    (db: 'UIExpansionDisplayInfoIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIExpansionDisplayInfoIconDatabase[]>;
    (db: 'UIScriptedAnimationEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIScriptedAnimationEffectDatabase[]>;
    (db: 'UISoundLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UISoundLookupsDatabase[]>;
    (db: 'UISplashScreen', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UISplashScreenDatabase[]>;
    (db: 'UiCamFbackTransmogChrRace', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCamFbackTransmogChrRaceDatabase[]>;
    (db: 'UiCamFbackTransmogWeapon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCamFbackTransmogWeaponDatabase[]>;
    (db: 'UiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCameraDatabase[]>;
    (db: 'UiCameraType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCameraTypeDatabase[]>;
    (db: 'UiCanvas', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCanvasDatabase[]>;
    (db: 'UiCovenantDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCovenantDisplayInfoDatabase[]>;
    (db: 'UiItemInteraction', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiItemInteractionDatabase[]>;
    (db: 'UiMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapDatabase[]>;
    (db: 'UiMapArt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapArtDatabase[]>;
    (db: 'UiMapArtStyleLayer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapArtStyleLayerDatabase[]>;
    (db: 'UiMapArtTile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapArtTileDatabase[]>;
    (db: 'UiMapAssignment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapAssignmentDatabase[]>;
    (db: 'UiMapFogOfWar', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapFogOfWarDatabase[]>;
    (db: 'UiMapFogOfWarVisualization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapFogOfWarVisualizationDatabase[]>;
    (db: 'UiMapGroupMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapGroupMemberDatabase[]>;
    (db: 'UiMapLink', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapLinkDatabase[]>;
    (db: 'UiMapPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapPOIDatabase[]>;
    (db: 'UiMapXMapArt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapXMapArtDatabase[]>;
    (db: 'UiModelScene', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelSceneDatabase[]>;
    (db: 'UiModelSceneActor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelSceneActorDatabase[]>;
    (db: 'UiModelSceneActorDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelSceneActorDisplayDatabase[]>;
    (db: 'UiModelSceneCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelSceneCameraDatabase[]>;
    (db: 'UiPartyPose', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiPartyPoseDatabase[]>;
    (db: 'UiQuestDetailsTheme', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiQuestDetailsThemeDatabase[]>;
    (db: 'UiTextureAtlas', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlasDatabase[]>;
    (db: 'UiTextureAtlasElement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlasElementDatabase[]>;
    (db: 'UiTextureAtlasElementOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlasElementOverrideDatabase[]>;
    (db: 'UiTextureAtlasMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlasMemberDatabase[]>;
    (db: 'UiTextureKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureKitDatabase[]>;
    (db: 'UiWidget', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetDatabase[]>;
    (db: 'UiWidgetConstantSource', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetConstantSourceDatabase[]>;
    (db: 'UiWidgetDataSource', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetDataSourceDatabase[]>;
    (db: 'UiWidgetMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetMapDatabase[]>;
    (db: 'UiWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetSetDatabase[]>;
    (db: 'UiWidgetStringSource', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetStringSourceDatabase[]>;
    (db: 'UiWidgetVisTypeDataReq', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetVisTypeDataReqDatabase[]>;
    (db: 'UiWidgetVisualization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetVisualizationDatabase[]>;
    (db: 'UiWidgetXWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetXWidgetSetDatabase[]>;
    (db: 'UnitBlood', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitBloodDatabase[]>;
    (db: 'UnitBloodLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitBloodLevelsDatabase[]>;
    (db: 'UnitCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitConditionDatabase[]>;
    (db: 'UnitPowerBar', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitPowerBarDatabase[]>;
    (db: 'UnitTest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitTestDatabase[]>;
    (db: 'UnitTestSparse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitTestSparseDatabase[]>;
    (db: 'Vehicle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehicleDatabase[]>;
    (db: 'VehiclePOIType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehiclePOITypeDatabase[]>;
    (db: 'VehicleSeat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehicleSeatDatabase[]>;
    (db: 'VehicleUIIndSeat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehicleUIIndSeatDatabase[]>;
    (db: 'VehicleUIIndicator', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehicleUIIndicatorDatabase[]>;
    (db: 'VideoHardware', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VideoHardwareDatabase[]>;
    (db: 'Vignette', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VignetteDatabase[]>;
    (db: 'VirtualAttachment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VirtualAttachmentDatabase[]>;
    (db: 'VirtualAttachmentCustomization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VirtualAttachmentCustomizationDatabase[]>;
    (db: 'VocalUISounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VocalUISoundsDatabase[]>;
    (db: 'VolumeFogCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VolumeFogConditionDatabase[]>;
    (db: 'WMOAreaTable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WMOAreaTableDatabase[]>;
    (db: 'WMOMinimapTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WMOMinimapTextureDatabase[]>;
    (db: 'WaterfallData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaterfallDataDatabase[]>;
    (db: 'WaypointEdge', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaypointEdgeDatabase[]>;
    (db: 'WaypointNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaypointNodeDatabase[]>;
    (db: 'WaypointSafeLocs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaypointSafeLocsDatabase[]>;
    (db: 'WbAccessControlList', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbAccessControlListDatabase[]>;
    (db: 'WbCertBlacklist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbCertBlacklistDatabase[]>;
    (db: 'WbCertWhitelist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbCertWhitelistDatabase[]>;
    (db: 'WbPermissions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbPermissionsDatabase[]>;
    (db: 'WeaponImpactSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponImpactSoundsDatabase[]>;
    (db: 'WeaponSwingSounds2', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponSwingSounds2Database[]>;
    (db: 'WeaponTrail', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponTrailDatabase[]>;
    (db: 'WeaponTrailModelDef', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponTrailModelDefDatabase[]>;
    (db: 'WeaponTrailParam', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponTrailParamDatabase[]>;
    (db: 'Weather', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeatherDatabase[]>;
    (db: 'WeatherXParticulate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeatherXParticulateDatabase[]>;
    (db: 'WeeklyRewardChestThreshold', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeeklyRewardChestThresholdDatabase[]>;
    (db: 'WindSettings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WindSettingsDatabase[]>;
    (db: 'WorldBossLockout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldBossLockoutDatabase[]>;
    (db: 'WorldChunkSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldChunkSoundsDatabase[]>;
    (db: 'WorldEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldEffectDatabase[]>;
    (db: 'WorldElapsedTimer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldElapsedTimerDatabase[]>;
    (db: 'WorldMapArea', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapAreaDatabase[]>;
    (db: 'WorldMapContinent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapContinentDatabase[]>;
    (db: 'WorldMapOverlay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapOverlayDatabase[]>;
    (db: 'WorldMapOverlayTile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapOverlayTileDatabase[]>;
    (db: 'WorldMapTransforms', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapTransformsDatabase[]>;
    (db: 'WorldSafeLocs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldSafeLocsDatabase[]>;
    (db: 'WorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldStateDatabase[]>;
    (db: 'WorldStateExpression', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldStateExpressionDatabase[]>;
    (db: 'WorldStateUI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldStateUIDatabase[]>;
    (db: 'WorldStateZoneSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldStateZoneSoundsDatabase[]>;
    (db: 'World_PVP_Area', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<World_PVP_AreaDatabase[]>;
    (db: 'WowError_Strings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WowError_StringsDatabase[]>;
    (db: 'ZoneIntroMusicTable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneIntroMusicTableDatabase[]>;
    (db: 'ZoneLight', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneLightDatabase[]>;
    (db: 'ZoneLightPoint', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneLightPointDatabase[]>;
    (db: 'ZoneMusic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneMusicDatabase[]>;
    (db: 'ZoneStory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneStoryDatabase[]>;
    (db: 'gtArmorMitigationByLvl', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtArmorMitigationByLvlDatabase[]>;
    (db: 'gtBarberShopCostBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtBarberShopCostBaseDatabase[]>;
    (db: 'gtBattlePetTypeDamageMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtBattlePetTypeDamageModDatabase[]>;
    (db: 'gtBattlePetXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtBattlePetXPDatabase[]>;
    (db: 'gtChanceToMeleeCrit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToMeleeCritDatabase[]>;
    (db: 'gtChanceToMeleeCritBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToMeleeCritBaseDatabase[]>;
    (db: 'gtChanceToSpellCrit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToSpellCritDatabase[]>;
    (db: 'gtChanceToSpellCritBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToSpellCritBaseDatabase[]>;
    (db: 'gtCombatRatings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtCombatRatingsDatabase[]>;
    (db: 'gtItemSocketCostPerLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtItemSocketCostPerLevelDatabase[]>;
    (db: 'gtMasteryMultipliers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtMasteryMultipliersDatabase[]>;
    (db: 'gtNPCManaCostScaler', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtNPCManaCostScalerDatabase[]>;
    (db: 'gtOCTBaseHPByClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTBaseHPByClassDatabase[]>;
    (db: 'gtOCTBaseMPByClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTBaseMPByClassDatabase[]>;
    (db: 'gtOCTClassCombatRatingScalar', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTClassCombatRatingScalarDatabase[]>;
    (db: 'gtOCTHpPerStamina', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTHpPerStaminaDatabase[]>;
    (db: 'gtOCTLevelExperience', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTLevelExperienceDatabase[]>;
    (db: 'gtOCTRegenHP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTRegenHPDatabase[]>;
    (db: 'gtOCTRegenMP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTRegenMPDatabase[]>;
    (db: 'gtRegenHPPerSpt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtRegenHPPerSptDatabase[]>;
    (db: 'gtRegenMPPerSpt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtRegenMPPerSptDatabase[]>;
    (db: 'gtResilienceDR', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtResilienceDRDatabase[]>;
    (db: 'gtSpellScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtSpellScalingDatabase[]>;
}
