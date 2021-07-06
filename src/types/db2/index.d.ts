/* eslint max-len: 0 */
/* eslint camelcase: 0 */

interface AchievementDatabase{
    Description_lang?: string;
    Title_lang?: string;
    Reward_lang?: string;
    ID?: string;
    Instance_ID?: string;
    Faction?: string;
    Supercedes?: string;
    Category?: string;
    Minimum_criteria?: string;
    Points?: string;
    Flags?: string;
    Ui_order?: string;
    IconFileID?: string;
    Criteria_tree?: string;
    Shares_criteria?: string;
    Field_3_0_1_8303_002?: string;
    Field_3_0_1_8471_007?: string;
    IconID?: string;
    RewardItemID?: string;
    CovenantID?: string;
}

interface Achievement_CategoryDatabase{
    ID?: string;
    Parent?: string;
    Name_lang?: string;
    Ui_order?: string;
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
    Ui_order?: string;
    Timer_start_event?: string;
    Timer_asset_ID?: string;
    Timer_time?: string;
    WorldStateID?: string;
    RequiredWorldStateStatus?: string;
    'AdditionalConditionType[0]'?: string;
    'AdditionalConditionType[1]'?: string;
    'AdditionalConditionType[2]'?: string;
    'AdditionalConditionValue[0]'?: string;
    'AdditionalConditionValue[1]'?: string;
    'AdditionalConditionValue[2]'?: string;
}

interface AdventureJournalDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    ButtonText_lang?: string;
    RewardDescription_lang?: string;
    ContinueDescription_lang?: string;
    Type?: string;
    PlayerConditionID?: string;
    Flags?: string;
    ButtonActionType?: string;
    TextureFileDataID?: string;
    LfgDungeonID?: string;
    QuestID?: string;
    BattleMasterListID?: string;
    PriorityMin?: string;
    PriorityMax?: string;
    ItemID?: string;
    ItemQuantity?: string;
    CurrencyType?: string;
    CurrencyQuantity?: string;
    UIMapID?: string;
    'BonusPlayerConditionID[0]'?: string;
    'BonusPlayerConditionID[1]'?: string;
    'BonusValue[0]'?: string;
    'BonusValue[1]'?: string;
    WorldMapAreaID?: string;
}

interface AdventureMapPOIDatabase{
    ID?: string;
    'WorldPosition[0]'?: string;
    'WorldPosition[1]'?: string;
    RewardItemID?: string;
    Title_lang?: string;
    Description_lang?: string;
    Type?: string;
    PlayerConditionID?: string;
    QuestID?: string;
    LfgDungeonID?: string;
    UiTextureAtlasMemberID?: string;
    UiTextureKitID?: string;
    WorldMapAreaID?: string;
    DungeonMapID?: string;
    AreaTableID?: string;
    MapID?: string;
}

interface AlliedRaceDatabase{
    BannerColor?: string;
    ID?: string;
    RaceID?: string;
    CrestTextureID?: string;
    ModelBackgroundTextureID?: string;
    MaleCreatureDisplayID?: string;
    FemaleCreatureDisplayID?: string;
    Ui_unlockAchievementID?: string;
    Ui_unlockSecondaryAchievementID?: string;
}

interface AlliedRaceRacialAbilityDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    OrderIndex?: string;
    IconFileDataID?: string;
    AlliedRaceID?: string;
}

interface AnimKitDatabase{
    ID?: string;
    OneShotDuration?: string;
    OneShotStopAnimKitID?: string;
    LowDefAnimKitID?: string;
}

interface AnimKitBoneSetDatabase{
    ID?: string;
    Name?: string;
    BoneDataID?: string;
    ParentAnimKitBoneSetID?: string;
    AltAnimKitBoneSetID?: string;
    ExtraBoneCount?: string;
    AltBoneDataID?: string;
}

interface AnimKitBoneSetAliasDatabase{
    ID?: string;
    BoneDataID?: string;
    AnimKitBoneSetID?: string;
}

interface AnimKitConfigDatabase{
    ID?: string;
    ConfigFlags?: string;
}

interface AnimKitConfigBoneSetDatabase{
    ID?: string;
    ParentAnimKitConfigID?: string;
    AnimKitBoneSetID?: string;
    AnimKitPriorityID?: string;
}

interface AnimKitPriorityDatabase{
    ID?: string;
    Priority?: string;
}

interface AnimKitReplacementDatabase{
    SrcAnimKitID?: string;
    DstAnimKitID?: string;
    ParentAnimReplacementSetID?: string;
    ConditionalFlags?: string;
    ID?: string;
}

interface AnimKitSegmentDatabase{
    ID?: string;
    ParentAnimKitID?: string;
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
    OrderIndex?: string;
    BlendInTimeMs?: string;
    BlendOutTimeMs?: string;
    Field_9_0_1_34278_018?: string;
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
    'EffectTexture[0]'?: string;
    'EffectTexture[1]'?: string;
    'EffectTexture[2]'?: string;
}

interface AnimationDataDatabase{
    ID?: string;
    Name?: string;
    Weaponflags?: string;
    Bodyflags?: string;
    Field_0_7_0_3694_004?: string;
    Flags?: string;
    Fallback?: string;
    BehaviorID?: string;
    BehaviorTier?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
}

interface AnimationNamesDatabase{
    ID?: string;
    Name?: string;
}

interface AoiBoxDatabase{
    ID?: string;
    'Bounds[0]'?: string;
    'Bounds[1]'?: string;
    'Bounds[2]'?: string;
    'Bounds[3]'?: string;
    'Bounds[4]'?: string;
    'Bounds[5]'?: string;
    Flags?: string;
    EncounterID?: string;
    WorldStateID?: string;
    MapID?: string;
    InternalName?: string;
}

interface AreaAssignmentDatabase{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    ChunkX?: string;
    ChunkY?: string;
}

interface AreaConditionalDataDatabase{
    AreaName_lang?: string;
    PlayerConditionID?: string;
    ID?: string;
    OrderIndex?: string;
    AreaID?: string;
}

interface AreaFarClipOverrideDatabase{
    AreaID?: string;
    MinFarClip?: string;
    MinHorizonStart?: string;
    Flags?: string;
    ID?: string;
}

interface AreaGroupDatabase{
    ID?: string;
    'AreaID[0]'?: string;
    'AreaID[1]'?: string;
    'AreaID[2]'?: string;
    'AreaID[3]'?: string;
    'AreaID[4]'?: string;
    'AreaID[5]'?: string;
    NextAreaID?: string;
}

interface AreaGroupMemberDatabase{
    ID?: string;
    AreaGroupID?: string;
    AreaID?: string;
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
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    ContinentID?: string;
    Flags?: string;
    Name_lang?: string;
    AreaID?: string;
    Description_lang?: string;
    PortLocID?: string;
    PlayerConditionID?: string;
    UiTextureAtlasMemberID?: string;
    WMOGroupID?: string;
    PoiDataType?: string;
    PoiData?: string;
    WorldStateID?: string;
    UiWidgetSetID?: string;
    WorldMapLink?: string;
    'Icon[0]'?: string;
    'Icon[1]'?: string;
    'Icon[2]'?: string;
    'Icon[3]'?: string;
    'Icon[4]'?: string;
    'Icon[5]'?: string;
    'Icon[6]'?: string;
    'Icon[7]'?: string;
    'Icon[8]'?: string;
    MapFloor?: string;
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
    Description_lang?: string;
    AreaPoiID?: string;
    WorldStateValue?: string;
    IconEnumValue?: string;
    UiTextureAtlasMemberID?: string;
}

interface AreaTableDatabase{
    ID?: string;
    AreaNumber?: string;
    ContinentID?: string;
    ParentAreaNum?: string;
    AreaBit?: string;
    Flags?: string;
    SoundProviderPref?: string;
    SoundProviderPrefUnderwater?: string;
    MIDIAmbience?: string;
    MIDIAmbienceUnderwater?: string;
    ZoneMusic?: string;
    IntroSound?: string;
    IntroPriority?: string;
    AreaName_lang?: string;
    ExplorationLevel?: string;
    ParentAreaID?: string;
    AmbienceID?: string;
    FactionGroupMask?: string;
    'LiquidTypeID[0]'?: string;
    'LiquidTypeID[1]'?: string;
    'LiquidTypeID[2]'?: string;
    'LiquidTypeID[3]'?: string;
    MinElevation?: string;
    Ambient_multiplier?: string;
    LightID?: string;
    MountFlags?: string;
    UwIntroSound?: string;
    UwZoneMusic?: string;
    UwAmbience?: string;
    PvpCombatWorldStateID?: string;
    World_pvp_ID?: string;
    ZoneName?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    WildBattlePetLevelMin?: string;
    WildBattlePetLevelMax?: string;
    WindSettingsID?: string;
    ContentTuningID?: string;
}

interface AreaTriggerDatabase{
    ID?: string;
    ContinentID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    Radius?: string;
    Message_lang?: string;
    PhaseUseFlags?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    Box_length?: string;
    Box_width?: string;
    Box_height?: string;
    Box_yaw?: string;
    ShapeType?: string;
    ShapeID?: string;
    AreaTriggerActionSetID?: string;
    Flags?: string;
    PhaseShift?: string;
}

interface AreaTriggerActionSetDatabase{
    ID?: string;
    Flags?: string;
}

interface AreaTriggerBoxDatabase{
    ID?: string;
    'Extents[0]'?: string;
    'Extents[1]'?: string;
    'Extents[2]'?: string;
}

interface AreaTriggerCreatePropertiesDatabase{
    ID?: string;
    StartShapeID?: string;
    ShapeType?: string;
}

interface AreaTriggerCylinderDatabase{
    ID?: string;
    Radius?: string;
    Height?: string;
    ZOffset?: string;
}

interface AreaTriggerSphereDatabase{
    ID?: string;
    MaxRadius?: string;
}

interface ArenaCcItemDatabase{
    ID?: string;
    ItemID?: string;
    SpellID?: string;
}

interface ArmorLocationDatabase{
    ID?: string;
    Clothmodifier?: string;
    Leathermodifier?: string;
    Chainmodifier?: string;
    Platemodifier?: string;
    Modifier?: string;
}

interface ArtifactDatabase{
    ID?: string;
    Name_lang?: string;
    UiBarOverlayColor?: string;
    UiBarBackgroundColor?: string;
    UiNameColor?: string;
    UiTextureKitID?: string;
    ChrSpecializationID?: string;
    ArtifactCategoryID?: string;
    Flags?: string;
    UiModelSceneID?: string;
    SpellVisualKitID?: string;
}

interface ArtifactAppearanceDatabase{
    Name_lang?: string;
    ID?: string;
    ArtifactAppearanceSetID?: string;
    DisplayIndex?: string;
    UnlockPlayerConditionID?: string;
    ItemAppearanceModifierID?: string;
    UiSwatchColor?: string;
    UiModelSaturation?: string;
    UiModelOpacity?: string;
    OverrideShapeshiftFormID?: string;
    OverrideShapeshiftDisplayID?: string;
    UiItemAppearanceID?: string;
    UiAltItemAppearanceID?: string;
    Flags?: string;
    UiCameraID?: string;
    UsablePlayerConditionID?: string;
}

interface ArtifactAppearanceSetDatabase{
    Name_lang?: string;
    Description_lang?: string;
    UiCameraID?: string;
    AltHandUICameraID?: string;
    ArtifactID?: string;
    DisplayIndex?: string;
    ForgeAttachmentOverride?: string;
    Flags?: string;
    ID?: string;
}

interface ArtifactCategoryDatabase{
    ID?: string;
    XpMultCurrencyID?: string;
    XpMultCurveID?: string;
}

interface ArtifactItemToTransmogDatabase{
    ID?: string;
    ItemID?: string;
    ArtifactID?: string;
    ChildItemID?: string;
}

interface ArtifactPowerDatabase{
    'DisplayPos[0]'?: string;
    'DisplayPos[1]'?: string;
    ArtifactID?: string;
    Flags?: string;
    MaxPurchasableRank?: string;
    Tier?: string;
    ID?: string;
    Label?: string;
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

interface ArtifactPowerRankDatabase{
    ID?: string;
    SpellID?: string;
    AuraPointsOverride?: string;
    ArtifactPowerID?: string;
    ItemBonusListID?: string;
    RankIndex?: string;
}

interface ArtifactQuestXPDatabase{
    ID?: string;
    'Difficulty[0]'?: string;
    'Difficulty[1]'?: string;
    'Difficulty[2]'?: string;
    'Difficulty[3]'?: string;
    'Difficulty[4]'?: string;
    'Difficulty[5]'?: string;
    'Difficulty[6]'?: string;
    'Difficulty[7]'?: string;
    'Difficulty[8]'?: string;
    'Difficulty[9]'?: string;
}

interface ArtifactTierDatabase{
    ID?: string;
    ArtifactTier?: string;
    MaxNumTraits?: string;
    MaxArtifactKnowledge?: string;
    KnowledgePlayerCondition?: string;
    MinimumEmpowerKnowledge?: string;
}

interface ArtifactUnlockDatabase{
    ID?: string;
    ItemBonusListID?: string;
    ArtifactID?: string;
    PowerRank?: string;
    PowerID?: string;
    PlayerConditionID?: string;
}

interface AttackAnimKitsDatabase{
    ID?: string;
    ItemSubclassID?: string;
    AnimTypeID?: string;
    AnimFrequency?: string;
    WhichHand?: string;
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
    ItemID?: string;
    AzeriteTierUnlockSetID?: string;
    AzeritePowerSetID?: string;
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

interface AzeriteItemMilestonePowerDatabase{
    ID?: string;
    RequiredLevel?: string;
    AzeritePowerID?: string;
    AzeriteEssenceType?: string;
    IsHeartEssenceUnlock?: string;
}

interface AzeriteKnowledgeMultiplierDatabase{
    ID?: string;
    Multiplier?: string;
}

interface AzeriteLevelInfoDatabase{
    ID?: string;
    LevelXP?: string;
    TotalLevelXP?: string;
    ItemLevel?: string;
}

interface AzeritePowerDatabase{
    ID?: string;
    SpellID?: string;
    ItemBonusListID?: string;
    SpecSetID?: string;
    Flags?: string;
}

interface AzeritePowerSetMemberDatabase{
    ID?: string;
    AzeritePowerID?: string;
    Class?: string;
    Tier?: string;
    OrderIndex?: string;
    AzeritePowerSetID?: string;
}

interface AzeriteTierUnlockDatabase{
    ID?: string;
    ItemCreationContext?: string;
    Tier?: string;
    AzeriteLevel?: string;
    AzeriteTierUnlockSetID?: string;
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

interface BankBagSlotPricesDatabase{
    ID?: string;
    Cost?: string;
}

interface BannedAddonsDatabase{
    ID?: string;
    'NameMD5[0]'?: string;
    'NameMD5[1]'?: string;
    'NameMD5[2]'?: string;
    'NameMD5[3]'?: string;
    'VersionMD5[0]'?: string;
    'VersionMD5[1]'?: string;
    'VersionMD5[2]'?: string;
    'VersionMD5[3]'?: string;
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

interface BarrageEffectDatabase{
    ID?: string;
    Flags?: string;
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
    Field_8_1_0_28616_001Max?: string;
    Field_8_1_0_28616_001Min?: string;
}

interface BattlePetAbilityDatabase{
    ID?: string;
    PetTypeEnum?: string;
    IconFileDataID?: string;
    Cooldown?: string;
    Name_lang?: string;
    Description_lang?: string;
    BattlePetVisualID?: string;
    Flags?: string;
}

interface BattlePetAbilityEffectDatabase{
    ID?: string;
    BattlePetAbilityTurnID?: string;
    BattlePetVisualID?: string;
    'Param[0]'?: string;
    'Param[1]'?: string;
    'Param[2]'?: string;
    AuraBattlePetAbilityID?: string;
    OrderIndex?: string;
    BattlePetEffectPropertiesID?: string;
    'Param[3]'?: string;
    'Param[4]'?: string;
    'Param[5]'?: string;
}

interface BattlePetAbilityStateDatabase{
    ID?: string;
    BattlePetStateID?: string;
    Value?: string;
    BattlePetAbilityID?: string;
}

interface BattlePetAbilityTurnDatabase{
    ID?: string;
    BattlePetAbilityID?: string;
    BattlePetVisualID?: string;
    OrderIndex?: string;
    TurnTypeEnum?: string;
    EventTypeEnum?: string;
}

interface BattlePetBreedQualityDatabase{
    ID?: string;
    QualityEnum?: string;
    StateMultiplier?: string;
}

interface BattlePetBreedStateDatabase{
    ID?: string;
    BattlePetBreedID?: string;
    BattlePetStateID?: string;
    Value?: string;
}

interface BattlePetDisplayOverrideDatabase{
    ID?: string;
    PriorityCategory?: string;
    BattlePetSpeciesID?: string;
    PlayerConditionID?: string;
    CreatureDisplayInfoID?: string;
}

interface BattlePetEffectPropertiesDatabase{
    ID?: string;
    BattlePetVisualID?: string;
    'ParamLabel[0]'?: string;
    'ParamLabel[1]'?: string;
    'ParamLabel[2]'?: string;
    'ParamLabel[3]'?: string;
    'ParamLabel[4]'?: string;
    'ParamLabel[5]'?: string;
    'ParamTypeEnum[0]'?: string;
    'ParamTypeEnum[1]'?: string;
    'ParamTypeEnum[2]'?: string;
    'ParamTypeEnum[3]'?: string;
    'ParamTypeEnum[4]'?: string;
    'ParamTypeEnum[5]'?: string;
}

interface BattlePetNPCTeamMemberDatabase{
    ID?: string;
    Name_lang?: string;
}

interface BattlePetSpeciesDatabase{
    ID?: string;
    CreatureID?: string;
    IconFileDataID?: string;
    SummonSpellID?: string;
    PetTypeEnum?: string;
    Flags?: string;
    SourceText_lang?: string;
    Description_lang?: string;
    SourceTypeEnum?: string;
    CardUIModelSceneID?: string;
    LoadoutUIModelSceneID?: string;
    CovenantID?: string;
}

interface BattlePetSpeciesStateDatabase{
    ID?: string;
    BattlePetStateID?: string;
    Value?: string;
    BattlePetSpeciesID?: string;
}

interface BattlePetSpeciesXAbilityDatabase{
    ID?: string;
    BattlePetSpeciesID?: string;
    BattlePetAbilityID?: string;
    SlotEnum?: string;
    RequiredLevel?: string;
}

interface BattlePetSpeciesXCovenantDatabase{
    ID?: string;
    CovenantID?: string;
    BattlePetSpeciesID?: string;
}

interface BattlePetStateDatabase{
    ID?: string;
    BattlePetVisualID?: string;
    LuaName?: string;
    Flags?: string;
}

interface BattlePetVisualDatabase{
    ID?: string;
    SpellVisualID?: string;
    CastMilliSeconds?: string;
    ImpactMilliSeconds?: string;
    RangeTypeEnum?: string;
    Flags?: string;
    SceneScriptPackageID?: string;
    SceneScriptFunction?: string;
}

interface BattlemasterListDatabase{
    ID?: string;
    Name_lang?: string;
    Gametype_lang?: string;
    ShortDescription_lang?: string;
    LongDescription_lang?: string;
    InstanceType?: string;
    Minlevel?: string;
    Maxlevel?: string;
    RatedPlayers?: string;
    MinPlayers?: string;
    MaxPlayers?: string;
    GroupsAllowed?: string;
    MaxGroupSize?: string;
    HolidayWorldState?: string;
    Flags?: string;
    IconFileDataID?: string;
    Required_Player_Condition_ID?: string;
    'MapID[0]'?: string;
    'MapID[1]'?: string;
    'MapID[2]'?: string;
    'MapID[3]'?: string;
    'MapID[4]'?: string;
    'MapID[5]'?: string;
    'MapID[6]'?: string;
    'MapID[7]'?: string;
    'MapID[8]'?: string;
    'MapID[9]'?: string;
    'MapID[10]'?: string;
    'MapID[11]'?: string;
    'MapID[12]'?: string;
    'MapID[13]'?: string;
    'MapID[14]'?: string;
    'MapID[15]'?: string;
    Field_2_0_0_5610_005?: string;
    Field_2_0_0_5610_006?: string;
    Field_2_4_0_8089_009?: string;
    Field_3_0_3_9183_010?: string;
}

interface BeamEffectDatabase{
    ID?: string;
    BeamID?: string;
    SourceMinDistance?: string;
    FixedLength?: string;
    Flags?: string;
    SourceOffset?: string;
    DestOffset?: string;
    SourceAttachID?: string;
    DestAttachID?: string;
    SourcePositionerID?: string;
    DestPositionerID?: string;
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
    FileDataID?: string;
    BoneWindModifierID?: string;
}

interface BoneWindModifiersDatabase{
    ID?: string;
    'Multiplier[0]'?: string;
    'Multiplier[1]'?: string;
    'Multiplier[2]'?: string;
    PhaseMultiplier?: string;
}

interface BonusRollDatabase{
    ID?: string;
    CurrencyTypesID?: string;
    CurrencyCost?: string;
    JournalEncounterID?: string;
    JournalInstanceID?: string;
}

interface BountyDatabase{
    ID?: string;
    QuestID?: string;
    FactionID?: string;
    IconFileDataID?: string;
    TurninPlayerConditionID?: string;
    BountySetID?: string;
}

interface BountySetDatabase{
    ID?: string;
    VisiblePlayerConditionID?: string;
    LockedQuestID?: string;
}

interface BroadcastTextDatabase{
    ID?: string;
    LanguageID?: string;
    Text_lang?: string;
    Text1_lang?: string;
    'EmoteID[0]'?: string;
    'EmoteID[1]'?: string;
    'EmoteID[2]'?: string;
    'EmoteDelay[0]'?: string;
    'EmoteDelay[1]'?: string;
    'EmoteDelay[2]'?: string;
    SoundEntriesID?: string;
    EmotesID?: string;
    Flags?: string;
    'SoundKitID[0]'?: string;
    'SoundKitID[1]'?: string;
    ConditionID?: string;
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
    'SoundStateID[0]'?: string;
    'SoundStateID[1]'?: string;
}

interface CameraEffectDatabase{
    ID?: string;
    Flags?: string;
}

interface CameraEffectEntryDatabase{
    ID?: string;
    Duration?: string;
    Delay?: string;
    Phase?: string;
    Amplitude?: string;
    AmplitudeB?: string;
    Frequency?: string;
    RadiusMin?: string;
    RadiusMax?: string;
    CameraEffectID?: string;
    AmplitudeCurveID?: string;
    OrderIndex?: string;
    Flags?: string;
    EffectType?: string;
    DirectionType?: string;
    MovementType?: string;
    AttenuationType?: string;
}

interface CameraModeDatabase{
    ID?: string;
    Name?: string;
    Type?: string;
    Flags?: string;
    'PositionOffset[0]'?: string;
    'PositionOffset[1]'?: string;
    'PositionOffset[2]'?: string;
    'TargetOffset[0]'?: string;
    'TargetOffset[1]'?: string;
    'TargetOffset[2]'?: string;
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

interface CampaignXConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    OrderIndex?: string;
    CampaignID?: string;
    Flags?: string;
    FailureReason_lang?: string;
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

interface CelestialBodyDatabase{
    BaseFileDataID?: string;
    LightMaskFileDataID?: string;
    'GlowMaskFileDataID[0]'?: string;
    'GlowMaskFileDataID[1]'?: string;
    AtmosphericMaskFileDataID?: string;
    AtmosphericModifiedFileDataID?: string;
    'GlowModifiedFileDataID[0]'?: string;
    'GlowModifiedFileDataID[1]'?: string;
    'ScrollURate[0]'?: string;
    'ScrollURate[1]'?: string;
    'ScrollVRate[0]'?: string;
    'ScrollVRate[1]'?: string;
    RotateRate?: string;
    'GlowMaskScale[0]'?: string;
    'GlowMaskScale[1]'?: string;
    AtmosphericMaskScale?: string;
    'Position[0]'?: string;
    'Position[1]'?: string;
    'Position[2]'?: string;
    BodyBaseScale?: string;
    SkyArrayBand?: string;
    ID?: string;
}

interface Cfg_CategoriesDatabase{
    ID?: string;
    Name_lang?: string;
    LocaleMask?: string;
    Create_charsetMask?: string;
    Existing_charsetMask?: string;
    Flags?: string;
    Order?: string;
    Field_0_10_0_3892_000?: string;
    Region_ID?: string;
}

interface Cfg_ConfigsDatabase{
    ID?: string;
    RealmType?: string;
    PlayerKillingAllowed?: string;
    Roleplaying?: string;
    GeneratedID?: string;
    PlayerAttackSpeedBase?: string;
    MaxDamageReductionPctPhysical?: string;
}

interface Cfg_RegionsDatabase{
    ID?: string;
    Tag?: string;
    Region_group_mask?: string;
    RulesetID?: string;
    Raidorigin?: string;
    Challenge_origin?: string;
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
    Proficiency?: string;
    ID?: string;
    'Padding_4_0_0_11792_003[0]'?: string;
    'Padding_4_0_0_11792_003[1]'?: string;
}

interface CharBaseSectionDatabase{
    ID?: string;
    FallbackID?: string;
    LayoutResType?: string;
    VariationEnum?: string;
    ResolutionVariationEnum?: string;
}

interface CharComponentTextureLayoutsDatabase{
    ID?: string;
    Width?: string;
    Height?: string;
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

interface CharHairGeosetsDatabase{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    VariationID?: string;
    GeosetID?: string;
    Showscalp?: string;
    VariationType?: string;
    GeosetType?: string;
    ColorIndex?: string;
    CustomGeoFileDataID?: string;
    HdCustomGeoFileDataID?: string;
    Field_8_3_0_32044_010?: string;
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

interface CharSectionConditionDatabase{
    ID?: string;
    BaseSection?: string;
    Sex?: string;
    VariationIndex?: string;
    ColorIndex?: string;
    AchievementID?: string;
    RaceID?: string;
}

interface CharSectionsDatabase{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    BaseSection?: string;
    VariationIndex?: string;
    ColorIndex?: string;
    'TextureName[0]'?: string;
    'TextureName[1]'?: string;
    'TextureName[2]'?: string;
    Flags?: string;
    'MaterialResourcesID[0]'?: string;
    'MaterialResourcesID[1]'?: string;
    'MaterialResourcesID[2]'?: string;
}

interface CharShipmentDatabase{
    ID?: string;
    ContainerID?: string;
    TreasureID?: string;
    MaxShipments?: string;
    Duration?: string;
    Field_6_0_1_18179_005?: string;
    SpellID?: string;
    DummyItemID?: string;
    OnCompleteSpellID?: string;
    GarrFollowerID?: string;
    Flags?: string;
}

interface CharShipmentContainerDatabase{
    ID?: string;
    Description_lang?: string;
    PendingText_lang?: string;
    UiTextureKitID?: string;
    GarrTypeID?: string;
    GarrBuildingType?: string;
    BaseCapacity?: string;
    SmallDisplayInfoID?: string;
    MediumDisplayInfoID?: string;
    LargeDisplayInfoID?: string;
    WorkingDisplayInfoID?: string;
    WorkingSpellVisualID?: string;
    CompleteSpellVisualID?: string;
    MediumThreshold?: string;
    LargeThreshold?: string;
    Faction?: string;
    CrossFactionID?: string;
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
    'AlteredFormCustomizeOffset[0]'?: string;
    'AlteredFormCustomizeOffset[1]'?: string;
    'AlteredFormCustomizeOffset[2]'?: string;
    AlteredFormCustomizeRotation?: string;
    'ChrModel_9_0_1_35522_001Override[0]'?: string;
    'ChrModel_9_0_1_35522_001Override[1]'?: string;
    'ChrModel_9_0_1_35522_001Override[2]'?: string;
    'ChrModel_9_0_1_35522_001Override_Female[0]'?: string;
    'ChrModel_9_0_1_35522_001Override_Female[1]'?: string;
    'ChrModel_9_0_1_35522_001Override_Female[2]'?: string;
    CharacterCreationAnimLoopWaitTimeMs?: string;
}

interface CharStartOutfitDatabase{
    ID?: string;
    RaceID?: string;
    ClassID?: string;
    SexID?: string;
    OutfitID?: string;
    'ItemID[0]'?: string;
    'ItemID[1]'?: string;
    'ItemID[2]'?: string;
    'ItemID[3]'?: string;
    'ItemID[4]'?: string;
    'ItemID[5]'?: string;
    'ItemID[6]'?: string;
    'ItemID[7]'?: string;
    'ItemID[8]'?: string;
    'ItemID[9]'?: string;
    'ItemID[10]'?: string;
    'ItemID[11]'?: string;
    'DisplayItemID[0]'?: string;
    'DisplayItemID[1]'?: string;
    'DisplayItemID[2]'?: string;
    'DisplayItemID[3]'?: string;
    'DisplayItemID[4]'?: string;
    'DisplayItemID[5]'?: string;
    'DisplayItemID[6]'?: string;
    'DisplayItemID[7]'?: string;
    'DisplayItemID[8]'?: string;
    'DisplayItemID[9]'?: string;
    'DisplayItemID[10]'?: string;
    'DisplayItemID[11]'?: string;
    'InventoryType[0]'?: string;
    'InventoryType[1]'?: string;
    'InventoryType[2]'?: string;
    'InventoryType[3]'?: string;
    'InventoryType[4]'?: string;
    'InventoryType[5]'?: string;
    'InventoryType[6]'?: string;
    'InventoryType[7]'?: string;
    'InventoryType[8]'?: string;
    'InventoryType[9]'?: string;
    'InventoryType[10]'?: string;
    'InventoryType[11]'?: string;
    'ItemID[12]'?: string;
    'ItemID[13]'?: string;
    'ItemID[14]'?: string;
    'ItemID[15]'?: string;
    'ItemID[16]'?: string;
    'ItemID[17]'?: string;
    'ItemID[18]'?: string;
    'ItemID[19]'?: string;
    'ItemID[20]'?: string;
    'ItemID[21]'?: string;
    'ItemID[22]'?: string;
    'ItemID[23]'?: string;
    'DisplayItemID[12]'?: string;
    'DisplayItemID[13]'?: string;
    'DisplayItemID[14]'?: string;
    'DisplayItemID[15]'?: string;
    'DisplayItemID[16]'?: string;
    'DisplayItemID[17]'?: string;
    'DisplayItemID[18]'?: string;
    'DisplayItemID[19]'?: string;
    'DisplayItemID[20]'?: string;
    'DisplayItemID[21]'?: string;
    'DisplayItemID[22]'?: string;
    'DisplayItemID[23]'?: string;
    'InventoryType[12]'?: string;
    'InventoryType[13]'?: string;
    'InventoryType[14]'?: string;
    'InventoryType[15]'?: string;
    'InventoryType[16]'?: string;
    'InventoryType[17]'?: string;
    'InventoryType[18]'?: string;
    'InventoryType[19]'?: string;
    'InventoryType[20]'?: string;
    'InventoryType[21]'?: string;
    'InventoryType[22]'?: string;
    'InventoryType[23]'?: string;
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

interface CharTitlesDatabase{
    ID?: string;
    Condition_ID?: string;
    Name_lang?: string;
    Mask_ID?: string;
    Name1_lang?: string;
    Flags?: string;
}

interface CharVariationsDatabase{
    RaceID?: string;
    SexID?: string;
    'TextureHoldLayer[0]'?: string;
    'TextureHoldLayer[1]'?: string;
    'TextureHoldLayer[2]'?: string;
    'TextureHoldLayer[3]'?: string;
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
    RaceID?: string;
    SexID?: string;
    FaceVariationIndex?: string;
    Resolution?: string;
    ModelFileDataID?: string;
}

interface CharacterFacialHairStylesDatabase{
    RaceID?: string;
    SexID?: string;
    VariationID?: string;
    BeardGeoset?: string;
    MoustacheGeoset?: string;
    SideburnGeoset?: string;
    'Geoset[0]'?: string;
    'Geoset[1]'?: string;
    'Geoset[2]'?: string;
    'Geoset[3]'?: string;
    'Geoset[4]'?: string;
    'Geoset[5]'?: string;
    'Geoset[6]'?: string;
    'Geoset[7]'?: string;
    ID?: string;
}

interface CharacterLoadoutDatabase{
    ID?: string;
    ChrClassID?: string;
    Purpose?: string;
    Racemask?: string;
    Field_2_5_1_38043_004?: string;
}

interface CharacterLoadoutItemDatabase{
    ID?: string;
    CharacterLoadoutID?: string;
    ItemID?: string;
    ItemDisplayInfoID?: string;
    ItemInventoryType?: string;
}

interface CharacterLoadoutPetDatabase{
    ID?: string;
    CreatureID?: string;
    PetDisplayID?: string;
    PetFamilyID?: string;
    CharacterLoadoutID?: string;
}

interface CharacterServiceInfoDatabase{
    ID?: string;
    FlowTitle_lang?: string;
    PopupTitle_lang?: string;
    PopupDescription_lang?: string;
    IconFileDataID?: string;
    Priority?: string;
    ProfessionLevel?: string;
    BoostLevel?: string;
    Expansion?: string;
    PopupUITextureKitID?: string;
    BoostType?: string;
    Flags?: string;
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
    RaceID?: string;
    Sex?: string;
    Flags?: string;
    SoundID?: string;
    VoiceSoundFilterID?: string;
}

interface ChrClassTitleDatabase{
    ID?: string;
    Name_male_lang?: string;
    Name_female_lang?: string;
    ChrClassID?: string;
}

interface ChrClassUIChrModelInfoDatabase{
    ID?: string;
    'ChrModel_9_0_1_35522_001Override[0]'?: string;
    'ChrModel_9_0_1_35522_001Override[1]'?: string;
    'ChrModel_9_0_1_35522_001Override[2]'?: string;
    ChrModelID?: string;
    ChrClassesID?: string;
    ChrCreateFacingOverride?: string;
}

interface ChrClassUIDisplayDatabase{
    ID?: string;
    ChrClassesID?: string;
    AdvGuidePlayerConditionID?: string;
    SplashPlayerConditionID?: string;
}

interface ChrClassVillainDatabase{
    ID?: string;
    Name_lang?: string;
    ChrClassID?: string;
    Gender?: string;
}

interface ChrClassesDatabase{
    ID?: string;
    PlayerClass?: string;
    DamageBonusStat?: string;
    DisplayPower?: string;
    PetNameToken?: string;
    Name_lang?: string;
    Filename?: string;
    Name_female_lang?: string;
    Name_male_lang?: string;
    CreateScreenFileDataID?: string;
    SelectScreenFileDataID?: string;
    LowResScreenFileDataID?: string;
    IconFileDataID?: string;
    StartingLevel?: string;
    Flags?: string;
    CinematicSequenceID?: string;
    DefaultSpec?: string;
    SpellClassSet?: string;
    AttackPowerPerStrength?: string;
    AttackPowerPerAgility?: string;
    RangedAttackPowerPerAgility?: string;
    PrimaryStatPriority?: string;
    HasRelicSlot?: string;
    Field_2_0_0_6080_009?: string;
    Field_2_5_1_38043_011?: string;
    Required_expansion?: string;
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
    Hyphenated_name_male_lang?: string;
    Hyphenated_name_female_lang?: string;
}

interface ChrClassesXPowerTypesDatabase{
    ID?: string;
    ClassID?: string;
    PowerType?: string;
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

interface ChrCreateClassAnimTargetInfoDatabase{
    ID?: string;
    ChrRacesID?: string;
    Sex?: string;
    ChrClassesID?: string;
}

interface ChrCustClientChoiceConversionDatabase{
    ID?: string;
    Field_9_0_1_34365_001?: string;
    ChrCustomizationReqID?: string;
    Field_9_0_1_34365_003?: string;
}

interface ChrCustItemGeoModifyDatabase{
    ID?: string;
    GeosetType?: string;
    Original?: string;
    Override?: string;
}

interface ChrCustomizationDatabase{
    ID?: string;
    Name_lang?: string;
    Sex?: string;
    BaseSection?: string;
    UiCustomizationType?: string;
    'ComponentSection[0]'?: string;
    'ComponentSection[1]'?: string;
    'ComponentSection[2]'?: string;
    RaceID?: string;
    Flags?: string;
}

interface ChrCustomizationBoneSetDatabase{
    ID?: string;
    BoneFileDataID?: string;
    ModelFileDataID?: string;
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
    Flags?: string;
    SwatchColor1?: string;
    UiOrderIndex?: string;
    SwatchColor2?: string;
    'SwatchColor[0]'?: string;
    'SwatchColor[1]'?: string;
}

interface ChrCustomizationCondModelDatabase{
    ID?: string;
    CreatureModelDataID?: string;
    'Field_9_0_1_34081_001[0]'?: string;
    'Field_9_0_1_34081_001[1]'?: string;
    'Field_9_0_1_34081_001[2]'?: string;
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

interface ChrCustomizationDisplayInfoDatabase{
    ID?: string;
    SpellShapeshiftFormID?: string;
    CreatureDisplayInfoID?: string;
    BarberShopMinCameraDistance?: string;
    BarberShopHeightOffset?: string;
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

interface ChrCustomizationGeosetDatabase{
    ID?: string;
    GeosetType?: string;
    GeosetID?: string;
    Modifier?: string;
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
    Flags?: string;
    OrderIndex?: string;
    ChrCustomizationCategoryID?: string;
    OptionType?: string;
    ChrCustomizationID?: string;
    ChrModelID?: string;
    BarberShopCostModifier?: string;
    Requirement?: string;
    SecondaryOrderIndex?: string;
}

interface ChrCustomizationReqDatabase{
    ID?: string;
    ReqType?: string;
    ClassMask?: string;
    ReqAchievementID?: string;
    OverrideArchive?: string;
    ReqItemModifiedAppearanceID?: string;
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

interface ChrModelDatabase{
    'FaceCustomizationOffset[0]'?: string;
    'FaceCustomizationOffset[1]'?: string;
    'FaceCustomizationOffset[2]'?: string;
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
    'CustomizeOffset[0]'?: string;
    'CustomizeOffset[1]'?: string;
    'CustomizeOffset[2]'?: string;
    CustomizeFacing?: string;
    CameraDistanceOffset?: string;
    BarberShopCameraOffsetScale?: string;
    BarberShopCameraRotationOffset?: string;
    Field_9_1_0_38312_015?: string;
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
    'Field_9_0_1_34365_006[0]'?: string;
    'Field_9_0_1_34365_006[1]'?: string;
    'Field_9_0_1_34365_006[2]'?: string;
    'ChrModelTextureTargetID[0]'?: string;
    'ChrModelTextureTargetID[1]'?: string;
}

interface ChrModelTextureTargetDatabase{
    Field_9_0_1_34081_000?: string;
}

interface ChrProficiencyDatabase{
    ID?: string;
    'Proficiency_minLevel[0]'?: string;
    'Proficiency_minLevel[1]'?: string;
    'Proficiency_minLevel[2]'?: string;
    'Proficiency_minLevel[3]'?: string;
    'Proficiency_minLevel[4]'?: string;
    'Proficiency_minLevel[5]'?: string;
    'Proficiency_minLevel[6]'?: string;
    'Proficiency_minLevel[7]'?: string;
    'Proficiency_minLevel[8]'?: string;
    'Proficiency_minLevel[9]'?: string;
    'Proficiency_minLevel[10]'?: string;
    'Proficiency_minLevel[11]'?: string;
    'Proficiency_minLevel[12]'?: string;
    'Proficiency_minLevel[13]'?: string;
    'Proficiency_minLevel[14]'?: string;
    'Proficiency_minLevel[15]'?: string;
    'Proficiency_acquireMethod[0]'?: string;
    'Proficiency_acquireMethod[1]'?: string;
    'Proficiency_acquireMethod[2]'?: string;
    'Proficiency_acquireMethod[3]'?: string;
    'Proficiency_acquireMethod[4]'?: string;
    'Proficiency_acquireMethod[5]'?: string;
    'Proficiency_acquireMethod[6]'?: string;
    'Proficiency_acquireMethod[7]'?: string;
    'Proficiency_acquireMethod[8]'?: string;
    'Proficiency_acquireMethod[9]'?: string;
    'Proficiency_acquireMethod[10]'?: string;
    'Proficiency_acquireMethod[11]'?: string;
    'Proficiency_acquireMethod[12]'?: string;
    'Proficiency_acquireMethod[13]'?: string;
    'Proficiency_acquireMethod[14]'?: string;
    'Proficiency_acquireMethod[15]'?: string;
    'Proficiency_itemClass[0]'?: string;
    'Proficiency_itemClass[1]'?: string;
    'Proficiency_itemClass[2]'?: string;
    'Proficiency_itemClass[3]'?: string;
    'Proficiency_itemClass[4]'?: string;
    'Proficiency_itemClass[5]'?: string;
    'Proficiency_itemClass[6]'?: string;
    'Proficiency_itemClass[7]'?: string;
    'Proficiency_itemClass[8]'?: string;
    'Proficiency_itemClass[9]'?: string;
    'Proficiency_itemClass[10]'?: string;
    'Proficiency_itemClass[11]'?: string;
    'Proficiency_itemClass[12]'?: string;
    'Proficiency_itemClass[13]'?: string;
    'Proficiency_itemClass[14]'?: string;
    'Proficiency_itemClass[15]'?: string;
    'Proficiency_itemSubClassMask[0]'?: string;
    'Proficiency_itemSubClassMask[1]'?: string;
    'Proficiency_itemSubClassMask[2]'?: string;
    'Proficiency_itemSubClassMask[3]'?: string;
    'Proficiency_itemSubClassMask[4]'?: string;
    'Proficiency_itemSubClassMask[5]'?: string;
    'Proficiency_itemSubClassMask[6]'?: string;
    'Proficiency_itemSubClassMask[7]'?: string;
    'Proficiency_itemSubClassMask[8]'?: string;
    'Proficiency_itemSubClassMask[9]'?: string;
    'Proficiency_itemSubClassMask[10]'?: string;
    'Proficiency_itemSubClassMask[11]'?: string;
    'Proficiency_itemSubClassMask[12]'?: string;
    'Proficiency_itemSubClassMask[13]'?: string;
    'Proficiency_itemSubClassMask[14]'?: string;
    'Proficiency_itemSubClassMask[15]'?: string;
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
    MaleDisplayID?: string;
    FemaleDisplayID?: string;
    ClientPrefix?: string;
    MountScale?: string;
    BaseLanguage?: string;
    CreatureType?: string;
    LoginEffectSpellID?: string;
    CombatStunSpellID?: string;
    ResSicknessSpellID?: string;
    SplashSoundID?: string;
    StartingTaxiNodes?: string;
    ClientFileString?: string;
    CinematicSequenceID?: string;
    Name_lang?: string;
    ExplorationSoundID?: string;
    'FacialHairCustomization[0]'?: string;
    'FacialHairCustomization[1]'?: string;
    HairCustomization?: string;
    Required_expansion?: string;
    Name_female_lang?: string;
    Name_lowercase_lang?: string;
    Name_female_lowercase_lang?: string;
    Name_RS_lang?: string;
    Name_RS_female_lang?: string;
    Name_RS_lowercase_lang?: string;
    Name_RS_female_lowercase_lang?: string;
    RaceFantasyDescription_lang?: string;
    Name_RL_lang?: string;
    Name_RL_female_lang?: string;
    Name_RL_lowercase_lang?: string;
    Name_RL_female_lowercase_lang?: string;
    HighResMaleDisplayID?: string;
    HighResFemaleDisplayID?: string;
    CreateScreenFileDataID?: string;
    SelectScreenFileDataID?: string;
    LowResScreenFileDataID?: string;
    'AlteredFormStartVisualKitID[0]'?: string;
    'AlteredFormStartVisualKitID[1]'?: string;
    'AlteredFormStartVisualKitID[2]'?: string;
    'AlteredFormFinishVisualKitID[0]'?: string;
    'AlteredFormFinishVisualKitID[1]'?: string;
    'AlteredFormFinishVisualKitID[2]'?: string;
    HeritageArmorAchievementID?: string;
    StartingLevel?: string;
    UiDisplayOrder?: string;
    PlayableRaceBit?: string;
    FemaleSkeletonFileDataID?: string;
    MaleSkeletonFileDataID?: string;
    HelmetAnimScalingRaceID?: string;
    TransmogrifyDisabledSlotMask?: string;
    'AlteredFormCustomizeOffsetFallback[0]'?: string;
    'AlteredFormCustomizeOffsetFallback[1]'?: string;
    'AlteredFormCustomizeOffsetFallback[2]'?: string;
    AlteredFormCustomizeRotationFallback?: string;
    'Field_9_0_1_35256_033[0]'?: string;
    'Field_9_0_1_35256_033[1]'?: string;
    'Field_9_0_1_35256_033[2]'?: string;
    'Field_9_0_1_35256_034[0]'?: string;
    'Field_9_0_1_35256_034[1]'?: string;
    'Field_9_0_1_35256_034[2]'?: string;
    Alliance?: string;
    Race_related?: string;
    UnalteredVisualRaceID?: string;
    DefaultClassID?: string;
    NeutralRaceID?: string;
    MaleModelFallbackRaceID?: string;
    MaleModelFallbackSex?: string;
    FemaleModelFallbackRaceID?: string;
    FemaleModelFallbackSex?: string;
    MaleTextureFallbackRaceID?: string;
    MaleTextureFallbackSex?: string;
    FemaleTextureFallbackRaceID?: string;
    FemaleTextureFallbackSex?: string;
    UnalteredVisualCustomizationRaceID?: string;
    Name_male_lang?: string;
    UaMaleCreatureSoundDataID?: string;
    UaFemaleCreatureSoundDataID?: string;
    CharComponentTextureLayoutID?: string;
    'MaleCustomizeOffset[0]'?: string;
    'MaleCustomizeOffset[1]'?: string;
    'MaleCustomizeOffset[2]'?: string;
    'FemaleCustomizeOffset[0]'?: string;
    'FemaleCustomizeOffset[1]'?: string;
    'FemaleCustomizeOffset[2]'?: string;
    CharComponentTexLayoutHiResID?: string;
    DisplayRaceID?: string;
    MaleModelFallbackArmor2Scale?: string;
    FemaleModelFallbackArmor2Scale?: string;
    BaseRaceID?: string;
    'Field_9_1_0_38312_030[0]'?: string;
    'Field_9_1_0_38312_030[1]'?: string;
    'Field_9_1_0_38312_030[2]'?: string;
    'Field_9_1_0_38312_031[0]'?: string;
    'Field_9_1_0_38312_031[1]'?: string;
    'Field_9_1_0_38312_031[2]'?: string;
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

interface ChrSpecializationDatabase{
    ID?: string;
    BackgroundFile?: string;
    ClassID?: string;
    'MasterySpellID[0]'?: string;
    'MasterySpellID[1]'?: string;
    OrderIndex?: string;
    PetTalentType?: string;
    Role?: string;
    SpellIconID?: string;
    Name_lang?: string;
    Description_lang?: string;
    RaidBuffs?: string;
    MaxBuffs?: string;
    Flags?: string;
    'PrimaryStatOrder[0]'?: string;
    'PrimaryStatOrder[1]'?: string;
    'PrimaryStatOrder[2]'?: string;
    FemaleName_lang?: string;
    PrimaryStatPriority?: string;
    SpellIconFileID?: string;
    AnimReplacements?: string;
}

interface ChrUpgradeBucketDatabase{
    ChrSpecializationID?: string;
    ChrUpgradeTierID?: string;
    ID?: string;
}

interface ChrUpgradeBucketSpellDatabase{
    ID?: string;
    SpellID?: string;
    ChrUpgradeBucketID?: string;
}

interface ChrUpgradeTierDatabase{
    DisplayName_lang?: string;
    OrderIndex?: string;
    NumTalents?: string;
    ID?: string;
}

interface CinematicDatabase{
    ID?: string;
    Type?: string;
    File?: string;
}

interface CinematicCameraDatabase{
    ID?: string;
    Model?: string;
    SoundID?: string;
    'Origin[0]'?: string;
    'Origin[1]'?: string;
    'Origin[2]'?: string;
    OriginFacing?: string;
    FileDataID?: string;
}

interface CinematicSequencesDatabase{
    ID?: string;
    SoundID?: string;
    'Camera[0]'?: string;
    'Camera[1]'?: string;
    'Camera[2]'?: string;
    'Camera[3]'?: string;
    'Camera[4]'?: string;
    'Camera[5]'?: string;
    'Camera[6]'?: string;
    'Camera[7]'?: string;
}

interface CinematicSubtitleDatabase{
    ID?: string;
    Flags?: string;
    StartTimestamp?: string;
    EndTimestamp?: string;
    Text_lang?: string;
}

interface ClientSceneEffectDatabase{
    ID?: string;
    SceneScriptPackageID?: string;
}

interface CloakDampeningDatabase{
    ID?: string;
    'Angle[0]'?: string;
    'Angle[1]'?: string;
    'Angle[2]'?: string;
    'Angle[3]'?: string;
    'Angle[4]'?: string;
    'Dampening[0]'?: string;
    'Dampening[1]'?: string;
    'Dampening[2]'?: string;
    'Dampening[3]'?: string;
    'Dampening[4]'?: string;
    'TailAngle[0]'?: string;
    'TailAngle[1]'?: string;
    'TailDampening[0]'?: string;
    'TailDampening[1]'?: string;
    TabardAngle?: string;
    TabardDampening?: string;
    ExpectedWeaponSize?: string;
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
    'FriendConditionID[0]'?: string;
    'FriendConditionID[1]'?: string;
    'FriendConditionOp[0]'?: string;
    'FriendConditionOp[1]'?: string;
    'FriendConditionCount[0]'?: string;
    'FriendConditionCount[1]'?: string;
    FriendConditionLogic?: string;
    'EnemyConditionID[0]'?: string;
    'EnemyConditionID[1]'?: string;
    'EnemyConditionOp[0]'?: string;
    'EnemyConditionOp[1]'?: string;
    'EnemyConditionCount[0]'?: string;
    'EnemyConditionCount[1]'?: string;
    EnemyConditionLogic?: string;
}

interface CommentatorIndirectSpellDatabase{
    ID?: string;
    TalentSpellID?: string;
    TriggeredAuraSpellID?: string;
    ChrSpecID?: string;
}

interface CommentatorStartLocationDatabase{
    ID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    MapID?: string;
}

interface CommentatorTrackedCooldownDatabase{
    ID?: string;
    SpellID?: string;
    Priority?: string;
    Flags?: string;
    ChrSpecID?: string;
}

interface CommunityIconDatabase{
    IconFileID?: string;
    OrderIndex?: string;
    ID?: string;
}

interface ComponentModelFileDataDatabase{
    ID?: string;
    GenderIndex?: string;
    ClassID?: string;
    RaceID?: string;
    PositionIndex?: string;
}

interface ComponentTextureFileDataDatabase{
    ID?: string;
    GenderIndex?: string;
    ClassID?: string;
    RaceID?: string;
}

interface ConditionalContentTuningDatabase{
    ID?: string;
    OrderIndex?: string;
    ReplacementTuning?: string;
    ConditionMask?: string;
    NormalTuning?: string;
}

interface ConfigurationWarningDatabase{
    ID?: string;
    Warning_lang?: string;
    Type?: string;
}

interface ConsoleScriptsDatabase{
    ID?: string;
    Name?: string;
    Script?: string;
}

interface ContentTuningDatabase{
    ID?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Flags?: string;
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
    ExpectedStatModID?: string;
    ContentTuningID?: string;
    MythicPlusSeasonID?: string;
    MythicPlusSeasonID_2?: string;
}

interface ContentTuningXExpectedStatModDatabase{
    ID?: string;
    ExpectedStatModID?: string;
    ContentTuningID?: string;
}

interface ContributionDatabase{
    ID?: string;
    ManagedWorldStateInputID?: string;
    Description_lang?: string;
    Name_lang?: string;
    'UiTextureAtlasMemberID[0]'?: string;
    'UiTextureAtlasMemberID[1]'?: string;
    'UiTextureAtlasMemberID[2]'?: string;
    'UiTextureAtlasMemberID[3]'?: string;
    OrderIndex?: string;
    ContributionStyleContainer?: string;
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

interface ContributionStyleContainerDatabase{
    ID?: string;
    'ContributionStyleID[0]'?: string;
    'ContributionStyleID[1]'?: string;
    'ContributionStyleID[2]'?: string;
    'ContributionStyleID[3]'?: string;
    'ContributionStyleID[4]'?: string;
}

interface ConversationLineDatabase{
    ID?: string;
    BroadcastTextID?: string;
    SpellVisualKitID?: string;
    AdditionalDuration?: string;
    NextConversationLineID?: string;
    AnimKitID?: string;
    SpeechType?: string;
    StartAnimation?: string;
    EndAnimation?: string;
}

interface CorruptionEffectsDatabase{
    ID?: string;
    MinimumCorruption?: string;
    Aura?: string;
    PlayerConditionID?: string;
    Flags?: string;
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

interface CreatureDatabase{
    ID?: string;
    'AlwaysItem[0]'?: string;
    'AlwaysItem[1]'?: string;
    'AlwaysItem[2]'?: string;
    Field_5_0_1_15589_002?: string;
    Field_5_0_1_15589_003?: string;
    Field_5_0_1_15589_004?: string;
    'DisplayID[0]'?: string;
    'DisplayID[1]'?: string;
    'DisplayID[2]'?: string;
    'DisplayID[3]'?: string;
    'DisplayProbability[0]'?: string;
    'DisplayProbability[1]'?: string;
    'DisplayProbability[2]'?: string;
    'DisplayProbability[3]'?: string;
    Field_5_0_1_15464_009?: string;
    Name_lang?: string;
    StartAnimState?: string;
    Field_5_0_1_15464_001?: string;
    Field_5_0_1_15464_002?: string;
    Field_5_0_1_15464_004?: string;
    Field_5_0_1_15464_005?: string;
    Field_5_0_1_15464_006?: string;
    Field_5_0_1_15650_002?: string;
    Field_5_0_1_15650_003?: string;
    MountCreatureID?: string;
    Title_lang?: string;
    CreatureFamily?: string;
    Classification?: string;
    CreatureType?: string;
    Field_6_0_1_18179_008?: string;
    NameAlt_lang?: string;
    TitleAlt_lang?: string;
}

interface CreatureDifficultyDatabase{
    ID?: string;
    CreatureID?: string;
    DifficultyID?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Flags?: string;
    FactionID?: string;
    ExpansionID?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    'Flags[2]'?: string;
    'Flags[3]'?: string;
    'Flags[4]'?: string;
    'Flags[5]'?: string;
    'Flags[6]'?: string;
    ContentTuningID?: string;
    'Flags[7]'?: string;
    Field_9_0_1_35522_003Min?: string;
    Field_9_0_1_35522_003Max?: string;
}

interface CreatureDispXUiCameraDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    UiCameraID?: string;
}

interface CreatureDisplayInfoDatabase{
    ID?: string;
    ModelID?: string;
    SoundID?: string;
    ExtendedDisplayInfoID?: string;
    CreatureModelScale?: string;
    CreatureModelAlpha?: string;
    'TextureVariation[0]'?: string;
    'TextureVariation[1]'?: string;
    'TextureVariation[2]'?: string;
    BloodID?: string;
    SizeClass?: string;
    NPCSoundID?: string;
    Field_2_1_0_6692_010?: string;
    Field_2_1_0_6692_011?: string;
    Field_2_1_0_6692_012?: string;
    Field_2_1_0_6692_013?: string;
    Field_2_1_0_6692_014?: string;
    Field_2_1_0_6692_015?: string;
    Field_2_1_0_6692_016?: string;
    Field_2_1_0_6692_017?: string;
    Field_2_1_0_6692_018?: string;
    PortraitTextureName?: string;
    ParticleColorID?: string;
    CreatureGeosetData?: string;
    ObjectEffectPackageID?: string;
    AnimReplacementSetID?: string;
    Flags?: string;
    Gender?: string;
    StateSpellVisualKitID?: string;
    PortraitCreatureDisplayInfoID?: string;
    'TextureVariationFileDataID[0]'?: string;
    'TextureVariationFileDataID[1]'?: string;
    'TextureVariationFileDataID[2]'?: string;
    PortraitTextureFileDataID?: string;
    Field_7_3_2_25549_010?: string;
    PlayerOverrideScale?: string;
    UnarmedWeaponType?: string;
    PetInstanceScale?: string;
    MountPoofSpellVisualKitID?: string;
    DissolveEffectID?: string;
    DissolveOutEffectID?: string;
    CreatureModelMinLod?: string;
}

interface CreatureDisplayInfoCondDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    RaceMask?: string;
    'CustomOption0_Mask[0]'?: string;
    'CustomOption0_Mask[1]'?: string;
    'CustomOption1_Mask[0]'?: string;
    'CustomOption1_Mask[1]'?: string;
    'CustomOption2_Mask[0]'?: string;
    'CustomOption2_Mask[1]'?: string;
    OrderIndex?: string;
    Gender?: string;
    ClassMask?: string;
    SkinColorMask?: string;
    HairColorMask?: string;
    HairStyleMask?: string;
    FaceStyleMask?: string;
    FacialHairStyleMask?: string;
    CreatureModelDataID?: string;
    'TextureVariationFileDataID[0]'?: string;
    'TextureVariationFileDataID[1]'?: string;
    'TextureVariationFileDataID[2]'?: string;
}

interface CreatureDisplayInfoCondXChoiceDatabase{
    ID?: string;
    CreatureDisplayInfoCondID?: string;
    ChrCustomizationChoiceID?: string;
}

interface CreatureDisplayInfoEvtDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    Fourcc?: string;
    SpellVisualKitID?: string;
    Flags?: string;
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
    'NPCItemDisplay[0]'?: string;
    'NPCItemDisplay[1]'?: string;
    'NPCItemDisplay[2]'?: string;
    'NPCItemDisplay[3]'?: string;
    'NPCItemDisplay[4]'?: string;
    'NPCItemDisplay[5]'?: string;
    'NPCItemDisplay[6]'?: string;
    'NPCItemDisplay[7]'?: string;
    'NPCItemDisplay[8]'?: string;
    'NPCItemDisplay[9]'?: string;
    BakeName?: string;
    DisplayClassID?: string;
    Flags?: string;
    BakeMaterialResourcesID?: string;
    HDBakeMaterialResourcesID?: string;
    'CustomDisplayOption[0]'?: string;
    'CustomDisplayOption[1]'?: string;
    'CustomDisplayOption[2]'?: string;
    'NPCItemDisplay[10]'?: string;
    FileDataID?: string;
    HdFileDataID?: string;
}

interface CreatureDisplayInfoGeosetDataDatabase{
    ID?: string;
    GeosetIndex?: string;
    GeosetValue?: string;
    CreatureDisplayInfoID?: string;
}

interface CreatureDisplayInfoOptionDatabase{
    ID?: string;
    ChrCustomizationOptionID?: string;
    ChrCustomizationChoiceID?: string;
    CreatureDisplayInfoExtraID?: string;
}

interface CreatureDisplayInfoTrnDatabase{
    ID?: string;
    SrcCreatureDisplayInfoID?: string;
    DstCreatureDisplayInfoID?: string;
    MaxTime?: string;
    StartVisualKitID?: string;
    FinishVisualKitID?: string;
    DissolveEffectID?: string;
}

interface CreatureFamilyDatabase{
    ID?: string;
    MinScale?: string;
    MinScaleLevel?: string;
    MaxScale?: string;
    MaxScaleLevel?: string;
    'SkillLine[0]'?: string;
    'SkillLine[1]'?: string;
    PetFoodMask?: string;
    Name_lang?: string;
    IconFile?: string;
    PetTalentType?: string;
    CategoryEnumID?: string;
    IconFileID?: string;
}

interface CreatureImmunitiesDatabase{
    ID?: string;
    School?: string;
    DispelType?: string;
    MechanicsAllowed?: string;
    Mechanic?: string;
    EffectsAllowed?: string;
    'Effect[0]'?: string;
    'Effect[1]'?: string;
    'Effect[2]'?: string;
    'Effect[3]'?: string;
    'Effect[4]'?: string;
    'Effect[5]'?: string;
    StatesAllowed?: string;
    'State[0]'?: string;
    'State[1]'?: string;
    'State[2]'?: string;
    'State[3]'?: string;
    'State[4]'?: string;
    'State[5]'?: string;
    'State[6]'?: string;
    'State[7]'?: string;
    'State[8]'?: string;
    'State[9]'?: string;
    'State[10]'?: string;
    'State[11]'?: string;
    Flags?: string;
    'State[12]'?: string;
    'Effect[6]'?: string;
    'State[13]'?: string;
    'Effect[7]'?: string;
    'State[14]'?: string;
    'Mechanic[0]'?: string;
    'Mechanic[1]'?: string;
    'State[15]'?: string;
    'Effect[8]'?: string;
}

interface CreatureModelDataDatabase{
    ID?: string;
    Flags?: string;
    ModelName?: string;
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
    AttachedEffectScale?: string;
    MountHeight?: string;
    'GeoBox[0]'?: string;
    'GeoBox[1]'?: string;
    'GeoBox[2]'?: string;
    'GeoBox[3]'?: string;
    'GeoBox[4]'?: string;
    'GeoBox[5]'?: string;
    AnimModelName?: string;
    GeoBoxMinX?: string;
    GeoBoxMinY?: string;
    GeoBoxMinZ?: string;
    GeoBoxMaxX?: string;
    GeoBoxMaxY?: string;
    GeoBoxMaxZ?: string;
    WorldEffectScale?: string;
    MissileCollisionRadius?: string;
    MissileCollisionPush?: string;
    MissileCollisionRaise?: string;
    'GeoBoxMin[0]'?: string;
    'GeoBoxMin[1]'?: string;
    'GeoBoxMin[2]'?: string;
    'GeoBoxMax[0]'?: string;
    'GeoBoxMax[1]'?: string;
    'GeoBoxMax[2]'?: string;
    OverrideLootEffectScale?: string;
    OverrideNameScale?: string;
    TamedPetBaseScale?: string;
    HoverHeight?: string;
    CreatureGeosetDataID?: string;
    OverrideSelectionRadius?: string;
    FileDataID?: string;
    FootstepCameraEffectID?: string;
    DeathThudCameraEffectID?: string;
    MountScaleOtherIndex?: string;
    MountScaleSelf?: string;
    'MountScaleOther[0]'?: string;
    'MountScaleOther[1]'?: string;
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
    'SoundFidget[0]'?: string;
    'SoundFidget[1]'?: string;
    'SoundFidget[2]'?: string;
    'SoundFidget[3]'?: string;
    'CustomAttack[0]'?: string;
    'CustomAttack[1]'?: string;
    'CustomAttack[2]'?: string;
    'CustomAttack[3]'?: string;
    NPCSoundID?: string;
    LoopSoundID?: string;
    CreatureImpactType?: string;
    SoundJumpStartID?: string;
    SoundJumpEndID?: string;
    SoundPetAttackID?: string;
    SoundPetOrderID?: string;
    SoundPetDismissID?: string;
    'SoundFidget[4]'?: string;
    FidgetDelaySecondsMin?: string;
    FidgetDelaySecondsMax?: string;
    BirthSoundID?: string;
    SpellCastDirectedSoundID?: string;
    SubmergeSoundID?: string;
    SubmergedSoundID?: string;
    CreatureSoundDataIDPet?: string;
    TransformSoundID?: string;
    TransformAnimatedSoundID?: string;
    WindupSoundID?: string;
    WindupCriticalSoundID?: string;
    ChargeSoundID?: string;
    ChargeCriticalSoundID?: string;
    BattleShoutSoundID?: string;
    BattleShoutCriticalSoundID?: string;
    TauntSoundID?: string;
}

interface CreatureSpellDataDatabase{
    ID?: string;
    'Spells[0]'?: string;
    'Spells[1]'?: string;
    'Spells[2]'?: string;
    'Spells[3]'?: string;
    'Availability[0]'?: string;
    'Availability[1]'?: string;
    'Availability[2]'?: string;
    'Availability[3]'?: string;
}

interface CreatureTypeDatabase{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
}

interface CreatureXContributionDatabase{
    ID?: string;
    CreatureID?: string;
    ContributionID?: string;
}

interface CreatureXDisplayInfoDatabase{
    ID?: string;
    CreatureDisplayInfoID?: string;
    Probability?: string;
    Scale?: string;
    CreatureID?: string;
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
    'Padding_6_0_1_18179_008[0]'?: string;
    'Padding_6_0_1_18179_008[1]'?: string;
    'Padding_6_0_1_18179_008[2]'?: string;
    'Padding_6_0_1_18179_008[3]'?: string;
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
    ContainerName_lang?: string;
    ContainerDescription_lang?: string;
    MinAmount?: string;
    MaxAmount?: string;
    ContainerIconID?: string;
    ContainerQuality?: string;
    CurrencyTypeID?: string;
    OnLootSpellVisualKitID?: string;
}

interface CurrencyTypesDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    CategoryID?: string;
    InventoryIconFileID?: string;
    SpellWeight?: string;
    SpellCategory?: string;
    MaxQty?: string;
    MaxEarnablePerWeek?: string;
    Quality?: string;
    FactionID?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    ItemID?: string;
    BitIndex?: string;
    'InventoryIcon[0]'?: string;
    'InventoryIcon[1]'?: string;
    Flags?: string;
    ItemGroupSoundsID?: string;
    XpQuestDifficulty?: string;
    AwardConditionID?: string;
    MaxQtyWorldStateID?: string;
}

interface CurveDatabase{
    ID?: string;
    Type?: string;
    Flags?: string;
}

interface CurvePointDatabase{
    ID?: string;
    CurveID?: string;
    OrderIndex?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'PosPreSquish[0]'?: string;
    'PosPreSquish[1]'?: string;
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
    FileDataID?: string;
    InnerRadius?: string;
    OuterRadius?: string;
    Rim?: string;
    Gain?: string;
    ModX?: string;
    Scale?: string;
    FadeIn?: string;
    FadeOut?: string;
    Priority?: string;
    BlendMode?: string;
    TopTextureBlendSetID?: string;
    BotTextureBlendSetID?: string;
    Flags?: string;
    GameFlags?: string;
    CasterDecalPropertiesID?: string;
    ArbitraryBoxHeight?: string;
    Field_9_0_1_33978_018?: string;
    Field_9_0_1_33978_019?: string;
    'Field_9_0_1_33978_020[0]'?: string;
    'Field_9_0_1_33978_020[1]'?: string;
    'Field_9_0_1_33978_020[2]'?: string;
    'Field_9_0_1_33978_020[3]'?: string;
    'Field_9_0_1_33978_021[0]'?: string;
    'Field_9_0_1_33978_021[1]'?: string;
    'Field_9_0_1_33978_021[2]'?: string;
    'Field_9_0_1_33978_021[3]'?: string;
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
    State0ImpactEffectDoodadSet?: string;
    State0AmbientDoodadSet?: string;
    State1WMO?: string;
    State1DestructionDoodadSet?: string;
    State1ImpactEffectDoodadSet?: string;
    State1AmbientDoodadSet?: string;
    State2WMO?: string;
    State2DestructionDoodadSet?: string;
    State2ImpactEffectDoodadSet?: string;
    State2AmbientDoodadSet?: string;
    State3WMO?: string;
    State3InitDoodadSet?: string;
    State3AmbientDoodadSet?: string;
    EjectDirection?: string;
    RepairGroundFx?: string;
    DoNotHighlight?: string;
    HealEffect?: string;
    HealEffectSpeed?: string;
    State0WMO?: string;
    State0NameSet?: string;
    State1NameSet?: string;
    State2NameSet?: string;
    State3NameSet?: string;
}

interface DeviceBlacklistDatabase{
    ID?: string;
    VendorID?: string;
    DeviceID?: string;
}

interface DeviceDefaultSettingsDatabase{
    ID?: string;
    VendorID?: string;
    DeviceID?: string;
    DefaultSetting?: string;
}

interface DifficultyDatabase{
    ID?: string;
    Name_lang?: string;
    InstanceType?: string;
    OrderIndex?: string;
    OldEnumValue?: string;
    FallbackDifficultyID?: string;
    MinPlayers?: string;
    MaxPlayers?: string;
    Flags?: string;
    ItemContext?: string;
    ToggleDifficultyID?: string;
    GroupSizeHealthCurveID?: string;
    GroupSizeDmgCurveID?: string;
    GroupSizeSpellPointsCurveID?: string;
    Field_8_1_0_28151_011?: string;
    Field_8_1_0_28151_012?: string;
    Field_8_1_0_28151_013?: string;
}

interface DissolveEffectDatabase{
    ID?: string;
    Ramp?: string;
    StartValue?: string;
    EndValue?: string;
    FadeInTime?: string;
    FadeOutTime?: string;
    Duration?: string;
    Scale?: string;
    FresnelIntensity?: string;
    AttachID?: string;
    ProjectionType?: string;
    TextureBlendSetID?: string;
    Flags?: string;
    CurveID?: string;
    Priority?: string;
}

interface DriverBlacklistDatabase{
    ID?: string;
    VendorID?: string;
    DeviceID?: string;
    DriverVersionHi?: string;
    DriverVersionLow?: string;
    OsVersion?: string;
    OsBits?: string;
    Flags?: string;
}

interface DungeonEncounterDatabase{
    ID?: string;
    MapID?: string;
    Difficulty?: string;
    OrderIndex?: string;
    Bit?: string;
    Name_lang?: string;
    SpellIconID?: string;
    DifficultyID?: string;
    CreatureDisplayID?: string;
    Flags?: string;
    SpellIconFileID?: string;
    Faction?: string;
    IsEncounterComplete?: string;
}

interface DungeonMapDatabase{
    ID?: string;
    MapID?: string;
    FloorIndex?: string;
    'Min[0]'?: string;
    'Min[1]'?: string;
    'Max[0]'?: string;
    'Max[1]'?: string;
    MinX?: string;
    MaxX?: string;
    MinY?: string;
    MaxY?: string;
    ParentWorldMapID?: string;
    Flags?: string;
    RelativeHeightIndex?: string;
}

interface DungeonMapChunkDatabase{
    ID?: string;
    Field_1_13_0_28211_000?: string;
    Field_1_13_0_28211_001?: string;
    Field_1_13_0_28211_002?: string;
    Field_1_13_0_28211_003?: string;
    Field_1_13_0_28211_004?: string;
    MapID?: string;
    WMOGroupID?: string;
    DungeonMapID?: string;
    MinZ?: string;
    DoodadPlacementID?: string;
}

interface DurabilityCostsDatabase{
    ID?: string;
    'WeaponSubClassCost[0]'?: string;
    'WeaponSubClassCost[1]'?: string;
    'WeaponSubClassCost[2]'?: string;
    'WeaponSubClassCost[3]'?: string;
    'WeaponSubClassCost[4]'?: string;
    'WeaponSubClassCost[5]'?: string;
    'WeaponSubClassCost[6]'?: string;
    'WeaponSubClassCost[7]'?: string;
    'WeaponSubClassCost[8]'?: string;
    'WeaponSubClassCost[9]'?: string;
    'WeaponSubClassCost[10]'?: string;
    'WeaponSubClassCost[11]'?: string;
    'WeaponSubClassCost[12]'?: string;
    'WeaponSubClassCost[13]'?: string;
    'WeaponSubClassCost[14]'?: string;
    'WeaponSubClassCost[15]'?: string;
    'WeaponSubClassCost[16]'?: string;
    'WeaponSubClassCost[17]'?: string;
    'WeaponSubClassCost[18]'?: string;
    'WeaponSubClassCost[19]'?: string;
    'WeaponSubClassCost[20]'?: string;
    'ArmorSubClassCost[0]'?: string;
    'ArmorSubClassCost[1]'?: string;
    'ArmorSubClassCost[2]'?: string;
    'ArmorSubClassCost[3]'?: string;
    'ArmorSubClassCost[4]'?: string;
    'ArmorSubClassCost[5]'?: string;
    'ArmorSubClassCost[6]'?: string;
    'ArmorSubClassCost[7]'?: string;
}

interface DurabilityQualityDatabase{
    ID?: string;
    Data?: string;
}

interface EdgeGlowEffectDatabase{
    ID?: string;
    Duration?: string;
    FadeIn?: string;
    FadeOut?: string;
    FresnelCoefficient?: string;
    GlowRed?: string;
    GlowGreen?: string;
    GlowBlue?: string;
    GlowAlpha?: string;
    GlowMultiplier?: string;
    InitialDelay?: string;
    Flags?: string;
    CurveID?: string;
    Priority?: string;
}

interface EmoteAnimsDatabase{
    ID?: string;
    ProcessedAnimIndex?: string;
    AnimName?: string;
}

interface EmotesDatabase{
    ID?: string;
    EmoteAnimID?: string;
    EmoteFlags?: string;
    EmoteSpecProc?: string;
    EmoteSpecProcParam?: string;
    EventSoundID?: string;
    EmoteSlashCommand?: string;
    AnimID?: string;
    SpellVisualKitID?: string;
    RaceMask?: string;
    ClassMask?: string;
}

interface EmotesTextDatabase{
    ID?: string;
    Name?: string;
    EmoteID?: string;
    'EmoteText[0]'?: string;
    'EmoteText[1]'?: string;
    'EmoteText[2]'?: string;
    'EmoteText[3]'?: string;
    'EmoteText[4]'?: string;
    'EmoteText[5]'?: string;
    'EmoteText[6]'?: string;
    'EmoteText[7]'?: string;
    'EmoteText[8]'?: string;
    'EmoteText[9]'?: string;
    'EmoteText[10]'?: string;
    'EmoteText[11]'?: string;
    'EmoteText[12]'?: string;
    'EmoteText[13]'?: string;
    'EmoteText[14]'?: string;
    'EmoteText[15]'?: string;
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

interface EnvironmentalDamageDatabase{
    ID?: string;
    EnumID?: string;
    VisualkitID?: string;
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
    ExpansionID?: string;
    CreatureHealth?: string;
    PlayerHealth?: string;
    CreatureAutoAttackDps?: string;
    CreatureArmor?: string;
    PlayerMana?: string;
    PlayerPrimaryStat?: string;
    PlayerSecondaryStat?: string;
    ArmorConstant?: string;
    Lvl?: string;
    CreatureSpellDamage?: string;
}

interface ExpectedStatModDatabase{
    ID?: string;
    CreatureHealthMod?: string;
    PlayerHealthMod?: string;
    CreatureAutoAttackDPSMod?: string;
    CreatureArmorMod?: string;
    PlayerManaMod?: string;
    PlayerPrimaryStatMod?: string;
    PlayerSecondaryStatMod?: string;
    ArmorConstantMod?: string;
    CreatureSpellDamageMod?: string;
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

interface FactionDatabase{
    ID?: string;
    ReputationIndex?: string;
    'ReputationRaceMask[0]'?: string;
    'ReputationRaceMask[1]'?: string;
    'ReputationRaceMask[2]'?: string;
    'ReputationRaceMask[3]'?: string;
    'ReputationClassMask[0]'?: string;
    'ReputationClassMask[1]'?: string;
    'ReputationClassMask[2]'?: string;
    'ReputationClassMask[3]'?: string;
    'ReputationBase[0]'?: string;
    'ReputationBase[1]'?: string;
    'ReputationBase[2]'?: string;
    'ReputationBase[3]'?: string;
    Name_lang?: string;
    ParentFactionID?: string;
    'ReputationFlags[0]'?: string;
    'ReputationFlags[1]'?: string;
    'ReputationFlags[2]'?: string;
    'ReputationFlags[3]'?: string;
    Description_lang?: string;
    Expansion?: string;
    FriendshipRepID?: string;
    Flags?: string;
    ParagonFactionID?: string;
    'ReputationMax[0]'?: string;
    'ReputationMax[1]'?: string;
    'ReputationMax[2]'?: string;
    'ReputationMax[3]'?: string;
    'ParentFactionMod[0]'?: string;
    'ParentFactionMod[1]'?: string;
    'ParentFactionCap[0]'?: string;
    'ParentFactionCap[1]'?: string;
}

interface FactionGroupDatabase{
    ID?: string;
    MaskID?: string;
    InternalName?: string;
    Name_lang?: string;
    HonorCurrencyTextureFileID?: string;
    ConquestCurrencyTextureFileID?: string;
}

interface FactionTemplateDatabase{
    ID?: string;
    Faction?: string;
    FactionGroup?: string;
    FriendGroup?: string;
    EnemyGroup?: string;
    'Enemies[0]'?: string;
    'Enemies[1]'?: string;
    'Enemies[2]'?: string;
    'Enemies[3]'?: string;
    'Friend[0]'?: string;
    'Friend[1]'?: string;
    'Friend[2]'?: string;
    'Friend[3]'?: string;
    Flags?: string;
}

interface FileDataDatabase{
    ID?: string;
    Filename?: string;
    Filepath?: string;
}

interface FileDataCompleteDatabase{
    ID?: string;
    Filepath?: string;
    Filename?: string;
}

interface FilePathsDatabase{
    ID?: string;
    FileName?: string;
    FilePath?: string;
    FileDataID?: string;
}

interface FootprintTexturesDatabase{
    ID?: string;
    FootstepFilename?: string;
    TextureBlendsetID?: string;
    Flags?: string;
    FileDataID?: string;
}

interface FootstepTerrainLookupDatabase{
    ID?: string;
    CreatureFootstepID?: string;
    TerrainSoundID?: string;
    SoundID?: string;
    SoundIDSplash?: string;
}

interface FriendshipRepReactionDatabase{
    ID?: string;
    FriendshipRepID?: string;
    ReactionThreshold?: string;
    Reaction_lang?: string;
}

interface FriendshipReputationDatabase{
    ID?: string;
    FactionID?: string;
    TextureFileID?: string;
    Description_lang?: string;
    Flags?: string;
    StandingModified_lang?: string;
    StandingChangedText_lang?: string;
}

interface FullScreenEffectDatabase{
    ID?: string;
    Saturation?: string;
    GammaRed?: string;
    GammaGreen?: string;
    GammaBlue?: string;
    MaskOffsetY?: string;
    MaskSizeMultiplier?: string;
    MaskPower?: string;
    ColorMultiplyRed?: string;
    ColorMultiplyGreen?: string;
    ColorMultiplyBlue?: string;
    ColorMultiplyOffsetY?: string;
    ColorMultiplyMultiplier?: string;
    ColorMultiplyPower?: string;
    ColorAdditionRed?: string;
    ColorAdditionGreen?: string;
    ColorAdditionBlue?: string;
    ColorAdditionOffsetY?: string;
    ColorAdditionMultiplier?: string;
    ColorAdditionPower?: string;
    BlurIntensity?: string;
    BlurOffsetY?: string;
    BlurMultiplier?: string;
    BlurPower?: string;
    Flags?: string;
    TextureBlendSetID?: string;
    EffectFadeInMs?: string;
    EffectFadeOutMs?: string;
    OverlayTextureFileDataID?: string;
}

interface GMSurveyAnswersDatabase{
    ID?: string;
    Sort_Index?: string;
    GMSurveyQuestionID?: string;
    Answer_lang?: string;
}

interface GMSurveyCurrentSurveyDatabase{
    LANGID?: string;
    GMSURVEY_ID?: string;
    ID?: string;
}

interface GMSurveyQuestionsDatabase{
    ID?: string;
    Question?: string;
    Question_lang?: string;
}

interface GMSurveySurveysDatabase{
    ID?: string;
    'Q[0]'?: string;
    'Q[1]'?: string;
    'Q[2]'?: string;
    'Q[3]'?: string;
    'Q[4]'?: string;
    'Q[5]'?: string;
    'Q[6]'?: string;
    'Q[7]'?: string;
    'Q[8]'?: string;
    'Q[9]'?: string;
    'Q[10]'?: string;
    'Q[11]'?: string;
    'Q[12]'?: string;
    'Q[13]'?: string;
    'Q[14]'?: string;
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
    'TextureVariation[0]'?: string;
    'TextureVariation[1]'?: string;
    'TextureVariation[2]'?: string;
    'AttachModel[0]'?: string;
    'AttachModel[1]'?: string;
    'AttachModel[2]'?: string;
    'AttachModel[3]'?: string;
    'TextureVariationFileID[0]'?: string;
    'TextureVariationFileID[1]'?: string;
    'TextureVariationFileID[2]'?: string;
    AttachModelFileID?: string;
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
    ModelName?: string;
    'Sound[0]'?: string;
    'Sound[1]'?: string;
    'Sound[2]'?: string;
    'Sound[3]'?: string;
    'Sound[4]'?: string;
    'Sound[5]'?: string;
    'Sound[6]'?: string;
    'Sound[7]'?: string;
    'Sound[8]'?: string;
    'Sound[9]'?: string;
    'GeoBox[0]'?: string;
    'GeoBox[1]'?: string;
    'GeoBox[2]'?: string;
    'GeoBox[3]'?: string;
    'GeoBox[4]'?: string;
    'GeoBox[5]'?: string;
    FileDataID?: string;
    ObjectEffectPackageID?: string;
    OverrideLootEffectScale?: string;
    OverrideNameScale?: string;
    'GeoBoxMin[0]'?: string;
    'GeoBoxMin[1]'?: string;
    'GeoBoxMin[2]'?: string;
    'GeoBoxMax[0]'?: string;
    'GeoBoxMax[1]'?: string;
    'GeoBoxMax[2]'?: string;
}

interface GameObjectDisplayInfoXSoundKitDatabase{
    ID?: string;
    EventIndex?: string;
    SoundKitID?: string;
    GameObjectDisplayInfoID?: string;
}

interface GameObjectsDatabase{
    Name_lang?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    'Rot[0]'?: string;
    'Rot[1]'?: string;
    'Rot[2]'?: string;
    'Rot[3]'?: string;
    ID?: string;
    OwnerID?: string;
    DisplayID?: string;
    Scale?: string;
    TypeID?: string;
    PhaseUseFlags?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    'PropValue[0]'?: string;
    'PropValue[1]'?: string;
    'PropValue[2]'?: string;
    'PropValue[3]'?: string;
    'PropValue[4]'?: string;
    'PropValue[5]'?: string;
    'PropValue[6]'?: string;
    'PropValue[7]'?: string;
}

interface GameObjectsClientDatabase{
    ID?: string;
    OwnerID?: string;
    DisplayID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    'Rot[0]'?: string;
    'Rot[1]'?: string;
    'Rot[2]'?: string;
    'Rot[3]'?: string;
    Scale?: string;
    TypeID?: string;
    'PropValue[0]'?: string;
    'PropValue[1]'?: string;
    'PropValue[2]'?: string;
    'PropValue[3]'?: string;
    Name?: string;
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
    Flags?: string;
    Name_lang?: string;
    Description_lang?: string;
    IconFileDataID?: string;
    FactionChangeGarrAbilityID?: string;
    GarrAbilityCategoryID?: string;
    GarrFollowerTypeID?: string;
}

interface GarrAbilityCategoryDatabase{
    ID?: string;
    Name_lang?: string;
}

interface GarrAbilityEffectDatabase{
    ID?: string;
    GarrAbilityID?: string;
    AbilityAction?: string;
    AbilityTargetType?: string;
    GarrMechanicTypeID?: string;
    CombatWeightBase?: string;
    CombatWeightMax?: string;
    ActionValueFlat?: string;
    ActionRace?: string;
    ActionHours?: string;
    ActionRecordID?: string;
    Flags?: string;
    Field_6_0_1_18179_005?: string;
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
    ID?: string;
    HordeGameObjectID?: string;
    AllianceGameObjectID?: string;
    Field_6_0_1_18179_003?: string;
    BuildingType?: string;
    UpgradeLevel?: string;
    AllianceName_lang?: string;
    HordeName_lang?: string;
    Description_lang?: string;
    Tooltip_lang?: string;
    Field_6_0_1_18179_010?: string;
    CurrencyTypeID?: string;
    Field_6_0_1_18179_012?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    IconFileDataID?: string;
    Field_6_0_1_18179_016?: string;
    Field_6_0_1_18179_017?: string;
    Field_6_0_1_18179_018?: string;
    Field_6_0_1_18179_019?: string;
    HordeUiTextureKitID?: string;
    AllianceUiTextureKitID?: string;
    AllianceSceneScriptPackageID?: string;
    HordeSceneScriptPackageID?: string;
    GarrAbilityID?: string;
    BonusGarrAbilityID?: string;
    GoldCost?: string;
    GarrSiteID?: string;
    Flags?: string;
    ShipmentCapacity?: string;
    GarrTypeID?: string;
    BuildSeconds?: string;
    CurrencyQty?: string;
    MaxAssignments?: string;
}

interface GarrBuildingDoodadSetDatabase{
    ID?: string;
    GarrBuildingID?: string;
    Type?: string;
    AllianceDoodadSet?: string;
    HordeDoodadSet?: string;
    SpecializationID?: string;
}

interface GarrBuildingPlotInstDatabase{
    'MapOffset[0]'?: string;
    'MapOffset[1]'?: string;
    UiTextureAtlasMemberID?: string;
    GarrSiteLevelPlotInstID?: string;
    GarrBuildingID?: string;
    ID?: string;
}

interface GarrClassSpecDatabase{
    ID?: string;
    ClassSpec_lang?: string;
    UiTextureAtlasMemberID?: string;
    GarrFollItemSetID?: string;
    ClassSpec_Male_lang?: string;
    ClassSpec_Female_lang?: string;
    FollowerClassLimit?: string;
    Flags?: string;
}

interface GarrClassSpecPlayerCondDatabase{
    ID?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    OrderIndex?: string;
    GarrClassSpecID?: string;
    PlayerConditionID?: string;
    FlavorGarrStringID?: string;
}

interface GarrEncounterDatabase{
    Name_lang?: string;
    ID?: string;
    CreatureID?: string;
    PortraitFileDataID?: string;
    UiTextureKitID?: string;
    UiAnimScale?: string;
    UiAnimHeight?: string;
    Flags?: string;
    AutoCombatantID?: string;
}

interface GarrEncounterSetXEncounterDatabase{
    ID?: string;
    GarrEncounterSetID?: string;
    GarrEncounterID?: string;
}

interface GarrEncounterXMechanicDatabase{
    ID?: string;
    GarrEncounterID?: string;
    GarrMechanicID?: string;
    GarrMechanicSetID?: string;
}

interface GarrFamilyNameDatabase{
    ID?: string;
    FamilyName?: string;
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
    HordeSpellID?: string;
    OrderIndex?: string;
    GarrFollowerID?: string;
}

interface GarrFollowerDatabase{
    HordeSourceText_lang?: string;
    AllianceSourceText_lang?: string;
    TitleName_lang?: string;
    ID?: string;
    GarrTypeID?: string;
    GarrFollowerTypeID?: string;
    HordeCreatureID?: string;
    AllianceCreatureID?: string;
    HordeGarrFollRaceID?: string;
    AllianceGarrFollRaceID?: string;
    HordeGarrClassSpecID?: string;
    AllianceGarrClassSpecID?: string;
    Quality?: string;
    FollowerLevel?: string;
    ItemLevelWeapon?: string;
    ItemLevelArmor?: string;
    HordeSourceTypeEnum?: string;
    AllianceSourceTypeEnum?: string;
    HordeIconFileDataID?: string;
    AllianceIconFileDataID?: string;
    HordeGarrFollItemSetID?: string;
    AllianceGarrFollItemSetID?: string;
    HordeUITextureKitID?: string;
    AllianceUITextureKitID?: string;
    Vitality?: string;
    HordeFlavorGarrStringID?: string;
    AllianceFlavorGarrStringID?: string;
    HordeSlottingBroadcastTextID?: string;
    AllySlottingBroadcastTextID?: string;
    ChrClassID?: string;
    Flags?: string;
    Gender?: string;
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
    AutoCombatantID?: string;
    CovenantID?: string;
}

interface GarrFollowerLevelXPDatabase{
    ID?: string;
    FollowerLevel?: string;
    XpToNextLevel?: string;
    ShipmentXP?: string;
    GarrFollowerTypeID?: string;
}

interface GarrFollowerQualityDatabase{
    ID?: string;
    XpToNextQuality?: string;
    ShipmentXP?: string;
    Quality?: string;
    AbilityCount?: string;
    TraitCount?: string;
    GarrFollowerTypeID?: string;
    ClassSpecID?: string;
}

interface GarrFollowerSetXFollowerDatabase{
    ID?: string;
    Field_7_3_2_25549_000?: string;
    Field_7_3_2_25549_001?: string;
    GarrFollowerID?: string;
    GarrFollowerSetID?: string;
}

interface GarrFollowerTypeDatabase{
    ID?: string;
    MaxItemLevel?: string;
    MaxFollowers?: string;
    MaxFollowerBuildingType?: string;
    GarrTypeID?: string;
    LevelRangeBias?: string;
    ItemLevelRangeBias?: string;
    Flags?: string;
}

interface GarrFollowerUICreatureDatabase{
    ID?: string;
    CreatureID?: string;
    Scale?: string;
    GarrFollowerID?: string;
    FactionIndex?: string;
    OrderIndex?: string;
    Flags?: string;
}

interface GarrFollowerXAbilityDatabase{
    ID?: string;
    GarrFollowerID?: string;
    GarrAbilityID?: string;
    FactionIndex?: string;
    OrderIndex?: string;
}

interface GarrGivenNameDatabase{
    ID?: string;
    Name?: string;
    Field_6_0_1_18179_002?: string;
}

interface GarrItemLevelUpgradeDataDatabase{
    ID?: string;
    Operation?: string;
    MinItemLevel?: string;
    MaxItemLevel?: string;
    FollowerTypeID?: string;
}

interface GarrMechanicDatabase{
    ID?: string;
    GarrMechanicTypeID?: string;
    Factor?: string;
    GarrAbilityID?: string;
}

interface GarrMechanicSetXMechanicDatabase{
    GarrMechanicID?: string;
    ID?: string;
    GarrMechanicSetID?: string;
}

interface GarrMechanicTypeDatabase{
    ID?: string;
    Category?: string;
    Name_lang?: string;
    Description_lang?: string;
    IconFileDataID?: string;
}

interface GarrMissionDatabase{
    ID?: string;
    TargetLevel?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    Field_6_0_1_18179_006?: string;
    OfferDuration?: string;
    Field_6_0_1_18179_008?: string;
    'Field_6_0_1_18179_009[0]'?: string;
    'Field_6_0_1_18179_009[1]'?: string;
    'Field_6_0_1_18179_009[2]'?: string;
    MissionCostCurrencyTypesID?: string;
    Field_6_0_1_18179_011?: string;
    'Field_6_0_1_18179_012[0]'?: string;
    'Field_6_0_1_18179_012[1]'?: string;
    'Field_6_0_1_18179_012[2]'?: string;
    'Field_6_0_1_18179_013[0]'?: string;
    'Field_6_0_1_18179_013[1]'?: string;
    'Field_6_0_1_18179_013[2]'?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_015?: string;
    Name_lang?: string;
    Description_lang?: string;
    Location_lang?: string;
    MissionDuration?: string;
    'MapPos[0]'?: string;
    'MapPos[1]'?: string;
    'WorldPos[0]'?: string;
    'WorldPos[1]'?: string;
    TargetItemLevel?: string;
    UiTextureKitID?: string;
    EnvGarrMechanicTypeID?: string;
    MaxFollowers?: string;
    OfferedGarrMissionTextureID?: string;
    GarrMissionTypeID?: string;
    GarrFollowerTypeID?: string;
    BaseCompletionChance?: string;
    FollowerDeathChance?: string;
    GarrTypeID?: string;
    TravelDuration?: string;
    PlayerConditionID?: string;
    GarrMissionSetID?: string;
    MissionCost?: string;
    Flags?: string;
    BaseFollowerXP?: string;
    AreaID?: string;
    OvermaxRewardPackID?: string;
    EnvGarrMechanicID?: string;
    AutoMissionScalar?: string;
    AutoMissionScalarCurveID?: string;
    AutoCombatantEnvCasterID?: string;
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

interface GarrMissionTextureDatabase{
    ID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
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
    GarrMissionID?: string;
    GarrEncounterID?: string;
    OrderIndex?: string;
    GarrEncounterSetID?: string;
    Field_9_0_1_33978_004?: string;
}

interface GarrMissionXFollowerDatabase{
    ID?: string;
    GarrMissionID?: string;
    GarrFollowerID?: string;
    GarrFollowerSetID?: string;
    Field_9_0_1_33978_002?: string;
}

interface GarrMssnBonusAbilityDatabase{
    ID?: string;
    Radius?: string;
    DurationSecs?: string;
    GarrAbilityID?: string;
    GarrFollowerTypeID?: string;
    GarrMissionTextureID?: string;
}

interface GarrPlotDatabase{
    ID?: string;
    UiCategoryID?: string;
    PlotType?: string;
    Flags?: string;
    Name?: string;
    'UpgradeRequirement[0]'?: string;
    'UpgradeRequirement[1]'?: string;
    AllianceConstructObjID?: string;
    HordeConstructObjID?: string;
}

interface GarrPlotBuildingDatabase{
    ID?: string;
    GarrPlotID?: string;
    GarrBuildingID?: string;
}

interface GarrPlotInstanceDatabase{
    ID?: string;
    GarrPlotID?: string;
    Name?: string;
}

interface GarrPlotUICategoryDatabase{
    ID?: string;
    CategoryName_lang?: string;
    PlotType?: string;
}

interface GarrSiteLevelDatabase{
    ID?: string;
    MaxBuildingLevel?: string;
    MapID?: string;
    GarrSiteID?: string;
    UiTextureKitID?: string;
    'TownHallUiPos[0]'?: string;
    'TownHallUiPos[1]'?: string;
    UpgradeMovieID?: string;
    UpgradeCost?: string;
    UpgradeGoldCost?: string;
    GarrLevel?: string;
}

interface GarrSiteLevelPlotInstDatabase{
    ID?: string;
    GarrSiteLevelID?: string;
    GarrPlotInstanceID?: string;
    'UiMarkerPos[0]'?: string;
    'UiMarkerPos[1]'?: string;
    UiMarkerSize?: string;
}

interface GarrSpecializationDatabase{
    ID?: string;
    IconFileDataID?: string;
    BuildingType?: string;
    SpecType?: string;
    RequiredUpgradeLevel?: string;
    'Param[0]'?: string;
    'Param[1]'?: string;
    Name_lang?: string;
    Tooltip_lang?: string;
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

interface GarrTalentDatabase{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    GarrTalentTreeID?: string;
    Tier?: string;
    UiOrder?: string;
    IconFileDataID?: string;
    PlayerConditionID?: string;
    GarrAbilityID?: string;
    PerkSpellID?: string;
    PerkPlayerConditionID?: string;
    ResearchDurationSecs?: string;
    ResearchGoldCost?: string;
    ResearchCost?: string;
    ResearchCostCurrencyTypesID?: string;
    RespecDurationSecs?: string;
    RespecGoldCost?: string;
    RespecCost?: string;
    RespecCostCurrencyTypesID?: string;
    Flags?: string;
    TalentType?: string;
    PrerequisiteTalentID?: string;
    ResearchCostSource?: string;
    ActiveDurationSecs?: string;
    GarrTalentSocketPropertiesID?: string;
}

interface GarrTalentCostDatabase{
    MoneyQuantity?: string;
    ID?: string;
    GarrTalentTreeID?: string;
    GarrTalentID?: string;
    RankIndex?: string;
    GarrTalentRankID?: string;
    CostType?: string;
    CurrencyTypesID?: string;
    CurrencyQuantity?: string;
}

interface GarrTalentMapPOIDatabase{
    ID?: string;
    'Position[0]'?: string;
    'Position[1]'?: string;
    GarrTalentID?: string;
}

interface GarrTalentRankDatabase{
    ID?: string;
    Rank?: string;
    PerkSpellID?: string;
    PerkPlayerConditionID?: string;
    ResearchCost?: string;
    ResearchCostCurrencyTypesID?: string;
    ResearchGoldCost?: string;
    ResearchDurationSecs?: string;
    RespecCost?: string;
    RespecCostCurrencyTypesID?: string;
    RespecGoldCost?: string;
    RespecDurationSecs?: string;
    GarrTalentID?: string;
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

interface GarrTalentSocketPropertiesDatabase{
    ID?: string;
    GarrTalentSocketType?: string;
    GarrTalentSocketSubtype?: string;
}

interface GarrTalentTreeDatabase{
    ID?: string;
    Title_lang?: string;
    GarrTypeID?: string;
    ClassID?: string;
    MaxTiers?: string;
    UiOrder?: string;
    Flags?: string;
    UiTextureKitID?: string;
    GarrTalentTreeType?: string;
    PlayerConditionID?: string;
    FeatureTypeIndex?: string;
    FeatureSubtypeIndex?: string;
    CurrencyID?: string;
}

interface GarrTypeDatabase{
    ID?: string;
    Flags?: string;
    PrimaryCurrencyTypeID?: string;
    SecondaryCurrencyTypeID?: string;
    ExpansionID?: string;
    MapIDs?: string;
    'MapIDs[0]'?: string;
    'MapIDs[1]'?: string;
    AutoFollowerHealRate?: string;
    MissionCostCurveID?: string;
    Field_9_0_2_36512_006?: string;
}

interface GarrUiAnimClassInfoDatabase{
    ID?: string;
    GarrClassSpecID?: string;
    MovementType?: string;
    ImpactDelaySecs?: string;
    CastKit?: string;
    ImpactKit?: string;
    TargetImpactKit?: string;
    SpellVisualID?: string;
}

interface GarrUiAnimRaceInfoDatabase{
    ID?: string;
    ChrRaceID?: string;
    Scale?: string;
    Height?: string;
    SingleModelScale?: string;
    SingleModelHeight?: string;
    MaleScale?: string;
    MaleHeight?: string;
    MaleSingleModelScale?: string;
    MaleSingleModelHeight?: string;
    MaleFollowerPageScale?: string;
    MaleFollowerPageHeight?: string;
    FemaleScale?: string;
    FemaleHeight?: string;
    FemaleSingleModelScale?: string;
    FemaleSingleModelHeight?: string;
    FemaleFollowerPageScale?: string;
    FemaleFollowerPageHeight?: string;
    GarrFollRaceID?: string;
}

interface GemPropertiesDatabase{
    ID?: string;
    Enchant_ID?: string;
    Maxcount_inv?: string;
    Maxcount_item?: string;
    Type?: string;
    Min_item_level?: string;
}

interface GlobalCurveDatabase{
    ID?: string;
    CurveID?: string;
    Type?: string;
}

interface GlobalGameContentTuningDatabase{
    ID?: string;
    ContentTuningID?: string;
    ExpansionID?: string;
}

interface GlobalPlayerConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    GlobalPlayerConditionSetID?: string;
}

interface GlobalPlayerConditionSetDatabase{
    ID?: string;
    What?: string;
}

interface GlobalStringsDatabase{
    ID?: string;
    BaseTag?: string;
    TagText_lang?: string;
    Flags?: string;
}

interface GlobalTable_PlayerConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    What?: string;
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

interface GlyphBindableSpellDatabase{
    ID?: string;
    SpellID?: string;
    GlyphPropertiesID?: string;
}

interface GlyphExclusiveCategoryDatabase{
    ID?: string;
    Name_lang?: string;
}

interface GlyphPropertiesDatabase{
    ID?: string;
    SpellID?: string;
    GlyphType?: string;
    GlyphExclusiveCategoryID?: string;
    SpellIconID?: string;
    GlyphSlotFlags?: string;
    SpellIconFileDataID?: string;
}

interface GlyphRequiredSpecDatabase{
    ID?: string;
    GlyphPropertiesID?: string;
    ChrSpecializationID?: string;
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
    DoodadIdTag?: string;
    Doodadpath?: string;
    Flags?: string;
    Animscale?: string;
    Pushscale?: string;
    ModelFileID?: string;
    Size_variation_min?: string;
    Size_variation_max?: string;
    Rotation_variation_min?: string;
    Rotation_variation_max?: string;
    TerrainColorGradingRampID?: string;
}

interface GroundEffectTextureDatabase{
    ID?: string;
    Datestamp?: string;
    ContinentID?: string;
    ZoneID?: string;
    TextureID?: string;
    TextureName?: string;
    'DoodadID[0]'?: string;
    'DoodadID[1]'?: string;
    'DoodadID[2]'?: string;
    'DoodadID[3]'?: string;
    Density?: string;
    Sound?: string;
    'DoodadWeight[0]'?: string;
    'DoodadWeight[1]'?: string;
    'DoodadWeight[2]'?: string;
    'DoodadWeight[3]'?: string;
    'SplatDensity[0]'?: string;
    'SplatDensity[1]'?: string;
    'SplatDensity[2]'?: string;
    'SplatDensity[3]'?: string;
}

interface GroupFinderActivityDatabase{
    ID?: string;
    FullName_lang?: string;
    ShortName_lang?: string;
    GroupFinderCategoryID?: string;
    OrderIndex?: string;
    GroupFinderActivityGrpID?: string;
    Field_2_5_1_38043_005?: string;
    Flags?: string;
    MinGearLevelSuggestion?: string;
    MapID?: string;
    DifficultyID?: string;
    AreaID?: string;
    MaxPlayers?: string;
    DisplayType?: string;
    Field_2_5_1_38043_013?: string;
    MaxLevelSuggestion?: string;
    Field_6_0_1_18179_006?: string;
    MinLevel?: string;
    PlayerConditionID?: string;
    OverrideContentTuningID?: string;
}

interface GroupFinderActivityGrpDatabase{
    ID?: string;
    Name_lang?: string;
    OrderIndex?: string;
}

interface GroupFinderCategoryDatabase{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
    OrderIndex?: string;
}

interface GuildColorBackgroundDatabase{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    'Padding_6_0_1_18179_004[0]'?: string;
    ID?: string;
}

interface GuildColorBorderDatabase{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    'Padding_6_0_1_18179_004[0]'?: string;
    ID?: string;
}

interface GuildColorEmblemDatabase{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    'Padding_6_0_1_18179_004[0]'?: string;
    ID?: string;
}

interface GuildEmblemDatabase{
    ID?: string;
    EmblemID?: string;
    TextureFileDataID?: string;
}

interface GuildPerkSpellsDatabase{
    ID?: string;
    GuildLevel?: string;
    SpellID?: string;
}

interface GuildShirtBackgroundDatabase{
    ID?: string;
    Component?: string;
    FileDataID?: string;
    ShirtID?: string;
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

interface GuildTabardBackgroundDatabase{
    ID?: string;
    Tier?: string;
    Component?: string;
    FileDataID?: string;
    Color?: string;
}

interface GuildTabardBorderDatabase{
    ID?: string;
    BorderID?: string;
    Tier?: string;
    Component?: string;
    FileDataID?: string;
    Color?: string;
}

interface GuildTabardEmblemDatabase{
    ID?: string;
    Component?: string;
    Color?: string;
    FileDataID?: string;
    EmblemID?: string;
}

interface HeirloomDatabase{
    ItemID?: string;
    SourceText_lang?: string;
    LegacyItemID?: string;
    LegacyUpgradedItemID?: string;
    StaticUpgradedItemID?: string;
    'UpgradeItemID[0]'?: string;
    'UpgradeItemID[1]'?: string;
    'UpgradeItemID[2]'?: string;
    'UpgradeItemBonusListID[0]'?: string;
    'UpgradeItemBonusListID[1]'?: string;
    'UpgradeItemBonusListID[2]'?: string;
    Flags?: string;
    SourceTypeEnum?: string;
    ID?: string;
    'UpgradeItemID[3]'?: string;
    'UpgradeItemBonusListID[3]'?: string;
}

interface HelmetAnimScalingDatabase{
    ID?: string;
    HelmetGeosetVisDataID?: string;
    RaceID?: string;
    Amount?: string;
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
    'DefaultFlags[0]'?: string;
    'DefaultFlags[1]'?: string;
    'DefaultFlags[2]'?: string;
    'DefaultFlags[3]'?: string;
    'DefaultFlags[4]'?: string;
    'DefaultFlags[5]'?: string;
    'DefaultFlags[6]'?: string;
    'DefaultFlags[7]'?: string;
    'DefaultFlags[8]'?: string;
    'DefaultFlags[9]'?: string;
    'DefaultFlags[10]'?: string;
    'DefaultFlags[11]'?: string;
    'DefaultFlags[12]'?: string;
    'DefaultFlags[13]'?: string;
    'DefaultFlags[14]'?: string;
    'DefaultFlags[15]'?: string;
    'DefaultFlags[16]'?: string;
    'DefaultFlags[17]'?: string;
    'DefaultFlags[18]'?: string;
    'DefaultFlags[19]'?: string;
    'DefaultFlags[20]'?: string;
    'DefaultFlags[21]'?: string;
    'DefaultFlags[22]'?: string;
    'DefaultFlags[23]'?: string;
    'DefaultFlags[24]'?: string;
    'DefaultFlags[25]'?: string;
    'DefaultFlags[26]'?: string;
    'DefaultFlags[27]'?: string;
    'DefaultFlags[28]'?: string;
    'DefaultFlags[29]'?: string;
    'DefaultFlags[30]'?: string;
    'DefaultFlags[31]'?: string;
    'PreferredFlags[0]'?: string;
    'PreferredFlags[1]'?: string;
    'PreferredFlags[2]'?: string;
    'PreferredFlags[3]'?: string;
    'PreferredFlags[4]'?: string;
    'PreferredFlags[5]'?: string;
    'PreferredFlags[6]'?: string;
    'PreferredFlags[7]'?: string;
    'PreferredFlags[8]'?: string;
    'PreferredFlags[9]'?: string;
    'PreferredFlags[10]'?: string;
    'PreferredFlags[11]'?: string;
    'PreferredFlags[12]'?: string;
    'PreferredFlags[13]'?: string;
    'PreferredFlags[14]'?: string;
    'PreferredFlags[15]'?: string;
    'PreferredFlags[16]'?: string;
    'PreferredFlags[17]'?: string;
    'PreferredFlags[18]'?: string;
    'PreferredFlags[19]'?: string;
    'PreferredFlags[20]'?: string;
    'PreferredFlags[21]'?: string;
    'PreferredFlags[22]'?: string;
    'PreferredFlags[23]'?: string;
    'PreferredFlags[24]'?: string;
    'PreferredFlags[25]'?: string;
    'PreferredFlags[26]'?: string;
    'PreferredFlags[27]'?: string;
    'PreferredFlags[28]'?: string;
    'PreferredFlags[29]'?: string;
    'PreferredFlags[30]'?: string;
    'PreferredFlags[31]'?: string;
    'HideFlags[0]'?: string;
    'HideFlags[1]'?: string;
    'HideFlags[2]'?: string;
    'HideFlags[3]'?: string;
    'HideFlags[4]'?: string;
    'HideFlags[5]'?: string;
    'HideFlags[6]'?: string;
    'HideFlags[7]'?: string;
    'HideFlags[8]'?: string;
    'HideFlags[9]'?: string;
    'HideFlags[10]'?: string;
    'HideFlags[11]'?: string;
    'HideFlags[12]'?: string;
    'HideFlags[13]'?: string;
    'HideFlags[14]'?: string;
    'HideFlags[15]'?: string;
    'HideFlags[16]'?: string;
    'HideFlags[17]'?: string;
    'HideFlags[18]'?: string;
    'HideFlags[19]'?: string;
    'HideFlags[20]'?: string;
    'HideFlags[21]'?: string;
    'HideFlags[22]'?: string;
    'HideFlags[23]'?: string;
    'HideFlags[24]'?: string;
    'HideFlags[25]'?: string;
    'HideFlags[26]'?: string;
    'HideFlags[27]'?: string;
    'HideFlags[28]'?: string;
    'HideFlags[29]'?: string;
    'HideFlags[30]'?: string;
    'HideFlags[31]'?: string;
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
    'HideGeoset[0]'?: string;
    'HideGeoset[1]'?: string;
    'HideGeoset[2]'?: string;
    'HideGeoset[3]'?: string;
    'HideGeoset[4]'?: string;
    'HideGeoset[5]'?: string;
    'HideGeoset[6]'?: string;
    'HideGeoset[7]'?: string;
    'HideGeoset[8]'?: string;
}

interface HighlightColorDatabase{
    ID?: string;
    StartColor?: string;
    MidColor?: string;
    EndColor?: string;
    Type?: string;
    Flags?: string;
}

interface HolidayDescriptionsDatabase{
    ID?: string;
    Description_lang?: string;
}

interface HolidayNamesDatabase{
    ID?: string;
    Name_lang?: string;
}

interface HolidaysDatabase{
    ID?: string;
    Region?: string;
    Looping?: string;
    HolidayNameID?: string;
    HolidayDescriptionID?: string;
    Priority?: string;
    CalendarFilterType?: string;
    Flags?: string;
    Field_1_13_2_30073_008?: string;
    'Duration[0]'?: string;
    'Duration[1]'?: string;
    'Duration[2]'?: string;
    'Duration[3]'?: string;
    'Duration[4]'?: string;
    'Duration[5]'?: string;
    'Duration[6]'?: string;
    'Duration[7]'?: string;
    'Duration[8]'?: string;
    'Duration[9]'?: string;
    'Date[0]'?: string;
    'Date[1]'?: string;
    'Date[2]'?: string;
    'Date[3]'?: string;
    'Date[4]'?: string;
    'Date[5]'?: string;
    'Date[6]'?: string;
    'Date[7]'?: string;
    'Date[8]'?: string;
    'Date[9]'?: string;
    'Date[10]'?: string;
    'Date[11]'?: string;
    'Date[12]'?: string;
    'Date[13]'?: string;
    'Date[14]'?: string;
    'Date[15]'?: string;
    'CalendarFlags[0]'?: string;
    'CalendarFlags[1]'?: string;
    'CalendarFlags[2]'?: string;
    'CalendarFlags[3]'?: string;
    'CalendarFlags[4]'?: string;
    'CalendarFlags[5]'?: string;
    'CalendarFlags[6]'?: string;
    'CalendarFlags[7]'?: string;
    'CalendarFlags[8]'?: string;
    'CalendarFlags[9]'?: string;
    'TextureFileDataID[0]'?: string;
    'TextureFileDataID[1]'?: string;
    'TextureFileDataID[2]'?: string;
    'Date[16]'?: string;
    'Date[17]'?: string;
    'Date[18]'?: string;
    'Date[19]'?: string;
    'Date[20]'?: string;
    'Date[21]'?: string;
    'Date[22]'?: string;
    'Date[23]'?: string;
    'Date[24]'?: string;
    'Date[25]'?: string;
    TextureFileName?: string;
}

interface HotfixDatabase{
    ID?: string;
    Tablename?: string;
    Object_ID?: string;
    Flags?: string;
}

interface HotfixesDatabase{
    ID?: string;
    Tablename?: string;
    Object_ID?: string;
    Flags?: string;
    PushID?: string;
}

interface ImportPriceArmorDatabase{
    ID?: string;
    ClothModifier?: string;
    LeatherModifier?: string;
    ChainModifier?: string;
    PlateModifier?: string;
}

interface ImportPriceQualityDatabase{
    ID?: string;
    Data?: string;
}

interface ImportPriceShieldDatabase{
    ID?: string;
    Data?: string;
}

interface ImportPriceWeaponDatabase{
    ID?: string;
    Data?: string;
}

interface InvasionClientDataDatabase{
    Name_lang?: string;
    'IconLocation[0]'?: string;
    'IconLocation[1]'?: string;
    ID?: string;
    WorldStateID?: string;
    AreaTableID?: string;
    UiTextureAtlasMemberID?: string;
    ScenarioID?: string;
    WorldQuestID?: string;
    WorldStateValue?: string;
    InvasionEnabledWorldStateID?: string;
}

interface Item_sparseDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    'Flags[2]'?: string;
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
    'StatModifier_bonusStat[0]'?: string;
    'StatModifier_bonusStat[1]'?: string;
    'StatModifier_bonusStat[2]'?: string;
    'StatModifier_bonusStat[3]'?: string;
    'StatModifier_bonusStat[4]'?: string;
    'StatModifier_bonusStat[5]'?: string;
    'StatModifier_bonusStat[6]'?: string;
    'StatModifier_bonusStat[7]'?: string;
    'StatModifier_bonusStat[8]'?: string;
    'StatModifier_bonusStat[9]'?: string;
    'Field_6_0_1_18179_024[0]'?: string;
    'Field_6_0_1_18179_024[1]'?: string;
    'Field_6_0_1_18179_024[2]'?: string;
    'Field_6_0_1_18179_024[3]'?: string;
    'Field_6_0_1_18179_024[4]'?: string;
    'Field_6_0_1_18179_024[5]'?: string;
    'Field_6_0_1_18179_024[6]'?: string;
    'Field_6_0_1_18179_024[7]'?: string;
    'Field_6_0_1_18179_024[8]'?: string;
    'Field_6_0_1_18179_024[9]'?: string;
    'Field_6_0_1_18179_025[0]'?: string;
    'Field_6_0_1_18179_025[1]'?: string;
    'Field_6_0_1_18179_025[2]'?: string;
    'Field_6_0_1_18179_025[3]'?: string;
    'Field_6_0_1_18179_025[4]'?: string;
    'Field_6_0_1_18179_025[5]'?: string;
    'Field_6_0_1_18179_025[6]'?: string;
    'Field_6_0_1_18179_025[7]'?: string;
    'Field_6_0_1_18179_025[8]'?: string;
    'Field_6_0_1_18179_025[9]'?: string;
    'Field_6_0_1_18179_026[0]'?: string;
    'Field_6_0_1_18179_026[1]'?: string;
    'Field_6_0_1_18179_026[2]'?: string;
    'Field_6_0_1_18179_026[3]'?: string;
    'Field_6_0_1_18179_026[4]'?: string;
    'Field_6_0_1_18179_026[5]'?: string;
    'Field_6_0_1_18179_026[6]'?: string;
    'Field_6_0_1_18179_026[7]'?: string;
    'Field_6_0_1_18179_026[8]'?: string;
    'Field_6_0_1_18179_026[9]'?: string;
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
    'Field_6_0_1_18179_051[0]'?: string;
    'Field_6_0_1_18179_051[1]'?: string;
    'Field_6_0_1_18179_051[2]'?: string;
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

interface ItemDatabase{
    ID?: string;
    IconFileDataID?: string;
    DisplayInfoID?: string;
    ClassID?: string;
    SubclassID?: string;
    Sound_override_subclassID?: string;
    Material?: string;
    InventoryType?: string;
    SheatheType?: string;
    ItemGroupSoundsID?: string;
    MaxDurability?: string;
    AmmoType?: string;
    'DamageMin[0]'?: string;
    'DamageMin[1]'?: string;
    'DamageMin[2]'?: string;
    'DamageMin[3]'?: string;
    'DamageMin[4]'?: string;
    'DamageMax[0]'?: string;
    'DamageMax[1]'?: string;
    'DamageMax[2]'?: string;
    'DamageMax[3]'?: string;
    'DamageMax[4]'?: string;
    'DamageType[0]'?: string;
    'DamageType[1]'?: string;
    'DamageType[2]'?: string;
    'DamageType[3]'?: string;
    'DamageType[4]'?: string;
    'DefensiveStats[0]'?: string;
    'DefensiveStats[1]'?: string;
    'DefensiveStats[2]'?: string;
    'DefensiveStats[3]'?: string;
    'DefensiveStats[4]'?: string;
    'DefensiveStats[5]'?: string;
    'DefensiveStats[6]'?: string;
    RequiredLevel?: string;
    DamageType?: string;
    RandomSelect?: string;
    ItemRandomSuffixGroupID?: string;
    ModifiedCraftingReagentItemID?: string;
    Field_2_5_1_38043_012?: string;
    Field_2_5_1_38043_013?: string;
}

interface ItemAppearanceDatabase{
    ID?: string;
    ItemDisplayInfoID?: string;
    DefaultIconFileDataID?: string;
    UiOrder?: string;
    DisplayType?: string;
    Field_8_2_5_31812_001?: string;
    PlayerConditionID?: string;
}

interface ItemAppearanceXUiCameraDatabase{
    ID?: string;
    ItemAppearanceID?: string;
    UiCameraID?: string;
}

interface ItemArmorQualityDatabase{
    ID?: string;
    'Qualitymod[0]'?: string;
    'Qualitymod[1]'?: string;
    'Qualitymod[2]'?: string;
    'Qualitymod[3]'?: string;
    'Qualitymod[4]'?: string;
    'Qualitymod[5]'?: string;
    'Qualitymod[6]'?: string;
    ItemLevel?: string;
}

interface ItemArmorShieldDatabase{
    ID?: string;
    ItemLevel?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
}

interface ItemArmorTotalDatabase{
    ID?: string;
    ItemLevel?: string;
    Cloth?: string;
    Leather?: string;
    Mail?: string;
    Plate?: string;
}

interface ItemBagFamilyDatabase{
    ID?: string;
    Name_lang?: string;
}

interface ItemBonusDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Type?: string;
    'Value[0]'?: string;
    'Value[1]'?: string;
    OrderIndex?: string;
    'Value[2]'?: string;
    ParentItemBonusListID?: string;
    'Value[3]'?: string;
}

interface ItemBonusListDatabase{
    ID?: string;
    InternalName?: string;
    Flags?: string;
}

interface ItemBonusListGroupDatabase{
    ID?: string;
    SequenceSpellID?: string;
    Field_9_1_0_38783_001?: string;
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

interface ItemBonusListLevelDeltaDatabase{
    ID?: string;
    ItemLevelDelta?: string;
}

interface ItemBonusListWarforgeLevelDeltaDatabase{
    ItemLevelDelta?: string;
    ID?: string;
}

interface ItemBonusSequenceSpellDatabase{
    ID?: string;
    SpellID?: string;
    ItemID?: string;
}

interface ItemBonusTreeDatabase{
    ID?: string;
    Field_9_0_2_35854_000?: string;
    InventoryTypeMask?: string;
}

interface ItemBonusTreeNodeDatabase{
    ID?: string;
    ParentItemBonusTreeID?: string;
    ChildItemBonusTreeID?: string;
    ChildItemBonusListID?: string;
    ChildItemLevelSelectorID?: string;
    ItemContext?: string;
    ItemBonusListGroupID?: string;
    ParentItemBonusTreeNodeID?: string;
}

interface ItemChildEquipmentDatabase{
    ID?: string;
    ChildItemID?: string;
    ChildItemEquipSlot?: string;
    ParentItemID?: string;
}

interface ItemClassDatabase{
    ClassID?: string;
    SubclassMapID?: string;
    Flags?: string;
    ClassName_lang?: string;
    ID?: string;
    PriceModifier?: string;
}

interface ItemCondExtCostsDatabase{
    ID?: string;
    CondExtendedCost?: string;
    ItemExtendedCostEntry?: string;
    ArenaSeason?: string;
}

interface ItemContextPickerEntryDatabase{
    ID?: string;
    ItemCreationContext?: string;
    OrderIndex?: string;
    ItemContextPickerID?: string;
    PVal?: string;
    PlayerConditionID?: string;
    Flags?: string;
}

interface ItemCurrencyCostDatabase{
    ID?: string;
    ItemID?: string;
}

interface ItemCurrencyValueDatabase{
    ID?: string;
    CurrencyValue?: string;
    'Currency[0]'?: string;
    'Currency[1]'?: string;
    'Currency[2]'?: string;
    'Currency[3]'?: string;
    ItemID?: string;
}

interface ItemDamageAmmoDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
    ItemLevel?: string;
}

interface ItemDamageOneHandDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
    ItemLevel?: string;
}

interface ItemDamageOneHandCasterDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
    ItemLevel?: string;
}

interface ItemDamageRangedDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
    ItemLevel?: string;
}

interface ItemDamageThrownDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
    ItemLevel?: string;
}

interface ItemDamageTwoHandDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
    ItemLevel?: string;
}

interface ItemDamageTwoHandCasterDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
    ItemLevel?: string;
}

interface ItemDamageWandDatabase{
    ID?: string;
    'Quality[0]'?: string;
    'Quality[1]'?: string;
    'Quality[2]'?: string;
    'Quality[3]'?: string;
    'Quality[4]'?: string;
    'Quality[5]'?: string;
    'Quality[6]'?: string;
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

interface ItemDisplayInfoDatabase{
    ID?: string;
    'ModelName[0]'?: string;
    'ModelName[1]'?: string;
    'ModelTexture[0]'?: string;
    'ModelTexture[1]'?: string;
    InventoryIcon?: string;
    GroundModel?: string;
    'GeosetGroup[0]'?: string;
    'GeosetGroup[1]'?: string;
    'GeosetGroup[2]'?: string;
    'GeosetGroup[3]'?: string;
    Flags?: string;
    SpellVisualID?: string;
    GroupSoundIndex?: string;
    ItemSize?: string;
    HelmetGeosetVisID?: string;
    'Texture[0]'?: string;
    'Texture[1]'?: string;
    'Texture[2]'?: string;
    'Texture[3]'?: string;
    'Texture[4]'?: string;
    'Texture[5]'?: string;
    'Texture[6]'?: string;
    'Texture[7]'?: string;
    ItemVisual?: string;
    'HelmetGeosetVisID[0]'?: string;
    'HelmetGeosetVisID[1]'?: string;
    ParticleColorID?: string;
    'InventoryIcon[0]'?: string;
    'InventoryIcon[1]'?: string;
    'Texture[8]'?: string;
    'HelmetGeosetVis[0]'?: string;
    'HelmetGeosetVis[1]'?: string;
    'ModelResourcesID[0]'?: string;
    'ModelResourcesID[1]'?: string;
    'ModelMaterialResourcesID[0]'?: string;
    'ModelMaterialResourcesID[1]'?: string;
    'AttachmentGeosetGroup[0]'?: string;
    'AttachmentGeosetGroup[1]'?: string;
    'AttachmentGeosetGroup[2]'?: string;
    'AttachmentGeosetGroup[3]'?: string;
    ItemRangedDisplayInfoID?: string;
    OverrideSwooshSoundKitID?: string;
    SheatheTransformMatrixID?: string;
    ModelType1?: string;
    StateSpellVisualKitID?: string;
    SheathedSpellVisualKitID?: string;
    UnsheathedSpellVisualKitID?: string;
    'Field_8_2_0_30080_011[0]'?: string;
    'Field_8_2_0_30080_011[1]'?: string;
    'GeosetGroup[4]'?: string;
    'GeosetGroup[5]'?: string;
    'AttachmentGeosetGroup[4]'?: string;
    'AttachmentGeosetGroup[5]'?: string;
}

interface ItemDisplayInfoMaterialResDatabase{
    ID?: string;
    ItemDisplayInfoID?: string;
    MaterialResourcesID?: string;
    ComponentSection?: string;
}

interface ItemDisplayXUiCameraDatabase{
    ID?: string;
    ItemDisplayInfoID?: string;
    UiCameraID?: string;
}

interface ItemEffectDatabase{
    ID?: string;
    ParentItemID?: string;
    LegacySlotIndex?: string;
    SpellID?: string;
    TriggerType?: string;
    Charges?: string;
    CoolDownMSec?: string;
    SpellCategoryID?: string;
    CategoryCoolDownMSec?: string;
    ChrSpecializationID?: string;
}

interface ItemExtendedCostDatabase{
    ID?: string;
    HonorPoints?: string;
    ArenaPoints?: string;
    'ItemID[0]'?: string;
    'ItemID[1]'?: string;
    'ItemID[2]'?: string;
    'ItemID[3]'?: string;
    'ItemID[4]'?: string;
    'ItemCount[0]'?: string;
    'ItemCount[1]'?: string;
    'ItemCount[2]'?: string;
    'ItemCount[3]'?: string;
    'ItemCount[4]'?: string;
    RequiredArenaRating?: string;
    ItemPurchaseGroup?: string;
    ArenaBracket?: string;
    'CurrencyID[0]'?: string;
    'CurrencyID[1]'?: string;
    'CurrencyID[2]'?: string;
    'CurrencyID[3]'?: string;
    'CurrencyID[4]'?: string;
    'CurrencyCount[0]'?: string;
    'CurrencyCount[1]'?: string;
    'CurrencyCount[2]'?: string;
    'CurrencyCount[3]'?: string;
    'CurrencyCount[4]'?: string;
    MinFactionID?: string;
    MinReputation?: string;
    Flags?: string;
    RequiredGuildLevel?: string;
    RequiredAchievement?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_007?: string;
    Field_6_0_1_18179_010?: string;
    Field_6_0_1_18179_011?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
}

interface ItemFallbackVisualDatabase{
    ID?: string;
    InventorySlot?: string;
    ArmorSubClass?: string;
    FallbackItemID?: string;
}

interface ItemGroupSoundsDatabase{
    ID?: string;
    'Sound[0]'?: string;
    'Sound[1]'?: string;
    'Sound[2]'?: string;
    'Sound[3]'?: string;
}

interface ItemLevelSelectorDatabase{
    ID?: string;
    MinItemLevel?: string;
    ItemLevelSelectorQualitySetID?: string;
    AzeriteUnlockMappingSetID?: string;
}

interface ItemLevelSelectorQualityDatabase{
    ID?: string;
    QualityItemBonusListID?: string;
    ParentILSQualitySetID?: string;
    Quality?: string;
}

interface ItemLevelSelectorQualitySetDatabase{
    ID?: string;
    IlvlRare?: string;
    IlvlEpic?: string;
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

interface ItemModifiedAppearanceDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    ItemID?: string;
    ItemAppearanceID?: string;
    ItemAppearanceModifierID?: string;
    OrderIndex?: string;
    TransmogSourceTypeEnum?: string;
}

interface ItemModifiedAppearanceExtraDatabase{
    ID?: string;
    IconFileDataID?: string;
    UnequippedIconFileDataID?: string;
    SheatheType?: string;
    DisplayWeaponSubclassID?: string;
    DisplayInventoryType?: string;
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

interface ItemPriceBaseDatabase{
    ID?: string;
    ItemLevel?: string;
    Armor?: string;
    Weapon?: string;
}

interface ItemPurchaseGroupDatabase{
    ID?: string;
    'ItemID[0]'?: string;
    'ItemID[1]'?: string;
    'ItemID[2]'?: string;
    'ItemID[3]'?: string;
    'ItemID[4]'?: string;
    'ItemID[5]'?: string;
    'ItemID[6]'?: string;
    'ItemID[7]'?: string;
    Name_lang?: string;
}

interface ItemRandomPropertiesDatabase{
    ID?: string;
    Name?: string;
    'Enchantment[0]'?: string;
    'Enchantment[1]'?: string;
    'Enchantment[2]'?: string;
    'Enchantment[3]'?: string;
    'Enchantment[4]'?: string;
    Name_lang?: string;
}

interface ItemRandomSuffixDatabase{
    ID?: string;
    Name_lang?: string;
    InternalName?: string;
    'Enchantment[0]'?: string;
    'Enchantment[1]'?: string;
    'Enchantment[2]'?: string;
    'AllocationPct[0]'?: string;
    'AllocationPct[1]'?: string;
    'AllocationPct[2]'?: string;
    'Enchantment[3]'?: string;
    'Enchantment[4]'?: string;
    'AllocationPct[3]'?: string;
    'AllocationPct[4]'?: string;
}

interface ItemRangedDisplayInfoDatabase{
    ID?: string;
    MissileSpellVisualEffectNameID?: string;
    QuiverFileDataID?: string;
    CastSpellVisualID?: string;
    AutoAttackSpellVisualID?: string;
}

interface ItemReforgeDatabase{
    ID?: string;
    Source_stat?: string;
    Source_multiplier?: string;
    Target_stat?: string;
    Target_multiplier?: string;
}

interface ItemSearchNameDatabase{
    AllowableRace?: string;
    Display_lang?: string;
    ID?: string;
    OverallQualityID?: string;
    ExpansionID?: string;
    MinFactionID?: string;
    MinReputation?: string;
    AllowableClass?: string;
    RequiredLevel?: string;
    RequiredSkill?: string;
    RequiredSkillRank?: string;
    RequiredAbility?: string;
    ItemLevel?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    'Flags[2]'?: string;
    'Flags[3]'?: string;
    Field_7_3_2_25549_009?: string;
}

interface ItemSetDatabase{
    ID?: string;
    Name_lang?: string;
    'ItemID[0]'?: string;
    'ItemID[1]'?: string;
    'ItemID[2]'?: string;
    'ItemID[3]'?: string;
    'ItemID[4]'?: string;
    'ItemID[5]'?: string;
    'ItemID[6]'?: string;
    'ItemID[7]'?: string;
    'ItemID[8]'?: string;
    'ItemID[9]'?: string;
    'ItemID[10]'?: string;
    'ItemID[11]'?: string;
    'ItemID[12]'?: string;
    'ItemID[13]'?: string;
    'ItemID[14]'?: string;
    'ItemID[15]'?: string;
    'ItemID[16]'?: string;
    'ItemID[17]'?: string;
    'ItemID[18]'?: string;
    'ItemID[19]'?: string;
    'ItemID[20]'?: string;
    'ItemID[21]'?: string;
    'ItemID[22]'?: string;
    'ItemID[23]'?: string;
    'ItemID[24]'?: string;
    'ItemID[25]'?: string;
    'ItemID[26]'?: string;
    'ItemID[27]'?: string;
    'ItemID[28]'?: string;
    'ItemID[29]'?: string;
    'ItemID[30]'?: string;
    'ItemID[31]'?: string;
    'ItemID[32]'?: string;
    'ItemID[33]'?: string;
    'ItemID[34]'?: string;
    'ItemID[35]'?: string;
    'ItemID[36]'?: string;
    'ItemID[37]'?: string;
    'ItemID[38]'?: string;
    'ItemID[39]'?: string;
    'ItemID[40]'?: string;
    'ItemID[41]'?: string;
    'ItemID[42]'?: string;
    'ItemID[43]'?: string;
    'ItemID[44]'?: string;
    'ItemID[45]'?: string;
    'ItemID[46]'?: string;
    'ItemID[47]'?: string;
    'ItemID[48]'?: string;
    'ItemID[49]'?: string;
    'ItemID[50]'?: string;
    'ItemID[51]'?: string;
    'ItemID[52]'?: string;
    'ItemID[53]'?: string;
    'ItemID[54]'?: string;
    'ItemID[55]'?: string;
    'SetSpellID[0]'?: string;
    'SetSpellID[1]'?: string;
    'SetSpellID[2]'?: string;
    'SetSpellID[3]'?: string;
    'SetSpellID[4]'?: string;
    'SetSpellID[5]'?: string;
    'SetSpellID[6]'?: string;
    'SetSpellID[7]'?: string;
    'SetThreshold[0]'?: string;
    'SetThreshold[1]'?: string;
    'SetThreshold[2]'?: string;
    'SetThreshold[3]'?: string;
    'SetThreshold[4]'?: string;
    'SetThreshold[5]'?: string;
    'SetThreshold[6]'?: string;
    'SetThreshold[7]'?: string;
    RequiredSkill?: string;
    RequiredSkillRank?: string;
    SetFlags?: string;
}

interface ItemSetSpellDatabase{
    ID?: string;
    ItemSetID?: string;
    SpellID?: string;
    Threshold?: string;
    ChrSpecID?: string;
}

interface ItemSparseDatabase{
    ID?: string;
    AllowableRace?: string;
    Display_lang?: string;
    Display1_lang?: string;
    Display2_lang?: string;
    Display3_lang?: string;
    Description_lang?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    'Flags[2]'?: string;
    'Flags[3]'?: string;
    PriceRandomValue?: string;
    PriceVariance?: string;
    VendorStackCount?: string;
    MaxDurability?: string;
    BuyPrice?: string;
    SellPrice?: string;
    RequiredAbility?: string;
    MaxCount?: string;
    Stackable?: string;
    'StatPercentEditor[0]'?: string;
    'StatPercentEditor[1]'?: string;
    'StatPercentEditor[2]'?: string;
    'StatPercentEditor[3]'?: string;
    'StatPercentEditor[4]'?: string;
    'StatPercentEditor[5]'?: string;
    'StatPercentEditor[6]'?: string;
    'StatPercentEditor[7]'?: string;
    'StatPercentEditor[8]'?: string;
    'StatPercentEditor[9]'?: string;
    'StatPercentageOfSocket[0]'?: string;
    'StatPercentageOfSocket[1]'?: string;
    'StatPercentageOfSocket[2]'?: string;
    'StatPercentageOfSocket[3]'?: string;
    'StatPercentageOfSocket[4]'?: string;
    'StatPercentageOfSocket[5]'?: string;
    'StatPercentageOfSocket[6]'?: string;
    'StatPercentageOfSocket[7]'?: string;
    'StatPercentageOfSocket[8]'?: string;
    'StatPercentageOfSocket[9]'?: string;
    ItemRange?: string;
    BagFamily?: string;
    QualityModifier?: string;
    DurationInInventory?: string;
    DmgVariance?: string;
    AllowableClass?: string;
    ItemLevel?: string;
    RequiredSkill?: string;
    RequiredSkillRank?: string;
    MinFactionID?: string;
    'StatValue[0]'?: string;
    'StatValue[1]'?: string;
    'StatValue[2]'?: string;
    'StatValue[3]'?: string;
    'StatValue[4]'?: string;
    'StatValue[5]'?: string;
    'StatValue[6]'?: string;
    'StatValue[7]'?: string;
    'StatValue[8]'?: string;
    'StatValue[9]'?: string;
    ScalingStatDistributionID?: string;
    'DamageMin[0]'?: string;
    'DamageMin[1]'?: string;
    'DamageMin[2]'?: string;
    'DamageMin[3]'?: string;
    'DamageMin[4]'?: string;
    'DamageMax[0]'?: string;
    'DamageMax[1]'?: string;
    'DamageMax[2]'?: string;
    'DamageMax[3]'?: string;
    'DamageMax[4]'?: string;
    'DefensiveStats[0]'?: string;
    'DefensiveStats[1]'?: string;
    'DefensiveStats[2]'?: string;
    'DefensiveStats[3]'?: string;
    'DefensiveStats[4]'?: string;
    'DefensiveStats[5]'?: string;
    'DefensiveStats[6]'?: string;
    ItemDelay?: string;
    PageID?: string;
    StartQuestID?: string;
    LockID?: string;
    RandomSelect?: string;
    ItemRandomSuffixGroupID?: string;
    ItemSet?: string;
    ZoneBound?: string;
    InstanceBound?: string;
    TotemCategoryID?: string;
    Socket_match_enchantment_ID?: string;
    Gem_properties?: string;
    LimitCategory?: string;
    RequiredHoliday?: string;
    RequiredTransmogHoliday?: string;
    ItemNameDescriptionID?: string;
    OverallQualityID?: string;
    InventoryType?: string;
    RequiredLevel?: string;
    RequiredPVPRank?: string;
    RequiredPVPMedal?: string;
    MinReputation?: string;
    ContainerSlots?: string;
    'StatModifier_bonusStat[0]'?: string;
    'StatModifier_bonusStat[1]'?: string;
    'StatModifier_bonusStat[2]'?: string;
    'StatModifier_bonusStat[3]'?: string;
    'StatModifier_bonusStat[4]'?: string;
    'StatModifier_bonusStat[5]'?: string;
    'StatModifier_bonusStat[6]'?: string;
    'StatModifier_bonusStat[7]'?: string;
    'StatModifier_bonusStat[8]'?: string;
    'StatModifier_bonusStat[9]'?: string;
    'DamageType[0]'?: string;
    'DamageType[1]'?: string;
    'DamageType[2]'?: string;
    'DamageType[3]'?: string;
    'DamageType[4]'?: string;
    AmmoType?: string;
    Bonding?: string;
    LanguageID?: string;
    PageMaterialID?: string;
    Material?: string;
    SheatheType?: string;
    'SocketType[0]'?: string;
    'SocketType[1]'?: string;
    'SocketType[2]'?: string;
    SpellWeightCategory?: string;
    SpellWeight?: string;
    ArtifactID?: string;
    ExpansionID?: string;
    OppositeFactionItemID?: string;
    'ZoneBound[0]'?: string;
    'ZoneBound[1]'?: string;
    DamageType?: string;
    Field_7_3_2_25549_048?: string;
    Field_7_3_2_25549_049?: string;
    Damage_damageType?: string;
    ModifiedCraftingReagentItemID?: string;
    ContentTuningID?: string;
    PlayerLevelToItemLevelCurveID?: string;
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

interface ItemSpecOverrideDatabase{
    ID?: string;
    ItemID?: string;
    SpecID?: string;
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

interface ItemSubClassMaskDatabase{
    ClassID?: string;
    Mask?: string;
    Name_lang?: string;
    ID?: string;
}

interface ItemToBattlePetDatabase{
    ItemID?: string;
    SpeciesID?: string;
    Field_6_0_1_18179_001?: string;
}

interface ItemToMountSpellDatabase{
    ItemID?: string;
    SpellID?: string;
}

interface ItemUpgradeDatabase{
    ID?: string;
    ItemUpgradePathID?: string;
    ItemLevelIncrement?: string;
    PrerequisiteID?: string;
    CurrencyType?: string;
    CurrencyAmount?: string;
}

interface ItemUpgradePathDatabase{
    ID?: string;
}

interface ItemVisualEffectsDatabase{
    ID?: string;
    Model?: string;
}

interface ItemVisualsDatabase{
    ID?: string;
    'Slot[0]'?: string;
    'Slot[1]'?: string;
    'Slot[2]'?: string;
    'Slot[3]'?: string;
    'Slot[4]'?: string;
    'ModelFileID[0]'?: string;
    'ModelFileID[1]'?: string;
    'ModelFileID[2]'?: string;
    'ModelFileID[3]'?: string;
    'ModelFileID[4]'?: string;
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
    ItemID?: string;
    ItemBonusTreeID?: string;
}

interface ItemXItemEffectDatabase{
    ID?: string;
    ItemEffectID?: string;
    ItemID?: string;
}

interface JournalEncounterDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    'Map[0]'?: string;
    'Map[1]'?: string;
    JournalInstanceID?: string;
    OrderIndex?: string;
    FirstSectionID?: string;
    UiMapID?: string;
    MapDisplayConditionID?: string;
    Flags?: string;
    DifficultyMask?: string;
    DungeonMapID?: string;
    WorldMapAreaID?: string;
    DungeonEncounterID?: string;
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

interface JournalEncounterItemDatabase{
    ID?: string;
    JournalEncounterID?: string;
    ItemID?: string;
    DifficultyMask?: string;
    FactionMask?: string;
    Flags?: string;
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
    IconFileDataID?: string;
    SpellID?: string;
    UiModelSceneID?: string;
}

interface JournalEncounterXDifficultyDatabase{
    ID?: string;
    JournalEncounterID?: string;
    DifficultyID?: string;
}

interface JournalEncounterXMapLocDatabase{
    ID?: string;
    'Map[0]'?: string;
    'Map[1]'?: string;
    Flags?: string;
    JournalEncounterID?: string;
    WorldMapAreaID?: string;
    DungeonMapID?: string;
    MapDisplayConditionID?: string;
    UiMapID?: string;
}

interface JournalInstanceDatabase{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    ButtonFileDataID?: string;
    BackgroundFileDataID?: string;
    LoreFileDataID?: string;
    Field_4_2_0_14333_006?: string;
    Name_lang?: string;
    Description_lang?: string;
    ButtonSmallFileDataID?: string;
    OrderIndex?: string;
    Flags?: string;
}

interface JournalItemXDifficultyDatabase{
    ID?: string;
    JournalEncounterItemID?: string;
    DifficultyID?: string;
}

interface JournalSectionXDifficultyDatabase{
    ID?: string;
    JournalEncounterSectionID?: string;
    DifficultyID?: string;
}

interface JournalTierDatabase{
    ID?: string;
    Expansion?: string;
    Name_lang?: string;
    PlayerConditionID?: string;
}

interface JournalTierXInstanceDatabase{
    ID?: string;
    JournalTierID?: string;
    JournalInstanceID?: string;
}

interface KeychainDatabase{
    ID?: string;
    'Key[0]'?: string;
    'Key[1]'?: string;
    'Key[2]'?: string;
    'Key[3]'?: string;
    'Key[4]'?: string;
    'Key[5]'?: string;
    'Key[6]'?: string;
    'Key[7]'?: string;
    'Key[8]'?: string;
    'Key[9]'?: string;
    'Key[10]'?: string;
    'Key[11]'?: string;
    'Key[12]'?: string;
    'Key[13]'?: string;
    'Key[14]'?: string;
    'Key[15]'?: string;
    'Key[16]'?: string;
    'Key[17]'?: string;
    'Key[18]'?: string;
    'Key[19]'?: string;
    'Key[20]'?: string;
    'Key[21]'?: string;
    'Key[22]'?: string;
    'Key[23]'?: string;
    'Key[24]'?: string;
    'Key[25]'?: string;
    'Key[26]'?: string;
    'Key[27]'?: string;
    'Key[28]'?: string;
    'Key[29]'?: string;
    'Key[30]'?: string;
    'Key[31]'?: string;
}

interface KeystoneAffixDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    FiledataID?: string;
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
    TypeID?: string;
    Faction?: string;
    TextureFilename?: string;
    ExpansionLevel?: string;
    Target_level?: string;
    Target_level_min?: string;
    Target_level_max?: string;
    MapID?: string;
    Difficulty?: string;
    Flags?: string;
    Order_index?: string;
    Group_ID?: string;
    Description_lang?: string;
    DifficultyID?: string;
    Random_ID?: string;
    Count_tank?: string;
    Count_healer?: string;
    Count_damage?: string;
    ScenarioID?: string;
    Subtype?: string;
    Bonus_reputation_amount?: string;
    Min_count_tank?: string;
    Min_count_healer?: string;
    Min_count_damage?: string;
    MentorCharLevel?: string;
    MentorItemLevel?: string;
    MinGear?: string;
    FinalEncounterID?: string;
    Required_player_condition_ID?: string;
    IconTextureFileID?: string;
    RewardsBgTextureFileID?: string;
    PopupBgTextureFileID?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    ContentTuningID?: string;
}

interface LFGRoleRequirementDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    LfgDungeonsID?: string;
    RoleType?: string;
    PlayerConditionID?: string;
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
    'GameCoords[0]'?: string;
    'GameCoords[1]'?: string;
    'GameCoords[2]'?: string;
    GameFalloffStart?: string;
    GameFalloffEnd?: string;
    'LightParamsID[0]'?: string;
    'LightParamsID[1]'?: string;
    'LightParamsID[2]'?: string;
    'LightParamsID[3]'?: string;
    'LightParamsID[4]'?: string;
    'LightParamsID[5]'?: string;
    'LightParamsID[6]'?: string;
    'LightParamsID[7]'?: string;
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
    FogDensity?: string;
    FogHeight?: string;
    FogHeightScaler?: string;
    FogHeightDensity?: string;
    SunFogAngle?: string;
    CloudDensity?: string;
    ColorGradingFileDataID?: string;
    HorizonAmbientColor?: string;
    GroundAmbientColor?: string;
    EndFogColor?: string;
    EndFogColorDistance?: string;
    SunFogColor?: string;
    SunFogStrength?: string;
    FogHeightColor?: string;
    'FogHeightCoefficients[0]'?: string;
    'FogHeightCoefficients[1]'?: string;
    'FogHeightCoefficients[2]'?: string;
    'FogHeightCoefficients[3]'?: string;
    Field_9_0_1_33978_026?: string;
    DarkerColorGradingFileDataID?: string;
    'MainFogCoefficients[0]'?: string;
    'MainFogCoefficients[1]'?: string;
    'MainFogCoefficients[2]'?: string;
    'MainFogCoefficients[3]'?: string;
    Field_9_1_0_38312_027?: string;
    Field_9_1_0_38312_028?: string;
    Field_9_1_0_38312_037?: string;
    Field_9_1_0_38312_041?: string;
    'Field_9_1_0_38312_044[0]'?: string;
    'Field_9_1_0_38312_044[1]'?: string;
    'Field_9_1_0_38312_044[2]'?: string;
    'Field_9_1_0_38312_044[3]'?: string;
}

interface LightFloatBandDatabase{
    ID?: string;
    Num?: string;
    'Time[0]'?: string;
    'Time[1]'?: string;
    'Time[2]'?: string;
    'Time[3]'?: string;
    'Time[4]'?: string;
    'Time[5]'?: string;
    'Time[6]'?: string;
    'Time[7]'?: string;
    'Time[8]'?: string;
    'Time[9]'?: string;
    'Time[10]'?: string;
    'Time[11]'?: string;
    'Time[12]'?: string;
    'Time[13]'?: string;
    'Time[14]'?: string;
    'Time[15]'?: string;
    'Data[0]'?: string;
    'Data[1]'?: string;
    'Data[2]'?: string;
    'Data[3]'?: string;
    'Data[4]'?: string;
    'Data[5]'?: string;
    'Data[6]'?: string;
    'Data[7]'?: string;
    'Data[8]'?: string;
    'Data[9]'?: string;
    'Data[10]'?: string;
    'Data[11]'?: string;
    'Data[12]'?: string;
    'Data[13]'?: string;
    'Data[14]'?: string;
    'Data[15]'?: string;
}

interface LightIntBandDatabase{
    ID?: string;
    Num?: string;
    'Time[0]'?: string;
    'Time[1]'?: string;
    'Time[2]'?: string;
    'Time[3]'?: string;
    'Time[4]'?: string;
    'Time[5]'?: string;
    'Time[6]'?: string;
    'Time[7]'?: string;
    'Time[8]'?: string;
    'Time[9]'?: string;
    'Time[10]'?: string;
    'Time[11]'?: string;
    'Time[12]'?: string;
    'Time[13]'?: string;
    'Time[14]'?: string;
    'Time[15]'?: string;
    'Data[0]'?: string;
    'Data[1]'?: string;
    'Data[2]'?: string;
    'Data[3]'?: string;
    'Data[4]'?: string;
    'Data[5]'?: string;
    'Data[6]'?: string;
    'Data[7]'?: string;
    'Data[8]'?: string;
    'Data[9]'?: string;
    'Data[10]'?: string;
    'Data[11]'?: string;
    'Data[12]'?: string;
    'Data[13]'?: string;
    'Data[14]'?: string;
    'Data[15]'?: string;
}

interface LightParamsDatabase{
    ID?: string;
    HighlightSky?: string;
    LightSkyboxID?: string;
    Glow?: string;
    WaterShallowAlpha?: string;
    WaterDeepAlpha?: string;
    OceanShallowAlpha?: string;
    OceanDeepAlpha?: string;
    Flags?: string;
    CloudTypeID?: string;
    'OverrideCelestialSphere[0]'?: string;
    'OverrideCelestialSphere[1]'?: string;
    'OverrideCelestialSphere[2]'?: string;
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
    'BoltDirection[0]'?: string;
    'BoltDirection[1]'?: string;
    BoltDirectionVariance?: string;
    MinDivergence?: string;
    MaxDivergence?: string;
    MinConvergenceSpeed?: string;
    MaxConvergenceSpeed?: string;
    SegmentSize?: string;
    MinBoltWidth?: string;
    MaxBoltWidth?: string;
    MinBoltHeight?: string;
    MaxBoltHeight?: string;
    MaxSegmentCount?: string;
    MinStrikeTime?: string;
    MaxStrikeTime?: string;
    MinEndTime?: string;
    MaxEndTime?: string;
    MinFadeTime?: string;
    MaxFadeTime?: string;
    FlashColor?: string;
    BoltColor?: string;
    Brightness?: string;
    MinCloudDepth?: string;
    MaxCloudDepth?: string;
    MinFadeInStrength?: string;
    MaxFadeInStrength?: string;
    MinStrikeStrength?: string;
    MaxStrikeStrength?: string;
    GroundBrightnessScalar?: string;
    BoltBrightnessScalar?: string;
    CloudBrightnessScalar?: string;
    SoundKitID?: string;
    SoundEmitterDistance?: string;
    'SoundKitID[0]'?: string;
    'SoundKitID[1]'?: string;
    'SoundKitID[2]'?: string;
    Field_1_13_2_30073_020Min?: string;
    Field_1_13_2_30073_021Max?: string;
}

interface LiquidMaterialDatabase{
    ID?: string;
    LVF?: string;
    Flags?: string;
}

interface LiquidObjectDatabase{
    ID?: string;
    FlowDirection?: string;
    FlowSpeed?: string;
    LiquidTypeID?: string;
    Fishable?: string;
    Reflection?: string;
}

interface LiquidTypeDatabase{
    ID?: string;
    Name?: string;
    Flags?: string;
    SpellID?: string;
    SoundBank?: string;
    SoundID?: string;
    Field_3_0_1_8334_006?: string;
    MaxDarkenDepth?: string;
    FogDarkenIntensity?: string;
    AmbDarkenIntensity?: string;
    DirDarkenIntensity?: string;
    LightID?: string;
    ParticleScale?: string;
    ParticleMovement?: string;
    ParticleTexSlots?: string;
    MaterialID?: string;
    'Texture[0]'?: string;
    'Texture[1]'?: string;
    'Texture[2]'?: string;
    'Texture[3]'?: string;
    'Float[0]'?: string;
    'Float[1]'?: string;
    'Float[2]'?: string;
    'Float[3]'?: string;
    'Int[0]'?: string;
    'Int[1]'?: string;
    'Texture[4]'?: string;
    'Texture[5]'?: string;
    'Color[0]'?: string;
    'Color[1]'?: string;
    'Float[4]'?: string;
    'Float[5]'?: string;
    'Float[6]'?: string;
    'Float[7]'?: string;
    'Float[8]'?: string;
    'Float[9]'?: string;
    'Float[10]'?: string;
    'Float[11]'?: string;
    'Float[12]'?: string;
    'Float[13]'?: string;
    'Float[14]'?: string;
    'Float[15]'?: string;
    'Float[16]'?: string;
    'Float[17]'?: string;
    'Int[2]'?: string;
    'Int[3]'?: string;
    MinDetail?: string;
    LoDetail_ID?: string;
    HiDetail_ID?: string;
    'FrameCountTexture[0]'?: string;
    'FrameCountTexture[1]'?: string;
    'FrameCountTexture[2]'?: string;
    'FrameCountTexture[3]'?: string;
    'FrameCountTexture[4]'?: string;
    'FrameCountTexture[5]'?: string;
    MinimapStaticCol?: string;
    'Coefficient[0]'?: string;
    'Coefficient[1]'?: string;
    'Coefficient[2]'?: string;
    'Coefficient[3]'?: string;
}

interface LiquidTypeXTextureDatabase{
    ID?: string;
    FileDataID?: string;
    OrderIndex?: string;
    LiquidTypeID?: string;
    Type?: string;
}

interface LoadingScreenSkinDatabase{
    ID?: string;
    'UiTextureAtlasElementID[0]'?: string;
    'UiTextureAtlasElementID[1]'?: string;
    'UiTextureAtlasElementID[2]'?: string;
    'UiTextureAtlasElementID[3]'?: string;
    'UiTextureAtlasElementID[4]'?: string;
    'UiTextureAtlasElementID[5]'?: string;
    'UiTextureAtlasElementID[6]'?: string;
    'UiTextureAtlasElementID[7]'?: string;
    'UiTextureAtlasElementID[8]'?: string;
    'UiTextureAtlasElementID[9]'?: string;
    'FileDataID[0]'?: string;
    'FileDataID[1]'?: string;
    'FileDataID[2]'?: string;
    'FileDataID[3]'?: string;
    'FileDataID[4]'?: string;
    'FileDataID[5]'?: string;
    'FileDataID[6]'?: string;
    'FileDataID[7]'?: string;
    'FileDataID[8]'?: string;
    'FileDataID[9]'?: string;
}

interface LoadingScreenTaxiSplinesDatabase{
    ID?: string;
    PathID?: string;
    'Locx[0]'?: string;
    'Locx[1]'?: string;
    'Locx[2]'?: string;
    'Locx[3]'?: string;
    'Locx[4]'?: string;
    'Locx[5]'?: string;
    'Locx[6]'?: string;
    'Locx[7]'?: string;
    'Locy[0]'?: string;
    'Locy[1]'?: string;
    'Locy[2]'?: string;
    'Locy[3]'?: string;
    'Locy[4]'?: string;
    'Locy[5]'?: string;
    'Locy[6]'?: string;
    'Locy[7]'?: string;
    LegIndex?: string;
    LoadingScreenID?: string;
    'Locx[8]'?: string;
    'Locx[9]'?: string;
    'Locy[8]'?: string;
    'Locy[9]'?: string;
}

interface LoadingScreensDatabase{
    ID?: string;
    Name?: string;
    FileName?: string;
    HasWideScreen?: string;
    NarrowScreenFileDataID?: string;
    WideScreenFileDataID?: string;
    WideScreen169FileDataID?: string;
    LoadingScreenSkinID?: string;
    MainImageFileDataID?: string;
    LogoFileDataID?: string;
    Field_8_1_5_28938_006?: string;
    Field_8_1_5_28938_007?: string;
    Field_8_1_5_28938_008?: string;
    Field_8_1_5_28938_009?: string;
}

interface LocaleDatabase{
    ID?: string;
    FontFileDataID?: string;
    WowLocale?: string;
    Secondary?: string;
    Field_5_0_2_15827_001?: string;
    ClientDisplayExpansion?: string;
    Field_6_0_1_18179_001?: string;
    Cfg_regionsID?: string;
}

interface LocationDatabase{
    ID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    'Rot[0]'?: string;
    'Rot[1]'?: string;
    'Rot[2]'?: string;
}

interface LockDatabase{
    ID?: string;
    'Type[0]'?: string;
    'Type[1]'?: string;
    'Type[2]'?: string;
    'Type[3]'?: string;
    'Index[0]'?: string;
    'Index[1]'?: string;
    'Index[2]'?: string;
    'Index[3]'?: string;
    'Skill[0]'?: string;
    'Skill[1]'?: string;
    'Skill[2]'?: string;
    'Skill[3]'?: string;
    'Action[0]'?: string;
    'Action[1]'?: string;
    'Action[2]'?: string;
    'Action[3]'?: string;
    'Type[4]'?: string;
    'Type[5]'?: string;
    'Type[6]'?: string;
    'Type[7]'?: string;
    'Index[4]'?: string;
    'Index[5]'?: string;
    'Index[6]'?: string;
    'Index[7]'?: string;
    'Skill[4]'?: string;
    'Skill[5]'?: string;
    'Skill[6]'?: string;
    'Skill[7]'?: string;
    'Action[4]'?: string;
    'Action[5]'?: string;
    'Action[6]'?: string;
    'Action[7]'?: string;
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
    ReactionEnableDistance?: string;
    ReactionGiveupDistance?: string;
    TorsoSpeedFactor?: string;
    HeadSpeedFactor?: string;
    ReactionEnableFOVDeg?: string;
    ReactionGiveupTimeMS?: string;
    ReactionIgnoreTimeMinMS?: string;
    ReactionIgnoreTimeMaxMS?: string;
    MaxTorsoYaw?: string;
    MaxTorsoYawWhileMoving?: string;
    MaxHeadYaw?: string;
    MaxHeadPitch?: string;
    Flags?: string;
    ReactionWarmUpTimeMSMin?: string;
    ReactionWarmUpTimeMSMax?: string;
    ReactionGiveupFOVDeg?: string;
    MaxTorsoPitchUp?: string;
    MaxTorsoPitchDown?: string;
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

interface MCRSlotXMCRCategoryDatabase{
    ID?: string;
    ModifiedCraftingCategoryID?: string;
    ModifiedCraftingReagentSlotID?: string;
}

interface MailTemplateDatabase{
    ID?: string;
    Body_lang?: string;
    Subject_lang?: string;
}

interface ManagedWorldStateDatabase{
    ID?: string;
    CurrentStageWorldStateID?: string;
    ProgressWorldStateID?: string;
    UpTimeSecs?: string;
    DownTimeSecs?: string;
    AccumulationStateTargetValue?: string;
    DepletionStateTargetValue?: string;
    AccumulationAmountPerMinute?: string;
    DepletionAmountPerMinute?: string;
    'OccurrencesWorldStateID[0]'?: string;
    'OccurrencesWorldStateID[1]'?: string;
    'OccurrencesWorldStateID[2]'?: string;
    'OccurrencesWorldStateID[3]'?: string;
    OccurrencesWorldStateID?: string;
    Field_8_1_5_29418_009?: string;
}

interface ManagedWorldStateBuffDatabase{
    ID?: string;
    ManagedWorldStateID?: string;
    OccurrenceValue?: string;
    BuffSpellID?: string;
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

interface MapDatabase{
    ID?: string;
    Directory?: string;
    PVP?: string;
    IsInMap?: string;
    MapName_lang?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Unk0?: string;
    Unk1?: string;
    Unk2?: string;
    MapDescription0_lang?: string;
    MapDescription1_lang?: string;
    Field_0_8_0_3734_004?: string;
    Field_0_8_0_3734_005?: string;
    Field_0_7_0_3694_006?: string;
    Field_0_7_0_3694_007?: string;
    Field_0_7_0_3694_008?: string;
    AreaTableID?: string;
    Unk3?: string;
    Unk4?: string;
    Field_1_5_0_4442_006?: string;
    LoadingScreenID?: string;
    Field_1_5_0_4442_014?: string;
    Field_1_7_0_4671_015?: string;
    InstanceType?: string;
    MapType?: string;
    MaxPlayers?: string;
    ParentMapID?: string;
    RaidOffset?: string;
    Continentname?: string;
    PvpShortDescription_lang?: string;
    PvpLongDescription_lang?: string;
    ExpansionID?: string;
    TimeOfDayOverride?: string;
    CosmeticParentMapID?: string;
    TimeOffset?: string;
    MinimapIconScale?: string;
    CorpseMapID?: string;
    WindSettingsID?: string;
    ZmpFileDataID?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    Field_2_0_0_5610_018_lang?: string;
    Field_2_0_0_5610_019_lang?: string;
    Field_2_0_0_5610_020_lang?: string;
    'Corpse[0]'?: string;
    'Corpse[1]'?: string;
    Field_2_0_3_6299_023?: string;
    Field_2_0_3_6299_024?: string;
    Field_2_0_3_6299_025?: string;
    Field_3_0_2_9056_013?: string;
    Field_3_0_2_9056_021?: string;
    Flags?: string;
    CorpseX?: string;
    CorpseY?: string;
    InternalName?: string;
    WdtFileDataID?: string;
}

interface MapCelestialBodyDatabase{
    ID?: string;
    MapID?: string;
    CelestialBodyID?: string;
    PlayerConditionID?: string;
}

interface MapChallengeModeDatabase{
    ID?: string;
    MapID?: string;
    Field_5_0_1_15464_002?: string;
    Field_5_0_1_15464_003?: string;
    Field_5_0_1_15464_004?: string;
    'CriteriaCount[0]'?: string;
    'CriteriaCount[1]'?: string;
    'CriteriaCount[2]'?: string;
    'CriteriaCount[3]'?: string;
    'CriteriaCount[4]'?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Name_lang?: string;
    Flags?: string;
    ExpansionLevel?: string;
}

interface MapDifficultyDatabase{
    ID?: string;
    Message_lang?: string;
    ItemContextPickerID?: string;
    ContentTuningID?: string;
    DifficultyID?: string;
    LockID?: string;
    ResetInterval?: string;
    MaxPlayers?: string;
    ItemContext?: string;
    Flags?: string;
    MapID?: string;
    Difficulty?: string;
    RaidDuration?: string;
    Difficultystring?: string;
}

interface MapDifficultyXConditionDatabase{
    ID?: string;
    FailureDescription_lang?: string;
    MapDifficultyID?: string;
    PlayerConditionID?: string;
    OrderIndex?: string;
}

interface MapLoadingScreenDatabase{
    ID?: string;
    'Min[0]'?: string;
    'Min[1]'?: string;
    'Max[0]'?: string;
    'Max[1]'?: string;
    MapID?: string;
    LoadingScreenID?: string;
    OrderIndex?: string;
}

interface MarketingPromotionsXLocaleDatabase{
    ID?: string;
    PromotionID?: string;
    LocaleID?: string;
    AdTexture?: string;
    LogoTexture?: string;
    AcceptButtonTexture?: string;
    DeclineButtonTexture?: string;
    AcceptURL?: string;
}

interface MaterialDatabase{
    MaterialID?: string;
    Flags?: string;
    FoleySoundID?: string;
    ID?: string;
    SheatheSoundID?: string;
    UnsheatheSoundID?: string;
}

interface MawPowerDatabase{
    ID?: string;
    SpellID?: string;
    MawPowerRarityID?: string;
}

interface MawPowerRarityDatabase{
    ID?: string;
    Color?: string;
    Border?: string;
}

interface MinorTalentDatabase{
    ID?: string;
    ChrSpecializationID?: string;
    SpellID?: string;
    OrderIndex?: string;
}

interface MissileTargetingDatabase{
    ID?: string;
    TurnLingering?: string;
    PitchLingering?: string;
    MouseLingering?: string;
    EndOpacity?: string;
    ArcSpeed?: string;
    ArcRepeat?: string;
    ArcWidth?: string;
    'ImpactRadius[0]'?: string;
    'ImpactRadius[1]'?: string;
    ImpactTexRadius?: string;
    ArcTextureFileID?: string;
    ImpactTextureFileID?: string;
    'ImpactModelFileID[0]'?: string;
    'ImpactModelFileID[1]'?: string;
}

interface ModelAnimCloakDampeningDatabase{
    ID?: string;
    FileDataID?: string;
    AnimationDataID?: string;
    CloakDampeningID?: string;
}

interface ModelFileDataDatabase{
    LodCount?: string;
    FileDataID?: string;
    ModelResourcesID?: string;
    Flags?: string;
}

interface ModelManifestDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    'Padding_6_0_1_18179_005[0]'?: string;
    'Padding_6_0_1_18179_005[1]'?: string;
    'Padding_6_0_1_18179_005[2]'?: string;
    Field_6_0_1_18179_006?: string;
    Field_6_0_1_18179_007?: string;
}

interface ModelNameToManifestDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
}

interface ModelRibbonQualityDatabase{
    ID?: string;
    FileDataID?: string;
    RibbonQualityID?: string;
}

interface ModifiedCraftingCategoryDatabase{
    ID?: string;
    DisplayName_lang?: string;
    Field_9_0_1_33978_001?: string;
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

interface ModifiedReagentItemDatabase{
    ItemID?: string;
    ModifiedCraftingReagentItemID?: string;
}

interface ModifierTreeDatabase{
    ID?: string;
    Type?: string;
    Asset?: string;
    Operator?: string;
    Parent?: string;
    SecondaryAsset?: string;
    Amount?: string;
    TertiaryAsset?: string;
}

interface MountDatabase{
    ID?: string;
    MountTypeID?: string;
    CreatureDisplayInfoID?: string;
    Flags?: string;
    Name_lang?: string;
    Description_lang?: string;
    SourceText_lang?: string;
    Field_6_0_1_18179_007?: string;
    SourceSpellID?: string;
    MountFlyRideHeight?: string;
    SourceTypeEnum?: string;
    PlayerConditionID?: string;
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
    'Capability[0]'?: string;
    'Capability[1]'?: string;
    'Capability[2]'?: string;
    'Capability[3]'?: string;
    'Capability[4]'?: string;
    'Capability[5]'?: string;
    'Capability[6]'?: string;
    'Capability[7]'?: string;
    'Capability[8]'?: string;
    'Capability[9]'?: string;
    'Capability[10]'?: string;
    'Capability[11]'?: string;
    'Capability[12]'?: string;
    'Capability[13]'?: string;
    'Capability[14]'?: string;
    'Capability[15]'?: string;
    'Capability[16]'?: string;
    'Capability[17]'?: string;
    'Capability[18]'?: string;
    'Capability[19]'?: string;
    'Capability[20]'?: string;
    'Capability[21]'?: string;
    'Capability[22]'?: string;
    'Capability[23]'?: string;
}

interface MountTypeXCapabilityDatabase{
    ID?: string;
    MountTypeID?: string;
    MountCapabilityID?: string;
    OrderIndex?: string;
}

interface MountXDisplayDatabase{
    ID?: string;
    MountID?: string;
    CreatureDisplayInfoID?: string;
    PlayerConditionID?: string;
}

interface MountXSpellVisualKitPickerDatabase{
    ID?: string;
    SpellVisualKitPickerID?: string;
    Index?: string;
    Purpose?: string;
    Priority?: string;
    MountID?: string;
}

interface MovieDatabase{
    ID?: string;
    Filename?: string;
    Volume?: string;
    KeyID?: string;
    AudioFileDataID?: string;
    SubtitleFileDataID?: string;
}

interface MovieFileDataDatabase{
    FileDataID?: string;
    Resolution?: string;
    ID?: string;
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
    'Offset[0]'?: string;
    'Offset[1]'?: string;
    'Offset[2]'?: string;
    StateIndex?: string;
    GameObjectID?: string;
    GameEventID?: string;
    Facing?: string;
    TransitionInID?: string;
    TransitionOutID?: string;
    CollisionHull?: string;
    Flags?: string;
    MultiPropertiesID?: string;
    SpellVisualKitID?: string;
}

interface MultiTransitionPropertiesDatabase{
    ID?: string;
    TransitionType?: string;
    DurationMS?: string;
    Flags?: string;
    StartSpellVisualKitID?: string;
    EndSpellVisualKitID?: string;
}

interface MythicPlusSeasonDatabase{
    ID?: string;
    Season?: string;
    ExpansionLevel?: string;
    SomeItemLevel?: string;
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

interface NPCModelItemSlotDisplayInfoDatabase{
    ID?: string;
    NpcModelID?: string;
    ItemDisplayInfoID?: string;
    ItemSlot?: string;
}

interface NPCSoundsDatabase{
    ID?: string;
    'SoundID[0]'?: string;
    'SoundID[1]'?: string;
    'SoundID[2]'?: string;
    'SoundID[3]'?: string;
}

interface NameGenDatabase{
    ID?: string;
    Name?: string;
    RaceID?: string;
    Sex?: string;
}

interface NamesProfanityDatabase{
    ID?: string;
    Name?: string;
    Language?: string;
}

interface NamesReservedDatabase{
    ID?: string;
    Name?: string;
    Language?: string;
}

interface NamesReservedLocaleDatabase{
    ID?: string;
    Name?: string;
    LocaleMask?: string;
}

interface NumTalentsAtLevelDatabase{
    Level?: string;
    NumberOfTalents?: string;
    ID?: string;
    NumTalents?: string;
    NumTalentsDeathKnight?: string;
    NumTalentsDemonHunter?: string;
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
    'Offset[0]'?: string;
    'Offset[1]'?: string;
    'Offset[2]'?: string;
    ObjectEffectModifierID?: string;
}

interface ObjectEffectGroupDatabase{
    ID?: string;
    Name?: string;
}

interface ObjectEffectModifierDatabase{
    ID?: string;
    InputType?: string;
    MapType?: string;
    OutputType?: string;
    'Param[0]'?: string;
    'Param[1]'?: string;
    'Param[2]'?: string;
    'Param[3]'?: string;
}

interface ObjectEffectPackageDatabase{
    ID?: string;
    Name?: string;
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

interface OccluderLocationDatabase{
    ID?: string;
    MapID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    'Rot[0]'?: string;
    'Rot[1]'?: string;
    'Rot[2]'?: string;
}

interface OccluderNodeDatabase{
    ID?: string;
    LocationID?: string;
    OccluderID?: string;
    Sequence?: string;
}

interface OutlineEffectDatabase{
    ID?: string;
    Range?: string;
    UnitConditionID?: string;
    PassiveHighlightColorID?: string;
    HighlightColorID?: string;
    Priority?: string;
    Flags?: string;
    'UnitConditionID[0]'?: string;
    'UnitConditionID[1]'?: string;
}

interface OverrideSpellDataDatabase{
    ID?: string;
    'Spells[0]'?: string;
    'Spells[1]'?: string;
    'Spells[2]'?: string;
    'Spells[3]'?: string;
    'Spells[4]'?: string;
    'Spells[5]'?: string;
    'Spells[6]'?: string;
    'Spells[7]'?: string;
    'Spells[8]'?: string;
    'Spells[9]'?: string;
    Flags?: string;
    PlayerActionbar?: string;
    PlayerActionbarFileDataID?: string;
}

interface PVPBracketTypesDatabase{
    ID?: string;
    BracketID?: string;
    'WeeklyQuestID[0]'?: string;
    'WeeklyQuestID[1]'?: string;
    'WeeklyQuestID[2]'?: string;
    'WeeklyQuestID[3]'?: string;
}

interface PVPDifficultyDatabase{
    ID?: string;
    MapID?: string;
    RangeIndex?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Difficulty?: string;
}

interface PVPItemDatabase{
    ID?: string;
    ItemID?: string;
    ItemLevelDelta?: string;
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

interface PVPScoreboardLayoutDatabase{
    ID?: string;
    PVPStatID?: string;
    PVPScoreboardColumnHeaderID?: string;
    OrderIndex?: string;
}

interface PVPStatDatabase{
    Description_lang?: string;
    ID?: string;
    MapID?: string;
}

interface PackageDatabase{
    ID?: string;
    Icon?: string;
    Cost?: string;
    Name_lang?: string;
}

interface PageTextMaterialDatabase{
    ID?: string;
    Name?: string;
}

interface PaperDollItemFrameDatabase{
    ItemButtonName?: string;
    SlotIcon?: string;
    SlotNumber?: string;
    ID?: string;
    SlotIconFileID?: string;
}

interface ParagonReputationDatabase{
    ID?: string;
    LevelThreshold?: string;
    QuestID?: string;
    FactionID?: string;
}

interface ParticleColorDatabase{
    ID?: string;
    'Start[0]'?: string;
    'Start[1]'?: string;
    'Start[2]'?: string;
    'MID[0]'?: string;
    'MID[1]'?: string;
    'MID[2]'?: string;
    'End[0]'?: string;
    'End[1]'?: string;
    'End[2]'?: string;
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
    Type?: string;
    SplineType?: string;
    Red?: string;
    Blue?: string;
    Green?: string;
    Alpha?: string;
    Flags?: string;
}

interface PathEdgeDatabase{
    ID?: string;
    'PathNodeID[0]'?: string;
    'PathNodeID[1]'?: string;
    PathID?: string;
}

interface PathNodeDatabase{
    ID?: string;
    PathID?: string;
    Sequence?: string;
    LocationID?: string;
}

interface PathNodePropertyDatabase{
    ID?: string;
    PathID?: string;
    Sequence?: string;
    PropertyIndex?: string;
    Value?: string;
    Field_8_1_0_27934_003?: string;
}

interface PathPropertyDatabase{
    ID?: string;
    PathID?: string;
    PropertyIndex?: string;
    Value?: string;
}

interface PetLoyaltyDatabase{
    ID?: string;
    Name_lang?: string;
}

interface PetPersonalityDatabase{
    ID?: string;
    'HappinessThreshold[0]'?: string;
    'HappinessThreshold[1]'?: string;
    'HappinessThreshold[2]'?: string;
    'HappinessDamage[0]'?: string;
    'HappinessDamage[1]'?: string;
    'HappinessDamage[2]'?: string;
    'DamageModifier[0]'?: string;
    'DamageModifier[1]'?: string;
    'DamageModifier[2]'?: string;
    'Field_1_13_0_28211_003[0]'?: string;
    'Field_1_13_0_28211_003[1]'?: string;
    'Field_1_13_0_28211_003[2]'?: string;
    'Field_1_13_0_28211_003[3]'?: string;
    'Field_1_13_0_28211_003[4]'?: string;
    'Field_1_13_0_28211_003[5]'?: string;
    'Field_1_13_0_28211_003[6]'?: string;
    'Field_1_13_0_28211_003[7]'?: string;
    Name_lang?: string;
}

interface PetitionTypeDatabase{
    ID?: string;
    Name?: string;
    Type?: string;
}

interface PhaseDatabase{
    ID?: string;
    MapID?: string;
    PhaseShift?: string;
    'ChildMap[0]'?: string;
    'ChildMap[1]'?: string;
    'ChildMap[2]'?: string;
    'ChildMap[3]'?: string;
    'ChildMap[4]'?: string;
    'ParentMapID[0]'?: string;
    'ParentMapID[1]'?: string;
    Name?: string;
    Flags?: string;
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

interface PhaseXPhaseGroupDatabase{
    ID?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
}

interface PlayerConditionDatabase{
    RaceMask?: string;
    Failure_description_lang?: string;
    ID?: string;
    MinLevel?: string;
    MaxLevel?: string;
    ClassMask?: string;
    SkillLogic?: string;
    LanguageID?: string;
    MinLanguage?: string;
    MaxLanguage?: string;
    MaxFactionID?: string;
    MaxReputation?: string;
    ReputationLogic?: string;
    CurrentPvpFaction?: string;
    PvpMedal?: string;
    PrevQuestLogic?: string;
    CurrQuestLogic?: string;
    CurrentCompletedQuestLogic?: string;
    SpellLogic?: string;
    ItemLogic?: string;
    ItemFlags?: string;
    AuraSpellLogic?: string;
    WorldStateExpressionID?: string;
    WeatherID?: string;
    PartyStatus?: string;
    LifetimeMaxPVPRank?: string;
    AchievementLogic?: string;
    Gender?: string;
    NativeGender?: string;
    AreaLogic?: string;
    LfgLogic?: string;
    CurrencyLogic?: string;
    QuestKillID?: string;
    QuestKillLogic?: string;
    MinExpansionLevel?: string;
    MaxExpansionLevel?: string;
    MinAvgItemLevel?: string;
    MaxAvgItemLevel?: string;
    MinAvgEquippedItemLevel?: string;
    MaxAvgEquippedItemLevel?: string;
    PhaseUseFlags?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    Flags?: string;
    ChrSpecializationIndex?: string;
    ChrSpecializationRole?: string;
    ModifierTreeID?: string;
    PowerType?: string;
    PowerTypeComp?: string;
    PowerTypeValue?: string;
    WeaponSubclassMask?: string;
    MaxGuildLevel?: string;
    MinGuildLevel?: string;
    MaxExpansionTier?: string;
    MinExpansionTier?: string;
    MinPVPRank?: string;
    MaxPVPRank?: string;
    'SkillID[0]'?: string;
    'SkillID[1]'?: string;
    'SkillID[2]'?: string;
    'SkillID[3]'?: string;
    'MinSkill[0]'?: string;
    'MinSkill[1]'?: string;
    'MinSkill[2]'?: string;
    'MinSkill[3]'?: string;
    'MaxSkill[0]'?: string;
    'MaxSkill[1]'?: string;
    'MaxSkill[2]'?: string;
    'MaxSkill[3]'?: string;
    'MinFactionID[0]'?: string;
    'MinFactionID[1]'?: string;
    'MinFactionID[2]'?: string;
    'MinReputation[0]'?: string;
    'MinReputation[1]'?: string;
    'MinReputation[2]'?: string;
    'PrevQuestID[0]'?: string;
    'PrevQuestID[1]'?: string;
    'PrevQuestID[2]'?: string;
    'PrevQuestID[3]'?: string;
    'CurrQuestID[0]'?: string;
    'CurrQuestID[1]'?: string;
    'CurrQuestID[2]'?: string;
    'CurrQuestID[3]'?: string;
    'CurrentCompletedQuestID[0]'?: string;
    'CurrentCompletedQuestID[1]'?: string;
    'CurrentCompletedQuestID[2]'?: string;
    'CurrentCompletedQuestID[3]'?: string;
    'SpellID[0]'?: string;
    'SpellID[1]'?: string;
    'SpellID[2]'?: string;
    'SpellID[3]'?: string;
    'ItemID[0]'?: string;
    'ItemID[1]'?: string;
    'ItemID[2]'?: string;
    'ItemID[3]'?: string;
    'ItemCount[0]'?: string;
    'ItemCount[1]'?: string;
    'ItemCount[2]'?: string;
    'ItemCount[3]'?: string;
    'Explored[0]'?: string;
    'Explored[1]'?: string;
    'Time[0]'?: string;
    'Time[1]'?: string;
    'AuraSpellID[0]'?: string;
    'AuraSpellID[1]'?: string;
    'AuraSpellID[2]'?: string;
    'AuraSpellID[3]'?: string;
    'AuraStacks[0]'?: string;
    'AuraStacks[1]'?: string;
    'AuraStacks[2]'?: string;
    'AuraStacks[3]'?: string;
    'Achievement[0]'?: string;
    'Achievement[1]'?: string;
    'Achievement[2]'?: string;
    'Achievement[3]'?: string;
    'AreaID[0]'?: string;
    'AreaID[1]'?: string;
    'AreaID[2]'?: string;
    'AreaID[3]'?: string;
    'LfgStatus[0]'?: string;
    'LfgStatus[1]'?: string;
    'LfgStatus[2]'?: string;
    'LfgStatus[3]'?: string;
    'LfgCompare[0]'?: string;
    'LfgCompare[1]'?: string;
    'LfgCompare[2]'?: string;
    'LfgCompare[3]'?: string;
    'LfgValue[0]'?: string;
    'LfgValue[1]'?: string;
    'LfgValue[2]'?: string;
    'LfgValue[3]'?: string;
    'CurrencyID[0]'?: string;
    'CurrencyID[1]'?: string;
    'CurrencyID[2]'?: string;
    'CurrencyID[3]'?: string;
    'CurrencyCount[0]'?: string;
    'CurrencyCount[1]'?: string;
    'CurrencyCount[2]'?: string;
    'CurrencyCount[3]'?: string;
    'QuestKillMonster[0]'?: string;
    'QuestKillMonster[1]'?: string;
    'QuestKillMonster[2]'?: string;
    'QuestKillMonster[3]'?: string;
    'QuestKillMonster[4]'?: string;
    'QuestKillMonster[5]'?: string;
    'MovementFlags[0]'?: string;
    'MovementFlags[1]'?: string;
    Field_7_3_2_25549_029?: string;
    ContentTuningID?: string;
    CovenantID?: string;
}

interface PositionerDatabase{
    ID?: string;
    StartLife?: string;
    FirstStateID?: string;
    Flags?: string;
    StartLifePercent?: string;
}

interface PositionerStateDatabase{
    ID?: string;
    EndLife?: string;
    EndLifePercent?: string;
    NextStateID?: string;
    TransformMatrixID?: string;
    PosEntryID?: string;
    RotEntryID?: string;
    ScaleEntryID?: string;
    Flags?: string;
}

interface PositionerStateEntryDatabase{
    ID?: string;
    ParamA?: string;
    ParamB?: string;
    SrcValType?: string;
    SrcVal?: string;
    DstValType?: string;
    DstVal?: string;
    EntryType?: string;
    Style?: string;
    SrcType?: string;
    DstType?: string;
    CurveID?: string;
}

interface PowerDisplayDatabase{
    ID?: string;
    ActualType?: string;
    GlobalStringBaseTag?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    'Padding_4_0_0_11792_006[0]'?: string;
}

interface PowerTypeDatabase{
    ID?: string;
    NameGlobalStringTag?: string;
    CostGlobalStringTag?: string;
    MaxBasePower?: string;
    RegenPeace?: string;
    RegenCombat?: string;
    DisplayModifier?: string;
    RegenInterruptTimeMS?: string;
    Flags?: string;
    PowerTypeEnum?: string;
    MinPower?: string;
    CenterPower?: string;
    DefaultPower?: string;
}

interface PrestigeLevelInfoDatabase{
    ID?: string;
    BadgeTextureFileDataID?: string;
    Name_lang?: string;
    PrestigeLevel?: string;
    Flags?: string;
    AwardedAchievementID?: string;
    HonorLevel?: string;
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

interface PvpRewardDatabase{
    ID?: string;
    HonorLevel?: string;
    PrestigeLevel?: string;
    RewardPackID?: string;
}

interface PvpScalingEffectDatabase{
    ID?: string;
    Value?: string;
    PvpScalingEffectTypeID?: string;
    SpecializationID?: string;
}

interface PvpScalingEffectTypeDatabase{
    ID?: string;
    Name?: string;
}

interface PvpSeasonDatabase{
    ID?: string;
    Season?: string;
}

interface PvpSeasonRewardLevelsDatabase{
    ID?: string;
    Tier?: string;
    EndOfMatchILvl?: string;
    WeeklyCacheILvl?: string;
    PvpSeasonID?: string;
}

interface PvpTalentDatabase{
    ID?: string;
    SpellID?: string;
    OverridesSpellID?: string;
    Description_lang?: string;
    ActionBarSpellID?: string;
    Field_1_13_0_28211_005?: string;
    Field_1_13_0_28211_006?: string;
    Flags?: string;
    ClassID?: string;
    SpecID?: string;
    Field_1_13_0_28211_010?: string;
    PvpTalentCategoryID?: string;
    LevelRequired?: string;
}

interface PvpTalentCategoryDatabase{
    ID?: string;
    TalentSlotMask?: string;
}

interface PvpTalentSlotUnlockDatabase{
    ID?: string;
    Slot?: string;
    LevelRequired?: string;
    DeathKnightLevelRequired?: string;
    DemonHunterLevelRequired?: string;
}

interface PvpTalentUnlockDatabase{
    ID?: string;
    Field_1_13_0_28211_001?: string;
    Field_1_13_0_28211_002?: string;
    Field_1_13_0_28211_003?: string;
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

interface QuestFactionRewardDatabase{
    ID?: string;
    'Difficulty[0]'?: string;
    'Difficulty[1]'?: string;
    'Difficulty[2]'?: string;
    'Difficulty[3]'?: string;
    'Difficulty[4]'?: string;
    'Difficulty[5]'?: string;
    'Difficulty[6]'?: string;
    'Difficulty[7]'?: string;
    'Difficulty[8]'?: string;
    'Difficulty[9]'?: string;
}

interface QuestFeedbackEffectDatabase{
    ID?: string;
    FileDataID?: string;
    MinimapAtlasMemberID?: string;
    AttachPoint?: string;
    PassiveHighlightColorType?: string;
    Priority?: string;
    Flags?: string;
    Minimapobject?: string;
    InteractCursor?: string;
    SpellID?: string;
}

interface QuestInfoDatabase{
    ID?: string;
    InfoName_lang?: string;
    Profession?: string;
    Type?: string;
    Modifiers?: string;
}

interface QuestLineDatabase{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    QuestID?: string;
    PlayerConditionID?: string;
}

interface QuestLineXQuestDatabase{
    ID?: string;
    QuestLineID?: string;
    QuestID?: string;
    OrderIndex?: string;
}

interface QuestMoneyRewardDatabase{
    ID?: string;
    'Difficulty[0]'?: string;
    'Difficulty[1]'?: string;
    'Difficulty[2]'?: string;
    'Difficulty[3]'?: string;
    'Difficulty[4]'?: string;
    'Difficulty[5]'?: string;
    'Difficulty[6]'?: string;
    'Difficulty[7]'?: string;
    'Difficulty[8]'?: string;
    'Difficulty[9]'?: string;
}

interface QuestObjectiveDatabase{
    ID?: string;
    Amount?: string;
    ObjectID?: string;
    Description_lang?: string;
    QuestID?: string;
    Type?: string;
    OrderIndex?: string;
    StorageIndex?: string;
    Flags?: string;
}

interface QuestPOIBlobDatabase{
    ID?: string;
    NumPoints?: string;
    MapID?: string;
    WorldMapAreaID?: string;
    Floor?: string;
    PlayerConditionID?: string;
    QuestID?: string;
    ObjectiveIndex?: string;
    UiMapID?: string;
    ObjectiveID?: string;
    Field_9_0_1_34490_008?: string;
}

interface QuestPOIPointDatabase{
    ID?: string;
    X?: string;
    Y?: string;
    QuestPOIBlobID?: string;
    Z?: string;
}

interface QuestPackageItemDatabase{
    ID?: string;
    PackageID?: string;
    ItemID?: string;
    ItemQuantity?: string;
    DisplayType?: string;
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
    FiltRaces?: string;
    QuestTitle_lang?: string;
    BulletText_lang?: string;
    ID?: string;
    UniqueBitFlag?: string;
    ConditionID?: string;
    FiltActiveQuest?: string;
    FiltClasses?: string;
    FiltCompletedQuestLogic?: string;
    FiltMaxFactionID?: string;
    FiltMaxFactionValue?: string;
    FiltMinFactionID?: string;
    FiltMinFactionValue?: string;
    FiltMinSkillID?: string;
    FiltMinSkillValue?: string;
    FiltNonActiveQuest?: string;
    BreadCrumbID?: string;
    StartItem?: string;
    WorldStateExpressionID?: string;
    Field_2_5_1_38043_019?: string;
    Field_2_5_1_38043_020?: string;
    Field_2_5_1_38043_021?: string;
    Field_2_5_1_38043_022?: string;
    'FiltCompletedQuest[0]'?: string;
    'FiltCompletedQuest[1]'?: string;
    'FiltCompletedQuest[2]'?: string;
    FiltMaxLevel?: string;
    FiltMinLevel?: string;
    QuestInfoID?: string;
    SandboxScalingID?: string;
    ContentTuningID?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    'Flags[2]'?: string;
    CovenantID?: string;
    Field_9_0_2_36206_022?: string;
}

interface QuestXGroupActivityDatabase{
    ID?: string;
    QuestID?: string;
    GroupFinderActivityID?: string;
}

interface QuestXPDatabase{
    ID?: string;
    'Difficulty[0]'?: string;
    'Difficulty[1]'?: string;
    'Difficulty[2]'?: string;
    'Difficulty[3]'?: string;
    'Difficulty[4]'?: string;
    'Difficulty[5]'?: string;
    'Difficulty[6]'?: string;
    'Difficulty[7]'?: string;
    'Difficulty[8]'?: string;
    'Difficulty[9]'?: string;
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

interface RacialMountsDatabase{
    ID?: string;
    Race?: string;
    Spell_ID?: string;
}

interface RafActivityDatabase{
    ID?: string;
    CriteriaTreeID?: string;
    RewardQuestID?: string;
}

interface RandPropPointsDatabase{
    ID?: string;
    DamageReplaceStat?: string;
    'Epic[0]'?: string;
    'Epic[1]'?: string;
    'Epic[2]'?: string;
    'Epic[3]'?: string;
    'Epic[4]'?: string;
    'Superior[0]'?: string;
    'Superior[1]'?: string;
    'Superior[2]'?: string;
    'Superior[3]'?: string;
    'Superior[4]'?: string;
    'Good[0]'?: string;
    'Good[1]'?: string;
    'Good[2]'?: string;
    'Good[3]'?: string;
    'Good[4]'?: string;
    DamageSecondary?: string;
    DamageReplaceStatF?: string;
    DamageSecondaryF?: string;
    'EpicF[0]'?: string;
    'EpicF[1]'?: string;
    'EpicF[2]'?: string;
    'EpicF[3]'?: string;
    'EpicF[4]'?: string;
    'SuperiorF[0]'?: string;
    'SuperiorF[1]'?: string;
    'SuperiorF[2]'?: string;
    'SuperiorF[3]'?: string;
    'SuperiorF[4]'?: string;
    'GoodF[0]'?: string;
    'GoodF[1]'?: string;
    'GoodF[2]'?: string;
    'GoodF[3]'?: string;
    'GoodF[4]'?: string;
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

interface RelicSlotTierRequirementDatabase{
    ID?: string;
    PlayerConditionID?: string;
    RelicIndex?: string;
    RelicTier?: string;
}

interface RelicTalentDatabase{
    ID?: string;
    ArtifactPowerID?: string;
    ArtifactPowerLabel?: string;
    Type?: string;
    PVal?: string;
    Flags?: string;
}

interface RenownRewardsDatabase{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    CovenantID?: string;
    Level?: string;
    Icon?: string;
    Flags?: string;
    UiOrder?: string;
    ItemID?: string;
    SpellID?: string;
    MountID?: string;
    TransmogID?: string;
    TransmogSetID?: string;
    CharTitlesID?: string;
    GarrFollowerID?: string;
    TransmogIllusionID?: string;
    QuestID?: string;
    PlayerConditionID?: string;
    ToastDescription_lang?: string;
}

interface ResearchBranchDatabase{
    ID?: string;
    Name_lang?: string;
    ResearchFieldID?: string;
    CurrencyID?: string;
    Texture?: string;
    ItemID?: string;
    TextureFileID?: string;
    BigTextureFileID?: string;
}

interface ResearchFieldDatabase{
    ID?: string;
    Name_lang?: string;
    Slot?: string;
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
    Field_7_3_0_24473_003?: string;
    TextureFileID?: string;
}

interface ResearchSiteDatabase{
    ID?: string;
    MapID?: string;
    QuestPOIBlobID?: string;
    Name_lang?: string;
    AreaPOIIconEnum?: string;
}

interface ResistancesDatabase{
    ID?: string;
    Flags?: string;
    FizzleSoundID?: string;
    Name_lang?: string;
}

interface RewardPackDatabase{
    ID?: string;
    Money?: string;
    ArtifactXPMultiplier?: string;
    ArtifactXPDifficulty?: string;
    ArtifactXPCategoryID?: string;
    CharTitleID?: string;
    TreasurePickerID?: string;
}

interface RewardPackXCurrencyTypeDatabase{
    ID?: string;
    RewardPackID?: string;
    CurrencyTypeID?: string;
    Quantity?: string;
}

interface RewardPackXItemDatabase{
    ID?: string;
    ItemID?: string;
    RewardPackID?: string;
    ItemQuantity?: string;
}

interface RibbonQualityDatabase{
    ID?: string;
    MaxSampleTimeDelta?: string;
    AngleThreshold?: string;
    MinDistancePerSlice?: string;
    NumStrips?: string;
    Flags?: string;
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

interface RulesetItemUpgradeDatabase{
    ID?: string;
    ItemID?: string;
    ItemUpgradeID?: string;
    Field_6_0_1_18179_001?: string;
}

interface RulesetRaidLootUpgradeDatabase{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    ItemUpgradeID?: string;
    Field_6_0_1_18179_004?: string;
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

interface SDReplacementModelDatabase{
    ID?: string;
    SdFileDataID?: string;
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

interface SandboxScalingDatabase{
    ID?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Flags?: string;
}

interface ScalingStatDistributionDatabase{
    ID?: string;
    'StatID[0]'?: string;
    'StatID[1]'?: string;
    'StatID[2]'?: string;
    'StatID[3]'?: string;
    'StatID[4]'?: string;
    'StatID[5]'?: string;
    'StatID[6]'?: string;
    'StatID[7]'?: string;
    'StatID[8]'?: string;
    'StatID[9]'?: string;
    'Bonus[0]'?: string;
    'Bonus[1]'?: string;
    'Bonus[2]'?: string;
    'Bonus[3]'?: string;
    'Bonus[4]'?: string;
    'Bonus[5]'?: string;
    'Bonus[6]'?: string;
    'Bonus[7]'?: string;
    'Bonus[8]'?: string;
    'Bonus[9]'?: string;
    Maxlevel?: string;
    Minlevel?: string;
    PlayerLevelToItemLevelCurveID?: string;
}

interface ScalingStatValuesDatabase{
    ID?: string;
    Charlevel?: string;
    ShoulderBudget?: string;
    TrinketBudget?: string;
    WeaponBudget1H?: string;
    PrimaryBudget?: string;
    RangedBudget?: string;
    ClothShoulderArmor?: string;
    LeatherShoulderArmor?: string;
    MailShoulderArmor?: string;
    PlateShoulderArmor?: string;
    WeaponDPS1H?: string;
    WeaponDPS2H?: string;
    SpellcasterDPS1H?: string;
    SpellcasterDPS2H?: string;
    RangedDPS?: string;
    WandDPS?: string;
    Field_3_0_1_8471_017?: string;
    Field_3_0_1_8471_018?: string;
    Field_3_0_1_8471_019?: string;
    SpellPower?: string;
    Field_3_0_1_8885_018?: string;
    Field_3_2_0_10192_018?: string;
    ClothCloakArmor?: string;
    ClothChestArmor?: string;
    LeatherChestArmor?: string;
    MailChestArmor?: string;
    PlateChestArmor?: string;
    TertiaryBudget?: string;
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
    'ArmorShoulder[0]'?: string;
    'ArmorShoulder[1]'?: string;
    'ArmorShoulder[2]'?: string;
    'ArmorShoulder[3]'?: string;
    'ArmorChest[0]'?: string;
    'ArmorChest[1]'?: string;
    'ArmorChest[2]'?: string;
    'ArmorChest[3]'?: string;
    'ArmorHead[0]'?: string;
    'ArmorHead[1]'?: string;
    'ArmorHead[2]'?: string;
    'ArmorHead[3]'?: string;
    'ArmorLegs[0]'?: string;
    'ArmorLegs[1]'?: string;
    'ArmorLegs[2]'?: string;
    'ArmorLegs[3]'?: string;
    'ArmorFeet[0]'?: string;
    'ArmorFeet[1]'?: string;
    'ArmorFeet[2]'?: string;
    'ArmorFeet[3]'?: string;
    'ArmorWaist[0]'?: string;
    'ArmorWaist[1]'?: string;
    'ArmorWaist[2]'?: string;
    'ArmorWaist[3]'?: string;
    'ArmorHands[0]'?: string;
    'ArmorHands[1]'?: string;
    'ArmorHands[2]'?: string;
    'ArmorHands[3]'?: string;
    'ArmorWrists[0]'?: string;
    'ArmorWrists[1]'?: string;
    'ArmorWrists[2]'?: string;
    'ArmorWrists[3]'?: string;
    Field_4_0_0_12911_022?: string;
    EffectiveLevel?: string;
    Field_5_0_1_15464_003?: string;
    Field_5_0_1_15464_004?: string;
    Field_5_0_1_15464_005?: string;
    Field_5_0_1_15464_006?: string;
    Field_5_0_1_15464_007?: string;
    Field_5_0_1_15464_008?: string;
    BudgetPrimary?: string;
    BudgetSecondary?: string;
    BudgetTertiary?: string;
    Field_5_0_1_15464_013?: string;
    BudgetTrivial?: string;
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
    BudgetSub?: string;
    ArmorBack?: string;
    ArmorShield?: string;
}

interface ScenarioDatabase{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
    AreaTableID?: string;
    Type?: string;
    UiTextureKitID?: string;
}

interface ScenarioEventEntryDatabase{
    ID?: string;
    TriggerType?: string;
    TriggerAsset?: string;
}

interface ScenarioStepDatabase{
    ID?: string;
    Description_lang?: string;
    Title_lang?: string;
    ScenarioID?: string;
    CriteriatreeID?: string;
    RewardQuestID?: string;
    RelatedStep?: string;
    Supersedes?: string;
    OrderIndex?: string;
    Flags?: string;
    VisibilityPlayerConditionID?: string;
    WidgetSetID?: string;
}

interface SceneScriptDatabase{
    ID?: string;
    Name?: string;
    Script?: string;
    FirstSceneScriptID?: string;
    NextSceneScriptID?: string;
}

interface SceneScriptGlobalTextDatabase{
    ID?: string;
    Name?: string;
    Script?: string;
}

interface SceneScriptPackageDatabase{
    ID?: string;
    Name?: string;
}

interface SceneScriptPackageMemberDatabase{
    ID?: string;
    SceneScriptPackageID?: string;
    SceneScriptID?: string;
    ChildSceneScriptPackageID?: string;
    OrderIndex?: string;
}

interface SceneScriptTextDatabase{
    ID?: string;
    Name?: string;
    Script?: string;
}

interface ScheduledIntervalDatabase{
    ID?: string;
    Flags?: string;
    RepeatType?: string;
    DurationSecs?: string;
    OffsetSecs?: string;
    DateAlignmentType?: string;
}

interface ScheduledWorldStateDatabase{
    ID?: string;
    ScheduledWorldStateGroupID?: string;
    WorldStateID?: string;
    Value?: string;
    DurationSecs?: string;
    Weight?: string;
    UniqueCategory?: string;
    Flags?: string;
    OrderIndex?: string;
}

interface ScheduledWorldStateGroupDatabase{
    ID?: string;
    Flags?: string;
    ScheduledIntervalID?: string;
    SelectionType?: string;
    SelectionCount?: string;
    Priority?: string;
}

interface ScheduledWorldStateXUniqCatDatabase{
    ID?: string;
    ScheduledWorldStateID?: string;
    ScheduledUniqueCategoryID?: string;
}

interface ScreenEffectDatabase{
    ID?: string;
    Field_3_0_1_8303_001?: string;
    'Param[0]'?: string;
    'Param[1]'?: string;
    'Param[2]'?: string;
    'Param[3]'?: string;
    Name?: string;
    Effect?: string;
    LightParamsID?: string;
    SoundAmbienceID?: string;
    ZoneMusicID?: string;
    TimeOfDayOverride?: string;
    LightParamsFadeIn?: string;
    LightParamsFadeOut?: string;
    EffectMask?: string;
    LightFlags?: string;
    FullScreenEffectID?: string;
}

interface ScreenEffectTypeDatabase{
    ID?: string;
    Priority?: string;
}

interface ScreenLocationDatabase{
    ID?: string;
    Name?: string;
}

interface SeamlessSiteDatabase{
    ID?: string;
    MapID?: string;
}

interface ServerMessagesDatabase{
    ID?: string;
    Text_lang?: string;
}

interface ShadowyEffectDatabase{
    ID?: string;
    PrimaryColor?: string;
    SecondaryColor?: string;
    Duration?: string;
    Value?: string;
    FadeInTime?: string;
    FadeOutTime?: string;
    InnerStrength?: string;
    OuterStrength?: string;
    InitialDelay?: string;
    AttachPos?: string;
    Flags?: string;
    CurveID?: string;
    Priority?: string;
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

interface SiegeablePropertiesDatabase{
    ID?: string;
    Health?: string;
    DamageSpellVisualKitID?: string;
    HealingSpellVisualKitID?: string;
    Flags?: string;
}

interface SkillCostsDataDatabase{
    ID?: string;
    SkillCostsID?: string;
    'Cost[0]'?: string;
    'Cost[1]'?: string;
    'Cost[2]'?: string;
}

interface SkillLineDatabase{
    ID?: string;
    RaceMask?: string;
    ClassMask?: string;
    ExcludeRace?: string;
    ExcludeClass?: string;
    CategoryID?: string;
    SkillType?: string;
    MinCharLevel?: string;
    MaxRank?: string;
    Abandonable?: string;
    DisplayName_lang?: string;
    SkillCostsID?: string;
    Description_lang?: string;
    SpellIconID?: string;
    AlternateVerb_lang?: string;
    CanLink?: string;
    ParentSkillLineID?: string;
    Flags?: string;
    SpellIconFileID?: string;
    ParentTierIndex?: string;
    HordeDisplayName_lang?: string;
    NeutralDisplayName?: string;
    SpellBookSpellID?: string;
}

interface SkillLineAbilityDatabase{
    ID?: string;
    SkillLine?: string;
    Spell?: string;
    RaceMask?: string;
    ClassMask?: string;
    ExcludeRace?: string;
    ExcludeClass?: string;
    MinSkillLineRank?: string;
    SupercededBySpell?: string;
    TrivialSkillLineRankHigh?: string;
    TrivialSkillLineRankLow?: string;
    Abandonable?: string;
    AcquireMethod?: string;
    Field_0_5_5_3494_012?: string;
    SupercedesSpell?: string;
    'CharacterPoints[0]'?: string;
    'CharacterPoints[1]'?: string;
    UniqueBit?: string;
    TradeSkillCategoryID?: string;
    NumSkillUps?: string;
    Flags?: string;
    SkillupSkillLineID?: string;
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

interface SkillRaceClassInfoDatabase{
    ID?: string;
    SkillID?: string;
    RaceMask?: string;
    ClassMask?: string;
    Flags?: string;
    MinLevel?: string;
    SkillTierID?: string;
    SkillCostIndex?: string;
    Availability?: string;
}

interface SkillTiersDatabase{
    ID?: string;
    'Cost[0]'?: string;
    'Cost[1]'?: string;
    'Cost[2]'?: string;
    'Cost[3]'?: string;
    'Cost[4]'?: string;
    'Cost[5]'?: string;
    'Cost[6]'?: string;
    'Cost[7]'?: string;
    'Cost[8]'?: string;
    'Cost[9]'?: string;
    'Cost[10]'?: string;
    'Cost[11]'?: string;
    'Cost[12]'?: string;
    'Cost[13]'?: string;
    'Cost[14]'?: string;
    'Cost[15]'?: string;
    'Value[0]'?: string;
    'Value[1]'?: string;
    'Value[2]'?: string;
    'Value[3]'?: string;
    'Value[4]'?: string;
    'Value[5]'?: string;
    'Value[6]'?: string;
    'Value[7]'?: string;
    'Value[8]'?: string;
    'Value[9]'?: string;
    'Value[10]'?: string;
    'Value[11]'?: string;
    'Value[12]'?: string;
    'Value[13]'?: string;
    'Value[14]'?: string;
    'Value[15]'?: string;
}

interface SkySceneXPlayerConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    SkySceneID?: string;
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

interface SoulbindConduitDatabase{
    ID?: string;
    SpellID?: string;
    ConduitType?: string;
    CovenantID?: string;
    SpecSetID?: string;
    Flags?: string;
}

interface SoulbindConduitEnhancedSocketDatabase{
    ID?: string;
    GarrTalentID?: string;
    PlayerConditionID?: string;
}

interface SoulbindConduitItemDatabase{
    ID?: string;
    ItemID?: string;
    ConduitID?: string;
}

interface SoulbindConduitRankDatabase{
    ID?: string;
    RankIndex?: string;
    SpellID?: string;
    AuraPointsOverride?: string;
    SoulbindConduitID?: string;
}

interface SoulbindConduitRankPropertiesDatabase{
    ID?: string;
    Rank?: string;
    ItemLevel?: string;
    QualityID?: string;
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

interface SoundAmbienceDatabase{
    ID?: string;
    Flags?: string;
    SoundFilterID?: string;
    FlavorSoundFilterID?: string;
    'AmbienceID[0]'?: string;
    'AmbienceID[1]'?: string;
    'AmbienceStartID[0]'?: string;
    'AmbienceStartID[1]'?: string;
    'AmbienceStopID[0]'?: string;
    'AmbienceStopID[1]'?: string;
    'SoundKitID[0]'?: string;
    'SoundKitID[1]'?: string;
}

interface SoundAmbienceFlavorDatabase{
    ID?: string;
    SoundAmbienceID?: string;
    SoundEntriesIDDay?: string;
    SoundEntriesIDNight?: string;
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

interface SoundBusNameDatabase{
    EnumID?: string;
    Name?: string;
}

interface SoundBusOverrideDatabase{
    ID?: string;
    Volume?: string;
    PlaybackLimit?: string;
    Priority?: string;
    PriorityPenalty?: string;
    SoundBusID?: string;
    PlayerConditionID?: string;
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
    'Position[0]'?: string;
    'Position[1]'?: string;
    'Position[2]'?: string;
}

interface SoundEmittersDatabase{
    ID?: string;
    'Position[0]'?: string;
    'Position[1]'?: string;
    'Position[2]'?: string;
    'Direction[0]'?: string;
    'Direction[1]'?: string;
    'Direction[2]'?: string;
    SoundEntryAdvancedID?: string;
    MapID?: string;
    Name?: string;
    SoundEntriesID?: string;
    EmitterType?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    PhaseUseFlags?: string;
    Flags?: string;
    WorldStateExpressionID?: string;
}

interface SoundEntriesDatabase{
    ID?: string;
    SoundType?: string;
    Name?: string;
    'File[0]'?: string;
    'File[1]'?: string;
    'File[2]'?: string;
    'File[3]'?: string;
    'File[4]'?: string;
    'File[5]'?: string;
    'File[6]'?: string;
    'File[7]'?: string;
    'File[8]'?: string;
    'File[9]'?: string;
    'Freq[0]'?: string;
    'Freq[1]'?: string;
    'Freq[2]'?: string;
    'Freq[3]'?: string;
    'Freq[4]'?: string;
    'Freq[5]'?: string;
    'Freq[6]'?: string;
    'Freq[7]'?: string;
    'Freq[8]'?: string;
    'Freq[9]'?: string;
    DirectoryBase?: string;
    VolumeFloat?: string;
    Pitch?: string;
    PitchVariation?: string;
    Priority?: string;
    Channel?: string;
    Flags?: string;
    MinDistance?: string;
    MaxDistance?: string;
    DistanceCutoff?: string;
    EAXDef?: string;
    SoundEntriesAdvancedID?: string;
    Volumevariationplus?: string;
    Volumevariationminus?: string;
    Pitchvariationplus?: string;
    Pitchvariationminus?: string;
    PitchAdjust?: string;
    Dialogtype?: string;
    'FileDataID[0]'?: string;
    'FileDataID[1]'?: string;
    'FileDataID[2]'?: string;
    'FileDataID[3]'?: string;
    'FileDataID[4]'?: string;
    'FileDataID[5]'?: string;
    'FileDataID[6]'?: string;
    'FileDataID[7]'?: string;
    'FileDataID[8]'?: string;
    'FileDataID[9]'?: string;
    'FileDataID[10]'?: string;
    'FileDataID[11]'?: string;
    'FileDataID[12]'?: string;
    'FileDataID[13]'?: string;
    'FileDataID[14]'?: string;
    'FileDataID[15]'?: string;
    'FileDataID[16]'?: string;
    'FileDataID[17]'?: string;
    'FileDataID[18]'?: string;
    'FileDataID[19]'?: string;
    'Freq[10]'?: string;
    'Freq[11]'?: string;
    'Freq[12]'?: string;
    'Freq[13]'?: string;
    'Freq[14]'?: string;
    'Freq[15]'?: string;
    'Freq[16]'?: string;
    'Freq[17]'?: string;
    'Freq[18]'?: string;
    'Freq[19]'?: string;
    BusOverwriteID?: string;
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
    Name?: string;
    MinRandomPosOffset?: string;
    MaxRandomPosOffset?: string;
    Field_4_3_2_15211_025?: string;
    Field_5_1_0_16309_025?: string;
    Field_5_1_0_16309_026?: string;
    DuckToDialog?: string;
    DuckToSuppressors?: string;
    MsOffset?: string;
    'Volume[0]'?: string;
    'Volume[1]'?: string;
    'Volume[2]'?: string;
    'Volume[3]'?: string;
    'Volume[4]'?: string;
    'Volume[5]'?: string;
    'Volume[6]'?: string;
    'Volume[7]'?: string;
    'Volume[8]'?: string;
    'Volume[9]'?: string;
    'Volume[10]'?: string;
    'Volume[11]'?: string;
    'Volume[12]'?: string;
    'Volume[13]'?: string;
    'Volume[14]'?: string;
    'Volume[15]'?: string;
    'Volume[16]'?: string;
    'Volume[17]'?: string;
    'Volume[18]'?: string;
    'Volume[19]'?: string;
}

interface SoundEntriesFallbacksDatabase{
    ID?: string;
    SoundEntriesID?: string;
    FallbackSoundEntriesID?: string;
}

interface SoundEnvelopeDatabase{
    ID?: string;
    SoundKitID?: string;
    CurveID?: string;
    DecayIndex?: string;
    SustainIndex?: string;
    ReleaseIndex?: string;
    EnvelopeType?: string;
    Flags?: string;
}

interface SoundFilterDatabase{
    ID?: string;
    Name?: string;
}

interface SoundFilterElemDatabase{
    ID?: string;
    SoundFilterID?: string;
    OrderIndex?: string;
    FilterType?: string;
    'Params[0]'?: string;
    'Params[1]'?: string;
    'Params[2]'?: string;
    'Params[3]'?: string;
    'Params[4]'?: string;
    'Params[5]'?: string;
    'Params[6]'?: string;
    'Params[7]'?: string;
    'Params[8]'?: string;
}

interface SoundKitDatabase{
    ID?: string;
    VolumeFloat?: string;
    MinDistance?: string;
    DistanceCutoff?: string;
    SoundKitAdvancedID?: string;
    Flags?: string;
    SoundType?: string;
    DialogType?: string;
    EAXDef?: string;
    VolumeVariationPlus?: string;
    VolumeVariationMinus?: string;
    PitchVariationPlus?: string;
    PitchVariationMinus?: string;
    PitchAdjust?: string;
    BusOverwriteID?: string;
    MaxInstances?: string;
    Field_7_3_0_24473_008?: string;
}

interface SoundKitAdvancedDatabase{
    ID?: string;
    SoundKitID?: string;
    InnerRadius2D?: string;
    OuterRadius2D?: string;
    TimeA?: string;
    TimeB?: string;
    TimeC?: string;
    TimeD?: string;
    RandomOffsetRange?: string;
    Usage?: string;
    TimeIntervalMin?: string;
    TimeIntervalMax?: string;
    DelayMin?: string;
    DelayMax?: string;
    VolumeSliderCategory?: string;
    DuckToSFX?: string;
    DuckToMusic?: string;
    DuckToAmbience?: string;
    DuckToDialog?: string;
    DuckToSuppressors?: string;
    DuckToCinematicSFX?: string;
    DuckToCinematicMusic?: string;
    InnerRadiusOfInfluence?: string;
    OuterRadiusOfInfluence?: string;
    TimeToDuck?: string;
    TimeToUnduck?: string;
    InsideAngle?: string;
    OutsideAngle?: string;
    OutsideVolume?: string;
    MinRandomPosOffset?: string;
    MaxRandomPosOffset?: string;
    MsOffset?: string;
    TimeCooldownMin?: string;
    TimeCooldownMax?: string;
    MaxInstancesBehavior?: string;
    VolumeControlType?: string;
    VolumeFadeInTimeMin?: string;
    VolumeFadeInTimeMax?: string;
    VolumeFadeInCurveID?: string;
    VolumeFadeOutTimeMin?: string;
    VolumeFadeOutTimeMax?: string;
    VolumeFadeOutCurveID?: string;
    ChanceToPlay?: string;
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

interface SoundKitEntryDatabase{
    ID?: string;
    FileDataID?: string;
    Volume?: string;
    Frequency?: string;
    SoundKitID?: string;
}

interface SoundKitFallbackDatabase{
    ID?: string;
    SoundKitID?: string;
    FallbackSoundKitID?: string;
}

interface SoundKitNameDatabase{
    ID?: string;
    Name?: string;
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
    EAXEffectVolume?: string;
    EAXDecayTime?: string;
    EAXDamping?: string;
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

interface SoundWaterTypeDatabase{
    ID?: string;
    SoundType?: string;
    SoundSubtype?: string;
    SoundID?: string;
}

interface SourceInfoDatabase{
    ID?: string;
    SpellID?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
    PvpFaction?: string;
}

interface SpamMessagesDatabase{
    ID?: string;
    Text?: string;
}

interface SpecSetMemberDatabase{
    ID?: string;
    ChrSpecializationID?: string;
    SpecSet?: string;
}

interface SpecializationSpellsDatabase{
    ID?: string;
    SpecID?: string;
    SpellID?: string;
    OverridesSpellID?: string;
    Field_5_0_1_15464_004?: string;
    Description_lang?: string;
    DisplayOrder?: string;
}

interface SpecializationSpellsDisplayDatabase{
    ID?: string;
    SpecializationID?: string;
    'SpellID[0]'?: string;
    'SpellID[1]'?: string;
    'SpellID[2]'?: string;
    'SpellID[3]'?: string;
    'SpellID[4]'?: string;
    'SpellID[5]'?: string;
}

interface SpellDatabase{
    ID?: string;
    School?: string;
    Category?: string;
    CastUI?: string;
    Attributes?: string;
    AttributesEx?: string;
    ShapeshiftMask?: string;
    Targets?: string;
    TargetCreatureType?: string;
    RequiresSpellFocus?: string;
    CasterAuraState?: string;
    TargetAuraState?: string;
    CastingTimeIndex?: string;
    RecoveryTime?: string;
    CategoryRecoveryTime?: string;
    InterruptFlags?: string;
    AuraInterruptFlags?: string;
    ChannelInterruptFlags?: string;
    ProcFlags?: string;
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
    ManaPerSecondPerLevel?: string;
    RangeIndex?: string;
    Speed?: string;
    ModalNextSpell?: string;
    'Totem[0]'?: string;
    'Totem[1]'?: string;
    'Reagent[0]'?: string;
    'Reagent[1]'?: string;
    'Reagent[2]'?: string;
    'Reagent[3]'?: string;
    'Reagent[4]'?: string;
    'Reagent[5]'?: string;
    'Reagent[6]'?: string;
    'Reagent[7]'?: string;
    'ReagentCount[0]'?: string;
    'ReagentCount[1]'?: string;
    'ReagentCount[2]'?: string;
    'ReagentCount[3]'?: string;
    'ReagentCount[4]'?: string;
    'ReagentCount[5]'?: string;
    'ReagentCount[6]'?: string;
    'ReagentCount[7]'?: string;
    EquippedItemClass?: string;
    EquippedItemSubclass?: string;
    'Effect[0]'?: string;
    'Effect[1]'?: string;
    'Effect[2]'?: string;
    'EffectDieSides[0]'?: string;
    'EffectDieSides[1]'?: string;
    'EffectDieSides[2]'?: string;
    'EffectBaseDice[0]'?: string;
    'EffectBaseDice[1]'?: string;
    'EffectBaseDice[2]'?: string;
    'EffectDicePerLevel[0]'?: string;
    'EffectDicePerLevel[1]'?: string;
    'EffectDicePerLevel[2]'?: string;
    'EffectRealPointsPerLevel[0]'?: string;
    'EffectRealPointsPerLevel[1]'?: string;
    'EffectRealPointsPerLevel[2]'?: string;
    'EffectBasePoints[0]'?: string;
    'EffectBasePoints[1]'?: string;
    'EffectBasePoints[2]'?: string;
    'ImplicitTargetA[0]'?: string;
    'ImplicitTargetA[1]'?: string;
    'ImplicitTargetA[2]'?: string;
    'ImplicitTargetB[0]'?: string;
    'ImplicitTargetB[1]'?: string;
    'ImplicitTargetB[2]'?: string;
    'EffectRadiusIndex[0]'?: string;
    'EffectRadiusIndex[1]'?: string;
    'EffectRadiusIndex[2]'?: string;
    'EffectAura[0]'?: string;
    'EffectAura[1]'?: string;
    'EffectAura[2]'?: string;
    'EffectAuraPeriod[0]'?: string;
    'EffectAuraPeriod[1]'?: string;
    'EffectAuraPeriod[2]'?: string;
    'EffectAmplitude[0]'?: string;
    'EffectAmplitude[1]'?: string;
    'EffectAmplitude[2]'?: string;
    'EffectChainTargets[0]'?: string;
    'EffectChainTargets[1]'?: string;
    'EffectChainTargets[2]'?: string;
    'EffectItemType[0]'?: string;
    'EffectItemType[1]'?: string;
    'EffectItemType[2]'?: string;
    'EffectMiscValue[0]'?: string;
    'EffectMiscValue[1]'?: string;
    'EffectMiscValue[2]'?: string;
    'EffectTriggerSpell[0]'?: string;
    'EffectTriggerSpell[1]'?: string;
    'EffectTriggerSpell[2]'?: string;
    SpellVisualID?: string;
    SpellIconID?: string;
    ActiveIconID?: string;
    SpellPriority?: string;
    Name_lang?: string;
    NameSubtext_lang?: string;
    Description_lang?: string;
    ManaCostPct?: string;
    StartRecoveryCategory?: string;
    StartRecoveryTime?: string;
    DispelType?: string;
    AuraDescription_lang?: string;
    AttributesExB?: string;
    CumulativeAura?: string;
    'EffectPointsPerCombo[0]'?: string;
    'EffectPointsPerCombo[1]'?: string;
    'EffectPointsPerCombo[2]'?: string;
    MaxTargetLevel?: string;
    'SpellClassMask[0]'?: string;
    'SpellClassMask[1]'?: string;
    DefenseType?: string;
    PreventionType?: string;
    'SpellVisualID[0]'?: string;
    'SpellVisualID[1]'?: string;
    StanceBarOrder?: string;
    SpellClassSet?: string;
    'EffectChainAmplitude[0]'?: string;
    'EffectChainAmplitude[1]'?: string;
    'EffectChainAmplitude[2]'?: string;
    Field_1_1_2_4125_076?: string;
    Mechanic?: string;
    ShapeshiftExclude?: string;
    'EffectMechanic[0]'?: string;
    'EffectMechanic[1]'?: string;
    'EffectMechanic[2]'?: string;
    MinFactionID?: string;
    MinReputation?: string;
    RequiredAuraVision?: string;
    MaxTargets?: string;
    AttributesExC?: string;
    AttributesExD?: string;
    EquippedItemInvTypes?: string;
    'RequiredTotemCategoryID[0]'?: string;
    'RequiredTotemCategoryID[1]'?: string;
    AttributesExE?: string;
    ExcludeCasterAuraState?: string;
    ExcludeTargetAuraState?: string;
    RequiredAreasID?: string;
    FacingCasterFlags?: string;
    SchoolMask?: string;
    AttributesExF?: string;
    ProcTypeMask?: string;
    'EffectMiscValueB[0]'?: string;
    'EffectMiscValueB[1]'?: string;
    'EffectMiscValueB[2]'?: string;
    RequiredAreaID?: string;
    RuneCostID?: string;
    SpellMissileID?: string;
    Field_3_0_1_8622_021?: string;
    Field_3_0_1_8622_022?: string;
    Field_3_0_1_8622_023?: string;
    Field_3_0_1_8622_024?: string;
    'SpellClassMask[2]'?: string;
    CasterAuraSpell?: string;
    TargetAuraSpell?: string;
    ExcludeCasterAuraSpell?: string;
    ExcludeTargetAuraSpell?: string;
    'EffectSpellClassMaskA[0]'?: string;
    'EffectSpellClassMaskA[1]'?: string;
    'EffectSpellClassMaskA[2]'?: string;
    'EffectSpellClassMaskB[0]'?: string;
    'EffectSpellClassMaskB[1]'?: string;
    'EffectSpellClassMaskB[2]'?: string;
    'EffectSpellClassMaskC[0]'?: string;
    'EffectSpellClassMaskC[1]'?: string;
    'EffectSpellClassMaskC[2]'?: string;
    PowerDisplayID?: string;
    AttributesExG?: string;
    'ShapeshiftMask[0]'?: string;
    'ShapeshiftMask[1]'?: string;
    'ShapeshiftExclude[0]'?: string;
    'ShapeshiftExclude[1]'?: string;
    'EffectBonusCoefficient[0]'?: string;
    'EffectBonusCoefficient[1]'?: string;
    'EffectBonusCoefficient[2]'?: string;
    DescriptionVariablesID?: string;
    Difficulty?: string;
    AttributesExH?: string;
    'AuraInterruptFlags[0]'?: string;
    'AuraInterruptFlags[1]'?: string;
    'ChannelInterruptFlags[0]'?: string;
    'ChannelInterruptFlags[1]'?: string;
    'EffectRadiusIndexB[0]'?: string;
    'EffectRadiusIndexB[1]'?: string;
    'EffectRadiusIndexB[2]'?: string;
    ScalingID?: string;
    Field_4_0_0_11927_106?: string;
    Field_4_0_0_11927_107?: string;
    Field_4_0_0_11927_108?: string;
    BonusCoefficient?: string;
    AuraOptionsID?: string;
    AuraRestrictionsID?: string;
    CastingRequirementsID?: string;
    CategoriesID?: string;
    ClassOptionsID?: string;
    CooldownsID?: string;
    Field_4_0_0_12232_035?: string;
    EquippedItemsID?: string;
    InterruptsID?: string;
    LevelsID?: string;
    ReagentsID?: string;
    ShapeshiftID?: string;
    TargetRestrictionsID?: string;
    TotemsID?: string;
    Field_4_0_0_12232_044?: string;
    Field_4_0_0_12232_045?: string;
    Field_4_0_0_12232_046?: string;
    Field_4_0_0_12911_036?: string;
    RequiredProjectID?: string;
    AttributesExI?: string;
    AttributesExJ?: string;
    MiscID?: string;
    Field_7_3_2_25549_006?: string;
}

interface SpellActionBarPrefDatabase{
    ID?: string;
    SpellID?: string;
    PreferredActionBarMask?: string;
}

interface SpellActivationOverlayDatabase{
    ID?: string;
    'IconHighlightSpellClassMask[0]'?: string;
    'IconHighlightSpellClassMask[1]'?: string;
    'IconHighlightSpellClassMask[2]'?: string;
    'IconHighlightSpellClassMask[3]'?: string;
    SpellID?: string;
    OverlayFileDataID?: string;
    ScreenLocationID?: string;
    SoundEntriesID?: string;
    Color?: string;
    Scale?: string;
    TriggerType?: string;
    Field_4_0_0_12911_007?: string;
    TriggerSpell?: string;
}

interface SpellAuraNamesDatabase{
    EnumID?: string;
    SpecialMiscValue?: string;
    Globalstrings_tag?: string;
    Name_lang?: string;
}

interface SpellAuraOptionsDatabase{
    ID?: string;
    DifficultyID?: string;
    CumulativeAura?: string;
    ProcCategoryRecovery?: string;
    ProcChance?: string;
    ProcCharges?: string;
    SpellProcsPerMinuteID?: string;
    'ProcTypeMask[0]'?: string;
    'ProcTypeMask[1]'?: string;
    SpellID?: string;
    ProcTypeMask?: string;
}

interface SpellAuraRestrictionsDatabase{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    CasterAuraState?: string;
    TargetAuraState?: string;
    ExcludeCasterAuraState?: string;
    ExcludeTargetAuraState?: string;
    CasterAuraSpell?: string;
    TargetAuraSpell?: string;
    ExcludeCasterAuraSpell?: string;
    ExcludeTargetAuraSpell?: string;
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
    Category?: string;
    DefenseType?: string;
    DispelType?: string;
    Mechanic?: string;
    PreventionType?: string;
    StartRecoveryCategory?: string;
    ChargeCategory?: string;
    SpellID?: string;
    DifficultyID?: string;
}

interface SpellCategoryDatabase{
    ID?: string;
    Flags?: string;
    UsesPerWeek?: string;
    Name_lang?: string;
    MaxCharges?: string;
    ChargeRecoveryTime?: string;
    'Padding_6_0_1_18179_003[0]'?: string;
    'Padding_6_0_1_18179_003[1]'?: string;
    'Padding_6_0_1_18179_003[2]'?: string;
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
    Texture?: string;
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
    Combo?: string;
    RenderLayer?: string;
    TextureLength?: string;
    WavePhase?: string;
    'Padding_4_0_0_11792_044[0]'?: string;
    'Padding_4_0_0_11792_044[1]'?: string;
    'Padding_4_0_0_11792_044[2]'?: string;
    'Padding_5_3_0_16965_043[0]'?: string;
    'Padding_5_3_0_16965_043[1]'?: string;
    'Padding_5_3_0_16965_043[2]'?: string;
    'SpellChainEffectID[0]'?: string;
    'SpellChainEffectID[1]'?: string;
    'SpellChainEffectID[2]'?: string;
    'SpellChainEffectID[3]'?: string;
    'SpellChainEffectID[4]'?: string;
    'SpellChainEffectID[5]'?: string;
    'SpellChainEffectID[6]'?: string;
    'SpellChainEffectID[7]'?: string;
    'SpellChainEffectID[8]'?: string;
    'SpellChainEffectID[9]'?: string;
    'SpellChainEffectID[10]'?: string;
    TimePerFlipFrame?: string;
    VariancePerFlipFrame?: string;
    'TextureCoordScaleU[0]'?: string;
    'TextureCoordScaleU[1]'?: string;
    'TextureCoordScaleU[2]'?: string;
    'TextureCoordScaleV[0]'?: string;
    'TextureCoordScaleV[1]'?: string;
    'TextureCoordScaleV[2]'?: string;
    'TextureRepeatLengthU[0]'?: string;
    'TextureRepeatLengthU[1]'?: string;
    'TextureRepeatLengthU[2]'?: string;
    'TextureRepeatLengthV[0]'?: string;
    'TextureRepeatLengthV[1]'?: string;
    'TextureRepeatLengthV[2]'?: string;
    TextureParticleFileDataID?: string;
    StartWidth?: string;
    EndWidth?: string;
    WidthScaleCurveID?: string;
    NumFlipFramesU?: string;
    NumFlipFramesV?: string;
    SoundKitID?: string;
    'TextureFileDataID[0]'?: string;
    'TextureFileDataID[1]'?: string;
    'TextureFileDataID[2]'?: string;
    ParticleScaleMultiplier?: string;
    ParticleEmissionRateMultiplier?: string;
}

interface SpellClassOptionsDatabase{
    ID?: string;
    ModalNextSpell?: string;
    'SpellClassMask[0]'?: string;
    'SpellClassMask[1]'?: string;
    'SpellClassMask[2]'?: string;
    SpellClassSet?: string;
    Description_lang?: string;
    'SpellClassMask[3]'?: string;
    SpellID?: string;
}

interface SpellClutterAreaEffectCountsDatabase{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
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

interface SpellClutterMissileDistDatabase{
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

interface SpellCooldownsDatabase{
    ID?: string;
    CategoryRecoveryTime?: string;
    RecoveryTime?: string;
    StartRecoveryTime?: string;
    SpellID?: string;
    DifficultyID?: string;
}

interface SpellCraftUIDatabase{
    ID?: string;
    CastUI?: string;
}

interface SpellDescriptionVariablesDatabase{
    ID?: string;
    Variables?: string;
}

interface SpellDifficultyDatabase{
    ID?: string;
    'DifficultySpellID[0]'?: string;
    'DifficultySpellID[1]'?: string;
    'DifficultySpellID[2]'?: string;
    'DifficultySpellID[3]'?: string;
}

interface SpellDispelTypeDatabase{
    ID?: string;
    Name_lang?: string;
    Mask?: string;
    InternalName?: string;
    ImmunityPossible?: string;
}

interface SpellDurationDatabase{
    ID?: string;
    Duration?: string;
    DurationPerLevel?: string;
    MaxDuration?: string;
}

interface SpellEffectDatabase{
    ID?: string;
    DifficultyID?: string;
    EffectIndex?: string;
    Effect?: string;
    EffectAmplitude?: string;
    EffectAttributes?: string;
    EffectAura?: string;
    EffectAuraPeriod?: string;
    EffectBasePoints?: string;
    EffectBonusCoefficient?: string;
    EffectChainAmplitude?: string;
    EffectChainTargets?: string;
    EffectDieSides?: string;
    EffectItemType?: string;
    EffectMechanic?: string;
    EffectPointsPerResource?: string;
    EffectPos_facing?: string;
    EffectRealPointsPerLevel?: string;
    EffectTriggerSpell?: string;
    BonusCoefficientFromAP?: string;
    PvpMultiplier?: string;
    Coefficient?: string;
    Variance?: string;
    ResourceCoefficient?: string;
    GroupSizeBasePointsCoefficient?: string;
    'EffectMiscValue[0]'?: string;
    'EffectMiscValue[1]'?: string;
    'EffectRadiusIndex[0]'?: string;
    'EffectRadiusIndex[1]'?: string;
    'EffectSpellClassMask[0]'?: string;
    'EffectSpellClassMask[1]'?: string;
    'EffectSpellClassMask[2]'?: string;
    'EffectSpellClassMask[3]'?: string;
    'ImplicitTarget[0]'?: string;
    'ImplicitTarget[1]'?: string;
    SpellID?: string;
    Field_7_3_2_25549_010?: string;
    EffectBasePointsF?: string;
    Field_9_1_0_38511_023?: string;
}

interface SpellEffectAutoDescriptionDatabase{
    ID?: string;
    EffectDescription_lang?: string;
    AuraDescription_lang?: string;
    SpellEffectType?: string;
    AuraEffectType?: string;
    OrderIndex?: string;
    PointsSign?: string;
    TargetType?: string;
    SchoolMask?: string;
    EffectOrderIndex?: string;
    AuraOrderIndex?: string;
}

interface SpellEffectCameraShakesDatabase{
    ID?: string;
    'CameraShake[0]'?: string;
    'CameraShake[1]'?: string;
    'CameraShake[2]'?: string;
}

interface SpellEffectEmissionDatabase{
    ID?: string;
    EmissionRate?: string;
    ModelScale?: string;
    AreaModelID?: string;
    Flags?: string;
}

interface SpellEffectGroupSizeDatabase{
    ID?: string;
    SpellEffectID?: string;
    Coefficient?: string;
}

interface SpellEffectNamesDatabase{
    EnumID?: string;
    Name_lang?: string;
}

interface SpellEffectScalingDatabase{
    ID?: string;
    Coefficient?: string;
    Variance?: string;
    ResourceCoefficient?: string;
    Field_5_4_0_17266_004?: string;
    SpellEffectID?: string;
}

interface SpellEquippedItemsDatabase{
    ID?: string;
    EquippedItemClass?: string;
    EquippedItemInvTypes?: string;
    EquippedItemSubclass?: string;
    SpellID?: string;
    DifficultyID?: string;
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

interface SpellFlyoutItemDatabase{
    ID?: string;
    SpellFlyoutID?: string;
    SpellID?: string;
    Slot?: string;
}

interface SpellFocusObjectDatabase{
    ID?: string;
    Name_lang?: string;
}

interface SpellIconDatabase{
    ID?: string;
    TextureFilename?: string;
}

interface SpellInterruptsDatabase{
    ID?: string;
    'AuraInterruptFlags[0]'?: string;
    'AuraInterruptFlags[1]'?: string;
    'ChannelInterruptFlags[0]'?: string;
    'ChannelInterruptFlags[1]'?: string;
    InterruptFlags?: string;
    SpellID?: string;
    DifficultyID?: string;
}

interface SpellItemEnchantmentDatabase{
    ID?: string;
    'Effect[0]'?: string;
    'Effect[1]'?: string;
    'Effect[2]'?: string;
    'EffectPointsMin[0]'?: string;
    'EffectPointsMin[1]'?: string;
    'EffectPointsMin[2]'?: string;
    'EffectPointsMax[0]'?: string;
    'EffectPointsMax[1]'?: string;
    'EffectPointsMax[2]'?: string;
    'EffectArg[0]'?: string;
    'EffectArg[1]'?: string;
    'EffectArg[2]'?: string;
    Name_lang?: string;
    ItemVisual?: string;
    Flags?: string;
    Src_itemID?: string;
    Condition_ID?: string;
    HordeName_lang?: string;
    'EffectScalingPoints[0]'?: string;
    'EffectScalingPoints[1]'?: string;
    'EffectScalingPoints[2]'?: string;
    TransmogUnlockConditionID?: string;
    TransmogCost?: string;
    IconFileDataID?: string;
    RequiredSkillID?: string;
    RequiredSkillRank?: string;
    ItemLevel?: string;
    Charges?: string;
    ScalingClass?: string;
    ScalingClassRestricted?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Field_5_0_1_15464_015?: string;
    'Field_5_0_1_15464_016[0]'?: string;
    'Field_5_0_1_15464_016[1]'?: string;
    'Field_5_0_1_15464_016[2]'?: string;
    ItemLevelMin?: string;
    ItemLevelMax?: string;
    TransmogUseConditionID?: string;
}

interface SpellItemEnchantmentConditionDatabase{
    ID?: string;
    'Lt_operandType[0]'?: string;
    'Lt_operandType[1]'?: string;
    'Lt_operandType[2]'?: string;
    'Lt_operandType[3]'?: string;
    'Lt_operandType[4]'?: string;
    'Lt_operand[0]'?: string;
    'Lt_operand[1]'?: string;
    'Lt_operand[2]'?: string;
    'Lt_operand[3]'?: string;
    'Lt_operand[4]'?: string;
    'Operator[0]'?: string;
    'Operator[1]'?: string;
    'Operator[2]'?: string;
    'Operator[3]'?: string;
    'Operator[4]'?: string;
    'Rt_operandType[0]'?: string;
    'Rt_operandType[1]'?: string;
    'Rt_operandType[2]'?: string;
    'Rt_operandType[3]'?: string;
    'Rt_operandType[4]'?: string;
    'Rt_operand[0]'?: string;
    'Rt_operand[1]'?: string;
    'Rt_operand[2]'?: string;
    'Rt_operand[3]'?: string;
    'Rt_operand[4]'?: string;
    'Logic[0]'?: string;
    'Logic[1]'?: string;
    'Logic[2]'?: string;
    'Logic[3]'?: string;
    'Logic[4]'?: string;
    'Padding_6_0_1_18179_002[0]'?: string;
    'Padding_6_0_1_18179_002[1]'?: string;
    'Padding_6_0_1_18179_002[2]'?: string;
    'Padding_6_0_1_18179_006[0]'?: string;
    'Padding_6_0_1_18179_006[1]'?: string;
    'Padding_6_0_1_18179_009[0]'?: string;
    'Padding_6_0_1_18179_009[1]'?: string;
    'Padding_6_0_1_18179_009[2]'?: string;
    'Field_7_3_2_25549_000[0]'?: string;
    'Field_7_3_2_25549_000[1]'?: string;
    'Field_7_3_2_25549_000[2]'?: string;
    'Field_7_3_2_25549_000[3]'?: string;
    'Field_7_3_2_25549_000[4]'?: string;
    'Field_7_3_2_25549_001[0]'?: string;
    'Field_7_3_2_25549_001[1]'?: string;
    'Field_7_3_2_25549_001[2]'?: string;
    'Field_7_3_2_25549_001[3]'?: string;
    'Field_7_3_2_25549_001[4]'?: string;
    'Field_7_3_2_25549_002[0]'?: string;
    'Field_7_3_2_25549_002[1]'?: string;
    'Field_7_3_2_25549_002[2]'?: string;
    'Field_7_3_2_25549_002[3]'?: string;
    'Field_7_3_2_25549_002[4]'?: string;
    'Field_7_3_2_25549_003[0]'?: string;
    'Field_7_3_2_25549_003[1]'?: string;
    'Field_7_3_2_25549_003[2]'?: string;
    'Field_7_3_2_25549_003[3]'?: string;
    'Field_7_3_2_25549_003[4]'?: string;
    'Field_7_3_2_25549_004[0]'?: string;
    'Field_7_3_2_25549_004[1]'?: string;
    'Field_7_3_2_25549_004[2]'?: string;
    'Field_7_3_2_25549_004[3]'?: string;
    'Field_7_3_2_25549_004[4]'?: string;
    'Field_7_3_2_25549_005[0]'?: string;
    'Field_7_3_2_25549_005[1]'?: string;
    'Field_7_3_2_25549_005[2]'?: string;
    'Field_7_3_2_25549_005[3]'?: string;
    'Field_7_3_2_25549_005[4]'?: string;
}

interface SpellKeyboundOverrideDatabase{
    ID?: string;
    FunctionID?: string;
    Field_5_0_1_15657_002?: string;
    Function?: string;
    Data?: string;
    Type?: string;
    Field_9_1_0_38709_003?: string;
}

interface SpellLabelDatabase{
    ID?: string;
    SpellID?: string;
    LabelID?: string;
}

interface SpellLearnSpellDatabase{
    ID?: string;
    LearnSpellID?: string;
    OverridesSpellID?: string;
    SpellID?: string;
}

interface SpellLevelsDatabase{
    ID?: string;
    BaseLevel?: string;
    MaxLevel?: string;
    SpellLevel?: string;
    SpellID?: string;
    DifficultyID?: string;
    MaxPassiveAuraLevel?: string;
}

interface SpellMasteryDatabase{
    ID?: string;
    ClassID?: string;
    SpellID?: string;
    Page?: string;
}

interface SpellMechanicDatabase{
    ID?: string;
    State?: string;
    StateName_lang?: string;
}

interface SpellMiscDatabase{
    ID?: string;
    DifficultyID?: string;
    CastingTimeIndex?: string;
    DurationIndex?: string;
    RangeIndex?: string;
    SchoolMask?: string;
    Speed?: string;
    LaunchDelay?: string;
    MinDuration?: string;
    SpellIconFileDataID?: string;
    ActiveIconFileDataID?: string;
    'Attributes[0]'?: string;
    'Attributes[1]'?: string;
    'Attributes[2]'?: string;
    'Attributes[3]'?: string;
    'Attributes[4]'?: string;
    'Attributes[5]'?: string;
    'Attributes[6]'?: string;
    'Attributes[7]'?: string;
    'Attributes[8]'?: string;
    'Attributes[9]'?: string;
    'Attributes[10]'?: string;
    'Attributes[11]'?: string;
    'Attributes[12]'?: string;
    'Attributes[13]'?: string;
    SpellID?: string;
    'SpellVisualID[0]'?: string;
    'SpellVisualID[1]'?: string;
    SpellIconID?: string;
    ActiveIconID?: string;
    ContentTuningID?: string;
    ShowFutureSpellPlayerConditionID?: string;
    'Attributes[14]'?: string;
    SpellVisualScript?: string;
    ActiveSpellVisualScript?: string;
}

interface SpellMiscDifficultyDatabase{
    SpellID?: string;
    DifficultyID?: string;
    SpellMiscID?: string;
}

interface SpellMissileDatabase{
    ID?: string;
    Flags?: string;
    DefaultPitchMin?: string;
    DefaultPitchMax?: string;
    DefaultSpeedMin?: string;
    DefaultSpeedMax?: string;
    RandomizeFacingMin?: string;
    RandomizeFacingMax?: string;
    RandomizePitchMin?: string;
    RandomizePitchMax?: string;
    RandomizeSpeedMin?: string;
    RandomizeSpeedMax?: string;
    Gravity?: string;
    MaxDuration?: string;
    CollisionRadius?: string;
    SpellID?: string;
}

interface SpellMissileMotionDatabase{
    ID?: string;
    Name?: string;
    ScriptBody?: string;
    Flags?: string;
    MissileCount?: string;
}

interface SpellNameDatabase{
    ID?: string;
    Name_lang?: string;
}

interface SpellOverrideNameDatabase{
    ID?: string;
    OverrideName_lang?: string;
    Flags?: string;
    Field_9_1_0_38709_001_lang?: string;
}

interface SpellPowerDatabase{
    ID?: string;
    ManaCost?: string;
    ManaCostPerLevel?: string;
    PowerCost?: string;
    ManaPerSecond?: string;
    PowerDisplayID?: string;
    AltPowerBarID?: string;
    PowerCostPct?: string;
    PowerType?: string;
    PowerPctPerSecond?: string;
    RequiredAuraSpellID?: string;
    SpellID?: string;
    OrderIndex?: string;
    Field_6_0_1_18179_012?: string;
    PowerCostMaxPct?: string;
    OptionalCost?: string;
}

interface SpellPowerDifficultyDatabase{
    ID?: string;
    DifficultyID?: string;
    OrderIndex?: string;
}

interface SpellProceduralEffectDatabase{
    'Value[0]'?: string;
    'Value[1]'?: string;
    'Value[2]'?: string;
    'Value[3]'?: string;
    Type?: string;
    ID?: string;
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
    RadiusMax?: string;
    RadiusMin?: string;
}

interface SpellRangeDatabase{
    ID?: string;
    DisplayName_lang?: string;
    DisplayNameShort_lang?: string;
    RangeMin?: string;
    RangeMax?: string;
    Flags?: string;
    'RangeMin[0]'?: string;
    'RangeMin[1]'?: string;
    'RangeMax[0]'?: string;
    'RangeMax[1]'?: string;
}

interface SpellReagentsDatabase{
    ID?: string;
    'Reagent[0]'?: string;
    'Reagent[1]'?: string;
    'Reagent[2]'?: string;
    'Reagent[3]'?: string;
    'Reagent[4]'?: string;
    'Reagent[5]'?: string;
    'Reagent[6]'?: string;
    'Reagent[7]'?: string;
    'ReagentCount[0]'?: string;
    'ReagentCount[1]'?: string;
    'ReagentCount[2]'?: string;
    'ReagentCount[3]'?: string;
    'ReagentCount[4]'?: string;
    'ReagentCount[5]'?: string;
    'ReagentCount[6]'?: string;
    'ReagentCount[7]'?: string;
    CurrencyID?: string;
    CurrencyCount?: string;
    SpellID?: string;
}

interface SpellReagentsCurrencyDatabase{
    ID?: string;
    SpellID?: string;
    CurrencyTypesID?: string;
    CurrencyCount?: string;
}

interface SpellRuneCostDatabase{
    ID?: string;
    Blood?: string;
    Unholy?: string;
    Frost?: string;
    Field_3_0_1_8303_004?: string;
    RunicPower?: string;
    Chromatic?: string;
}

interface SpellScalingDatabase{
    ID?: string;
    CastTimeMin?: string;
    CastTimeMax?: string;
    CastTimeMaxLevel?: string;
    Class?: string;
    'Coefficient[0]'?: string;
    'Coefficient[1]'?: string;
    'Coefficient[2]'?: string;
    'Variance[0]'?: string;
    'Variance[1]'?: string;
    'Variance[2]'?: string;
    'ComboPointsCoefficient[0]'?: string;
    'ComboPointsCoefficient[1]'?: string;
    'ComboPointsCoefficient[2]'?: string;
    NerfFactor?: string;
    NerfMaxLevel?: string;
    MaxScalingLevel?: string;
    ScalesFromItemLevel?: string;
    SpellID?: string;
    MinScalingLevel?: string;
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
    'ShapeshiftExclude[0]'?: string;
    'ShapeshiftExclude[1]'?: string;
    'ShapeshiftMask[0]'?: string;
    'ShapeshiftMask[1]'?: string;
    StanceBarOrder?: string;
    SpellID?: string;
}

interface SpellShapeshiftFormDatabase{
    ID?: string;
    BonusActionBar?: string;
    Name_lang?: string;
    Flags?: string;
    CreatureType?: string;
    AttackIconID?: string;
    CombatRoundTime?: string;
    'CreatureDisplayID[0]'?: string;
    'CreatureDisplayID[1]'?: string;
    'CreatureDisplayID[2]'?: string;
    'CreatureDisplayID[3]'?: string;
    'PresetSpellID[0]'?: string;
    'PresetSpellID[1]'?: string;
    'PresetSpellID[2]'?: string;
    'PresetSpellID[3]'?: string;
    'PresetSpellID[4]'?: string;
    'PresetSpellID[5]'?: string;
    'PresetSpellID[6]'?: string;
    'PresetSpellID[7]'?: string;
    MountTypeID?: string;
    ExitSoundEntriesID?: string;
    DamageVariance?: string;
    AttackIconFileID?: string;
}

interface SpellSpecialUnitEffectDatabase{
    EnumID?: string;
    SpellVisualEffectNameID?: string;
    ID?: string;
    PositionerID?: string;
}

interface SpellTargetRestrictionsDatabase{
    ID?: string;
    MaxTargets?: string;
    MaxTargetLevel?: string;
    TargetCreatureType?: string;
    Targets?: string;
    ConeAngle?: string;
    Width?: string;
    SpellID?: string;
    DifficultyID?: string;
    ConeDegrees?: string;
}

interface SpellTotemsDatabase{
    ID?: string;
    'RequiredTotemCategoryID[0]'?: string;
    'RequiredTotemCategoryID[1]'?: string;
    'Totem[0]'?: string;
    'Totem[1]'?: string;
    SpellID?: string;
}

interface SpellVisualDatabase{
    ID?: string;
    PrecastKit?: string;
    CastKit?: string;
    ImpactKit?: string;
    StateKit?: string;
    ChannelKit?: string;
    HasMissile?: string;
    MissileModel?: string;
    MissilePathType?: string;
    MissileDestinationAttachment?: string;
    MissileSound?: string;
    HasAreaEffect?: string;
    AreaModel?: string;
    AreaKit?: string;
    AnimEventSoundID?: string;
    WeaponTrailRed?: string;
    WeaponTrailGreen?: string;
    WeaponTrailBlue?: string;
    WeaponTrailAlpha?: string;
    WeaponTrailFadeoutRate?: string;
    WeaponTrailDuration?: string;
    'MissileCastOffset[0]'?: string;
    'MissileCastOffset[1]'?: string;
    'MissileCastOffset[2]'?: string;
    'MissileImpactOffset[0]'?: string;
    'MissileImpactOffset[1]'?: string;
    'MissileImpactOffset[2]'?: string;
    Flags?: string;
    SpellVisualMissileSetID?: string;
    MissileAttachment?: string;
    MissileCastPositionerID?: string;
    MissileImpactPositionerID?: string;
    MissileTargetingKit?: string;
    DamageNumberDelay?: string;
    HostileSpellVisualID?: string;
    CasterSpellVisualID?: string;
    LowViolenceSpellVisualID?: string;
    RaidSpellVisualMissileSetID?: string;
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
    StateDoneKit?: string;
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
    Field_7_3_0_24473_009?: string;
    ReducedUnexpectedCameraMovementSpellVisualID?: string;
}

interface SpellVisualAnimDatabase{
    ID?: string;
    InitialAnimID?: string;
    LoopAnimID?: string;
    AnimKitID?: string;
}

interface SpellVisualAnimNameDatabase{
    AnimID?: string;
    Name?: string;
}

interface SpellVisualColorEffectDatabase{
    ID?: string;
    Duration?: string;
    Color?: string;
    ColorMultiplier?: string;
    RedCurveID?: string;
    GreenCurveID?: string;
    BlueCurveID?: string;
    AlphaCurveID?: string;
    OpacityCurveID?: string;
    Flags?: string;
    Type?: string;
    PositionerID?: string;
}

interface SpellVisualEffectNameDatabase{
    ID?: string;
    FileName?: string;
    SpecialID?: string;
    SpecialAttachPoint?: string;
    AreaEffectSize?: string;
    VisualEffectNameFlags?: string;
    Name?: string;
    Field_2_0_0_6080_003?: string;
    Scale?: string;
    MinAllowedScale?: string;
    MaxAllowedScale?: string;
    Type?: string;
    Alpha?: string;
    Flags?: string;
    'Padding_5_4_0_17266_007[0]'?: string;
    'Padding_5_4_0_17266_007[1]'?: string;
    'Padding_5_4_0_17266_007[2]'?: string;
    EffectRadius?: string;
    GenericID?: string;
    BaseMissileSpeed?: string;
    TextureFileDataID?: string;
    ModelFileDataID?: string;
    RibbonQualityID?: string;
    DissolveEffectID?: string;
    ModelPosition?: string;
    Field_9_1_0_38549_014?: string;
}

interface SpellVisualEventDatabase{
    ID?: string;
    SpellVisualID?: string;
    StartEvent?: string;
    StartMinOffsetMs?: string;
    StartMaxOffsetMs?: string;
    EndEvent?: string;
    EndMinOffsetMs?: string;
    EndMaxOffsetMs?: string;
    TargetType?: string;
    SpellVisualKitID?: string;
}

interface SpellVisualKitDatabase{
    ID?: string;
    KitType?: string;
    Anim?: string;
    HeadEffect?: string;
    ChestEffect?: string;
    BaseEffect?: string;
    LeftHandEffect?: string;
    RightHandEffect?: string;
    BreathEffect?: string;
    'SpecialEffect[0]'?: string;
    'SpecialEffect[1]'?: string;
    'SpecialEffect[2]'?: string;
    CharacterProcedure?: string;
    'CharacterParam[0]'?: string;
    'CharacterParam[1]'?: string;
    'CharacterParam[2]'?: string;
    'CharacterParam[3]'?: string;
    SoundID?: string;
    ShakeID?: string;
    AnimID?: string;
    'CharProc[0]'?: string;
    'CharProc[1]'?: string;
    'CharProc[2]'?: string;
    'CharProc[3]'?: string;
    'CharParamZero[0]'?: string;
    'CharParamZero[1]'?: string;
    'CharParamZero[2]'?: string;
    'CharParamZero[3]'?: string;
    'CharParamOne[0]'?: string;
    'CharParamOne[1]'?: string;
    'CharParamOne[2]'?: string;
    'CharParamOne[3]'?: string;
    'CharParamTwo[0]'?: string;
    'CharParamTwo[1]'?: string;
    'CharParamTwo[2]'?: string;
    'CharParamTwo[3]'?: string;
    'CharParamThree[0]'?: string;
    'CharParamThree[1]'?: string;
    'CharParamThree[2]'?: string;
    'CharParamThree[3]'?: string;
    WorldEffect?: string;
    LeftWeaponEffect?: string;
    RightWeaponEffect?: string;
    FallbackSpellVisualKitID?: string;
    DelayMin?: string;
    DelayMax?: string;
    FallbackPriority?: string;
    'Flags[0]'?: string;
    'Flags[1]'?: string;
    Flags?: string;
    StartAnimID?: string;
    AnimKitID?: string;
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
    'Field_6_0_1_18179_012[0]'?: string;
    'Field_6_0_1_18179_012[1]'?: string;
    'Field_6_0_1_18179_012[2]'?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    Field_6_0_1_18179_015?: string;
    'Field_6_0_1_18179_016[0]'?: string;
    'Field_6_0_1_18179_016[1]'?: string;
    'Field_6_0_1_18179_016[2]'?: string;
    'Field_6_0_1_18179_016[3]'?: string;
    'Field_6_0_1_18179_017[0]'?: string;
    'Field_6_0_1_18179_017[1]'?: string;
    'Field_6_0_1_18179_017[2]'?: string;
    'Field_6_0_1_18179_017[3]'?: string;
    'Field_6_0_1_18179_018[0]'?: string;
    'Field_6_0_1_18179_018[1]'?: string;
    'Field_6_0_1_18179_018[2]'?: string;
    'Field_6_0_1_18179_018[3]'?: string;
    'Field_6_0_1_18179_019[0]'?: string;
    'Field_6_0_1_18179_019[1]'?: string;
    'Field_6_0_1_18179_019[2]'?: string;
    'Field_6_0_1_18179_019[3]'?: string;
    'Field_6_0_1_18179_020[0]'?: string;
    'Field_6_0_1_18179_020[1]'?: string;
    'Field_6_0_1_18179_020[2]'?: string;
    'Field_6_0_1_18179_020[3]'?: string;
    Field_6_0_1_18179_021?: string;
    Field_6_0_1_18179_022?: string;
    Field_7_3_2_25549_001?: string;
    ClutterLevel?: string;
}

interface SpellVisualKitAreaModelDatabase{
    ID?: string;
    Name?: string;
    EnumID?: string;
    Flags?: string;
    LifeTime?: string;
    EmissionRate?: string;
    Spacing?: string;
    ModelScale?: string;
    ModelFileDataID?: string;
}

interface SpellVisualKitEffectDatabase{
    ID?: string;
    EffectType?: string;
    Effect?: string;
    ParentSpellVisualKitID?: string;
}

interface SpellVisualKitModelAttachDatabase{
    ID?: string;
    ParentSpellVisualKitID?: string;
    SpellVisualEffectNameID?: string;
    AttachmentID?: string;
    'Offset[0]'?: string;
    'Offset[1]'?: string;
    'Offset[2]'?: string;
    Yaw?: string;
    Pitch?: string;
    Roll?: string;
    Field_4_0_6_13623_008?: string;
    StartAnimID?: string;
    AnimID?: string;
    EndAnimID?: string;
    AnimKitID?: string;
    Field_6_0_1_18179_008?: string;
    Field_6_0_1_18179_013?: string;
    Field_6_0_1_18179_014?: string;
    Field_7_3_2_25549_000?: string;
    'OffsetVariation[0]'?: string;
    'OffsetVariation[1]'?: string;
    'OffsetVariation[2]'?: string;
    Flags?: string;
    PositionerID?: string;
    YawVariation?: string;
    PitchVariation?: string;
    RollVariation?: string;
    Scale?: string;
    ScaleVariation?: string;
    LowDefModelAttachID?: string;
    StartDelay?: string;
    Field_9_0_1_33978_021?: string;
}

interface SpellVisualKitPickerDatabase{
    ID?: string;
    PlayerConditionID?: string;
    Field_9_0_5_37503_002?: string;
}

interface SpellVisualKitPickerEntryDatabase{
    ID?: string;
    SpellVisualKitID?: string;
    Probability?: string;
    SpellVisualKitPickerID?: string;
}

interface SpellVisualMissileDatabase{
    'CastOffset[0]'?: string;
    'CastOffset[1]'?: string;
    'CastOffset[2]'?: string;
    'ImpactOffset[0]'?: string;
    'ImpactOffset[1]'?: string;
    'ImpactOffset[2]'?: string;
    ID?: string;
    SpellVisualEffectNameID?: string;
    SoundEntriesID?: string;
    Attachment?: string;
    DestinationAttachment?: string;
    CastPositionerID?: string;
    ImpactPositionerID?: string;
    FollowGroundHeight?: string;
    FollowGroundDropSpeed?: string;
    FollowGroundApproach?: string;
    Flags?: string;
    SpellMissileMotionID?: string;
    AnimKitID?: string;
    SpellVisualMissileSetID?: string;
    Field_5_4_0_17266_006?: string;
    ClutterLevel?: string;
    Field_9_0_1_33978_016?: string;
}

interface SpellVisualPrecastTransitionsDatabase{
    ID?: string;
    PrecastLoadAnimName?: string;
    PrecastHoldAnimName?: string;
}

interface SpellVisualScreenEffectDatabase{
    ID?: string;
    ScreenEffectID?: string;
    ScreenEffectTypeID?: string;
}

interface SpellXDescriptionVariablesDatabase{
    ID?: string;
    SpellID?: string;
    SpellDescriptionVariablesID?: string;
}

interface SpellXSpellVisualDatabase{
    SpellID?: string;
    SpellVisualID?: string;
    ID?: string;
    Field_7_3_2_25549_003?: string;
    Probability?: string;
    CasterPlayerConditionID?: string;
    CasterUnitConditionID?: string;
    ViewerPlayerConditionID?: string;
    ViewerUnitConditionID?: string;
    SpellIconFileID?: string;
    ActiveIconFileID?: string;
    Flags?: string;
    DifficultyID?: string;
    Priority?: string;
}

interface StableSlotPricesDatabase{
    ID?: string;
    Cost?: string;
}

interface StartupFilesDatabase{
    ID?: string;
    FileDataID?: string;
    Locale?: string;
    BytesRequired?: string;
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
    'TextureFileDataID[0]'?: string;
    'TextureFileDataID[1]'?: string;
}

interface StringLookupsDatabase{
    ID?: string;
    String?: string;
}

interface SummonPropertiesDatabase{
    ID?: string;
    Control?: string;
    Faction?: string;
    Title?: string;
    Slot?: string;
    Flags?: string;
}

interface TabardBackgroundTexturesDatabase{
    ID?: string;
    'TorsoTexture[0]'?: string;
    'TorsoTexture[1]'?: string;
}

interface TabardEmblemTexturesDatabase{
    ID?: string;
    'TorsoTexture[0]'?: string;
    'TorsoTexture[1]'?: string;
}

interface TactKeyDatabase{
    ID?: string;
    'Key[0]'?: string;
    'Key[1]'?: string;
    'Key[2]'?: string;
    'Key[3]'?: string;
    'Key[4]'?: string;
    'Key[5]'?: string;
    'Key[6]'?: string;
    'Key[7]'?: string;
    'Key[8]'?: string;
    'Key[9]'?: string;
    'Key[10]'?: string;
    'Key[11]'?: string;
    'Key[12]'?: string;
    'Key[13]'?: string;
    'Key[14]'?: string;
    'Key[15]'?: string;
}

interface TactKeyLookupDatabase{
    ID?: string;
    'TACTID[0]'?: string;
    'TACTID[1]'?: string;
    'TACTID[2]'?: string;
    'TACTID[3]'?: string;
    'TACTID[4]'?: string;
    'TACTID[5]'?: string;
    'TACTID[6]'?: string;
    'TACTID[7]'?: string;
}

interface TalentDatabase{
    ID?: string;
    TabID?: string;
    TierID?: string;
    ColumnIndex?: string;
    'SpellRank[0]'?: string;
    'SpellRank[1]'?: string;
    'SpellRank[2]'?: string;
    'SpellRank[3]'?: string;
    'SpellRank[4]'?: string;
    'SpellRank[5]'?: string;
    'SpellRank[6]'?: string;
    'SpellRank[7]'?: string;
    'SpellRank[8]'?: string;
    'PrereqTalent[0]'?: string;
    'PrereqTalent[1]'?: string;
    'PrereqTalent[2]'?: string;
    'PrereqRank[0]'?: string;
    'PrereqRank[1]'?: string;
    'PrereqRank[2]'?: string;
    Flags?: string;
    Description_lang?: string;
    SpellID?: string;
    OverridesSpellID?: string;
    RequiredSpellID?: string;
    SpecID?: string;
    'CategoryMask[0]'?: string;
    'CategoryMask[1]'?: string;
    ClassID?: string;
}

interface TalentTabDatabase{
    ID?: string;
    Name_lang?: string;
    SpellIconID?: string;
    RaceMask?: string;
    ClassMask?: string;
    BackgroundFile?: string;
    OrderIndex?: string;
    CategoryEnumID?: string;
    PetTalentMask?: string;
    Description_lang?: string;
    RoleMask?: string;
    'MasterySpellID[0]'?: string;
    'MasterySpellID[1]'?: string;
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
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    Name_lang?: string;
    'MapOffset[0]'?: string;
    'MapOffset[1]'?: string;
    'FlightMapOffset[0]'?: string;
    'FlightMapOffset[1]'?: string;
    ConditionID?: string;
    CharacterBitNumber?: string;
    Flags?: string;
    UiTextureKitID?: string;
    Facing?: string;
    SpecialIconConditionID?: string;
    VisibilityConditionID?: string;
    'MountCreatureID[0]'?: string;
    'MountCreatureID[1]'?: string;
    MinimapAtlasMemberID?: string;
}

interface TaxiPathDatabase{
    ID?: string;
    FromTaxiNode?: string;
    ToTaxiNode?: string;
    Cost?: string;
}

interface TaxiPathNodeDatabase{
    ID?: string;
    PathID?: string;
    NodeIndex?: string;
    ContinentID?: string;
    'Loc[0]'?: string;
    'Loc[1]'?: string;
    'Loc[2]'?: string;
    Flags?: string;
    Delay?: string;
    ArrivalEventID?: string;
    DepartureEventID?: string;
}

interface TeamContributionPointsDatabase{
    ID?: string;
    Data?: string;
}

interface TerrainColorGradingRampDatabase{
    ID?: string;
    Min?: string;
    Max?: string;
    Texture0?: string;
    Texture1?: string;
}

interface TerrainMaterialDatabase{
    ID?: string;
    Name?: string;
    Shader?: string;
    EnvMapPath?: string;
    EnvMapDiffuseFileID?: string;
    EnvMapSpecularFileID?: string;
}

interface TerrainTypeDatabase{
    ID?: string;
    TerrainDesc?: string;
    TerrainID?: string;
    FootstepSprayRun?: string;
    FootstepSprayWalk?: string;
    SoundID?: string;
    Flags?: string;
}

interface TerrainTypeSoundsDatabase{
    ID?: string;
    Name?: string;
}

interface TextureBlendSetDatabase{
    ID?: string;
    'TextureFileDataID[0]'?: string;
    'TextureFileDataID[1]'?: string;
    'TextureFileDataID[2]'?: string;
    'TextureScrollRateU[0]'?: string;
    'TextureScrollRateU[1]'?: string;
    'TextureScrollRateU[2]'?: string;
    'TextureScrollRateV[0]'?: string;
    'TextureScrollRateV[1]'?: string;
    'TextureScrollRateV[2]'?: string;
    'TextureScaleU[0]'?: string;
    'TextureScaleU[1]'?: string;
    'TextureScaleU[2]'?: string;
    'TextureScaleV[0]'?: string;
    'TextureScaleV[1]'?: string;
    'TextureScaleV[2]'?: string;
    'ModX[0]'?: string;
    'ModX[1]'?: string;
    'ModX[2]'?: string;
    'ModX[3]'?: string;
    SwizzleRed?: string;
    SwizzleGreen?: string;
    SwizzleBlue?: string;
    SwizzleAlpha?: string;
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

interface TotemCategoryDatabase{
    ID?: string;
    Name_lang?: string;
    TotemCategoryType?: string;
    TotemCategoryMask?: string;
}

interface ToyDatabase{
    ItemID?: string;
    SourceText_lang?: string;
    Flags?: string;
    SourceTypeEnum?: string;
    ID?: string;
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

interface TradeSkillItemDatabase{
    ID?: string;
    ItemLevel?: string;
    RequiredLevel?: string;
}

interface TransformMatrixDatabase{
    ID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    Yaw?: string;
    Pitch?: string;
    Roll?: string;
    Scale?: string;
}

interface TransmogDefaultLevelDatabase{
    ID?: string;
    ExpansionID?: string;
    Characterlevel?: string;
    PlayerConditionID?: string;
}

interface TransmogHolidayDatabase{
    ID?: string;
    RequiredTransmogHoliday?: string;
}

interface TransmogIllusionDatabase{
    ID?: string;
    UnlockConditionID?: string;
    TransmogCost?: string;
    SpellItemEnchantmentID?: string;
    Flags?: string;
}

interface TransmogSetDatabase{
    Name_lang?: string;
    ID?: string;
    ClassMask?: string;
    TrackingQuestID?: string;
    Flags?: string;
    TransmogSetGroupID?: string;
    ItemNameDescriptionID?: string;
    ParentTransmogSetID?: string;
    ExpansionID?: string;
    UiOrder?: string;
    Field_8_1_0_28294_008?: string;
    PatchIntroduced?: string;
    ConditionID?: string;
}

interface TransmogSetGroupDatabase{
    Name_lang?: string;
    ID?: string;
}

interface TransmogSetItemDatabase{
    ID?: string;
    TransmogSetID?: string;
    ItemModifiedAppearanceID?: string;
    Flags?: string;
}

interface TransportAnimationDatabase{
    ID?: string;
    TransportID?: string;
    TimeIndex?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    SequenceID?: string;
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

interface TransportRotationDatabase{
    ID?: string;
    GameObjectsID?: string;
    TimeIndex?: string;
    'Rot[0]'?: string;
    'Rot[1]'?: string;
    'Rot[2]'?: string;
    'Rot[3]'?: string;
}

interface TrophyDatabase{
    ID?: string;
    Name_lang?: string;
    TrophyTypeID?: string;
    GameObjectDisplayInfoID?: string;
    PlayerConditionID?: string;
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

interface UICovenantAbilityDatabase{
    ID?: string;
    CovenantPreviewID?: string;
    SpellID?: string;
    AbilityType?: string;
    SoulbindDisplayInfoID?: string;
}

interface UICovenantPreviewDatabase{
    ID?: string;
    CovenantID?: string;
    UiMapID?: string;
    Crest?: string;
    TransmogSetID0?: string;
    TextureKit?: string;
    MountID?: string;
    PlayerChoiceResponseID?: string;
    Field_9_0_1_33978_008?: string;
    Field_9_0_1_34902_009?: string;
    TransmogSetID1?: string;
    TransmogSetID2?: string;
    TransmogSetID3?: string;
    FeatureName_lang?: string;
    FeatureDescription_lang?: string;
    FeatureTextureID?: string;
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

interface UIExpansionDisplayInfoDatabase{
    ID?: string;
    ExpansionLogo?: string;
    ExpansionBanner?: string;
    ExpansionLevel?: string;
}

interface UIExpansionDisplayInfoIconDatabase{
    ID?: string;
    FeatureDescription_lang?: string;
    ParentID?: string;
    FeatureIcon?: string;
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

interface UISoundLookupsDatabase{
    ID?: string;
    SoundID?: string;
    SoundName?: string;
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

interface UiCamFbackTransmogChrRaceDatabase{
    ID?: string;
    UiCameraID?: string;
    ChrRaceID?: string;
    Gender?: string;
    InventoryType?: string;
    Variation?: string;
}

interface UiCamFbackTransmogWeaponDatabase{
    ID?: string;
    UiCameraID?: string;
    ItemClass?: string;
    ItemSubclass?: string;
    InventoryType?: string;
}

interface UiCameraDatabase{
    ID?: string;
    Name?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    'LookAt[0]'?: string;
    'LookAt[1]'?: string;
    'LookAt[2]'?: string;
    'Up[0]'?: string;
    'Up[1]'?: string;
    'Up[2]'?: string;
    AnimFrame?: string;
    UiCameraTypeID?: string;
    AnimVariation?: string;
    Flags?: string;
    AnimID?: string;
}

interface UiCameraTypeDatabase{
    ID?: string;
    Name?: string;
    Width?: string;
    Height?: string;
}

interface UiCanvasDatabase{
    ID?: string;
    Width?: string;
    Height?: string;
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
    TutorialText_lang?: string;
    TitleText_lang?: string;
    Description_lang?: string;
    ButtonText_lang?: string;
    ID?: string;
    UiTextureKitID?: string;
    OpenSoundKitID?: string;
    CloseSoundKitID?: string;
    Cost?: string;
    ItemInteractionFrameType?: string;
    InteractionSpellID?: string;
    CurrencyTypeID?: string;
    Field_8_3_0_32414_012?: string;
    DropInSlotSoundKitID?: string;
    TakeOutSlotSoundKitID?: string;
}

interface UiMapDatabase{
    Name_lang?: string;
    ID?: string;
    ParentUiMapID?: string;
    Flags?: string;
    System?: string;
    Type?: string;
    BountySetID?: string;
    BountyDisplayLocation?: string;
    VisibilityPlayerConditionID?: string;
    HelpTextPosition?: string;
    BkgAtlasID?: string;
    LevelRangeMin?: string;
    LevelRangeMax?: string;
    BkgFileDataID?: string;
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
    MinScale?: string;
    MaxScale?: string;
    AdditionalZoomSteps?: string;
    LayerWidth?: string;
    LayerHeight?: string;
    TileWidth?: string;
    TileHeight?: string;
    LayerIndex?: string;
    UiMapArtStyleID?: string;
}

interface UiMapArtTileDatabase{
    ID?: string;
    FileDataID?: string;
    RowIndex?: string;
    ColIndex?: string;
    LayerIndex?: string;
    UiMapArtID?: string;
}

interface UiMapAssignmentDatabase{
    ID?: string;
    UiMapID?: string;
    OrderIndex?: string;
    'UiMin[0]'?: string;
    'UiMin[1]'?: string;
    'UiMax[0]'?: string;
    'UiMax[1]'?: string;
    MapID?: string;
    AreaID?: string;
    WMODoodadPlacementID?: string;
    WMOGroupID?: string;
    'Region[0]'?: string;
    'Region[1]'?: string;
    'Region[2]'?: string;
    'Region[3]'?: string;
    'Region[4]'?: string;
    'Region[5]'?: string;
}

interface UiMapFogOfWarDatabase{
    ID?: string;
    UiMapID?: string;
    PlayerConditionID?: string;
    UiMapFogOfWarVisID?: string;
}

interface UiMapFogOfWarVisualizationDatabase{
    ID?: string;
    MaskScalar?: string;
    BackgroundAtlasID?: string;
    MaskAtlasID?: string;
}

interface UiMapGroupMemberDatabase{
    ID?: string;
    Name_lang?: string;
    RelativeHeightIndex?: string;
    UiMapGroupID?: string;
    UiMapID?: string;
    FloorIndex?: string;
}

interface UiMapLinkDatabase{
    'UiMin[0]'?: string;
    'UiMin[1]'?: string;
    'UiMax[0]'?: string;
    'UiMax[1]'?: string;
    ID?: string;
    ParentUiMapID?: string;
    OrderIndex?: string;
    ChildUiMapID?: string;
    OverrideHighlightFdID?: string;
    OverrideHighlightAtlasID?: string;
    Flags?: string;
}

interface UiMapPOIDatabase{
    ContinentID?: string;
    'WorldLoc[0]'?: string;
    'WorldLoc[1]'?: string;
    'WorldLoc[2]'?: string;
    UiTextureAtlasMemberID?: string;
    Flags?: string;
    PoiDataType?: string;
    PoiData?: string;
    ID?: string;
}

interface UiMapXMapArtDatabase{
    ID?: string;
    UiMapArtID?: string;
    PhaseID?: string;
    UiMapID?: string;
}

interface UiModelSceneDatabase{
    ID?: string;
    UiSystemType?: string;
    Flags?: string;
}

interface UiModelSceneActorDatabase{
    ScriptTag?: string;
    'Position[0]'?: string;
    'Position[1]'?: string;
    'Position[2]'?: string;
    OrientationYaw?: string;
    OrientationPitch?: string;
    OrientationRoll?: string;
    NormalizedScale?: string;
    Flags?: string;
    ID?: string;
    UiModelSceneID?: string;
    UiModelSceneActorDisplayID?: string;
}

interface UiModelSceneActorDisplayDatabase{
    ID?: string;
    AnimSpeed?: string;
    Alpha?: string;
    Scale?: string;
    AnimationID?: string;
    SequenceVariation?: string;
    AnimKitID?: string;
    SpellVisualKitID?: string;
}

interface UiModelSceneCameraDatabase{
    ScriptTag?: string;
    'Target[0]'?: string;
    'Target[1]'?: string;
    'Target[2]'?: string;
    'ZoomedTargetOffset[0]'?: string;
    'ZoomedTargetOffset[1]'?: string;
    'ZoomedTargetOffset[2]'?: string;
    Yaw?: string;
    Pitch?: string;
    Roll?: string;
    ZoomedYawOffset?: string;
    ZoomedPitchOffset?: string;
    ZoomedRollOffset?: string;
    ZoomDistance?: string;
    MinZoomDistance?: string;
    MaxZoomDistance?: string;
    Flags?: string;
    CameraType?: string;
    ID?: string;
    UiModelSceneID?: string;
}

interface UiPartyPoseDatabase{
    ID?: string;
    UiWidgetSetID?: string;
    UiModelSceneID?: string;
    MapID?: string;
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
    FileDataID?: string;
    AtlasWidth?: string;
    AtlasHeight?: string;
    UiCanvasID?: string;
}

interface UiTextureAtlasElementDatabase{
    Name?: string;
    ID?: string;
}

interface UiTextureAtlasElementOverrideDatabase{
    ID?: string;
    UiTextureAtlasElement?: string;
    ReplacementElement?: string;
}

interface UiTextureAtlasMemberDatabase{
    ID?: string;
    CommittedName?: string;
    UiTextureAtlasID?: string;
    CommittedLeft?: string;
    CommittedRight?: string;
    CommittedTop?: string;
    CommittedBottom?: string;
    CommittedFlags?: string;
    UiCanvasID?: string;
    UiTextureAtlasElementID?: string;
    OverrideWidth?: string;
    OverrideHeight?: string;
}

interface UiTextureKitDatabase{
    ID?: string;
    KitPrefix?: string;
}

interface UiWidgetDatabase{
    ID?: string;
    WidgetTag?: string;
    ParentSetID?: string;
    VisID?: string;
    MapID?: string;
    PlayerConditionID?: string;
    OrderIndex?: string;
    Field_8_2_5_31337_006?: string;
    LayoutDirection?: string;
}

interface UiWidgetConstantSourceDatabase{
    ID?: string;
    ReqID?: string;
    Value?: string;
    ParentWidgetID?: string;
}

interface UiWidgetDataSourceDatabase{
    ID?: string;
    SourceID?: string;
    SourceType?: string;
    ReqID?: string;
    ParentWidgetID?: string;
}

interface UiWidgetMapDatabase{
    ID?: string;
    ParentWidgetID?: string;
    MapID?: string;
}

interface UiWidgetSetDatabase{
    ID?: string;
    LayoutDirection?: string;
    VerticalPadding?: string;
}

interface UiWidgetStringSourceDatabase{
    ID?: string;
    Value_lang?: string;
    ReqID?: string;
    ParentWidgetID?: string;
}

interface UiWidgetVisTypeDataReqDatabase{
    ID?: string;
    VisType?: string;
    ValueType?: string;
    Field_8_1_5_28938_002?: string;
    Default?: string;
    Name?: string;
}

interface UiWidgetVisualizationDatabase{
    ID?: string;
    VisType?: string;
    TextureKit?: string;
    FrameTextureKit?: string;
    SizeSetting?: string;
    Name?: string;
    InAnimType?: string;
    OutAnimType?: string;
    WidgetScale?: string;
    ScriptedAnimationEffectID?: string;
    ModelSceneLayer?: string;
}

interface UiWidgetXWidgetSetDatabase{
    ID?: string;
    ParentSet?: string;
    UiWidgetID?: string;
}

interface UnitBloodDatabase{
    ID?: string;
    'CombatBloodSpurtFront[0]'?: string;
    'CombatBloodSpurtFront[1]'?: string;
    'CombatBloodSpurtBack[0]'?: string;
    'CombatBloodSpurtBack[1]'?: string;
    'GroundBlood[0]'?: string;
    'GroundBlood[1]'?: string;
    'GroundBlood[2]'?: string;
    'GroundBlood[3]'?: string;
    'GroundBlood[4]'?: string;
    PlayerCritBloodSpurtID?: string;
    PlayerHitBloodSpurtID?: string;
    DefaultBloodSpurtID?: string;
    PlayerOmniCritBloodSpurtID?: string;
    PlayerOmniHitBloodSpurtID?: string;
    DefaultOmniBloodSpurtID?: string;
}

interface UnitBloodLevelsDatabase{
    ID?: string;
    'Violencelevel[0]'?: string;
    'Violencelevel[1]'?: string;
    'Violencelevel[2]'?: string;
}

interface UnitConditionDatabase{
    ID?: string;
    Flags?: string;
    'Variable[0]'?: string;
    'Variable[1]'?: string;
    'Variable[2]'?: string;
    'Variable[3]'?: string;
    'Variable[4]'?: string;
    'Variable[5]'?: string;
    'Variable[6]'?: string;
    'Variable[7]'?: string;
    'Op[0]'?: string;
    'Op[1]'?: string;
    'Op[2]'?: string;
    'Op[3]'?: string;
    'Op[4]'?: string;
    'Op[5]'?: string;
    'Op[6]'?: string;
    'Op[7]'?: string;
    'Value[0]'?: string;
    'Value[1]'?: string;
    'Value[2]'?: string;
    'Value[3]'?: string;
    'Value[4]'?: string;
    'Value[5]'?: string;
    'Value[6]'?: string;
    'Value[7]'?: string;
}

interface UnitPowerBarDatabase{
    ID?: string;
    Name_lang?: string;
    Cost_lang?: string;
    OutOfError_lang?: string;
    ToolTip_lang?: string;
    MinPower?: string;
    MaxPower?: string;
    StartPower?: string;
    CenterPower?: string;
    RegenerationPeace?: string;
    RegenerationCombat?: string;
    BarType?: string;
    Flags?: string;
    StartInset?: string;
    EndInset?: string;
    'FileDataID[0]'?: string;
    'FileDataID[1]'?: string;
    'FileDataID[2]'?: string;
    'FileDataID[3]'?: string;
    'FileDataID[4]'?: string;
    'FileDataID[5]'?: string;
    'Color[0]'?: string;
    'Color[1]'?: string;
    'Color[2]'?: string;
    'Color[3]'?: string;
    'Color[4]'?: string;
    'Color[5]'?: string;
}

interface UnitTestDatabase{
    Field_1_13_0_28211_000?: string;
    Field_1_13_0_28211_001?: string;
    ID?: string;
    Field_1_13_0_28211_003?: string;
    Field_1_13_0_28211_004?: string;
}

interface UnitTestSparseDatabase{
    Field_0?: string;
    ID?: string;
    Field_2?: string;
}

interface VehicleDatabase{
    ID?: string;
    Flags?: string;
    FlagsB?: string;
    TurnSpeed?: string;
    PitchSpeed?: string;
    PitchMin?: string;
    PitchMax?: string;
    MouseLookOffsetPitch?: string;
    CameraFadeDistScalarMin?: string;
    CameraFadeDistScalarMax?: string;
    CameraPitchOffset?: string;
    FacingLimitRight?: string;
    FacingLimitLeft?: string;
    CameraYawOffset?: string;
    VehicleUIIndicatorID?: string;
    MissileTargetingID?: string;
    UiLocomotionType?: string;
    'SeatID[0]'?: string;
    'SeatID[1]'?: string;
    'SeatID[2]'?: string;
    'SeatID[3]'?: string;
    'SeatID[4]'?: string;
    'SeatID[5]'?: string;
    'SeatID[6]'?: string;
    'SeatID[7]'?: string;
    'PowerDisplayID[0]'?: string;
    'PowerDisplayID[1]'?: string;
    'PowerDisplayID[2]'?: string;
    Field_3_0_1_8622_011?: string;
    Field_3_0_1_8622_012?: string;
    Field_3_0_1_8622_013?: string;
    Field_3_0_1_8622_014?: string;
    Field_3_0_1_8622_015?: string;
    Field_3_0_1_8622_016?: string;
    Field_3_0_1_8622_017?: string;
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
    'MsslTrgtImpactRadius[0]'?: string;
    'MsslTrgtImpactRadius[1]'?: string;
    Field_3_0_1_8788_028?: string;
    Field_3_0_1_8788_029?: string;
    'PowerType[0]'?: string;
    'PowerType[1]'?: string;
    'PowerType[2]'?: string;
    'PowerToken[0]'?: string;
    'PowerToken[1]'?: string;
    'PowerToken[2]'?: string;
    'MsslTrgtImpactModel[0]'?: string;
    'MsslTrgtImpactModel[1]'?: string;
    MsslTrgtImpactTexRadius?: string;
    UiSeatIndicatorType?: string;
    VehiclePOITypeID?: string;
}

interface VehiclePOITypeDatabase{
    ID?: string;
    Flags?: string;
    TextureWidth?: string;
    TextureHeight?: string;
    OccupiedTexture?: string;
    UnoccupiedTexture?: string;
}

interface VehicleSeatDatabase{
    ID?: string;
    Flags?: string;
    AttachmentID?: string;
    'AttachmentOffset[0]'?: string;
    'AttachmentOffset[1]'?: string;
    'AttachmentOffset[2]'?: string;
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
    UiSkin?: string;
    FlagsB?: string;
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
    CameraEnteringDelay?: string;
    CameraEnteringDuration?: string;
    CameraExitingDelay?: string;
    CameraExitingDuration?: string;
    'CameraOffset[0]'?: string;
    'CameraOffset[1]'?: string;
    'CameraOffset[2]'?: string;
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

interface VideoHardwareDatabase{
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
    OglPixelShader?: string;
    D3dPixelShader?: string;
    OglOverrides?: string;
    D3dOverrides?: string;
    ID?: string;
    FixLag?: string;
    Multisample?: string;
    Atlasdisable?: string;
}

interface VignetteDatabase{
    ID?: string;
    Name_lang?: string;
    QuestFeedbackEffectID?: string;
    Flags?: string;
    MaxHeight?: string;
    MinHeight?: string;
    PlayerConditionID?: string;
    VisibleTrackingQuestID?: string;
    VignetteType?: string;
    RewardQuestID?: string;
    UiWidgetSetID?: string;
}

interface VirtualAttachmentDatabase{
    ID?: string;
    Name?: string;
    PositionerID?: string;
}

interface VirtualAttachmentCustomizationDatabase{
    ID?: string;
    FileDataID?: string;
    VirtualAttachmentID?: string;
    PositionerID?: string;
}

interface VocalUISoundsDatabase{
    ID?: string;
    VocalUIEnum?: string;
    RaceID?: string;
    'NormalSoundID[0]'?: string;
    'NormalSoundID[1]'?: string;
    'PissedSoundID[0]'?: string;
    'PissedSoundID[1]'?: string;
    ClassID?: string;
}

interface VolumeFogConditionDatabase{
    ID?: string;
    PlayerConditionID?: string;
    WhenFalse?: string;
    WhenTrue?: string;
    VFOG_uID?: string;
}

interface WMOAreaTableDatabase{
    ID?: string;
    WMOID?: string;
    NameSetID?: string;
    WMOGroupID?: string;
    DayAmbienceSoundID?: string;
    NightAmbienceSoundID?: string;
    SoundProviderPref?: string;
    SoundProviderPrefUnderwater?: string;
    MIDIAmbience?: string;
    MIDIAmbienceUnderwater?: string;
    ZoneMusic?: string;
    IntroSound?: string;
    IntroPriority?: string;
    Flags?: string;
    AreaName_lang?: string;
    AmbienceID?: string;
    Field_0_7_0_3694_010?: string;
    AreaTableID?: string;
    UwIntroSound?: string;
    UwZoneMusic?: string;
    UwAmbience?: string;
    InlineWMOID?: string;
}

interface WMOMinimapTextureDatabase{
    ID?: string;
    FileDataID?: string;
    WMOID?: string;
    GroupNum?: string;
    BlockX?: string;
    BlockY?: string;
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
    Field_8_1_5_29281_003?: string;
    Field_8_1_5_29281_004?: string;
    PlayerConditionID?: string;
    Flags?: string;
    Field_8_2_0_30080_005?: string;
    Field_8_2_0_30080_006?: string;
}

interface WaypointSafeLocsDatabase{
    ID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    'Pos[2]'?: string;
    MapID?: string;
}

interface WbAccessControlListDatabase{
    ID?: string;
    URL?: string;
    GrantFlags?: string;
    RevokeFlags?: string;
    WowEditInternal?: string;
    RegionFlags?: string;
    RegionID?: string;
}

interface WbCertBlacklistDatabase{
    ID?: string;
    Field_5_3_0_16965_001?: string;
    'Field_5_3_0_16965_002[0]'?: string;
    'Field_5_3_0_16965_002[1]'?: string;
    'Field_5_3_0_16965_002[2]'?: string;
    'Field_5_3_0_16965_002[3]'?: string;
    'Field_5_3_0_16965_002[4]'?: string;
    'Field_5_3_0_16965_002[5]'?: string;
    'Field_5_3_0_16965_002[6]'?: string;
    'Field_5_3_0_16965_002[7]'?: string;
    'Field_5_3_0_16965_002[8]'?: string;
    'Field_5_3_0_16965_002[9]'?: string;
    'Field_5_3_0_16965_002[10]'?: string;
    'Field_5_3_0_16965_002[11]'?: string;
    'Field_5_3_0_16965_002[12]'?: string;
    'Field_5_3_0_16965_002[13]'?: string;
    'Field_5_3_0_16965_002[14]'?: string;
    'Field_5_3_0_16965_002[15]'?: string;
    'Field_5_3_0_16965_002[16]'?: string;
    'Field_5_3_0_16965_002[17]'?: string;
    'Field_5_3_0_16965_002[18]'?: string;
    'Field_5_3_0_16965_002[19]'?: string;
}

interface WbCertWhitelistDatabase{
    ID?: string;
    Domain?: string;
    GrantAccess?: string;
    RevokeAccess?: string;
    'Padding_5_3_0_16965_004[0]'?: string;
    'Padding_5_3_0_16965_004[1]'?: string;
    WowEditInternal?: string;
}

interface WbPermissionsDatabase{
    ID?: string;
    Field_5_3_0_16965_001?: string;
    Field_5_3_0_16965_002?: string;
    FilePath?: string;
    GrantAccess?: string;
}

interface WeaponImpactSoundsDatabase{
    ID?: string;
    WeaponSubClassID?: string;
    ParrySoundType?: string;
    'ImpactSoundID[0]'?: string;
    'ImpactSoundID[1]'?: string;
    'ImpactSoundID[2]'?: string;
    'ImpactSoundID[3]'?: string;
    'ImpactSoundID[4]'?: string;
    'ImpactSoundID[5]'?: string;
    'ImpactSoundID[6]'?: string;
    'ImpactSoundID[7]'?: string;
    'ImpactSoundID[8]'?: string;
    'ImpactSoundID[9]'?: string;
    'CritImpactSoundID[0]'?: string;
    'CritImpactSoundID[1]'?: string;
    'CritImpactSoundID[2]'?: string;
    'CritImpactSoundID[3]'?: string;
    'CritImpactSoundID[4]'?: string;
    'CritImpactSoundID[5]'?: string;
    'CritImpactSoundID[6]'?: string;
    'CritImpactSoundID[7]'?: string;
    'CritImpactSoundID[8]'?: string;
    'CritImpactSoundID[9]'?: string;
    ImpactSource?: string;
    'ImpactSoundID[10]'?: string;
    'CritImpactSoundID[10]'?: string;
    'PierceImpactSoundID[0]'?: string;
    'PierceImpactSoundID[1]'?: string;
    'PierceImpactSoundID[2]'?: string;
    'PierceImpactSoundID[3]'?: string;
    'PierceImpactSoundID[4]'?: string;
    'PierceImpactSoundID[5]'?: string;
    'PierceImpactSoundID[6]'?: string;
    'PierceImpactSoundID[7]'?: string;
    'PierceImpactSoundID[8]'?: string;
    'PierceImpactSoundID[9]'?: string;
    'PierceImpactSoundID[10]'?: string;
    'PierceCritImpactSoundID[0]'?: string;
    'PierceCritImpactSoundID[1]'?: string;
    'PierceCritImpactSoundID[2]'?: string;
    'PierceCritImpactSoundID[3]'?: string;
    'PierceCritImpactSoundID[4]'?: string;
    'PierceCritImpactSoundID[5]'?: string;
    'PierceCritImpactSoundID[6]'?: string;
    'PierceCritImpactSoundID[7]'?: string;
    'PierceCritImpactSoundID[8]'?: string;
    'PierceCritImpactSoundID[9]'?: string;
    'PierceCritImpactSoundID[10]'?: string;
}

interface WeaponSwingSounds2Database{
    ID?: string;
    SwingType?: string;
    Crit?: string;
    SoundID?: string;
}

interface WeaponTrailDatabase{
    ID?: string;
    FileDataID?: string;
    Field_6_0_1_18179_002?: string;
    Yaw?: string;
    Field_6_0_1_18179_004?: string;
    Field_6_0_1_18179_005?: string;
    Pitch?: string;
    Roll?: string;
    'TextureFileDataID[0]'?: string;
    'TextureFileDataID[1]'?: string;
    'TextureFileDataID[2]'?: string;
    'TextureScrollRateU[0]'?: string;
    'TextureScrollRateU[1]'?: string;
    'TextureScrollRateU[2]'?: string;
    'TextureScrollRateV[0]'?: string;
    'TextureScrollRateV[1]'?: string;
    'TextureScrollRateV[2]'?: string;
    'TextureScaleU[0]'?: string;
    'TextureScaleU[1]'?: string;
    'TextureScaleU[2]'?: string;
    'TextureScaleV[0]'?: string;
    'TextureScaleV[1]'?: string;
    'TextureScaleV[2]'?: string;
}

interface WeaponTrailModelDefDatabase{
    ID?: string;
    LowDefFileDataID?: string;
    AnimEnumID?: string;
    WeaponTrailID?: string;
    ModelFileDataID?: string;
}

interface WeaponTrailParamDatabase{
    ID?: string;
    Duration?: string;
    FadeOutTime?: string;
    EdgeLifeSpan?: string;
    InitialDelay?: string;
    SmoothSampleAngle?: string;
    WeaponTrailID?: string;
    Hand?: string;
    OverrideAttachTop?: string;
    OverrideAttachBot?: string;
    Flags?: string;
}

interface WeatherDatabase{
    ID?: string;
    AmbienceID?: string;
    EffectType?: string;
    'EffectColor[0]'?: string;
    'EffectColor[1]'?: string;
    'EffectColor[2]'?: string;
    EffectTexture?: string;
    TransitionSkyBox?: string;
    Type?: string;
    'Intensity[0]'?: string;
    'Intensity[1]'?: string;
    SoundAmbienceID?: string;
    WindSettingsID?: string;
    Scale?: string;
    Volatility?: string;
    TwinkleIntensity?: string;
    FallModifier?: string;
    RotationalSpeed?: string;
    EffectTextureFileDataID?: string;
    ParticulateFileDataID?: string;
    VolumeEdgeFadeStart?: string;
    OverrideColor?: string;
    OverrideCount?: string;
    OverrideOpacity?: string;
    VolumeFlags?: string;
    LightningID?: string;
    OverrideColorIntensity?: string;
    Field_9_0_1_33978_001?: string;
}

interface WeatherXParticulateDatabase{
    ID?: string;
    FileDataID?: string;
    ParentWeatherID?: string;
}

interface WeeklyRewardChestThresholdDatabase{
    ID?: string;
    Type?: string;
    Index?: string;
    Threshold?: string;
}

interface WindSettingsDatabase{
    ID?: string;
    BaseMag?: string;
    'BaseDir[0]'?: string;
    'BaseDir[1]'?: string;
    'BaseDir[2]'?: string;
    VarianceMagOver?: string;
    VarianceMagUnder?: string;
    'VarianceDir[0]'?: string;
    'VarianceDir[1]'?: string;
    'VarianceDir[2]'?: string;
    MaxStepMag?: string;
    'MaxStepDir[0]'?: string;
    'MaxStepDir[1]'?: string;
    'MaxStepDir[2]'?: string;
    Frequency?: string;
    Duration?: string;
    Flags?: string;
}

interface WorldBossLockoutDatabase{
    ID?: string;
    Name_lang?: string;
    TrackingQuestID?: string;
}

interface WorldChunkSoundsDatabase{
    ID?: string;
    ChunkX?: string;
    ChunkY?: string;
    SubchunkX?: string;
    SubchunkY?: string;
    ZoneIntroMusicID?: string;
    ZoneMusicID?: string;
    SoundAmbienceID?: string;
    SoundProviderPreferencesID?: string;
    WorldMapContinentID?: string;
    MapID?: string;
    SoundOverrideID?: string;
}

interface WorldEffectDatabase{
    ID?: string;
    QuestFeedbackEffectID?: string;
    WhenToDisplay?: string;
    TargetType?: string;
    TargetAsset?: string;
    PlayerConditionID?: string;
    CombatConditionID?: string;
}

interface WorldElapsedTimerDatabase{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
    Type?: string;
}

interface WorldMapAreaDatabase{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    LeftBoundary?: string;
    RightBoundary?: string;
    TopBoundary?: string;
    BottomBoundary?: string;
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
    BountySetID?: string;
    BountyDisplayLocation?: string;
    VisibilityPlayerConditionID?: string;
}

interface WorldMapContinentDatabase{
    ID?: string;
    MapID?: string;
    LeftBoundary?: string;
    RightBoundary?: string;
    TopBoundary?: string;
    BottomBoundary?: string;
    ContinentOffsetX?: string;
    ContinentOffsetY?: string;
    'ContinentOffset[0]'?: string;
    'ContinentOffset[1]'?: string;
    Scale?: string;
    'TaxiMin[0]'?: string;
    'TaxiMin[1]'?: string;
    'TaxiMax[0]'?: string;
    'TaxiMax[1]'?: string;
    WorldMapID?: string;
    Flags?: string;
}

interface WorldMapOverlayDatabase{
    ID?: string;
    MapAreaID?: string;
    AreaID?: string;
    MapPointX?: string;
    MapPointY?: string;
    TextureName?: string;
    TextureWidth?: string;
    TextureHeight?: string;
    OffsetX?: string;
    OffsetY?: string;
    'AreaID[0]'?: string;
    'AreaID[1]'?: string;
    'AreaID[2]'?: string;
    'AreaID[3]'?: string;
    HitRectTop?: string;
    HitRectLeft?: string;
    HitRectBottom?: string;
    HitRectRight?: string;
    PlayerConditionID?: string;
    Field_7_3_2_25549_012?: string;
    Flags?: string;
    UiMapArtID?: string;
}

interface WorldMapOverlayTileDatabase{
    ID?: string;
    FileDataID?: string;
    RowIndex?: string;
    ColIndex?: string;
    LayerIndex?: string;
    WorldMapOverlayID?: string;
}

interface WorldMapTransformsDatabase{
    ID?: string;
    MapID?: string;
    'RegionMin[0]'?: string;
    'RegionMin[1]'?: string;
    'RegionMax[0]'?: string;
    'RegionMax[1]'?: string;
    NewMapID?: string;
    'RegionOffset[0]'?: string;
    'RegionOffset[1]'?: string;
    NewDungeonMapID?: string;
    Flags?: string;
    NewAreaID?: string;
    RegionScale?: string;
    'RegionMin[2]'?: string;
    'RegionMax[2]'?: string;
    'Region[0]'?: string;
    'Region[1]'?: string;
    'Region[2]'?: string;
    'Region[3]'?: string;
    'Region[4]'?: string;
    'Region[5]'?: string;
    AreaID?: string;
    Priority?: string;
}

interface WorldSafeLocsDatabase{
    ID?: string;
    Continent?: string;
    'Loc[0]'?: string;
    'Loc[1]'?: string;
    'Loc[2]'?: string;
    AreaName_lang?: string;
    Facing?: string;
}

interface WorldStateDatabase{
    ID?: string;
}

interface WorldStateExpressionDatabase{
    ID?: string;
    Expression?: string;
}

interface WorldStateUIDatabase{
    ID?: string;
    MapID?: string;
    Icon?: string;
    String_lang?: string;
    Tooltip_lang?: string;
    FactionID?: string;
    StateVariable?: string;
    Type?: string;
    DynamicIcon?: string;
    DynamicTooltip_lang?: string;
    ExtendedUI?: string;
    AreaID?: string;
    DynamicIconFileID?: string;
    DynamicFlashIconFileID?: string;
    OrderIndex?: string;
    PhaseUseFlags?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
    'ExtendedUIStateVariable[0]'?: string;
    'ExtendedUIStateVariable[1]'?: string;
    'ExtendedUIStateVariable[2]'?: string;
    PhaseShift?: string;
}

interface WorldStateZoneSoundsDatabase{
    WorldStateID?: string;
    WorldStateValue?: string;
    AreaID?: string;
    WMOAreaID?: string;
    ZoneIntroMusicID?: string;
    ZoneMusicID?: string;
    SoundAmbienceID?: string;
    SoundProviderPreferencesID?: string;
    ID?: string;
    OrderBy?: string;
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

interface WowError_StringsDatabase{
    ID?: string;
    Name?: string;
    Description_lang?: string;
}

interface ZoneIntroMusicTableDatabase{
    ID?: string;
    Name?: string;
    SoundID?: string;
    Priority?: string;
    MinDelayMinutes?: string;
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

interface ZoneLightPointDatabase{
    ID?: string;
    ZoneLightID?: string;
    'Pos[0]'?: string;
    'Pos[1]'?: string;
    PointOrder?: string;
}

interface ZoneMusicDatabase{
    ID?: string;
    VolumeFloat?: string;
    'MusicFile[0]'?: string;
    'MusicFile[1]'?: string;
    'SilenceIntervalMin[0]'?: string;
    'SilenceIntervalMin[1]'?: string;
    'SilenceIntervalMax[0]'?: string;
    'SilenceIntervalMax[1]'?: string;
    'SegmentLength[0]'?: string;
    'SegmentLength[1]'?: string;
    'SegmentPlayMin[0]'?: string;
    'SegmentPlayMin[1]'?: string;
    'SegmentPlayMax[0]'?: string;
    'SegmentPlayMax[1]'?: string;
    'Sounds[0]'?: string;
    'Sounds[1]'?: string;
    SetName?: string;
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

interface gtArmorMitigationByLvlDatabase{
    ID?: string;
    Data?: string;
}

interface gtBarberShopCostBaseDatabase{
    Data?: string;
    ID?: string;
}

interface gtBattlePetTypeDamageModDatabase{
    ID?: string;
    Data?: string;
}

interface gtBattlePetXPDatabase{
    ID?: string;
    Data?: string;
}

interface gtChanceToMeleeCritDatabase{
    Data?: string;
    ID?: string;
}

interface gtChanceToMeleeCritBaseDatabase{
    Data?: string;
    ID?: string;
}

interface gtChanceToSpellCritDatabase{
    Data?: string;
    ID?: string;
}

interface gtChanceToSpellCritBaseDatabase{
    Data?: string;
    ID?: string;
}

interface gtCombatRatingsDatabase{
    Data?: string;
    ID?: string;
}

interface gtItemSocketCostPerLevelDatabase{
    ID?: string;
    Data?: string;
}

interface gtMasteryMultipliersDatabase{
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

interface gtOCTClassCombatRatingScalarDatabase{
    ID?: string;
    Data?: string;
}

interface gtOCTHpPerStaminaDatabase{
    ID?: string;
    Data?: string;
}

interface gtOCTLevelExperienceDatabase{
    ID?: string;
    Data?: string;
}

interface gtOCTRegenHPDatabase{
    Data?: string;
    ID?: string;
}

interface gtOCTRegenMPDatabase{
    Data?: string;
    ID?: string;
}

interface gtRegenHPPerSptDatabase{
    Data?: string;
    ID?: string;
}

interface gtRegenMPPerSptDatabase{
    Data?: string;
    ID?: string;
}

interface gtResilienceDRDatabase{
    ID?: string;
    Data?: string;
}

interface gtSpellScalingDatabase{
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
