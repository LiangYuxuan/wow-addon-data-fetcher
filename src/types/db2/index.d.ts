/* eslint max-len: 0 */
/* eslint camelcase: 0 */

interface Achievement{
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
interface Achievement_Category{
    ID?: string;
    Parent?: string;
    Name_lang?: string;
    Ui_order?: string;
}
interface Achievement_Criteria{
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
interface AdventureJournal{
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
interface AdventureMapPOI{
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
interface AlliedRaceRacialAbility{
    ID?: string;
    AlliedRaceID?: string;
    Description_lang?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    OrderIndex?: string;
}
interface AlliedRace{
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
interface AnimKitBoneSet{
    ID?: string;
    Name?: string;
    BoneDataID?: string;
    ParentAnimKitBoneSetID?: string;
    ExtraBoneCount?: string;
    AltAnimKitBoneSetID?: string;
    AltBoneDataID?: string;
}
interface AnimKit{
    ID?: string;
    OneShotDuration?: string;
    OneShotStopAnimKitID?: string;
    LowDefAnimKitID?: string;
}
interface AnimKitBoneSetAlias{
    ID?: string;
    BoneDataID?: string;
    AnimKitBoneSetID?: string;
}
interface AnimKitConfig{
    ID?: string;
    ConfigFlags?: string;
}
interface AnimKitConfigBoneSet{
    ID?: string;
    ParentAnimKitConfigID?: string;
    AnimKitBoneSetID?: string;
    AnimKitPriorityID?: string;
}
interface AnimKitPriority{
    ID?: string;
    Priority?: string;
}
interface AnimKitSegment{
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
interface AnimKitReplacement{
    ID?: string;
    DstAnimKitID?: string;
    ConditionalFlags?: string;
    ParentAnimReplacementSetID?: string;
    SrcAnimKitID?: string;
}
interface AnimReplacementSet{
    ID?: string;
    ExecOrder?: string;
}
interface AnimReplacement{
    ID?: string;
    SrcAnimID?: string;
    DstAnimID?: string;
    ParentAnimReplacementSetID?: string;
    ConditionalFlags?: string;
}
interface AnimaCylinder{
    ID?: string;
    AnimaCableID?: string;
    AnimaMaterialID?: string;
    Field_9_0_1_33978_002?: string;
    Field_9_0_1_33978_003?: string;
    Field_9_0_1_33978_004?: string;
    Order?: string;
    Field_9_0_1_33978_006?: string;
}
interface AnimaMaterial{
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
interface AnimaCable{
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
interface AnimationData{
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
interface AnimationNames{
    ID?: string;
    Name?: string;
}
interface AoiBox{
    ID?: string;
    Bounds?: string;
    Flags?: string;
    EncounterID?: string;
    WorldStateID?: string;
    MapID?: string;
    InternalName?: string;
}
interface AreaAssignment{
    ID?: string;
    MapID?: string;
    AreaID?: string;
    ChunkX?: string;
    ChunkY?: string;
}
interface AreaFarClipOverride{
    ID?: string;
    AreaID?: string;
    Flags?: string;
    MinFarClip?: string;
    MinHorizonStart?: string;
}
interface AreaConditionalData{
    AreaName_lang?: string;
    ID?: string;
    OrderIndex?: string;
    PlayerConditionID?: string;
    AreaID?: string;
}
interface AreaGroup{
    ID?: string;
    AreaID?: string;
    NextAreaID?: string;
}
interface AreaGroupMember{
    ID?: string;
    AreaGroupID?: string;
    AreaID?: string;
}
interface AreaMIDIAmbiences{
    ID?: string;
    DaySequence?: string;
    NightSequence?: string;
    DLSFile?: string;
    Volume?: string;
}
interface AreaPOI{
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
interface AreaPOISortedWorldState{
    ID?: string;
    WorldStateID?: string;
    CemeteryID?: string;
}
interface AreaPOIState{
    ID?: string;
    AreaPoiID?: string;
    Description_lang?: string;
    IconEnumValue?: string;
    UiTextureAtlasMemberID?: string;
    WorldStateValue?: string;
}
interface AreaTable{
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
interface AreaTriggerActionSet{
    ID?: string;
    Flags?: string;
}
interface AreaTrigger{
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
interface AreaTriggerBox{
    ID?: string;
    Extents?: string;
}
interface AreaTriggerCreateProperties{
    ID?: string;
    ShapeType?: string;
    StartShapeID?: string;
}
interface AreaTriggerCylinder{
    ID?: string;
    Radius?: string;
    Height?: string;
    ZOffset?: string;
}
interface AreaTriggerSphere{
    ID?: string;
    MaxRadius?: string;
}
interface ArenaCcItem{
    ID?: string;
    ItemID?: string;
    SpellID?: string;
}
interface ArmorLocation{
    ID?: string;
    Clothmodifier?: string;
    Leathermodifier?: string;
    Chainmodifier?: string;
    Platemodifier?: string;
    Modifier?: string;
}
interface ArtifactAppearanceSet{
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
interface Artifact{
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
interface ArtifactAppearance{
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
interface ArtifactCategory{
    ID?: string;
    XpMultCurrencyID?: string;
    XpMultCurveID?: string;
}
interface ArtifactPower{
    ID?: string;
    ArtifactID?: string;
    DisplayPos?: string;
    Flags?: string;
    Label?: string;
    MaxPurchasableRank?: string;
    Tier?: string;
}
interface ArtifactItemToTransmog{
    ID?: string;
    ArtifactID?: string;
    ChildItemID?: string;
    ItemID?: string;
}
interface ArtifactPowerRank{
    ID?: string;
    ArtifactPowerID?: string;
    AuraPointsOverride?: string;
    ItemBonusListID?: string;
    RankIndex?: string;
    SpellID?: string;
}
interface ArtifactPowerLink{
    ID?: string;
    PowerA?: string;
    PowerB?: string;
}
interface ArtifactQuestXP{
    ID?: string;
    Difficulty?: string;
}
interface ArtifactPowerPicker{
    ID?: string;
    PlayerConditionID?: string;
}
interface ArtifactUnlock{
    ID?: string;
    ArtifactID?: string;
    ItemBonusListID?: string;
    PlayerConditionID?: string;
    PowerID?: string;
    PowerRank?: string;
}
interface ArtifactTier{
    ID?: string;
    ArtifactTier?: string;
    KnowledgePlayerCondition?: string;
    MaxArtifactKnowledge?: string;
    MaxNumTraits?: string;
    MinimumEmpowerKnowledge?: string;
}
interface AuctionHouse{
    ID?: string;
    FactionID?: string;
    DepositRate?: string;
    ConsignmentRate?: string;
    Name_lang?: string;
}
interface AttackAnimTypes{
    AnimID?: string;
    AnimName?: string;
}
interface AzeriteEssence{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    SpecSetID?: string;
}
interface AttackAnimKits{
    ID?: string;
    ItemSubclassID?: string;
    AnimTypeID?: string;
    AnimFrequency?: string;
    WhichHand?: string;
}
interface AzeriteEssencePower{
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
interface AzeriteEmpoweredItem{
    ID?: string;
    AzeritePowerSetID?: string;
    AzeriteTierUnlockSetID?: string;
    ItemID?: string;
}
interface AzeriteItemMilestonePower{
    ID?: string;
    AzeritePowerID?: string;
    RequiredLevel?: string;
    AzeriteEssenceType?: string;
    IsHeartEssenceUnlock?: string;
}
interface AzeriteItem{
    ID?: string;
    ItemID?: string;
}
interface AzeriteLevelInfo{
    ID?: string;
    LevelXP?: string;
    TotalLevelXP?: string;
    ItemLevel?: string;
}
interface AzeriteKnowledgeMultiplier{
    ID?: string;
    Multiplier?: string;
}
interface AzeritePower{
    ID?: string;
    ItemBonusListID?: string;
    SpellID?: string;
    SpecSetID?: string;
    Flags?: string;
}
interface AzeritePowerSetMember{
    ID?: string;
    Class?: string;
    AzeritePowerID?: string;
    AzeritePowerSetID?: string;
    OrderIndex?: string;
    Tier?: string;
}
interface AzeriteTierUnlock{
    ID?: string;
    AzeriteLevel?: string;
    AzeriteTierUnlockSetID?: string;
    ItemCreationContext?: string;
    Tier?: string;
}
interface AzeriteTierUnlockSet{
    ID?: string;
    Flags?: string;
}
interface BannedAddons{
    ID?: string;
    NameMD5?: string;
    VersionMD5?: string;
    LastModified?: string;
    Flags?: string;
    Name?: string;
    Version?: string;
}
interface BankBagSlotPrices{
    ID?: string;
    Cost?: string;
}
interface BarberShopStyle{
    ID?: string;
    Type?: string;
    DisplayName_lang?: string;
    Description_lang?: string;
    Cost_Modifier?: string;
    Race?: string;
    Sex?: string;
    Data?: string;
}
interface AzeriteUnlockMapping{
    ID?: string;
    MinItemLevel?: string;
    HeadBonus?: string;
    ShoulderBonus?: string;
    ChestBonus?: string;
    SetID?: string;
}
interface BarrageEffect{
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
interface BattlePetAbility{
    ID?: string;
    BattlePetVisualID?: string;
    Cooldown?: string;
    Description_lang?: string;
    Flags?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    PetTypeEnum?: string;
}
interface BattlePetAbilityState{
    ID?: string;
    BattlePetAbilityID?: string;
    BattlePetStateID?: string;
    Value?: string;
}
interface BattlePetAbilityTurn{
    ID?: string;
    BattlePetAbilityID?: string;
    BattlePetVisualID?: string;
    EventTypeEnum?: string;
    OrderIndex?: string;
    TurnTypeEnum?: string;
}
interface BattlePetAbilityEffect{
    ID?: string;
    AuraBattlePetAbilityID?: string;
    BattlePetAbilityTurnID?: string;
    BattlePetEffectPropertiesID?: string;
    BattlePetVisualID?: string;
    OrderIndex?: string;
    Param?: string;
}
interface BattlePetBreedQuality{
    StateMultiplier?: string;
    ID?: string;
    QualityEnum?: string;
}
interface BattlePetNPCTeamMember{
    Name_lang?: string;
    ID?: string;
}
interface BattlePetEffectProperties{
    ParamLabel?: string;
    ParamTypeEnum?: string;
    ID?: string;
    BattlePetVisualID?: string;
}
interface BattlePetDisplayOverride{
    ID?: string;
    BattlePetSpeciesID?: string;
    CreatureDisplayInfoID?: string;
    PlayerConditionID?: string;
    PriorityCategory?: string;
}
interface BattlePetSpecies{
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
interface BattlePetBreedState{
    ID?: string;
    BattlePetBreedID?: string;
    BattlePetStateID?: string;
    Value?: string;
}
interface BattlePetSpeciesState{
    ID?: string;
    BattlePetSpeciesID?: string;
    BattlePetStateID?: string;
    Value?: string;
}
interface BattlePetSpeciesXAbility{
    ID?: string;
    BattlePetAbilityID?: string;
    BattlePetSpeciesID?: string;
    RequiredLevel?: string;
    SlotEnum?: string;
}
interface BattlePetSpeciesXCovenant{
    ID?: string;
    CovenantID?: string;
    BattlePetSpeciesID?: string;
}
interface BattlemasterList{
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
interface BattlePetState{
    LuaName?: string;
    ID?: string;
    BattlePetVisualID?: string;
    Flags?: string;
}
interface BeckonTrigger{
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
interface BattlePetVisual{
    SceneScriptFunction?: string;
    ID?: string;
    CastMilliSeconds?: string;
    Flags?: string;
    ImpactMilliSeconds?: string;
    RangeTypeEnum?: string;
    SceneScriptPackageID?: string;
    SpellVisualID?: string;
}
interface BoneWindModifiers{
    ID?: string;
    Multiplier?: string;
    PhaseMultiplier?: string;
}
interface BoneWindModifierModel{
    ID?: string;
    BoneWindModifierID?: string;
    FileDataID?: string;
}
interface BeamEffect{
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
interface Bounty{
    ID?: string;
    BountySetID?: string;
    FactionID?: string;
    IconFileDataID?: string;
    QuestID?: string;
    TurninPlayerConditionID?: string;
}
interface BonusRoll{
    ID?: string;
    CurrencyCost?: string;
    CurrencyTypesID?: string;
    JournalEncounterID?: string;
    JournalInstanceID?: string;
}
interface BroadcastTextDuration{
    ID?: string;
    BroadcastTextID?: string;
    Locale?: string;
    DurationMS?: string;
}
interface BroadcastText{
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
interface BroadcastTextVOState{
    ID?: string;
    SoundStateID?: string;
}
interface BountySet{
    ID?: string;
    LockedQuestID?: string;
    VisiblePlayerConditionID?: string;
}
interface CameraEffect{
    ID?: string;
    Flags?: string;
}
interface BroadcastTextSoundState{
    ID?: string;
    Name?: string;
}
interface CameraShakes{
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
interface CameraEffectEntry{
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
interface CameraMode{
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
interface CampaignXCondition{
    ID?: string;
    PlayerConditionID?: string;
    OrderIndex?: string;
    CampaignID?: string;
    Flags?: string;
    FailureReason_lang?: string;
}
interface Campaign{
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
interface CastableRaidBuffs{
    ID?: string;
    SpellID?: string;
    CastingSpellID?: string;
}
interface CampaignXQuestLine{
    ID?: string;
    CampaignID?: string;
    QuestLineID?: string;
    OrderIndex?: string;
}
interface CelestialBody{
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
interface Cfg_Categories{
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
interface Cfg_Configs{
    ID?: string;
    RealmType?: string;
    PlayerKillingAllowed?: string;
    Roleplaying?: string;
    PlayerAttackSpeedBase?: string;
    MaxDamageReductionPctPhysical?: string;
    GeneratedID?: string;
}
interface Cfg_Regions{
    ID?: string;
    Tag?: string;
    Region_group_mask?: string;
    RulesetID?: string;
    Challenge_origin?: string;
    Raidorigin?: string;
    Region_ID?: string;
    Field_8_1_0_28048_006?: string;
}
interface CharBaseInfo{
    RaceID?: string;
    ClassID?: string;
    ID?: string;
    Padding_4_0_0_11792_003?: string;
    Proficiency?: string;
}
interface ChallengeModeItemBonusOverride{
    ID?: string;
    OverrideItemBonusTreeID?: string;
    Type?: string;
    Level?: string;
    MythicPlusSeasonID?: string;
    PvPSeasonID?: string;
    ParentItemBonusTreeID?: string;
}
interface CharBaseSection{
    ID?: string;
    FallbackID?: string;
    LayoutResType?: string;
    ResolutionVariationEnum?: string;
    VariationEnum?: string;
}
interface CharComponentTextureLayouts{
    ID?: string;
    Width?: string;
    Height?: string;
}
interface CharHairTextures{
    ID?: string;
    Field_0_5_3_3368_001_race?: string;
    Field_0_5_3_3368_002_gender?: string;
    Field_0_5_3_3368_003?: string;
    Field_0_5_3_3368_004_mayberacemask?: string;
    Field_0_5_3_3368_005_the_x_in_hair_xy_blp?: string;
    Field_0_5_3_3368_006?: string;
    Field_0_5_3_3368_007?: string;
}
interface CharComponentTextureSections{
    ID?: string;
    CharComponentTextureLayoutID?: string;
    SectionType?: string;
    X?: string;
    Y?: string;
    Width?: string;
    Height?: string;
    OverlapSectionMask?: string;
}
interface CharSectionCondition{
    ID?: string;
    BaseSection?: string;
    Sex?: string;
    VariationIndex?: string;
    ColorIndex?: string;
    AchievementID?: string;
    RaceID?: string;
}
interface CharHairGeosets{
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
interface CharSections{
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
interface CharStartKit{
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
interface CharTextureVariationsV2{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    SectionID?: string;
    VariationID?: string;
    ColorID?: string;
    IsNPC?: string;
    TextureName?: string;
}
interface CharShipmentContainer{
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
interface CharShipment{
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
interface CharVariations{
    RaceID?: string;
    SexID?: string;
    TextureHoldLayer?: string;
}
interface CharTitles{
    ID?: string;
    Condition_ID?: string;
    Name_lang?: string;
    Name1_lang?: string;
    Mask_ID?: string;
    Flags?: string;
}
interface CharStartOutfit{
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
interface CharacterCreateCameras{
    Race?: string;
    Sex?: string;
    Camera?: string;
    Height?: string;
    Radius?: string;
    Target?: string;
}
interface CharacterFacialHairStyles{
    ID?: string;
    RaceID?: string;
    SexID?: string;
    VariationID?: string;
    Geoset?: string;
    BeardGeoset?: string;
    MoustacheGeoset?: string;
    SideburnGeoset?: string;
}
interface CharacterFaceBoneSet{
    ID?: string;
    BoneSetFileDataID?: string;
    FaceVariationIndex?: string;
    RaceID?: string;
    Resolution?: string;
    SexID?: string;
    ModelFileDataID?: string;
}
interface CharacterLoadout{
    ID?: string;
    ChrClassID?: string;
    Purpose?: string;
    Racemask?: string;
    Field_2_5_1_38043_004?: string;
}
interface CharacterLoadoutPet{
    ID?: string;
    CreatureID?: string;
    PetDisplayID?: string;
    PetFamilyID?: string;
    CharacterLoadoutID?: string;
}
interface CharacterLoadoutItem{
    ID?: string;
    CharacterLoadoutID?: string;
    ItemID?: string;
    ItemDisplayInfoID?: string;
    ItemInventoryType?: string;
}
interface CharacterServiceInfo{
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
interface ChatChannels{
    ID?: string;
    Flags?: string;
    FactionGroup?: string;
    Name_lang?: string;
    Shortcut_lang?: string;
    Ruleset?: string;
}
interface ChrClassTitle{
    ID?: string;
    ChrClassID?: string;
    Name_female_lang?: string;
    Name_male_lang?: string;
}
interface ChatProfanity{
    ID?: string;
    Text?: string;
    Language?: string;
}
interface ChrClassUIChrModelInfo{
    ID?: string;
    ChrModel_9_0_1_35522_001Override?: string;
    ChrModelID?: string;
    ChrClassesID?: string;
    ChrCreateFacingOverride?: string;
}
interface ChrClassRaceSex{
    ID?: string;
    ClassID?: string;
    Flags?: string;
    RaceID?: string;
    Sex?: string;
    SoundID?: string;
    VoiceSoundFilterID?: string;
}
interface ChrClassUIDisplay{
    ID?: string;
    AdvGuidePlayerConditionID?: string;
    ChrClassesID?: string;
    SplashPlayerConditionID?: string;
}
interface ChrClassVillain{
    ID?: string;
    ChrClassID?: string;
    Gender?: string;
    Name_lang?: string;
}
interface ChrClassesXPowerTypes{
    ClassID?: string;
    PowerType?: string;
    ID?: string;
}
interface ChrCreateClassAnimTarget{
    ID?: string;
    TargetPositionX?: string;
    TargetPositionY?: string;
    TargetPositionZ?: string;
    TimeStamp?: string;
    Field_9_0_1_34972_004?: string;
    Field_9_0_1_34972_005?: string;
    ChrCreateClassAnimTargetInfoID?: string;
}
interface ChrCreateClassAnimTargetInfo{
    ID?: string;
    ChrRacesID?: string;
    Sex?: string;
    ChrClassesID?: string;
}
interface ChrClasses{
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
interface ChrCustClientChoiceConversion{
    ID?: string;
    Field_9_0_1_34365_001?: string;
    ChrCustomizationReqID?: string;
    Field_9_0_1_34365_003?: string;
}
interface ChrCustomization{
    ID?: string;
    BaseSection?: string;
    ComponentSection?: string;
    Flags?: string;
    Name_lang?: string;
    RaceID?: string;
    Sex?: string;
    UiCustomizationType?: string;
}
interface ChrCustItemGeoModify{
    ID?: string;
    GeosetType?: string;
    Original?: string;
    Override?: string;
}
interface ChrCustomizationBoneSet{
    ID?: string;
    BoneFileDataID?: string;
    ModelFileDataID?: string;
}
interface ChrCustomizationChoice{
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
interface ChrCustomizationCondModel{
    ID?: string;
    CreatureModelDataID?: string;
    Field_9_0_1_34081_001?: string;
}
interface ChrCustomizationCategory{
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
interface ChrCustomizationDisplayInfo{
    ID?: string;
    SpellShapeshiftFormID?: string;
    CreatureDisplayInfoID?: string;
    BarberShopMinCameraDistance?: string;
    BarberShopHeightOffset?: string;
}
interface ChrCustomizationElement{
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
interface ChrCustomizationGeoset{
    ID?: string;
    GeosetType?: string;
    GeosetID?: string;
    Modifier?: string;
}
interface ChrCustomizationOption{
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
interface ChrCustomizationReqChoice{
    ID?: string;
    ChrCustomizationChoiceID?: string;
    ChrCustomizationReqID?: string;
}
interface ChrCustomizationSkinnedModel{
    ID?: string;
    CollectionsFileDataID?: string;
    GeosetType?: string;
    GeosetID?: string;
    Modifier?: string;
}
interface ChrModel{
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
interface ChrModelMaterial{
    ID?: string;
    CharComponentTextureLayoutsID?: string;
    TextureType?: string;
    Width?: string;
    Height?: string;
    SkinType?: string;
    Field_9_0_1_34615_006?: string;
}
interface ChrModelTextureLayer{
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
interface ChrModelTextureTarget{
    Field_9_0_1_34081_000?: string;
}
interface ChrProficiency{
    ID?: string;
    Proficiency_minLevel?: string;
    Proficiency_acquireMethod?: string;
    Proficiency_itemClass?: string;
    Proficiency_itemSubClassMask?: string;
}
interface ChrRaceRacialAbility{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    Icon?: string;
    Order?: string;
    ChrRacesID?: string;
    DescriptionShort_lang?: string;
}
interface ChrRaceXChrModel{
    ID?: string;
    ChrModelID?: string;
    ChrRacesID?: string;
}
interface ChrSpecialization{
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
interface ChrRaces{
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
interface ChrUpgradeBucketSpell{
    ID?: string;
    ChrUpgradeBucketID?: string;
    SpellID?: string;
}
interface ChrCustomizationConversion{
    ID?: string;
    ChrRacesID?: string;
    Sex?: string;
    OptionID?: string;
    Data?: string;
    ChrCustomizationChoiceID?: string;
    DependentOptionID?: string;
    DependentData?: string;
}
interface ChrCustomizationMaterial{
    ID?: string;
    ChrModelTextureTargetID?: string;
    MaterialResourcesID?: string;
}
interface ChrCustomizationReq{
    ID?: string;
    ReqType?: string;
    ClassMask?: string;
    ReqAchievementID?: string;
    OverrideArchive?: string;
    ReqItemModifiedAppearanceID?: string;
}
interface ChrUpgradeBucket{
    ID?: string;
    ChrSpecializationID?: string;
    ChrUpgradeTierID?: string;
}
interface ChrUpgradeTier{
    ID?: string;
    DisplayName_lang?: string;
    NumTalents?: string;
    OrderIndex?: string;
}
interface Cinematic{
    ID?: string;
    Type?: string;
    File?: string;
}
interface CinematicSequences{
    ID?: string;
    SoundID?: string;
    Camera?: string;
}
interface CinematicCamera{
    ID?: string;
    Model?: string;
    SoundID?: string;
    Origin?: string;
    OriginFacing?: string;
    FileDataID?: string;
}
interface CloakDampening{
    ID?: string;
    Angle?: string;
    Dampening?: string;
    ExpectedWeaponSize?: string;
    TabardAngle?: string;
    TabardDampening?: string;
    TailAngle?: string;
    TailDampening?: string;
}
interface ClientSceneEffect{
    ID?: string;
    SceneScriptPackageID?: string;
}
interface CinematicSubtitle{
    ID?: string;
    Flags?: string;
    StartTimestamp?: string;
    EndTimestamp?: string;
    Text_lang?: string;
}
interface CloneEffect{
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
interface ColorBanding{
    ID?: string;
    Field_9_0_1_34490_000?: string;
    Field_9_0_1_34490_001?: string;
    Field_9_0_1_34490_002?: string;
    Field_9_0_1_34490_003?: string;
    Field_9_0_1_34490_004?: string;
}
interface CommentatorIndirectSpell{
    ID?: string;
    TalentSpellID?: string;
    TriggeredAuraSpellID?: string;
    ChrSpecID?: string;
}
interface CombatCondition{
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
interface CommentatorStartLocation{
    ID?: string;
    MapID?: string;
    Pos?: string;
}
interface CommentatorTrackedCooldown{
    ID?: string;
    ChrSpecID?: string;
    Flags?: string;
    Priority?: string;
    SpellID?: string;
}
interface CommunityIcon{
    IconFileID?: string;
    ID?: string;
    OrderIndex?: string;
}
interface ComponentModelFileData{
    ID?: string;
    ClassID?: string;
    GenderIndex?: string;
    PositionIndex?: string;
    RaceID?: string;
}
interface ConfigurationWarning{
    ID?: string;
    Type?: string;
    Warning_lang?: string;
}
interface ComponentTextureFileData{
    ID?: string;
    ClassID?: string;
    GenderIndex?: string;
    RaceID?: string;
}
interface ConditionalContentTuning{
    ID?: string;
    OrderIndex?: string;
    ReplacementTuning?: string;
    ConditionMask?: string;
    NormalTuning?: string;
}
interface ConsoleScripts{
    ID?: string;
    Name?: string;
    Script?: string;
}
interface ContentTuning{
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
interface ContentTuningXExpectedStatMod{
    ID?: string;
    ContentTuningID?: string;
    ExpectedStatModID?: string;
}
interface ContentTuningXExpected{
    ID?: string;
    ContentTuningID?: string;
    ExpectedStatModID?: string;
    MythicPlusSeasonID?: string;
    MythicPlusSeasonID_2?: string;
}
interface ContentTuningDescription{
    ID?: string;
    Description?: string;
}
interface ContributionStyle{
    ID?: string;
    StateName_lang?: string;
    TooltipLine_lang?: string;
    StateColor?: string;
    Flags?: string;
    StatusBarAtlas?: string;
    BorderAtlas?: string;
    BannerAtlas?: string;
}
interface Contribution{
    ID?: string;
    Description_lang?: string;
    ManagedWorldStateInputID?: string;
    Name_lang?: string;
    OrderIndex?: string;
    UiTextureAtlasMemberID?: string;
    ContributionStyleContainer?: string;
}
interface ContributionStyleContainer{
    ID?: string;
    ContributionStyleID?: string;
}
interface CorruptionEffects{
    ID?: string;
    MinimumCorruption?: string;
    Aura?: string;
    PlayerConditionID?: string;
    Flags?: string;
}
interface ConversationLine{
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
interface Creature{
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
interface CreatureDifficulty{
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
interface Covenant{
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
interface CreatureDispXUiCamera{
    ID?: string;
    CreatureDisplayInfoID?: string;
    UiCameraID?: string;
}
interface CreatureDisplayInfoCond{
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
interface CreatureDisplayInfoCondXChoice{
    ID?: string;
    CreatureDisplayInfoCondID?: string;
    ChrCustomizationChoiceID?: string;
}
interface CreatureDisplayInfoExtra{
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
interface CreatureDisplayInfoEvt{
    ID?: string;
    CreatureDisplayInfoID?: string;
    Flags?: string;
    Fourcc?: string;
    SpellVisualKitID?: string;
}
interface CreatureFamily{
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
interface CreatureDisplayInfoGeosetData{
    ID?: string;
    CreatureDisplayInfoID?: string;
    GeosetIndex?: string;
    GeosetValue?: string;
}
interface CreatureDisplayInfoTrn{
    ID?: string;
    DissolveEffectID?: string;
    DstCreatureDisplayInfoID?: string;
    FinishVisualKitID?: string;
    MaxTime?: string;
    SrcCreatureDisplayInfoID?: string;
    StartVisualKitID?: string;
}
interface CreatureImmunities{
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
interface CreatureMovementInfo{
    ID?: string;
    SmoothFacingChaseRate?: string;
}
interface CreatureModelData{
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
interface CreatureDisplayInfo{
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
interface CreatureDisplayInfoOption{
    ID?: string;
    ChrCustomizationOptionID?: string;
    ChrCustomizationChoiceID?: string;
    CreatureDisplayInfoExtraID?: string;
}
interface CreatureSoundData{
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
interface CreatureSpellData{
    ID?: string;
    Spells?: string;
    Availability?: string;
}
interface CreatureXContribution{
    ID?: string;
    ContributionID?: string;
    CreatureID?: string;
}
interface CreatureXDisplayInfo{
    ID?: string;
    CreatureDisplayInfoID?: string;
    CreatureID?: string;
    Probability?: string;
    Scale?: string;
    OrderIndex?: string;
}
interface CreatureType{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
}
interface CriteriaTree{
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
interface Criteria{
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
interface CriteriaTreeXEffect{
    ID?: string;
    CriteriaTreeID?: string;
    WorldEffectID?: string;
}
interface CreatureXUiWidgetSet{
    ID?: string;
    CreatureID?: string;
    UiWidgetSetID?: string;
    Field_9_0_1_34821_002?: string;
}
interface CurrencyTypes{
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
interface CurrencyContainer{
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
interface CurvePoint{
    Pos?: string;
    ID?: string;
    CurveID?: string;
    OrderIndex?: string;
    PosPreSquish?: string;
}
interface Curve{
    ID?: string;
    Flags?: string;
    Type?: string;
}
interface CurrencyCategory{
    ID?: string;
    Flags?: string;
    Name_lang?: string;
    ExpansionID?: string;
}
interface DanceMoves{
    ID?: string;
    Type?: string;
    Param?: string;
    Fallback?: string;
    Racemask?: string;
    Internal_name?: string;
    Name_lang?: string;
    LockID?: string;
}
interface DeathThudLookups{
    ID?: string;
    SizeClass?: string;
    TerrainTypeSoundID?: string;
    SoundEntryID?: string;
    SoundEntryIDWater?: string;
}
interface DecalProperties{
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
interface DeclinedWordCases{
    ID?: string;
    DeclinedWordID?: string;
    CaseIndex?: string;
    DeclinedWord?: string;
}
interface DeviceBlacklist{
    ID?: string;
    DeviceID?: string;
    VendorID?: string;
}
interface DeclinedWord{
    ID?: string;
    Word?: string;
}
interface DestructibleModelData{
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
interface DissolveEffect{
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
interface DeviceDefaultSettings{
    ID?: string;
    DefaultSetting?: string;
    DeviceID?: string;
    VendorID?: string;
}
interface Difficulty{
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
interface DriverBlacklist{
    ID?: string;
    DeviceID?: string;
    DriverVersionHi?: string;
    DriverVersionLow?: string;
    Flags?: string;
    OsBits?: string;
    OsVersion?: string;
    VendorID?: string;
}
interface DungeonEncounter{
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
interface DungeonMap{
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
interface DurabilityQuality{
    ID?: string;
    Data?: string;
}
interface DungeonMapChunk{
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
interface EdgeGlowEffect{
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
interface DurabilityCosts{
    ID?: string;
    WeaponSubClassCost?: string;
    ArmorSubClassCost?: string;
}
interface EmoteAnims{
    ID?: string;
    ProcessedAnimIndex?: string;
    AnimName?: string;
}
interface Emotes{
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
interface EmotesText{
    ID?: string;
    Name?: string;
    EmoteID?: string;
    EmoteText?: string;
}
interface EnumeratedString{
    ID?: string;
    Value?: string;
    Index?: string;
    Flags?: string;
    EnumID?: string;
}
interface EmotesTextSound{
    ID?: string;
    EmotesTextID?: string;
    RaceID?: string;
    SexID?: string;
    SoundID?: string;
    ClassID?: string;
}
interface Exhaustion{
    ID?: string;
    Xp?: string;
    Factor?: string;
    OutdoorHours?: string;
    InnHours?: string;
    Name_lang?: string;
    Threshold?: string;
    CombatLogText?: string;
}
interface EmotesTextData{
    ID?: string;
    Text_lang?: string;
    EmotesTextID?: string;
    RelationshipFlags?: string;
}
interface ExpectedStat{
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
interface EnvironmentalDamage{
    ID?: string;
    EnumID?: string;
    VisualkitID?: string;
}
interface Faction{
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
interface ExtraAbilityInfo{
    TutorialText_lang?: string;
    ID?: string;
    SpellID?: string;
    ActionBarOverrideSpellID?: string;
    SpellLabel?: string;
    UiTextureKitID?: string;
    UiPriority?: string;
}
interface ExpectedStatMod{
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
interface FactionGroup{
    ID?: string;
    MaskID?: string;
    InternalName?: string;
    Name_lang?: string;
    ConquestCurrencyTextureFileID?: string;
    HonorCurrencyTextureFileID?: string;
}
interface FactionTemplate{
    ID?: string;
    Faction?: string;
    Flags?: string;
    FactionGroup?: string;
    FriendGroup?: string;
    EnemyGroup?: string;
    Enemies?: string;
    Friend?: string;
}
interface FileDataComplete{
    ID?: string;
    Filename?: string;
    Filepath?: string;
}
interface FileData{
    ID?: string;
    Filename?: string;
    Filepath?: string;
}
interface FilePaths{
    ID?: string;
    FileDataID?: string;
    FileName?: string;
    FilePath?: string;
}
interface FootprintTextures{
    ID?: string;
    FootstepFilename?: string;
    FileDataID?: string;
    Flags?: string;
    TextureBlendsetID?: string;
}
interface FriendshipRepReaction{
    ID?: string;
    FriendshipRepID?: string;
    ReactionThreshold?: string;
    Reaction_lang?: string;
}
interface FootstepTerrainLookup{
    ID?: string;
    CreatureFootstepID?: string;
    TerrainSoundID?: string;
    SoundID?: string;
    SoundIDSplash?: string;
}
interface FriendshipReputation{
    ID?: string;
    FactionID?: string;
    TextureFileID?: string;
    Description_lang?: string;
    StandingModified_lang?: string;
    StandingChangedText_lang?: string;
    Flags?: string;
}
interface FullScreenEffect{
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
interface GMSurveyCurrentSurvey{
    LANGID?: string;
    GMSURVEY_ID?: string;
    ID?: string;
}
interface GMSurveyAnswers{
    ID?: string;
    Sort_Index?: string;
    GMSurveyQuestionID?: string;
    Answer_lang?: string;
}
interface GMSurveySurveys{
    ID?: string;
    Q?: string;
}
interface GMSurveyQuestions{
    ID?: string;
    Question_lang?: string;
    Question?: string;
}
interface GMTicketCategory{
    ID?: string;
    Category_lang?: string;
}
interface GameClockDebug{
    ID?: string;
    Offset?: string;
}
interface GameObjectAnimGroupMember{
    ID?: string;
    GameObjectAnimGroupID?: string;
    GameObjectID?: string;
    Flags?: string;
    AnimationID?: string;
}
interface GameObjectArtKit{
    ID?: string;
    TextureVariation?: string;
    AttachModel?: string;
    AttachModelFileID?: string;
    TextureVariationFileID?: string;
}
interface GameObjectDiffAnimMap{
    ID?: string;
    GameObjectDiffAnimID?: string;
    DifficultyID?: string;
    Animation?: string;
    AttachmentDisplayID?: string;
}
interface GameObjectDisplayInfo{
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
interface GameObjectsClient{
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
interface GameParameter{
    ID?: string;
    Type?: string;
    Field_9_0_1_33978_001?: string;
    Field_9_0_1_33978_002?: string;
    IndexIntoXXX?: string;
    Field_9_0_1_33978_004?: string;
}
interface GameObjects{
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
interface GameObjectDisplayInfoXSoundKit{
    ID?: string;
    EventIndex?: string;
    GameObjectDisplayInfoID?: string;
    SoundKitID?: string;
}
interface GameTables{
    Name?: string;
    NumRows?: string;
    NumColumns?: string;
    ID?: string;
}
interface GameTips{
    ID?: string;
    Text_lang?: string;
    Min_level?: string;
    Max_level?: string;
    SortIndex?: string;
    ContentTuningID?: string;
}
interface GarrAutoCombatant{
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
interface GarrAbilityCategory{
    ID?: string;
    Name_lang?: string;
}
interface GarrAbility{
    ID?: string;
    Description_lang?: string;
    FactionChangeGarrAbilityID?: string;
    Flags?: string;
    GarrAbilityCategoryID?: string;
    GarrFollowerTypeID?: string;
    IconFileDataID?: string;
    Name_lang?: string;
}
interface GarrAutoSpellEffect{
    ID?: string;
    SpellID?: string;
    EffectIndex?: string;
    Effect?: string;
    Points?: string;
    TargetType?: string;
    Flags?: string;
    Period?: string;
}
interface GarrAbilityEffect{
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
interface GarrAutoSpell{
    Name_lang?: string;
    Description_lang?: string;
    ID?: string;
    Cooldown?: string;
    Duration?: string;
    Flags?: string;
    SchoolMask?: string;
    IconFileDataID?: string;
}
interface GarrBuilding{
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
interface GarrBuildingDoodadSet{
    ID?: string;
    AllianceDoodadSet?: string;
    GarrBuildingID?: string;
    HordeDoodadSet?: string;
    SpecializationID?: string;
    Type?: string;
}
interface GarrBuildingPlotInst{
    ID?: string;
    GarrBuildingID?: string;
    GarrSiteLevelPlotInstID?: string;
    MapOffset?: string;
    UiTextureAtlasMemberID?: string;
}
interface GarrClassSpec{
    ID?: string;
    ClassSpec_lang?: string;
    ClassSpec_Female_lang?: string;
    ClassSpec_Male_lang?: string;
    Flags?: string;
    FollowerClassLimit?: string;
    GarrFollItemSetID?: string;
    UiTextureAtlasMemberID?: string;
}
interface GarrEncounter{
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
interface GarrClassSpecPlayerCond{
    ID?: string;
    FlavorGarrStringID?: string;
    GarrClassSpecID?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    OrderIndex?: string;
    PlayerConditionID?: string;
}
interface GarrFamilyName{
    FamilyName?: string;
    ID?: string;
}
interface GarrEncounterXMechanic{
    ID?: string;
    GarrEncounterID?: string;
    GarrMechanicID?: string;
    GarrMechanicSetID?: string;
}
interface GarrEncounterSetXEncounter{
    ID?: string;
    GarrEncounterID?: string;
    GarrEncounterSetID?: string;
}
interface GarrFollItemSetMember{
    ID?: string;
    GarrFollItemSetID?: string;
    ItemID?: string;
    ItemSlot?: string;
    MinItemLevel?: string;
}
interface GarrFollower{
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
interface GarrFollItemSet{
    ID?: string;
}
interface GarrFollowerLevelXP{
    ID?: string;
    FollowerLevel?: string;
    GarrFollowerTypeID?: string;
    ShipmentXP?: string;
    XpToNextLevel?: string;
}
interface GarrFollowerSetXFollower{
    ID?: string;
    GarrFollowerID?: string;
    GarrFollowerSetID?: string;
    Field_7_3_2_25549_000?: string;
    Field_7_3_2_25549_001?: string;
}
interface GarrFollowerQuality{
    ID?: string;
    AbilityCount?: string;
    ClassSpecID?: string;
    GarrFollowerTypeID?: string;
    Quality?: string;
    ShipmentXP?: string;
    TraitCount?: string;
    XpToNextQuality?: string;
}
interface GarrFollowerType{
    ID?: string;
    Flags?: string;
    GarrTypeID?: string;
    ItemLevelRangeBias?: string;
    LevelRangeBias?: string;
    MaxFollowerBuildingType?: string;
    MaxFollowers?: string;
    MaxItemLevel?: string;
}
interface GarrFollSupportSpell{
    ID?: string;
    AllianceSpellID?: string;
    GarrFollowerID?: string;
    HordeSpellID?: string;
    OrderIndex?: string;
}
interface GarrFollowerXAbility{
    ID?: string;
    FactionIndex?: string;
    GarrAbilityID?: string;
    GarrFollowerID?: string;
    OrderIndex?: string;
}
interface GarrGivenName{
    ID?: string;
    Name?: string;
    Field_6_0_1_18179_002?: string;
}
interface GarrFollowerUICreature{
    ID?: string;
    CreatureID?: string;
    FactionIndex?: string;
    Flags?: string;
    GarrFollowerID?: string;
    OrderIndex?: string;
    Scale?: string;
}
interface GarrItemLevelUpgradeData{
    ID?: string;
    FollowerTypeID?: string;
    MaxItemLevel?: string;
    MinItemLevel?: string;
    Operation?: string;
}
interface GarrMechanic{
    ID?: string;
    Factor?: string;
    GarrAbilityID?: string;
    GarrMechanicTypeID?: string;
}
interface GarrMechanicSetXMechanic{
    ID?: string;
    GarrMechanicID?: string;
    GarrMechanicSetID?: string;
}
interface GarrMechanicType{
    ID?: string;
    Category?: string;
    Description_lang?: string;
    IconFileDataID?: string;
    Name_lang?: string;
}
interface GarrMissionSet{
    ID?: string;
    GarrTypeID?: string;
    Field_9_0_2_36294_001?: string;
    CooldownSeconds?: string;
    Condition_9_0_2_36294_003?: string;
    Field_9_0_2_36294_004?: string;
    Field_9_0_2_36294_005?: string;
}
interface GarrMission{
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
interface GarrMissionTexture{
    ID?: string;
    Pos?: string;
    UiTextureKitID?: string;
}
interface GarrMissionXEncounter{
    ID?: string;
    GarrEncounterID?: string;
    GarrEncounterSetID?: string;
    GarrMissionID?: string;
    OrderIndex?: string;
    Field_9_0_1_33978_004?: string;
}
interface GarrMissionXFollower{
    ID?: string;
    GarrFollowerID?: string;
    GarrFollowerSetID?: string;
    GarrMissionID?: string;
    Field_9_0_1_33978_002?: string;
}
interface GarrMissionType{
    ID?: string;
    Name_lang?: string;
    UiTextureAtlasMemberID?: string;
    UiTextureKitID?: string;
}
interface GarrMssnBonusAbility{
    ID?: string;
    DurationSecs?: string;
    GarrAbilityID?: string;
    GarrFollowerTypeID?: string;
    GarrMissionTextureID?: string;
    Radius?: string;
}
interface GarrPlot{
    Name?: string;
    UpgradeRequirement?: string;
    ID?: string;
    AllianceConstructObjID?: string;
    Flags?: string;
    HordeConstructObjID?: string;
    PlotType?: string;
    UiCategoryID?: string;
}
interface GarrPlotBuilding{
    ID?: string;
    GarrBuildingID?: string;
    GarrPlotID?: string;
}
interface GarrPlotInstance{
    Name?: string;
    ID?: string;
    GarrPlotID?: string;
}
interface GarrPlotUICategory{
    CategoryName_lang?: string;
    ID?: string;
    PlotType?: string;
}
interface GarrSiteLevelPlotInst{
    ID?: string;
    GarrPlotInstanceID?: string;
    GarrSiteLevelID?: string;
    UiMarkerPos?: string;
    UiMarkerSize?: string;
}
interface GarrSiteLevel{
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
interface GarrSpecialization{
    ID?: string;
    BuildingType?: string;
    IconFileDataID?: string;
    Name_lang?: string;
    Param?: string;
    RequiredUpgradeLevel?: string;
    SpecType?: string;
    Tooltip_lang?: string;
}
interface GarrString{
    ID?: string;
    Text_lang?: string;
}
interface GarrTalTreeXGarrTalResearch{
    ID?: string;
    GarrTalentTreeID?: string;
    GarrTalentResearchID?: string;
    OrderIndex?: string;
}
interface GarrTalentCost{
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
interface GarrTalent{
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
interface GarrTalentRank{
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
interface GarrTalentMapPOI{
    ID?: string;
    Position?: string;
    GarrTalentID?: string;
}
interface GarrTalentSocketProperties{
    ID?: string;
    GarrTalentSocketType?: string;
    GarrTalentSocketSubtype?: string;
}
interface GarrTalentResearch{
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
interface GarrType{
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
interface GarrTalentTree{
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
interface GarrUiAnimClassInfo{
    ID?: string;
    GarrClassSpecID?: string;
    SpellVisualID?: string;
    MovementType?: string;
    ImpactDelaySecs?: string;
    CastKit?: string;
    ImpactKit?: string;
    TargetImpactKit?: string;
}
interface GarrUiAnimRaceInfo{
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
interface GlobalCurve{
    ID?: string;
    CurveID?: string;
    Type?: string;
}
interface GemProperties{
    ID?: string;
    Enchant_ID?: string;
    Maxcount_inv?: string;
    Maxcount_item?: string;
    Type?: string;
    Min_item_level?: string;
}
interface GlobalPlayerConditionSet{
    ID?: string;
    What?: string;
}
interface GlobalGameContentTuning{
    ID?: string;
    ContentTuningID?: string;
    ExpansionID?: string;
}
interface GlobalPlayerCondition{
    ID?: string;
    PlayerConditionID?: string;
    GlobalPlayerConditionSetID?: string;
}
interface GlueScreenEmote{
    ID?: string;
    ClassID?: string;
    RaceID?: string;
    SexID?: string;
    LeftHandItemType?: string;
    RightHandItemType?: string;
    AnimKitID?: string;
    SpellVisualKitID?: string;
}
interface GlobalStrings{
    ID?: string;
    BaseTag?: string;
    Flags?: string;
    TagText_lang?: string;
}
interface GlyphBindableSpell{
    ID?: string;
    GlyphPropertiesID?: string;
    SpellID?: string;
}
interface GlobalTable_PlayerCondition{
    ID?: string;
    PlayerConditionID?: string;
    What?: string;
}
interface GlyphExclusiveCategory{
    ID?: string;
    Name_lang?: string;
}
interface GlyphRequiredSpec{
    ID?: string;
    ChrSpecializationID?: string;
    GlyphPropertiesID?: string;
}
interface GlyphSlot{
    ID?: string;
    Type?: string;
    Tooltip?: string;
}
interface GossipXUIDisplayInfo{
    ID?: string;
    GossipMenuID?: string;
    UiTextureKitID?: string;
    CustomGossipDescriptionString_lang?: string;
}
interface GlyphProperties{
    ID?: string;
    SpellID?: string;
    GlyphType?: string;
    SpellIconID?: string;
    GlyphExclusiveCategoryID?: string;
    GlyphSlotFlags?: string;
    SpellIconFileDataID?: string;
}
interface GradientEffect{
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
interface GroundEffectDoodad{
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
interface GroundEffectTexture{
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
interface GroupFinderCategory{
    Name_lang?: string;
    ID?: string;
    Flags?: string;
    OrderIndex?: string;
}
interface GroupFinderActivityGrp{
    ID?: string;
    Name_lang?: string;
    OrderIndex?: string;
}
interface GroupFinderActivity{
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
interface GuildColorBackground{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_6_0_1_18179_004?: string;
    ID?: string;
}
interface GuildEmblem{
    ID?: string;
    EmblemID?: string;
    TextureFileDataID?: string;
}
interface GuildColorEmblem{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_6_0_1_18179_004?: string;
    ID?: string;
}
interface GuildPerkSpells{
    ID?: string;
    GuildLevel?: string;
    SpellID?: string;
}
interface GuildColorBorder{
    ColorID?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_6_0_1_18179_004?: string;
    ID?: string;
}
interface GuildShirtBackground{
    ID?: string;
    Component?: string;
    FileDataID?: string;
    ShirtID?: string;
    Color?: string;
}
interface GuildTabardBorder{
    ID?: string;
    BorderID?: string;
    Tier?: string;
    Component?: string;
    FileDataID?: string;
    Color?: string;
}
interface GuildTabardBackground{
    ID?: string;
    Tier?: string;
    Component?: string;
    FileDataID?: string;
    Color?: string;
}
interface GuildShirtBorder{
    ID?: string;
    Tier?: string;
    Component?: string;
    ShirtID?: string;
    FileDataID?: string;
    Color?: string;
}
interface Heirloom{
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
interface GuildTabardEmblem{
    ID?: string;
    Component?: string;
    Color?: string;
    FileDataID?: string;
    EmblemID?: string;
}
interface HelmetAnimScaling{
    ID?: string;
    HelmetGeosetVisDataID?: string;
    RaceID?: string;
    Amount?: string;
}
interface HelmetGeosetData{
    ID?: string;
    RaceID?: string;
    HideGeosetGroup?: string;
    HelmetGeosetVisDataID?: string;
    RaceBitSelection?: string;
}
interface HelmetGeosetVisData{
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
interface HighlightColor{
    ID?: string;
    EndColor?: string;
    Flags?: string;
    MidColor?: string;
    StartColor?: string;
    Type?: string;
}
interface HolidayNames{
    ID?: string;
    Name_lang?: string;
}
interface Hotfix{
    ID?: string;
    Flags?: string;
    Object_ID?: string;
    Tablename?: string;
}
interface HolidayDescriptions{
    ID?: string;
    Description_lang?: string;
}
interface Holidays{
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
interface ImportPriceShield{
    ID?: string;
    Data?: string;
}
interface ImportPriceArmor{
    ID?: string;
    ClothModifier?: string;
    LeatherModifier?: string;
    ChainModifier?: string;
    PlateModifier?: string;
}
interface ImportPriceWeapon{
    ID?: string;
    Data?: string;
}
interface ImportPriceQuality{
    ID?: string;
    Data?: string;
}
interface Hotfixes{
    ID?: string;
    Flags?: string;
    Object_ID?: string;
    Tablename?: string;
    PushID?: string;
}
interface ItemAppearance{
    ID?: string;
    DefaultIconFileDataID?: string;
    DisplayType?: string;
    ItemDisplayInfoID?: string;
    UiOrder?: string;
    Field_8_2_5_31812_001?: string;
    PlayerConditionID?: string;
}
interface Item{
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
interface InvasionClientData{
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
interface Item_sparse{
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
interface ItemArmorShield{
    ID?: string;
    ItemLevel?: string;
    Quality?: string;
}
interface ItemArmorQuality{
    ID?: string;
    Qualitymod?: string;
    ItemLevel?: string;
}
interface ItemAppearanceXUiCamera{
    ID?: string;
    ItemAppearanceID?: string;
    UiCameraID?: string;
}
interface ItemArmorTotal{
    ID?: string;
    ItemLevel?: string;
    Cloth?: string;
    Leather?: string;
    Mail?: string;
    Plate?: string;
}
interface ItemBonusList{
    ID?: string;
    InternalName?: string;
    Flags?: string;
}
interface ItemBonusListGroup{
    ID?: string;
    SequenceSpellID?: string;
    Field_9_1_0_38783_001?: string;
}
interface ItemBonus{
    Field_6_0_1_18179_001?: string;
    ID?: string;
    OrderIndex?: string;
    ParentItemBonusListID?: string;
    Type?: string;
    Value?: string;
}
interface ItemBagFamily{
    ID?: string;
    Name_lang?: string;
}
interface ItemBonusListLevelDelta{
    ID?: string;
    ItemLevelDelta?: string;
}
interface ItemBonusListGroupEntry{
    ID?: string;
    ItemBonusListID?: string;
    ItemLevelSelectorID?: string;
    OrderIndex?: string;
    ItemExtendedCostID?: string;
    ItemBonusListGroupID?: string;
    UnlockCondition?: string;
    Flags?: string;
}
interface ItemBonusTreeNode{
    ID?: string;
    ChildItemBonusListID?: string;
    ChildItemBonusTreeID?: string;
    ChildItemLevelSelectorID?: string;
    ItemContext?: string;
    ParentItemBonusTreeID?: string;
    ItemBonusListGroupID?: string;
    ParentItemBonusTreeNodeID?: string;
}
interface ItemBonusListWarforgeLevelDelta{
    ID?: string;
    ItemLevelDelta?: string;
}
interface ItemBonusSequenceSpell{
    ID?: string;
    SpellID?: string;
    ItemID?: string;
}
interface ItemChildEquipment{
    ID?: string;
    ChildItemEquipSlot?: string;
    ChildItemID?: string;
    ParentItemID?: string;
}
interface ItemBonusTree{
    ID?: string;
    Field_9_0_2_35854_000?: string;
    InventoryTypeMask?: string;
}
interface ItemCondExtCosts{
    ID?: string;
    CondExtendedCost?: string;
    ItemExtendedCostEntry?: string;
    ArenaSeason?: string;
}
interface ItemClass{
    ClassID?: string;
    Flags?: string;
    PriceModifier?: string;
    ClassName_lang?: string;
    ID?: string;
    SubclassMapID?: string;
}
interface ItemCurrencyCost{
    ID?: string;
    ItemID?: string;
}
interface ItemContextPickerEntry{
    ID?: string;
    Flags?: string;
    ItemContextPickerID?: string;
    ItemCreationContext?: string;
    OrderIndex?: string;
    PVal?: string;
    PlayerConditionID?: string;
}
interface ItemCurrencyValue{
    ID?: string;
    CurrencyValue?: string;
    Currency?: string;
    ItemID?: string;
}
interface ItemDamageAmmo{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageOneHand{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageRanged{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageOneHandCaster{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageThrown{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageTwoHand{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageTwoHandCaster{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDamageWand{
    ID?: string;
    Quality?: string;
    ItemLevel?: string;
}
interface ItemDisplayInfo{
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
interface ItemDisenchantLoot{
    ID?: string;
    Class?: string;
    Subclass?: string;
    Quality?: string;
    MinLevel?: string;
    MaxLevel?: string;
    SkillRequired?: string;
    ExpansionID?: string;
}
interface ItemDisplayXUiCamera{
    ID?: string;
    ItemDisplayInfoID?: string;
    UiCameraID?: string;
}
interface ItemDisplayInfoMaterialRes{
    ID?: string;
    ComponentSection?: string;
    ItemDisplayInfoID?: string;
    MaterialResourcesID?: string;
}
interface ItemEffect{
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
interface ItemExtendedCost{
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
interface ItemFallbackVisual{
    ID?: string;
    InventorySlot?: string;
    ArmorSubClass?: string;
    FallbackItemID?: string;
}
interface ItemLevelSelector{
    ID?: string;
    ItemLevelSelectorQualitySetID?: string;
    MinItemLevel?: string;
    AzeriteUnlockMappingSetID?: string;
}
interface ItemLevelSelectorQuality{
    ID?: string;
    ParentILSQualitySetID?: string;
    Quality?: string;
    QualityItemBonusListID?: string;
}
interface ItemGroupSounds{
    ID?: string;
    Sound?: string;
}
interface ItemLimitCategory{
    ID?: string;
    Name_lang?: string;
    Quantity?: string;
    Flags?: string;
}
interface ItemLevelSelectorQualitySet{
    ID?: string;
    IlvlEpic?: string;
    IlvlRare?: string;
}
interface ItemModifiedAppearanceExtra{
    ID?: string;
    DisplayInventoryType?: string;
    DisplayWeaponSubclassID?: string;
    IconFileDataID?: string;
    SheatheType?: string;
    UnequippedIconFileDataID?: string;
}
interface ItemLimitCategoryCondition{
    ID?: string;
    AddQuantity?: string;
    ParentItemLimitCategoryID?: string;
    PlayerConditionID?: string;
}
interface ItemNameSlotOverride{
    ID?: string;
    OverrideNameString_lang?: string;
    SlotMask?: string;
    ItemNameDescriptionID?: string;
}
interface ItemModifiedAppearance{
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
interface ItemNameDescription{
    ID?: string;
    Description_lang?: string;
    Color?: string;
}
interface ItemPetFood{
    ID?: string;
    Name_lang?: string;
}
interface ItemPriceBase{
    ID?: string;
    ItemLevel?: string;
    Armor?: string;
    Weapon?: string;
}
interface ItemPurchaseGroup{
    ID?: string;
    ItemID?: string;
    Name_lang?: string;
}
interface ItemRandomProperties{
    ID?: string;
    Name?: string;
    Enchantment?: string;
    Name_lang?: string;
}
interface ItemRandomSuffix{
    ID?: string;
    Name_lang?: string;
    InternalName?: string;
    Enchantment?: string;
    AllocationPct?: string;
}
interface ItemRangedDisplayInfo{
    ID?: string;
    AutoAttackSpellVisualID?: string;
    CastSpellVisualID?: string;
    MissileSpellVisualEffectNameID?: string;
    QuiverFileDataID?: string;
}
interface ItemReforge{
    ID?: string;
    Source_stat?: string;
    Source_multiplier?: string;
    Target_stat?: string;
    Target_multiplier?: string;
}
interface ItemSet{
    ID?: string;
    Name_lang?: string;
    ItemID?: string;
    RequiredSkill?: string;
    RequiredSkillRank?: string;
    SetFlags?: string;
    SetSpellID?: string;
    SetThreshold?: string;
}
interface ItemSearchName{
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
interface ItemSetSpell{
    ID?: string;
    ItemSetID?: string;
    SpellID?: string;
    Threshold?: string;
    ChrSpecID?: string;
}
interface ItemSparse{
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
interface ItemSpec{
    ID?: string;
    MinLevel?: string;
    MaxLevel?: string;
    ItemType?: string;
    PrimaryStat?: string;
    SecondaryStat?: string;
    SpecializationID?: string;
}
interface ItemSpecOverride{
    ID?: string;
    ItemID?: string;
    SpecID?: string;
}
interface ItemSubClass{
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
interface ItemToBattlePet{
    ItemID?: string;
    Field_6_0_1_18179_001?: string;
    SpeciesID?: string;
}
interface ItemSubClassMask{
    ClassID?: string;
    Mask?: string;
    Name_lang?: string;
    ID?: string;
}
interface ItemUpgrade{
    ID?: string;
    CurrencyAmount?: string;
    CurrencyType?: string;
    ItemLevelIncrement?: string;
    ItemUpgradePathID?: string;
    PrerequisiteID?: string;
}
interface ItemUpgradePath{
    ID?: string;
}
interface ItemVisualEffects{
    ID?: string;
    Model?: string;
}
interface ItemToMountSpell{
    ItemID?: string;
    SpellID?: string;
}
interface ItemVisualsXEffect{
    ID?: string;
    AttachmentID?: string;
    DisplayWeaponSubclassID?: string;
    SpellVisualKitID?: string;
    AttachmentModelFileID?: string;
    ItemVisualsID?: string;
    Scale?: string;
}
interface ItemXItemEffect{
    ID?: string;
    ItemEffectID?: string;
    ItemID?: string;
}
interface ItemVisuals{
    ID?: string;
    Slot?: string;
    ModelFileID?: string;
    SpellVisualKitId1?: string;
    SpellVisualKitId2?: string;
}
interface ItemXBonusTree{
    ID?: string;
    ItemBonusTreeID?: string;
    ItemID?: string;
}
interface JournalEncounter{
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
interface JournalEncounterCreature{
    ID?: string;
    JournalEncounterID?: string;
    CreatureDisplayInfoID?: string;
    OrderIndex?: string;
    FileDataID?: string;
    Name_lang?: string;
    Description_lang?: string;
    UiModelSceneID?: string;
}
interface JournalEncounterItem{
    ID?: string;
    JournalEncounterID?: string;
    ItemID?: string;
    DifficultyMask?: string;
    FactionMask?: string;
    Flags?: string;
}
interface JournalEncounterSection{
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
interface JournalEncounterXDifficulty{
    ID?: string;
    JournalEncounterID?: string;
    DifficultyID?: string;
}
interface JournalEncounterXMapLoc{
    ID?: string;
    DungeonMapID?: string;
    Flags?: string;
    JournalEncounterID?: string;
    Map?: string;
    MapDisplayConditionID?: string;
    WorldMapAreaID?: string;
    UiMapID?: string;
}
interface JournalInstance{
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
interface JournalItemXDifficulty{
    ID?: string;
    JournalEncounterItemID?: string;
    DifficultyID?: string;
}
interface JournalTier{
    ID?: string;
    Name_lang?: string;
    PlayerConditionID?: string;
    Expansion?: string;
}
interface JournalTierXInstance{
    JournalTierID?: string;
    JournalInstanceID?: string;
    ID?: string;
}
interface JournalSectionXDifficulty{
    ID?: string;
    JournalEncounterSectionID?: string;
    DifficultyID?: string;
}
interface Keychain{
    ID?: string;
    Key?: string;
}
interface KeystoneAffix{
    ID?: string;
    Description_lang?: string;
    FiledataID?: string;
    Name_lang?: string;
}
interface LFGDungeonExpansion{
    ID?: string;
    Lfg_ID?: string;
    Expansion_level?: string;
    Random_ID?: string;
    Hard_level_min?: string;
    Hard_level_max?: string;
    Target_level_min?: string;
    Target_level_max?: string;
}
interface LFGDungeonGroup{
    ID?: string;
    Name_lang?: string;
    Order_index?: string;
    Parent_group_ID?: string;
    TypeID?: string;
}
interface LanguageWords{
    ID?: string;
    LanguageID?: string;
    Word?: string;
}
interface LFGDungeons{
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
interface LFGRoleRequirement{
    ID?: string;
    PlayerConditionID?: string;
    RoleType?: string;
    LfgDungeonsID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
}
interface LightData{
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
interface Languages{
    ID?: string;
    Name_lang?: string;
}
interface LfgDungeonsGroupingMap{
    ID?: string;
    LfgDungeonsID?: string;
    Random_lfgDungeonsID?: string;
    Group_ID?: string;
}
interface LightFloatBand{
    ID?: string;
    Num?: string;
    Time?: string;
    Data?: string;
}
interface Light{
    ID?: string;
    ContinentID?: string;
    LightParamsID?: string;
    GameCoords?: string;
    GameFalloffEnd?: string;
    GameFalloffStart?: string;
}
interface LightIntBand{
    ID?: string;
    Num?: string;
    Time?: string;
    Data?: string;
}
interface LightParams{
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
interface LightSkybox{
    ID?: string;
    Name?: string;
    Flags?: string;
    CelestialSkyboxFileDataID?: string;
    SkyboxFileDataID?: string;
}
interface Lightning{
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
interface LiquidMaterial{
    ID?: string;
    LVF?: string;
    Flags?: string;
}
interface LiquidObject{
    ID?: string;
    FlowDirection?: string;
    FlowSpeed?: string;
    LiquidTypeID?: string;
    Fishable?: string;
    Reflection?: string;
}
interface LoadingScreenSkin{
    ID?: string;
    UiTextureAtlasElementID?: string;
    FileDataID?: string;
}
interface LiquidType{
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
interface LiquidTypeXTexture{
    ID?: string;
    FileDataID?: string;
    OrderIndex?: string;
    LiquidTypeID?: string;
    Type?: string;
}
interface LoadingScreenTaxiSplines{
    ID?: string;
    PathID?: string;
    Locx?: string;
    Locy?: string;
    LegIndex?: string;
    LoadingScreenID?: string;
}
interface LoadingScreens{
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
interface Locale{
    Field_6_0_1_18179_001?: string;
    ID?: string;
    ClientDisplayExpansion?: string;
    FontFileDataID?: string;
    Secondary?: string;
    WowLocale?: string;
    Cfg_regionsID?: string;
    Field_5_0_2_15827_001?: string;
}
interface Location{
    ID?: string;
    Pos?: string;
    Rot?: string;
}
interface Lock{
    ID?: string;
    Type?: string;
    Index?: string;
    Skill?: string;
    Action?: string;
    Flags?: string;
}
interface LockType{
    ID?: string;
    Name_lang?: string;
    ResourceName_lang?: string;
    Verb_lang?: string;
    CursorName?: string;
    EnumID?: string;
}
interface LoreText{
    ID?: string;
    Text_lang?: string;
    Title_lang?: string;
    ConditionID?: string;
}
interface LoreTextPublic{
    LoreTextID?: string;
    CampaignID?: string;
    ConditionID?: string;
    Flags?: string;
    Order?: string;
    ParentID?: string;
}
interface MCRSlotXMCRCategory{
    ID?: string;
    ModifiedCraftingCategoryID?: string;
    ModifiedCraftingReagentSlotID?: string;
}
interface LookAtController{
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
interface ManagedWorldState{
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
interface ManagedWorldStateBuff{
    ID?: string;
    BuffSpellID?: string;
    ManagedWorldStateID?: string;
    OccurrenceValue?: string;
    PlayerConditionID?: string;
}
interface ManagedWorldStateInput{
    ID?: string;
    ManagedWorldStateID?: string;
    QuestID?: string;
    ValidInputConditionID?: string;
}
interface MailTemplate{
    ID?: string;
    Subject_lang?: string;
    Body_lang?: string;
}
interface ManifestInterfaceActionIcon{
    ID?: string;
}
interface ManifestInterfaceItemIcon{
    ID?: string;
}
interface ManifestInterfaceData{
    ID?: string;
    FilePath?: string;
    FileName?: string;
}
interface ManifestInterfaceTOCData{
    ID?: string;
    FilePath?: string;
}
interface ManifestMP3{
    ID?: string;
}
interface MapCelestialBody{
    ID?: string;
    CelestialBodyID?: string;
    MapID?: string;
    PlayerConditionID?: string;
}
interface Map{
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
interface MapChallengeMode{
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
interface MapDifficulty{
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
interface MapDifficultyXCondition{
    ID?: string;
    FailureDescription_lang?: string;
    MapDifficultyID?: string;
    OrderIndex?: string;
    PlayerConditionID?: string;
}
interface MapLoadingScreen{
    ID?: string;
    LoadingScreenID?: string;
    MapID?: string;
    Max?: string;
    Min?: string;
    OrderIndex?: string;
}
interface MawPower{
    ID?: string;
    SpellID?: string;
    MawPowerRarityID?: string;
}
interface Material{
    ID?: string;
    Flags?: string;
    FoleySoundID?: string;
    SheatheSoundID?: string;
    UnsheatheSoundID?: string;
    MaterialID?: string;
}
interface MarketingPromotionsXLocale{
    ID?: string;
    AcceptButtonTexture?: string;
    AcceptURL?: string;
    AdTexture?: string;
    DeclineButtonTexture?: string;
    LocaleID?: string;
    LogoTexture?: string;
    PromotionID?: string;
}
interface MawPowerRarity{
    ID?: string;
    Color?: string;
    Border?: string;
}
interface ModelAnimCloakDampening{
    ID?: string;
    AnimationDataID?: string;
    CloakDampeningID?: string;
    FileDataID?: string;
}
interface MinorTalent{
    ID?: string;
    ChrSpecializationID?: string;
    SpellID?: string;
    OrderIndex?: string;
}
interface MissileTargeting{
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
interface ModelManifest{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    Field_6_0_1_18179_003?: string;
    Field_6_0_1_18179_004?: string;
    Padding_6_0_1_18179_005?: string;
    Field_6_0_1_18179_006?: string;
    Field_6_0_1_18179_007?: string;
}
interface ModelFileData{
    FileDataID?: string;
    Flags?: string;
    LodCount?: string;
    ModelResourcesID?: string;
}
interface ModelNameToManifest{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
}
interface ModifiedCraftingCategory{
    ID?: string;
    DisplayName_lang?: string;
    Field_9_0_1_33978_001?: string;
}
interface ModelRibbonQuality{
    ID?: string;
    FileDataID?: string;
    RibbonQualityID?: string;
}
interface ModifiedCraftingReagentItem{
    ID?: string;
    Description_lang?: string;
    ModifiedCraftingCategoryID?: string;
    ItemBonusTreeID?: string;
    Flags?: string;
    Field_9_1_0_38312_004?: string;
    Field_9_1_0_38511_004?: string;
    Field_9_1_0_38511_005?: string;
}
interface ModifiedCraftingReagentSlot{
    ID?: string;
    Name_lang?: string;
    Field_9_0_1_33978_001?: string;
    PlayerConditionID?: string;
}
interface ModifiedReagentItem{
    ItemID?: string;
    ModifiedCraftingReagentItemID?: string;
}
interface ModifiedCraftingSpellSlot{
    ID?: string;
    SpellID?: string;
    Slot?: string;
    ModifiedCraftingReagentSlotID?: string;
    Field_9_0_1_35679_003?: string;
}
interface ModifierTree{
    ID?: string;
    Type?: string;
    Asset?: string;
    SecondaryAsset?: string;
    Operator?: string;
    Amount?: string;
    Parent?: string;
    TertiaryAsset?: string;
}
interface MountCapability{
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
interface MountEquipment{
    ID?: string;
    Item?: string;
    BuffSpell?: string;
    Field_8_2_0_30080_002?: string;
    LearnedBySpell?: string;
}
interface Mount{
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
interface MountType{
    ID?: string;
    Capability?: string;
}
interface MountTypeXCapability{
    ID?: string;
    MountCapabilityID?: string;
    MountTypeID?: string;
    OrderIndex?: string;
}
interface MountXDisplay{
    ID?: string;
    CreatureDisplayInfoID?: string;
    MountID?: string;
    PlayerConditionID?: string;
}
interface MountXSpellVisualKitPicker{
    ID?: string;
    SpellVisualKitPickerID?: string;
    Index?: string;
    Purpose?: string;
    Priority?: string;
    MountID?: string;
}
interface Movie{
    ID?: string;
    Volume?: string;
    KeyID?: string;
    AudioFileDataID?: string;
    SubtitleFileDataID?: string;
    Filename?: string;
}
interface MovieOverlays{
    ID?: string;
    MovieID?: string;
    LocaleMask?: string;
    OverlayRangeBegin?: string;
    OverlayRangeEnd?: string;
}
interface MultiStateProperties{
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
interface MovieFileData{
    FileDataID?: string;
    Resolution?: string;
    ID?: string;
}
interface MultiTransitionProperties{
    ID?: string;
    DurationMS?: string;
    TransitionType?: string;
    Flags?: string;
    StartSpellVisualKitID?: string;
    EndSpellVisualKitID?: string;
}
interface MovieVariation{
    ID?: string;
    MovieID?: string;
    FileDataID?: string;
    OverlayFileDataID?: string;
}
interface MythicPlusSeason{
    ID?: string;
    Season?: string;
    ExpansionLevel?: string;
    SomeItemLevel?: string;
}
interface MythicPlusSeasonRewardLevels{
    ID?: string;
    DifficultyLevel?: string;
    WeeklyRewardLevel?: string;
    EndOfRunRewardLevel?: string;
    Season?: string;
    MythicPlusSeasonID?: string;
}
interface NameGen{
    ID?: string;
    Name?: string;
    RaceID?: string;
    Sex?: string;
}
interface MythicPlusSeasonTrackedAffix{
    ID?: string;
    KeystoneAffixID?: string;
    Season?: string;
    Field_9_1_0_38511_003?: string;
    Field_9_1_0_38511_004?: string;
}
interface NPCModelItemSlotDisplayInfo{
    ID?: string;
    ItemDisplayInfoID?: string;
    ItemSlot?: string;
    NpcModelID?: string;
}
interface NPCSounds{
    ID?: string;
    SoundID?: string;
}
interface NamesReserved{
    ID?: string;
    Name?: string;
    Language?: string;
}
interface NumTalentsAtLevel{
    ID?: string;
    NumTalents?: string;
    NumTalentsDeathKnight?: string;
    NumTalentsDemonHunter?: string;
    Level?: string;
    NumberOfTalents?: string;
}
interface NamesReservedLocale{
    ID?: string;
    Name?: string;
    LocaleMask?: string;
}
interface NamesProfanity{
    ID?: string;
    Name?: string;
    Language?: string;
}
interface ObjectEffect{
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
interface ObjectEffectStateName{
    Name?: string;
    Value?: string;
}
interface ObjectEffectGroup{
    ID?: string;
    Name?: string;
}
interface ObjectEffectModifier{
    ID?: string;
    InputType?: string;
    MapType?: string;
    OutputType?: string;
    Param?: string;
}
interface ObjectEffectPackage{
    ID?: string;
    Name?: string;
}
interface OccluderCurtain{
    ID?: string;
    MapID?: string;
    Field_2_5_1_38043_001?: string;
    Field_2_5_1_38043_002?: string;
    Field_2_5_1_38043_003?: string;
    Field_2_5_1_38043_004?: string;
    Field_2_5_1_38043_005?: string;
}
interface Occluder{
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
interface OccluderLocation{
    ID?: string;
    MapID?: string;
    Pos?: string;
    Rot?: string;
}
interface ObjectEffectPackageElem{
    ID?: string;
    ObjectEffectPackageID?: string;
    ObjectEffectGroupID?: string;
    StateType?: string;
}
interface OccluderNode{
    ID?: string;
    OccluderID?: string;
    Sequence?: string;
    LocationID?: string;
}
interface OutlineEffect{
    ID?: string;
    Flags?: string;
    HighlightColorID?: string;
    PassiveHighlightColorID?: string;
    Priority?: string;
    Range?: string;
    UnitConditionID?: string;
}
interface PVPBracketTypes{
    ID?: string;
    BracketID?: string;
    WeeklyQuestID?: string;
}
interface OverrideSpellData{
    ID?: string;
    Spells?: string;
    Flags?: string;
    PlayerActionbarFileDataID?: string;
    PlayerActionbar?: string;
}
interface PVPItem{
    ID?: string;
    ItemID?: string;
    ItemLevelDelta?: string;
}
interface PVPScoreboardColumnHeader{
    Tooltip_lang?: string;
    Name_lang?: string;
    ID?: string;
    Field_8_2_0_30430_003?: string;
}
interface PVPDifficulty{
    ID?: string;
    MapID?: string;
    RangeIndex?: string;
    MinLevel?: string;
    MaxLevel?: string;
    Difficulty?: string;
}
interface PVPScoreboardCellInfo{
    ID?: string;
    PVPScoreboardColumnHeaderID?: string;
    Icon?: string;
    Team?: string;
}
interface PVPScoreboardLayout{
    ID?: string;
    PVPStatID?: string;
    PVPScoreboardColumnHeaderID?: string;
    OrderIndex?: string;
}
interface PVPStat{
    Description_lang?: string;
    ID?: string;
    MapID?: string;
}
interface Package{
    ID?: string;
    Icon?: string;
    Cost?: string;
    Name_lang?: string;
}
interface PaperDollItemFrame{
    ItemButtonName?: string;
    SlotIcon?: string;
    SlotNumber?: string;
    ID?: string;
    SlotIconFileID?: string;
}
interface PageTextMaterial{
    ID?: string;
    Name?: string;
}
interface ParagonReputation{
    ID?: string;
    FactionID?: string;
    LevelThreshold?: string;
    QuestID?: string;
}
interface ParticulateSound{
    ID?: string;
    ParticulateID?: string;
    DaySound?: string;
    NightSound?: string;
    EnterSound?: string;
    ExitSound?: string;
}
interface PathEdge{
    ID?: string;
    PathNodeID?: string;
    PathID?: string;
}
interface ParticleColor{
    ID?: string;
    Start?: string;
    MID?: string;
    End?: string;
}
interface Particulate{
    ID?: string;
    MapID?: string;
    PlayerConditionID?: string;
}
interface PathNode{
    ID?: string;
    LocationID?: string;
    PathID?: string;
    Sequence?: string;
}
interface Path{
    ID?: string;
    Alpha?: string;
    Blue?: string;
    Flags?: string;
    Green?: string;
    Red?: string;
    SplineType?: string;
    Type?: string;
}
interface PetPersonality{
    ID?: string;
    Name_lang?: string;
    HappinessThreshold?: string;
    HappinessDamage?: string;
    DamageModifier?: string;
    Field_1_13_0_28211_003?: string;
}
interface PathNodeProperty{
    ID?: string;
    PathID?: string;
    PropertyIndex?: string;
    Sequence?: string;
    Value?: string;
    Field_8_1_0_27934_003?: string;
}
interface PathProperty{
    ID?: string;
    PathID?: string;
    PropertyIndex?: string;
    Value?: string;
}
interface PhaseShiftZoneSounds{
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
interface Phase{
    ID?: string;
    Name?: string;
    Flags?: string;
    MapID?: string;
    PhaseShift?: string;
    ChildMap?: string;
    ParentMapID?: string;
}
interface PetLoyalty{
    ID?: string;
    Name_lang?: string;
}
interface PetitionType{
    ID?: string;
    Name?: string;
    Type?: string;
}
interface PhaseXPhaseGroup{
    ID?: string;
    PhaseID?: string;
    PhaseGroupID?: string;
}
interface PlayerCondition{
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
interface PositionerState{
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
interface Positioner{
    ID?: string;
    FirstStateID?: string;
    Flags?: string;
    StartLife?: string;
    StartLifePercent?: string;
}
interface PositionerStateEntry{
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
interface PrestigeLevelInfo{
    ID?: string;
    BadgeTextureFileDataID?: string;
    Flags?: string;
    Name_lang?: string;
    PrestigeLevel?: string;
    HonorLevel?: string;
    AwardedAchievementID?: string;
}
interface PowerDisplay{
    ID?: string;
    ActualType?: string;
    GlobalStringBaseTag?: string;
    Red?: string;
    Green?: string;
    Blue?: string;
    Padding_4_0_0_11792_006?: string;
}
interface PowerType{
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
interface PvpBrawl{
    ID?: string;
    Name_lang?: string;
    Description_lang?: string;
    Objective_lang?: string;
    BattlemasterListID?: string;
    LFGDungeonsID?: string;
    RewardsQuestID?: string;
}
interface PvpReward{
    ID?: string;
    HonorLevel?: string;
    PrestigeLevel?: string;
    RewardPackID?: string;
}
interface PvpScalingEffect{
    ID?: string;
    PvpScalingEffectTypeID?: string;
    SpecializationID?: string;
    Value?: string;
}
interface PvpScalingEffectType{
    ID?: string;
    Name?: string;
}
interface PvpSeason{
    ID?: string;
    Season?: string;
}
interface PvpSeasonRewardLevels{
    ID?: string;
    Tier?: string;
    EndOfMatchILvl?: string;
    WeeklyCacheILvl?: string;
    PvpSeasonID?: string;
}
interface PvpTalentCategory{
    ID?: string;
    TalentSlotMask?: string;
}
interface PvpTalent{
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
interface PvpTier{
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
interface PvpTalentUnlock{
    ID?: string;
    Field_1_13_0_28211_001?: string;
    Field_1_13_0_28211_002?: string;
    Field_1_13_0_28211_003?: string;
}
interface QuestFactionReward{
    ID?: string;
    Difficulty?: string;
}
interface QuestInfo{
    ID?: string;
    InfoName_lang?: string;
    Modifiers?: string;
    Profession?: string;
    Type?: string;
}
interface QuestFeedbackEffect{
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
interface PvpTalentSlotUnlock{
    ID?: string;
    DeathKnightLevelRequired?: string;
    DemonHunterLevelRequired?: string;
    LevelRequired?: string;
    Slot?: string;
}
interface QuestLine{
    Name_lang?: string;
    ID?: string;
    QuestID?: string;
    Description_lang?: string;
    PlayerConditionID?: string;
}
interface QuestMoneyReward{
    ID?: string;
    Difficulty?: string;
}
interface QuestPOIBlob{
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
interface QuestObjective{
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
interface QuestPOIPoint{
    ID?: string;
    X?: string;
    Y?: string;
    QuestPOIBlobID?: string;
    Z?: string;
}
interface QuestLineXQuest{
    ID?: string;
    OrderIndex?: string;
    QuestID?: string;
    QuestLineID?: string;
}
interface QuestSort{
    ID?: string;
    SortName_lang?: string;
    UiOrderIndex?: string;
}
interface QuestPackageItem{
    ID?: string;
    DisplayType?: string;
    ItemID?: string;
    ItemQuantity?: string;
    PackageID?: string;
}
interface QuestV2{
    ID?: string;
    UniqueBitFlag?: string;
}
interface QuestXGroupActivity{
    ID?: string;
    GroupFinderActivityID?: string;
    QuestID?: string;
}
interface QuestXP{
    ID?: string;
    Difficulty?: string;
}
interface QuestV2CliTask{
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
interface QuestXUiWidgetSet{
    ID?: string;
    QuestID?: string;
    UiWidgetSetID?: string;
}
interface RTPC{
    ID?: string;
    SoundParameterID?: string;
    GameParameterID?: string;
    CurveID?: string;
    Field_9_0_1_33978_004?: string;
    SoundKitID?: string;
}
interface QuestXUIQuestDetailsTheme{
    ID?: string;
    QuestID?: string;
    UiQuestDetailsThemeID?: string;
}
interface RafActivity{
    ID?: string;
    CriteriaTreeID?: string;
    RewardQuestID?: string;
}
interface RacialMounts{
    ID?: string;
    Race?: string;
    Spell_ID?: string;
}
interface RTPCData{
    ID?: string;
    RTPCID?: string;
    Field_9_0_1_33978_001?: string;
    CreatureID?: string;
    SpellID?: string;
    Field_9_0_1_33978_004?: string;
}
interface RandPropPoints{
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
interface RecipeProgressionGroupEntry{
    ID?: string;
    RecipeProgressionGroupID?: string;
    SkillLineAbilityID?: string;
    Order?: string;
    RequiredRecipeExperience?: string;
    EarnedExperienceMask?: string;
    Field_9_0_1_35256_005?: string;
}
interface RelicSlotTierRequirement{
    ID?: string;
    PlayerConditionID?: string;
    RelicIndex?: string;
    RelicTier?: string;
}
interface RelicTalent{
    ID?: string;
    ArtifactPowerID?: string;
    ArtifactPowerLabel?: string;
    Flags?: string;
    PVal?: string;
    Type?: string;
}
interface RenownRewards{
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
interface ResearchBranch{
    ID?: string;
    Name_lang?: string;
    ResearchFieldID?: string;
    CurrencyID?: string;
    Texture?: string;
    ItemID?: string;
    BigTextureFileID?: string;
    TextureFileID?: string;
}
interface ResearchField{
    ID?: string;
    Name_lang?: string;
    Slot?: string;
}
interface ResearchProject{
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
interface ResearchSite{
    ID?: string;
    MapID?: string;
    QuestPOIBlobID?: string;
    Name_lang?: string;
    AreaPOIIconEnum?: string;
}
interface Resistances{
    ID?: string;
    Flags?: string;
    FizzleSoundID?: string;
    Name_lang?: string;
}
interface RewardPackXCurrencyType{
    ID?: string;
    CurrencyTypeID?: string;
    Quantity?: string;
    RewardPackID?: string;
}
interface RewardPack{
    ID?: string;
    ArtifactXPCategoryID?: string;
    ArtifactXPDifficulty?: string;
    ArtifactXPMultiplier?: string;
    CharTitleID?: string;
    Money?: string;
    TreasurePickerID?: string;
}
interface RewardPackXItem{
    ID?: string;
    ItemID?: string;
    ItemQuantity?: string;
    RewardPackID?: string;
}
interface RopeEffect{
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
interface RibbonQuality{
    ID?: string;
    AngleThreshold?: string;
    Flags?: string;
    MaxSampleTimeDelta?: string;
    MinDistancePerSlice?: string;
    NumStrips?: string;
}
interface RulesetRaidLootUpgrade{
    ID?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    ItemUpgradeID?: string;
    Field_6_0_1_18179_004?: string;
}
interface RulesetItemUpgrade{
    Field_6_0_1_18179_001?: string;
    ID?: string;
    ItemID?: string;
    ItemUpgradeID?: string;
}
interface SDReplacementModel{
    ID?: string;
    SdFileDataID?: string;
}
interface SSAOSettings{
    ID?: string;
    Field_8_2_0_30080_001?: string;
    Field_8_2_0_30080_002?: string;
    Field_8_2_0_30080_003?: string;
    Radius?: string;
    ShadowMult?: string;
    ShadowPower?: string;
    ShadowClamp?: string;
}
interface RulesetRaidOverride{
    ID?: string;
    MapID?: string;
    DifficultyID?: string;
    RulesetID?: string;
    SharedLock?: string;
    Raidduration?: string;
}
interface RuneforgeLegendaryAbility{
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
interface ScalingStatDistribution{
    ID?: string;
    StatID?: string;
    Bonus?: string;
    Minlevel?: string;
    Maxlevel?: string;
    PlayerLevelToItemLevelCurveID?: string;
}
interface SandboxScaling{
    ID?: string;
    Flags?: string;
    MaxLevel?: string;
    MinLevel?: string;
}
interface ScalingStatValues{
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
interface ScenarioStep{
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
interface Scenario{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
    AreaTableID?: string;
    Type?: string;
    UiTextureKitID?: string;
}
interface ScenarioEventEntry{
    ID?: string;
    TriggerType?: string;
    TriggerAsset?: string;
}
interface SceneScript{
    Name?: string;
    Script?: string;
    ID?: string;
    FirstSceneScriptID?: string;
    NextSceneScriptID?: string;
}
interface SceneScriptGlobalText{
    ID?: string;
    Name?: string;
    Script?: string;
}
interface SceneScriptPackage{
    Name?: string;
    ID?: string;
}
interface SceneScriptPackageMember{
    ID?: string;
    ChildSceneScriptPackageID?: string;
    OrderIndex?: string;
    SceneScriptID?: string;
    SceneScriptPackageID?: string;
}
interface SceneScriptText{
    ID?: string;
    Name?: string;
    Script?: string;
}
interface ScheduledInterval{
    ID?: string;
    DateAlignmentType?: string;
    DurationSecs?: string;
    Flags?: string;
    OffsetSecs?: string;
    RepeatType?: string;
}
interface ScheduledWorldStateGroup{
    ID?: string;
    Flags?: string;
    Priority?: string;
    ScheduledIntervalID?: string;
    SelectionCount?: string;
    SelectionType?: string;
}
interface ScheduledWorldState{
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
interface ScheduledWorldStateXUniqCat{
    ID?: string;
    ScheduledUniqueCategoryID?: string;
    ScheduledWorldStateID?: string;
}
interface ScreenEffect{
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
interface ScreenLocation{
    ID?: string;
    Name?: string;
}
interface ScreenEffectType{
    ID?: string;
    Priority?: string;
}
interface SeamlessSite{
    ID?: string;
    MapID?: string;
}
interface ShadowyEffect{
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
interface ServerMessages{
    ID?: string;
    Text_lang?: string;
}
interface SheatheSoundLookups{
    ID?: string;
    ClassID?: string;
    SubclassID?: string;
    Material?: string;
    CheckMaterial?: string;
    SheatheSound?: string;
    UnsheatheSound?: string;
}
interface SkillCostsData{
    ID?: string;
    SkillCostsID?: string;
    Cost?: string;
}
interface SiegeableProperties{
    ID?: string;
    DamageSpellVisualKitID?: string;
    Flags?: string;
    HealingSpellVisualKitID?: string;
    Health?: string;
}
interface SkillLineAbilitySortedSpell{
    ID?: string;
    Spell?: string;
}
interface SkillLine{
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
interface SkillLineAbility{
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
interface SkillRaceClassInfo{
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
interface SkillLineCategory{
    ID?: string;
    Name_lang?: string;
    SortIndex?: string;
}
interface SkillTiers{
    ID?: string;
    Value?: string;
    Cost?: string;
}
interface Soulbind{
    Name_lang?: string;
    ID?: string;
    CovenantID?: string;
    GarrTalentTreeID?: string;
    CreatureID?: string;
    GarrFollowerID?: string;
    PlayerConditionID?: string;
}
interface SoulbindConduit{
    ID?: string;
    SpellID?: string;
    ConduitType?: string;
    CovenantID?: string;
    SpecSetID?: string;
    Flags?: string;
}
interface SkySceneXPlayerCondition{
    ID?: string;
    PlayerConditionID?: string;
    SkySceneID?: string;
}
interface SoulbindConduitEnhancedSocket{
    ID?: string;
    GarrTalentID?: string;
    PlayerConditionID?: string;
}
interface SoulbindConduitItem{
    ID?: string;
    ItemID?: string;
    ConduitID?: string;
}
interface SoulbindConduitRank{
    ID?: string;
    RankIndex?: string;
    SpellID?: string;
    AuraPointsOverride?: string;
    SoulbindConduitID?: string;
}
interface SoulbindConduitRankProperties{
    ID?: string;
    Rank?: string;
    ItemLevel?: string;
    QualityID?: string;
}
interface SoulbindUIDisplayInfo{
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
interface SoundAmbience{
    ID?: string;
    AmbienceID?: string;
    Flags?: string;
    FlavorSoundFilterID?: string;
    SoundFilterID?: string;
    AmbienceStartID?: string;
    AmbienceStopID?: string;
    SoundKitID?: string;
}
interface SoundAmbienceFlavor{
    ID?: string;
    SoundAmbienceID?: string;
    SoundEntriesIDDay?: string;
    SoundEntriesIDNight?: string;
}
interface SoundBusName{
    EnumID?: string;
    Name?: string;
}
interface SoundBus{
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
interface SoundBusOverride{
    ID?: string;
    PlaybackLimit?: string;
    PlayerConditionID?: string;
    Priority?: string;
    PriorityPenalty?: string;
    SoundBusID?: string;
    Volume?: string;
}
interface SoundEmitterPillPoints{
    ID?: string;
    SoundEmittersID?: string;
    Position?: string;
}
interface SoundEntries{
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
interface SoundCharacterMacroLines{
    ID?: string;
    Category?: string;
    Sex?: string;
    Race?: string;
    SoundID?: string;
}
interface SoundEmitters{
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
interface SoundEntriesFallbacks{
    ID?: string;
    SoundEntriesID?: string;
    FallbackSoundEntriesID?: string;
}
interface SoundEntriesAdvanced{
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
interface SoundFilter{
    ID?: string;
    Name?: string;
}
interface SoundFilterElem{
    ID?: string;
    SoundFilterID?: string;
    OrderIndex?: string;
    FilterType?: string;
    Params?: string;
}
interface SoundEnvelope{
    ID?: string;
    CurveID?: string;
    DecayIndex?: string;
    EnvelopeType?: string;
    Flags?: string;
    ReleaseIndex?: string;
    SoundKitID?: string;
    SustainIndex?: string;
}
interface SoundKitChild{
    ID?: string;
    ParentSoundKitID?: string;
    SoundKitID?: string;
}
interface SoundKitAdvanced{
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
interface SoundKitEntry{
    ID?: string;
    FileDataID?: string;
    SoundKitID?: string;
    Frequency?: string;
    Volume?: string;
}
interface SoundKit{
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
interface SoundKitFallback{
    ID?: string;
    FallbackSoundKitID?: string;
    SoundKitID?: string;
}
interface SoundKitName{
    ID?: string;
    Name?: string;
}
interface SoundParameter{
    ID?: string;
    Field_9_0_1_33978_000?: string;
    Field_9_0_1_33978_001?: string;
    Field_9_0_1_33978_002?: string;
    Field_9_0_1_33978_003?: string;
    Field_9_0_1_33978_004?: string;
}
interface SoundProviderPreferences{
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
interface SoundOverride{
    ID?: string;
    WowEditLock?: string;
    WowEditLockUser?: string;
    ZoneIntroMusicID?: string;
    ZoneMusicID?: string;
    SoundAmbienceID?: string;
    SoundProviderPreferencesID?: string;
    Flags?: string;
}
interface SpamMessages{
    ID?: string;
    Text?: string;
}
interface SoundWaterType{
    ID?: string;
    SoundType?: string;
    SoundSubtype?: string;
    SoundID?: string;
}
interface SourceInfo{
    ID?: string;
    PvpFaction?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
    SpellID?: string;
}
interface SoundSamplePreferences{
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
interface SpecSetMember{
    ID?: string;
    ChrSpecializationID?: string;
    SpecSet?: string;
}
interface SpecializationSpellsDisplay{
    ID?: string;
    SpecializationID?: string;
    SpellID?: string;
}
interface SpecializationSpells{
    ID?: string;
    SpecID?: string;
    SpellID?: string;
    OverridesSpellID?: string;
    Description_lang?: string;
    DisplayOrder?: string;
    Field_5_0_1_15464_004?: string;
}
interface SpellActionBarPref{
    ID?: string;
    PreferredActionBarMask?: string;
    SpellID?: string;
}
interface SpellAuraNames{
    EnumID?: string;
    SpecialMiscValue?: string;
    Globalstrings_tag?: string;
    Name_lang?: string;
}
interface SpellActivationOverlay{
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
interface Spell{
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
interface SpellAuraOptions{
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
interface SpellAuraRestrictionsDifficulty{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
}
interface SpellAuraVisXChrSpec{
    ID?: string;
    SpellAuraVisibilityID?: string;
    ChrSpecializationID?: string;
}
interface SpellAuraRestrictions{
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
interface SpellAuraVisXTalentTab{
    ID?: string;
    SpellAuraVisibilityID?: string;
    TalentTabID?: string;
}
interface SpellAuraVisibility{
    ID?: string;
    SpellID?: string;
    Type?: string;
    Flags?: string;
}
interface SpellCastTimes{
    ID?: string;
    Base?: string;
    PerLevel?: string;
    Minimum?: string;
}
interface SpellCastingRequirements{
    ID?: string;
    FacingCasterFlags?: string;
    MinFactionID?: string;
    MinReputation?: string;
    RequiredAreasID?: string;
    RequiredAuraVision?: string;
    RequiresSpellFocus?: string;
    SpellID?: string;
}
interface SpellCategories{
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
interface SpellChainEffects{
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
interface SpellCategory{
    ID?: string;
    Flags?: string;
    UsesPerWeek?: string;
    Padding_6_0_1_18179_003?: string;
    Name_lang?: string;
    MaxCharges?: string;
    ChargeRecoveryTime?: string;
    TypeMask?: string;
}
interface SpellClutterAreaEffectCounts{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterFrameRates{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClassOptions{
    SpellClassMask?: string;
    ID?: string;
    ModalNextSpell?: string;
    SpellClassSet?: string;
    SpellID?: string;
    Description_lang?: string;
}
interface SpellClutterImpactModelCounts{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterKitDistances{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterMissileDist{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellClutterWeaponTrailDist{
    ID?: string;
    Level?: string;
    Min?: string;
    Max?: string;
}
interface SpellCraftUI{
    ID?: string;
    CastUI?: string;
}
interface SpellDifficulty{
    ID?: string;
    DifficultySpellID?: string;
}
interface SpellCooldowns{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    CategoryRecoveryTime?: string;
    RecoveryTime?: string;
    StartRecoveryTime?: string;
}
interface SpellDescriptionVariables{
    ID?: string;
    Variables?: string;
}
interface SpellDuration{
    ID?: string;
    Duration?: string;
    DurationPerLevel?: string;
    MaxDuration?: string;
}
interface SpellDispelType{
    ID?: string;
    Name_lang?: string;
    Mask?: string;
    ImmunityPossible?: string;
    InternalName?: string;
}
interface SpellEffectCameraShakes{
    ID?: string;
    CameraShake?: string;
}
interface SpellEffectScaling{
    ID?: string;
    Coefficient?: string;
    Variance?: string;
    ResourceCoefficient?: string;
    SpellEffectID?: string;
    Field_5_4_0_17266_004?: string;
}
interface SpellEffectAutoDescription{
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
interface SpellEffect{
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
interface SpellEffectEmission{
    ID?: string;
    AreaModelID?: string;
    EmissionRate?: string;
    Flags?: string;
    ModelScale?: string;
}
interface SpellEffectNames{
    EnumID?: string;
    Name_lang?: string;
}
interface SpellEffectGroupSize{
    ID?: string;
    SpellEffectID?: string;
    Coefficient?: string;
}
interface SpellEquippedItems{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    EquippedItemClass?: string;
    EquippedItemInvTypes?: string;
    EquippedItemSubclass?: string;
}
interface SpellFlyout{
    ID?: string;
    Flags?: string;
    RaceMask?: string;
    ClassMask?: string;
    SpellIconID?: string;
    Name_lang?: string;
    Description_lang?: string;
    SpellIconFileID?: string;
}
interface SpellFocusObject{
    ID?: string;
    Name_lang?: string;
}
interface SpellIcon{
    ID?: string;
    TextureFilename?: string;
}
interface SpellFlyoutItem{
    ID?: string;
    SpellFlyoutID?: string;
    SpellID?: string;
    Slot?: string;
}
interface SpellInterrupts{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    AuraInterruptFlags?: string;
    ChannelInterruptFlags?: string;
    InterruptFlags?: string;
}
interface SpellLabel{
    ID?: string;
    LabelID?: string;
    SpellID?: string;
}
interface SpellItemEnchantmentCondition{
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
interface SpellItemEnchantment{
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
interface SpellKeyboundOverride{
    ID?: string;
    Function?: string;
    Data?: string;
    Type?: string;
    FunctionID?: string;
    Field_5_0_1_15657_002?: string;
    Field_9_1_0_38709_003?: string;
}
interface SpellLearnSpell{
    ID?: string;
    LearnSpellID?: string;
    OverridesSpellID?: string;
    SpellID?: string;
}
interface SpellLevels{
    ID?: string;
    SpellID?: string;
    DifficultyID?: string;
    BaseLevel?: string;
    MaxLevel?: string;
    SpellLevel?: string;
    MaxPassiveAuraLevel?: string;
}
interface SpellMastery{
    ID?: string;
    SpellID?: string;
    Page?: string;
    ClassID?: string;
}
interface SpellMechanic{
    ID?: string;
    StateName_lang?: string;
    State?: string;
}
interface SpellMiscDifficulty{
    SpellID?: string;
    DifficultyID?: string;
    SpellMiscID?: string;
}
interface SpellMisc{
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
interface SpellMissileMotion{
    ID?: string;
    Flags?: string;
    MissileCount?: string;
    Name?: string;
    ScriptBody?: string;
}
interface SpellMissile{
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
interface SpellOverrideName{
    ID?: string;
    OverrideName_lang?: string;
    Flags?: string;
    Field_9_1_0_38709_001_lang?: string;
}
interface SpellProceduralEffect{
    ID?: string;
    Type?: string;
    Value?: string;
}
interface SpellPowerDifficulty{
    ID?: string;
    DifficultyID?: string;
    OrderIndex?: string;
}
interface SpellName{
    ID?: string;
    Name_lang?: string;
}
interface SpellProcsPerMinute{
    ID?: string;
    BaseProcRate?: string;
    Flags?: string;
}
interface SpellProcsPerMinuteMod{
    ID?: string;
    Type?: string;
    Param?: string;
    Coeff?: string;
    SpellProcsPerMinuteID?: string;
}
interface SpellPower{
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
interface SpellReagentsCurrency{
    ID?: string;
    CurrencyCount?: string;
    CurrencyTypesID?: string;
    SpellID?: string;
}
interface SpellRange{
    ID?: string;
    RangeMin?: string;
    RangeMax?: string;
    Flags?: string;
    DisplayName_lang?: string;
    DisplayNameShort_lang?: string;
}
interface SpellRadius{
    ID?: string;
    Radius?: string;
    RadiusPerLevel?: string;
    RadiusMin?: string;
    RadiusMax?: string;
}
interface SpellReagents{
    ID?: string;
    SpellID?: string;
    Reagent?: string;
    ReagentCount?: string;
    CurrencyID?: string;
    CurrencyCount?: string;
}
interface SpellScript{
    Name?: string;
    Script?: string;
    LastEditUser?: string;
    ID?: string;
    Field_9_0_1_33978_004?: string;
    Arguments?: string;
}
interface SpellRuneCost{
    ID?: string;
    Blood?: string;
    Unholy?: string;
    Frost?: string;
    Chromatic?: string;
    RunicPower?: string;
    Field_3_0_1_8303_004?: string;
}
interface SpellScaling{
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
interface SpellScriptText{
    Script?: string;
    ID?: string;
    PrevText?: string;
    NextText?: string;
    SpellScriptID?: string;
}
interface SpellShapeshift{
    ID?: string;
    ShapeshiftExclude?: string;
    ShapeshiftMask?: string;
    StanceBarOrder?: string;
    SpellID?: string;
}
interface SpellShapeshiftForm{
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
interface SpellSpecialUnitEffect{
    EnumID?: string;
    SpellVisualEffectNameID?: string;
    ID?: string;
    PositionerID?: string;
}
interface SpellTargetRestrictions{
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
interface SpellTotems{
    ID?: string;
    RequiredTotemCategoryID?: string;
    Totem?: string;
    SpellID?: string;
}
interface SpellVisualAnimName{
    AnimID?: string;
    Name?: string;
}
interface SpellVisualAnim{
    ID?: string;
    AnimKitID?: string;
    InitialAnimID?: string;
    LoopAnimID?: string;
}
interface SpellVisual{
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
interface SpellVisualColorEffect{
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
interface SpellVisualEffectName{
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
interface SpellVisualKit{
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
interface SpellVisualEvent{
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
interface SpellVisualKitAreaModel{
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
interface SpellVisualKitEffect{
    ID?: string;
    Effect?: string;
    EffectType?: string;
    ParentSpellVisualKitID?: string;
}
interface SpellVisualKitModelAttach{
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
interface SpellVisualKitPicker{
    ID?: string;
    PlayerConditionID?: string;
    Field_9_0_5_37503_002?: string;
}
interface SpellVisualKitPickerEntry{
    ID?: string;
    SpellVisualKitID?: string;
    Probability?: string;
    SpellVisualKitPickerID?: string;
}
interface SpellVisualMissile{
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
interface SpellVisualPrecastTransitions{
    ID?: string;
    PrecastLoadAnimName?: string;
    PrecastHoldAnimName?: string;
}
interface SpellVisualScreenEffect{
    ID?: string;
    ScreenEffectID?: string;
    ScreenEffectTypeID?: string;
}
interface SpellXDescriptionVariables{
    ID?: string;
    SpellDescriptionVariablesID?: string;
    SpellID?: string;
}
interface StableSlotPrices{
    ID?: string;
    Cost?: string;
}
interface Startup_Strings{
    ID?: string;
    Name?: string;
    Message_lang?: string;
}
interface SpellXSpellVisual{
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
interface StartupFiles{
    ID?: string;
    BytesRequired?: string;
    FileDataID?: string;
    Locale?: string;
}
interface Stationery{
    ID?: string;
    ItemID?: string;
    Texture?: string;
    Flags?: string;
    TextureFileDataID?: string;
}
interface SummonProperties{
    ID?: string;
    Control?: string;
    Faction?: string;
    Title?: string;
    Slot?: string;
    Flags?: string;
}
interface StringLookups{
    ID?: string;
    String?: string;
}
interface TabardBackgroundTextures{
    ID?: string;
    TorsoTexture?: string;
}
interface TabardEmblemTextures{
    ID?: string;
    TorsoTexture?: string;
}
interface TactKey{
    ID?: string;
    Key?: string;
}
interface Talent{
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
interface TactKeyLookup{
    ID?: string;
    TACTID?: string;
}
interface TalentTreePrimarySpells{
    ID?: string;
    TalentTabID?: string;
    SpellID?: string;
    Flags?: string;
}
interface TaxiNodes{
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
interface TalentTab{
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
interface TaxiPath{
    ID?: string;
    FromTaxiNode?: string;
    ToTaxiNode?: string;
    Cost?: string;
}
interface TaxiPathNode{
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
interface TeamContributionPoints{
    ID?: string;
    Data?: string;
}
interface TerrainType{
    ID?: string;
    TerrainID?: string;
    TerrainDesc?: string;
    FootstepSprayRun?: string;
    FootstepSprayWalk?: string;
    SoundID?: string;
    Flags?: string;
}
interface TerrainMaterial{
    ID?: string;
    Name?: string;
    Shader?: string;
    EnvMapPath?: string;
    EnvMapDiffuseFileID?: string;
    EnvMapSpecularFileID?: string;
}
interface TerrainColorGradingRamp{
    ID?: string;
    Min?: string;
    Max?: string;
    Texture0?: string;
    Texture1?: string;
}
interface TerrainTypeSounds{
    ID?: string;
    Name?: string;
}
interface TextureBlendSet{
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
interface TextureFileData{
    Field_6_0_1_18179_000?: string;
    Field_6_0_1_18179_001?: string;
    Field_6_0_1_18179_002?: string;
    FileDataID?: string;
    MaterialResourcesID?: string;
    UsageType?: string;
}
interface TierTransition{
    ID?: string;
    Field_9_0_1_33978_000_tier?: string;
    Field_9_0_1_33978_001_animationdataID?: string;
    Field_9_0_1_33978_002_animationdataID?: string;
    Field_9_0_1_33978_003_milliseconds?: string;
}
interface TotemCategory{
    ID?: string;
    Name_lang?: string;
    TotemCategoryType?: string;
    TotemCategoryMask?: string;
}
interface Toy{
    ID?: string;
    Flags?: string;
    ItemID?: string;
    SourceText_lang?: string;
    SourceTypeEnum?: string;
}
interface TradeSkillCategory{
    ID?: string;
    SkillLineID?: string;
    ParentTradeSkillCategoryID?: string;
    OrderIndex?: string;
    Name_lang?: string;
    Flags?: string;
    HordeName_lang?: string;
}
interface TransformMatrix{
    ID?: string;
    Pitch?: string;
    Pos?: string;
    Roll?: string;
    Scale?: string;
    Yaw?: string;
}
interface TradeSkillItem{
    ID?: string;
    ItemLevel?: string;
    RequiredLevel?: string;
}
interface TransmogIllusion{
    ID?: string;
    UnlockConditionID?: string;
    TransmogCost?: string;
    SpellItemEnchantmentID?: string;
    Flags?: string;
}
interface TransmogHoliday{
    ID?: string;
    RequiredTransmogHoliday?: string;
}
interface TransmogDefaultLevel{
    ID?: string;
    ExpansionID?: string;
    Characterlevel?: string;
    PlayerConditionID?: string;
}
interface TransmogSetGroup{
    ID?: string;
    Name_lang?: string;
}
interface TransmogSet{
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
interface TransportPhysics{
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
interface TransportAnimation{
    ID?: string;
    TransportID?: string;
    TimeIndex?: string;
    Pos?: string;
    SequenceID?: string;
}
interface TransmogSetItem{
    ID?: string;
    Flags?: string;
    ItemModifiedAppearanceID?: string;
    TransmogSetID?: string;
}
interface TransportRotation{
    ID?: string;
    GameObjectsID?: string;
    TimeIndex?: string;
    Rot?: string;
}
interface Trophy{
    ID?: string;
    GameObjectDisplayInfoID?: string;
    Name_lang?: string;
    PlayerConditionID?: string;
    TrophyTypeID?: string;
}
interface UIChromieTimeExpansionInfo{
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
interface TrophyInstance{
    ID?: string;
}
interface TrophyType{
    ID?: string;
}
interface UICovenantAbility{
    ID?: string;
    CovenantPreviewID?: string;
    SpellID?: string;
    AbilityType?: string;
    SoulbindDisplayInfoID?: string;
}
interface UICovenantPreview{
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
interface UIDungeonScoreRarity{
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
interface UIScriptedAnimationEffect{
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
interface UIExpansionDisplayInfo{
    ID?: string;
    ExpansionBanner?: string;
    ExpansionLevel?: string;
    ExpansionLogo?: string;
}
interface UIExpansionDisplayInfoIcon{
    ID?: string;
    FeatureDescription_lang?: string;
    FeatureIcon?: string;
    ParentID?: string;
}
interface UISoundLookups{
    ID?: string;
    SoundID?: string;
    SoundName?: string;
}
interface UIEventToast{
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
interface UiCamFbackTransmogChrRace{
    ID?: string;
    ChrRaceID?: string;
    Gender?: string;
    InventoryType?: string;
    UiCameraID?: string;
    Variation?: string;
}
interface UISplashScreen{
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
interface UiCamFbackTransmogWeapon{
    ID?: string;
    InventoryType?: string;
    ItemClass?: string;
    ItemSubclass?: string;
    UiCameraID?: string;
}
interface UiCamera{
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
interface UiCanvas{
    ID?: string;
    Height?: string;
    Width?: string;
}
interface UiItemInteraction{
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
interface UiCovenantDisplayInfo{
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
interface UiCameraType{
    ID?: string;
    Height?: string;
    Name?: string;
    Width?: string;
}
interface UiMap{
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
interface UiMapArt{
    ID?: string;
    HighlightFileDataID?: string;
    UiMapArtStyleID?: string;
    HighlightAtlasID?: string;
}
interface UiMapArtStyleLayer{
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
interface UiMapAssignment{
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
interface UiMapArtTile{
    ID?: string;
    ColIndex?: string;
    FileDataID?: string;
    LayerIndex?: string;
    RowIndex?: string;
    UiMapArtID?: string;
}
interface UiMapFogOfWar{
    ID?: string;
    PlayerConditionID?: string;
    UiMapFogOfWarVisID?: string;
    UiMapID?: string;
}
interface UiMapFogOfWarVisualization{
    ID?: string;
    BackgroundAtlasID?: string;
    MaskAtlasID?: string;
    MaskScalar?: string;
}
interface UiMapGroupMember{
    ID?: string;
    FloorIndex?: string;
    Name_lang?: string;
    RelativeHeightIndex?: string;
    UiMapGroupID?: string;
    UiMapID?: string;
}
interface UiMapPOI{
    ID?: string;
    ContinentID?: string;
    Flags?: string;
    PoiData?: string;
    PoiDataType?: string;
    UiTextureAtlasMemberID?: string;
    WorldLoc?: string;
}
interface UiMapLink{
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
interface UiMapXMapArt{
    ID?: string;
    PhaseID?: string;
    UiMapArtID?: string;
    UiMapID?: string;
}
interface UiModelScene{
    ID?: string;
    Flags?: string;
    UiSystemType?: string;
}
interface UiModelSceneActor{
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
interface UiModelSceneActorDisplay{
    ID?: string;
    Alpha?: string;
    AnimSpeed?: string;
    AnimationID?: string;
    Scale?: string;
    SequenceVariation?: string;
    AnimKitID?: string;
    SpellVisualKitID?: string;
}
interface UiPartyPose{
    ID?: string;
    MapID?: string;
    UiModelSceneID?: string;
    UiWidgetSetID?: string;
    VictoryUiModelSceneID?: string;
    DefeatUiModelSceneID?: string;
    VictorySoundKitID?: string;
    DefeatSoundKitID?: string;
}
interface UiQuestDetailsTheme{
    ID?: string;
    Signature_lang?: string;
    BackgroundTexture?: string;
    SealTexture?: string;
    PoiIcon?: string;
}
interface UiModelSceneCamera{
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
interface UiTextureAtlas{
    ID?: string;
    AtlasHeight?: string;
    AtlasWidth?: string;
    FileDataID?: string;
    UiCanvasID?: string;
}
interface UiTextureAtlasElement{
    ID?: string;
    Name?: string;
}
interface UiTextureAtlasElementOverride{
    ID?: string;
    UiTextureAtlasElement?: string;
    ReplacementElement?: string;
}
interface UiTextureKit{
    KitPrefix?: string;
    ID?: string;
}
interface UiTextureAtlasMember{
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
interface UiWidget{
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
interface UiWidgetConstantSource{
    ID?: string;
    ParentWidgetID?: string;
    ReqID?: string;
    Value?: string;
}
interface UiWidgetDataSource{
    ID?: string;
    ParentWidgetID?: string;
    ReqID?: string;
    SourceID?: string;
    SourceType?: string;
}
interface UiWidgetMap{
    ID?: string;
    ParentWidgetID?: string;
    MapID?: string;
}
interface UiWidgetSet{
    ID?: string;
    LayoutDirection?: string;
    VerticalPadding?: string;
}
interface UiWidgetVisTypeDataReq{
    ID?: string;
    VisType?: string;
    ValueType?: string;
    Field_8_1_5_28938_002?: string;
    Name?: string;
    Default?: string;
}
interface UiWidgetStringSource{
    ID?: string;
    ParentWidgetID?: string;
    ReqID?: string;
    Value_lang?: string;
}
interface UiWidgetVisualization{
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
interface UiWidgetXWidgetSet{
    ID?: string;
    ParentSet?: string;
    UiWidgetID?: string;
}
interface UnitBlood{
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
interface UnitCondition{
    ID?: string;
    Flags?: string;
    Variable?: string;
    Op?: string;
    Value?: string;
}
interface UnitBloodLevels{
    ID?: string;
    Violencelevel?: string;
}
interface UnitTestSparse{
    ID?: string;
    Field_0?: string;
    Field_2?: string;
}
interface UnitPowerBar{
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
interface UnitTest{
    Field_1_13_0_28211_000?: string;
    Field_1_13_0_28211_001?: string;
    ID?: string;
    Field_1_13_0_28211_003?: string;
    Field_1_13_0_28211_004?: string;
}
interface VehiclePOIType{
    ID?: string;
    Flags?: string;
    TextureWidth?: string;
    TextureHeight?: string;
    OccupiedTexture?: string;
    UnoccupiedTexture?: string;
}
interface Vehicle{
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
interface VehicleUIIndicator{
    ID?: string;
    BackgroundTexture?: string;
    BackgroundTextureFileID?: string;
}
interface VehicleUIIndSeat{
    ID?: string;
    VehicleUIIndicatorID?: string;
    VirtualSeatIndex?: string;
    XPos?: string;
    YPos?: string;
}
interface VehicleSeat{
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
interface VirtualAttachment{
    ID?: string;
    Name?: string;
    PositionerID?: string;
}
interface Vignette{
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
interface VirtualAttachmentCustomization{
    ID?: string;
    FileDataID?: string;
    PositionerID?: string;
    VirtualAttachmentID?: string;
}
interface VocalUISounds{
    ID?: string;
    VocalUIEnum?: string;
    RaceID?: string;
    NormalSoundID?: string;
    PissedSoundID?: string;
    ClassID?: string;
}
interface VolumeFogCondition{
    ID?: string;
    PlayerConditionID?: string;
    WhenFalse?: string;
    WhenTrue?: string;
    VFOG_uID?: string;
}
interface VideoHardware{
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
interface WMOAreaTable{
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
interface WaypointEdge{
    ID?: string;
    Start?: string;
    End?: string;
    Flags?: string;
    PlayerConditionID?: string;
    Field_8_1_5_29281_005?: string;
}
interface WMOMinimapTexture{
    ID?: string;
    WMOID?: string;
    BlockX?: string;
    BlockY?: string;
    FileDataID?: string;
    GroupNum?: string;
}
interface WbAccessControlList{
    RegionFlags?: string;
    ID?: string;
    URL?: string;
    GrantFlags?: string;
    RegionID?: string;
    RevokeFlags?: string;
    WowEditInternal?: string;
}
interface WaterfallData{
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
interface WaypointSafeLocs{
    ID?: string;
    Pos?: string;
    MapID?: string;
}
interface WaypointNode{
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
interface WbCertBlacklist{
    ID?: string;
    Field_5_3_0_16965_001?: string;
    Field_5_3_0_16965_002?: string;
}
interface WbCertWhitelist{
    Padding_5_3_0_16965_004?: string;
    ID?: string;
    Domain?: string;
    GrantAccess?: string;
    RevokeAccess?: string;
    WowEditInternal?: string;
}
interface WbPermissions{
    ID?: string;
    FilePath?: string;
    GrantAccess?: string;
    Field_5_3_0_16965_001?: string;
    Field_5_3_0_16965_002?: string;
}
interface WeaponImpactSounds{
    ID?: string;
    WeaponSubClassID?: string;
    ParrySoundType?: string;
    ImpactSoundID?: string;
    CritImpactSoundID?: string;
    ImpactSource?: string;
    PierceCritImpactSoundID?: string;
    PierceImpactSoundID?: string;
}
interface WeaponTrail{
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
interface WeaponSwingSounds2{
    ID?: string;
    SwingType?: string;
    Crit?: string;
    SoundID?: string;
}
interface WeaponTrailModelDef{
    ID?: string;
    AnimEnumID?: string;
    LowDefFileDataID?: string;
    WeaponTrailID?: string;
    ModelFileDataID?: string;
}
interface WeaponTrailParam{
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
interface WeatherXParticulate{
    ID?: string;
    FileDataID?: string;
    ParentWeatherID?: string;
}
interface WindSettings{
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
interface WeeklyRewardChestThreshold{
    ID?: string;
    Type?: string;
    Index?: string;
    Threshold?: string;
}
interface WorldBossLockout{
    Name_lang?: string;
    ID?: string;
    TrackingQuestID?: string;
}
interface Weather{
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
interface WorldChunkSounds{
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
interface WorldEffect{
    ID?: string;
    TargetType?: string;
    TargetAsset?: string;
    QuestFeedbackEffectID?: string;
    PlayerConditionID?: string;
    CombatConditionID?: string;
    WhenToDisplay?: string;
}
interface WorldMapContinent{
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
interface WorldElapsedTimer{
    ID?: string;
    Name_lang?: string;
    Flags?: string;
    Type?: string;
}
interface WorldMapArea{
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
interface WorldMapOverlayTile{
    ID?: string;
    ColIndex?: string;
    FileDataID?: string;
    LayerIndex?: string;
    RowIndex?: string;
    WorldMapOverlayID?: string;
}
interface WorldMapOverlay{
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
interface WorldMapTransforms{
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
interface WorldState{
    ID?: string;
}
interface WorldSafeLocs{
    ID?: string;
    Continent?: string;
    Loc?: string;
    Facing?: string;
    AreaName_lang?: string;
}
interface WorldStateUI{
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
interface WorldStateExpression{
    ID?: string;
    Expression?: string;
}
interface WorldStateZoneSounds{
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
interface WowError_Strings{
    ID?: string;
    Name?: string;
    Description_lang?: string;
}
interface World_PVP_Area{
    ID?: string;
    Area_ID?: string;
    Next_time_worldstate?: string;
    Game_time_worldstate?: string;
    Battle_populate_time?: string;
    Min_level?: string;
    Max_level?: string;
    Map_ID?: string;
}
interface ZoneLightPoint{
    ID?: string;
    ZoneLightID?: string;
    Pos?: string;
    PointOrder?: string;
}
interface ZoneMusic{
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
interface ZoneLight{
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
interface ZoneStory{
    ID?: string;
    DisplayAchievementID?: string;
    DisplayWorldMapAreaID?: string;
    PlayerFactionGroupID?: string;
    PlayerWorldMapAreaID?: string;
    DisplayUIMapID?: string;
    PlayerUIMapID?: string;
}
interface gtArmorMitigationByLvl{
    ID?: string;
    Data?: string;
}
interface gtBattlePetTypeDamageMod{
    ID?: string;
    Data?: string;
}
interface gtChanceToMeleeCrit{
    Data?: string;
    ID?: string;
}
interface ZoneIntroMusicTable{
    ID?: string;
    Name?: string;
    SoundID?: string;
    Priority?: string;
    MinDelayMinutes?: string;
}
interface gtBattlePetXP{
    ID?: string;
    Data?: string;
}
interface gtChanceToSpellCrit{
    Data?: string;
    ID?: string;
}
interface gtBarberShopCostBase{
    Data?: string;
    ID?: string;
}
interface gtChanceToSpellCritBase{
    Data?: string;
    ID?: string;
}
interface gtChanceToMeleeCritBase{
    Data?: string;
    ID?: string;
}
interface gtItemSocketCostPerLevel{
    ID?: string;
    Data?: string;
}
interface gtOCTBaseHPByClass{
    ID?: string;
    Data?: string;
}
interface gtMasteryMultipliers{
    ID?: string;
    Data?: string;
}
interface gtCombatRatings{
    Data?: string;
    ID?: string;
}
interface gtNPCManaCostScaler{
    Data?: string;
    ID?: string;
}
interface gtOCTBaseMPByClass{
    ID?: string;
    Data?: string;
}
interface gtOCTClassCombatRatingScalar{
    ID?: string;
    Data?: string;
}
interface gtOCTHpPerStamina{
    ID?: string;
    Data?: string;
}
interface gtOCTLevelExperience{
    ID?: string;
    Data?: string;
}
interface gtOCTRegenHP{
    ID?: string;
    Data?: string;
}
interface gtOCTRegenMP{
    ID?: string;
    Data?: string;
}
interface gtRegenHPPerSpt{
    ID?: string;
    Data?: string;
}
interface gtRegenMPPerSpt{
    Data?: string;
    ID?: string;
}
interface gtResilienceDR{
    ID?: string;
    Data?: string;
}
interface gtSpellScaling{
    Data?: string;
    ID?: string;
}
interface FetchDB2Func{
    (db: 'Achievement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Achievement[]>;
    (db: 'Achievement_Category', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Achievement_Category[]>;
    (db: 'Achievement_Criteria', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Achievement_Criteria[]>;
    (db: 'AdventureJournal', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AdventureJournal[]>;
    (db: 'AdventureMapPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AdventureMapPOI[]>;
    (db: 'AlliedRace', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AlliedRace[]>;
    (db: 'AlliedRaceRacialAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AlliedRaceRacialAbility[]>;
    (db: 'AnimKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKit[]>;
    (db: 'AnimKitBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitBoneSet[]>;
    (db: 'AnimKitBoneSetAlias', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitBoneSetAlias[]>;
    (db: 'AnimKitConfig', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitConfig[]>;
    (db: 'AnimKitConfigBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitConfigBoneSet[]>;
    (db: 'AnimKitPriority', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitPriority[]>;
    (db: 'AnimKitReplacement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitReplacement[]>;
    (db: 'AnimKitSegment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimKitSegment[]>;
    (db: 'AnimReplacement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimReplacement[]>;
    (db: 'AnimReplacementSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimReplacementSet[]>;
    (db: 'AnimaCable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimaCable[]>;
    (db: 'AnimaCylinder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimaCylinder[]>;
    (db: 'AnimaMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimaMaterial[]>;
    (db: 'AnimationData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimationData[]>;
    (db: 'AnimationNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AnimationNames[]>;
    (db: 'AoiBox', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AoiBox[]>;
    (db: 'AreaAssignment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaAssignment[]>;
    (db: 'AreaConditionalData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaConditionalData[]>;
    (db: 'AreaFarClipOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaFarClipOverride[]>;
    (db: 'AreaGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaGroup[]>;
    (db: 'AreaGroupMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaGroupMember[]>;
    (db: 'AreaMIDIAmbiences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaMIDIAmbiences[]>;
    (db: 'AreaPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaPOI[]>;
    (db: 'AreaPOISortedWorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaPOISortedWorldState[]>;
    (db: 'AreaPOIState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaPOIState[]>;
    (db: 'AreaTable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTable[]>;
    (db: 'AreaTrigger', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTrigger[]>;
    (db: 'AreaTriggerActionSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerActionSet[]>;
    (db: 'AreaTriggerBox', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerBox[]>;
    (db: 'AreaTriggerCreateProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerCreateProperties[]>;
    (db: 'AreaTriggerCylinder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerCylinder[]>;
    (db: 'AreaTriggerSphere', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AreaTriggerSphere[]>;
    (db: 'ArenaCcItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArenaCcItem[]>;
    (db: 'ArmorLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArmorLocation[]>;
    (db: 'Artifact', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Artifact[]>;
    (db: 'ArtifactAppearance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactAppearance[]>;
    (db: 'ArtifactAppearanceSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactAppearanceSet[]>;
    (db: 'ArtifactCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactCategory[]>;
    (db: 'ArtifactItemToTransmog', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactItemToTransmog[]>;
    (db: 'ArtifactPower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPower[]>;
    (db: 'ArtifactPowerLink', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPowerLink[]>;
    (db: 'ArtifactPowerPicker', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPowerPicker[]>;
    (db: 'ArtifactPowerRank', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactPowerRank[]>;
    (db: 'ArtifactQuestXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactQuestXP[]>;
    (db: 'ArtifactTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactTier[]>;
    (db: 'ArtifactUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ArtifactUnlock[]>;
    (db: 'AttackAnimKits', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AttackAnimKits[]>;
    (db: 'AttackAnimTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AttackAnimTypes[]>;
    (db: 'AuctionHouse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AuctionHouse[]>;
    (db: 'AzeriteEmpoweredItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteEmpoweredItem[]>;
    (db: 'AzeriteEssence', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteEssence[]>;
    (db: 'AzeriteEssencePower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteEssencePower[]>;
    (db: 'AzeriteItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteItem[]>;
    (db: 'AzeriteItemMilestonePower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteItemMilestonePower[]>;
    (db: 'AzeriteKnowledgeMultiplier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteKnowledgeMultiplier[]>;
    (db: 'AzeriteLevelInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteLevelInfo[]>;
    (db: 'AzeritePower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeritePower[]>;
    (db: 'AzeritePowerSetMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeritePowerSetMember[]>;
    (db: 'AzeriteTierUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteTierUnlock[]>;
    (db: 'AzeriteTierUnlockSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteTierUnlockSet[]>;
    (db: 'AzeriteUnlockMapping', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<AzeriteUnlockMapping[]>;
    (db: 'BankBagSlotPrices', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BankBagSlotPrices[]>;
    (db: 'BannedAddons', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BannedAddons[]>;
    (db: 'BarberShopStyle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BarberShopStyle[]>;
    (db: 'BarrageEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BarrageEffect[]>;
    (db: 'BattlePetAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbility[]>;
    (db: 'BattlePetAbilityEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbilityEffect[]>;
    (db: 'BattlePetAbilityState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbilityState[]>;
    (db: 'BattlePetAbilityTurn', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetAbilityTurn[]>;
    (db: 'BattlePetBreedQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetBreedQuality[]>;
    (db: 'BattlePetBreedState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetBreedState[]>;
    (db: 'BattlePetDisplayOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetDisplayOverride[]>;
    (db: 'BattlePetEffectProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetEffectProperties[]>;
    (db: 'BattlePetNPCTeamMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetNPCTeamMember[]>;
    (db: 'BattlePetSpecies', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpecies[]>;
    (db: 'BattlePetSpeciesState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpeciesState[]>;
    (db: 'BattlePetSpeciesXAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpeciesXAbility[]>;
    (db: 'BattlePetSpeciesXCovenant', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetSpeciesXCovenant[]>;
    (db: 'BattlePetState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetState[]>;
    (db: 'BattlePetVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlePetVisual[]>;
    (db: 'BattlemasterList', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BattlemasterList[]>;
    (db: 'BeamEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BeamEffect[]>;
    (db: 'BeckonTrigger', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BeckonTrigger[]>;
    (db: 'BoneWindModifierModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BoneWindModifierModel[]>;
    (db: 'BoneWindModifiers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BoneWindModifiers[]>;
    (db: 'BonusRoll', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BonusRoll[]>;
    (db: 'Bounty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Bounty[]>;
    (db: 'BountySet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BountySet[]>;
    (db: 'BroadcastText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastText[]>;
    (db: 'BroadcastTextDuration', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastTextDuration[]>;
    (db: 'BroadcastTextSoundState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastTextSoundState[]>;
    (db: 'BroadcastTextVOState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<BroadcastTextVOState[]>;
    (db: 'CameraEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraEffect[]>;
    (db: 'CameraEffectEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraEffectEntry[]>;
    (db: 'CameraMode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraMode[]>;
    (db: 'CameraShakes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CameraShakes[]>;
    (db: 'Campaign', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Campaign[]>;
    (db: 'CampaignXCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CampaignXCondition[]>;
    (db: 'CampaignXQuestLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CampaignXQuestLine[]>;
    (db: 'CastableRaidBuffs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CastableRaidBuffs[]>;
    (db: 'CelestialBody', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CelestialBody[]>;
    (db: 'Cfg_Categories', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Cfg_Categories[]>;
    (db: 'Cfg_Configs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Cfg_Configs[]>;
    (db: 'Cfg_Regions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Cfg_Regions[]>;
    (db: 'ChallengeModeItemBonusOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChallengeModeItemBonusOverride[]>;
    (db: 'CharBaseInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharBaseInfo[]>;
    (db: 'CharBaseSection', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharBaseSection[]>;
    (db: 'CharComponentTextureLayouts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharComponentTextureLayouts[]>;
    (db: 'CharComponentTextureSections', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharComponentTextureSections[]>;
    (db: 'CharHairGeosets', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharHairGeosets[]>;
    (db: 'CharHairTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharHairTextures[]>;
    (db: 'CharSectionCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharSectionCondition[]>;
    (db: 'CharSections', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharSections[]>;
    (db: 'CharShipment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharShipment[]>;
    (db: 'CharShipmentContainer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharShipmentContainer[]>;
    (db: 'CharStartKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharStartKit[]>;
    (db: 'CharStartOutfit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharStartOutfit[]>;
    (db: 'CharTextureVariationsV2', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharTextureVariationsV2[]>;
    (db: 'CharTitles', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharTitles[]>;
    (db: 'CharVariations', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharVariations[]>;
    (db: 'CharacterCreateCameras', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterCreateCameras[]>;
    (db: 'CharacterFaceBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterFaceBoneSet[]>;
    (db: 'CharacterFacialHairStyles', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterFacialHairStyles[]>;
    (db: 'CharacterLoadout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterLoadout[]>;
    (db: 'CharacterLoadoutItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterLoadoutItem[]>;
    (db: 'CharacterLoadoutPet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterLoadoutPet[]>;
    (db: 'CharacterServiceInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CharacterServiceInfo[]>;
    (db: 'ChatChannels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChatChannels[]>;
    (db: 'ChatProfanity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChatProfanity[]>;
    (db: 'ChrClassRaceSex', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassRaceSex[]>;
    (db: 'ChrClassTitle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassTitle[]>;
    (db: 'ChrClassUIChrModelInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassUIChrModelInfo[]>;
    (db: 'ChrClassUIDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassUIDisplay[]>;
    (db: 'ChrClassVillain', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassVillain[]>;
    (db: 'ChrClasses', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClasses[]>;
    (db: 'ChrClassesXPowerTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrClassesXPowerTypes[]>;
    (db: 'ChrCreateClassAnimTarget', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCreateClassAnimTarget[]>;
    (db: 'ChrCreateClassAnimTargetInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCreateClassAnimTargetInfo[]>;
    (db: 'ChrCustClientChoiceConversion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustClientChoiceConversion[]>;
    (db: 'ChrCustItemGeoModify', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustItemGeoModify[]>;
    (db: 'ChrCustomization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomization[]>;
    (db: 'ChrCustomizationBoneSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationBoneSet[]>;
    (db: 'ChrCustomizationCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationCategory[]>;
    (db: 'ChrCustomizationChoice', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationChoice[]>;
    (db: 'ChrCustomizationCondModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationCondModel[]>;
    (db: 'ChrCustomizationConversion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationConversion[]>;
    (db: 'ChrCustomizationDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationDisplayInfo[]>;
    (db: 'ChrCustomizationElement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationElement[]>;
    (db: 'ChrCustomizationGeoset', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationGeoset[]>;
    (db: 'ChrCustomizationMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationMaterial[]>;
    (db: 'ChrCustomizationOption', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationOption[]>;
    (db: 'ChrCustomizationReq', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationReq[]>;
    (db: 'ChrCustomizationReqChoice', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationReqChoice[]>;
    (db: 'ChrCustomizationSkinnedModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrCustomizationSkinnedModel[]>;
    (db: 'ChrModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModel[]>;
    (db: 'ChrModelMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModelMaterial[]>;
    (db: 'ChrModelTextureLayer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModelTextureLayer[]>;
    (db: 'ChrModelTextureTarget', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrModelTextureTarget[]>;
    (db: 'ChrProficiency', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrProficiency[]>;
    (db: 'ChrRaceRacialAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrRaceRacialAbility[]>;
    (db: 'ChrRaceXChrModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrRaceXChrModel[]>;
    (db: 'ChrRaces', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrRaces[]>;
    (db: 'ChrSpecialization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrSpecialization[]>;
    (db: 'ChrUpgradeBucket', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrUpgradeBucket[]>;
    (db: 'ChrUpgradeBucketSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrUpgradeBucketSpell[]>;
    (db: 'ChrUpgradeTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ChrUpgradeTier[]>;
    (db: 'Cinematic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Cinematic[]>;
    (db: 'CinematicCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CinematicCamera[]>;
    (db: 'CinematicSequences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CinematicSequences[]>;
    (db: 'CinematicSubtitle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CinematicSubtitle[]>;
    (db: 'ClientSceneEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ClientSceneEffect[]>;
    (db: 'CloakDampening', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CloakDampening[]>;
    (db: 'CloneEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CloneEffect[]>;
    (db: 'ColorBanding', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ColorBanding[]>;
    (db: 'CombatCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CombatCondition[]>;
    (db: 'CommentatorIndirectSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommentatorIndirectSpell[]>;
    (db: 'CommentatorStartLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommentatorStartLocation[]>;
    (db: 'CommentatorTrackedCooldown', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommentatorTrackedCooldown[]>;
    (db: 'CommunityIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CommunityIcon[]>;
    (db: 'ComponentModelFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ComponentModelFileData[]>;
    (db: 'ComponentTextureFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ComponentTextureFileData[]>;
    (db: 'ConditionalContentTuning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConditionalContentTuning[]>;
    (db: 'ConfigurationWarning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConfigurationWarning[]>;
    (db: 'ConsoleScripts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConsoleScripts[]>;
    (db: 'ContentTuning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuning[]>;
    (db: 'ContentTuningDescription', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuningDescription[]>;
    (db: 'ContentTuningXExpected', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuningXExpected[]>;
    (db: 'ContentTuningXExpectedStatMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContentTuningXExpectedStatMod[]>;
    (db: 'Contribution', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Contribution[]>;
    (db: 'ContributionStyle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContributionStyle[]>;
    (db: 'ContributionStyleContainer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ContributionStyleContainer[]>;
    (db: 'ConversationLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ConversationLine[]>;
    (db: 'CorruptionEffects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CorruptionEffects[]>;
    (db: 'Covenant', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Covenant[]>;
    (db: 'Creature', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Creature[]>;
    (db: 'CreatureDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDifficulty[]>;
    (db: 'CreatureDispXUiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDispXUiCamera[]>;
    (db: 'CreatureDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfo[]>;
    (db: 'CreatureDisplayInfoCond', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoCond[]>;
    (db: 'CreatureDisplayInfoCondXChoice', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoCondXChoice[]>;
    (db: 'CreatureDisplayInfoEvt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoEvt[]>;
    (db: 'CreatureDisplayInfoExtra', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoExtra[]>;
    (db: 'CreatureDisplayInfoGeosetData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoGeosetData[]>;
    (db: 'CreatureDisplayInfoOption', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoOption[]>;
    (db: 'CreatureDisplayInfoTrn', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureDisplayInfoTrn[]>;
    (db: 'CreatureFamily', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureFamily[]>;
    (db: 'CreatureImmunities', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureImmunities[]>;
    (db: 'CreatureModelData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureModelData[]>;
    (db: 'CreatureMovementInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureMovementInfo[]>;
    (db: 'CreatureSoundData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureSoundData[]>;
    (db: 'CreatureSpellData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureSpellData[]>;
    (db: 'CreatureType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureType[]>;
    (db: 'CreatureXContribution', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureXContribution[]>;
    (db: 'CreatureXDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureXDisplayInfo[]>;
    (db: 'CreatureXUiWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CreatureXUiWidgetSet[]>;
    (db: 'Criteria', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Criteria[]>;
    (db: 'CriteriaTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CriteriaTree[]>;
    (db: 'CriteriaTreeXEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CriteriaTreeXEffect[]>;
    (db: 'CurrencyCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurrencyCategory[]>;
    (db: 'CurrencyContainer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurrencyContainer[]>;
    (db: 'CurrencyTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurrencyTypes[]>;
    (db: 'Curve', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Curve[]>;
    (db: 'CurvePoint', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<CurvePoint[]>;
    (db: 'DanceMoves', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DanceMoves[]>;
    (db: 'DeathThudLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeathThudLookups[]>;
    (db: 'DecalProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DecalProperties[]>;
    (db: 'DeclinedWord', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeclinedWord[]>;
    (db: 'DeclinedWordCases', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeclinedWordCases[]>;
    (db: 'DestructibleModelData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DestructibleModelData[]>;
    (db: 'DeviceBlacklist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeviceBlacklist[]>;
    (db: 'DeviceDefaultSettings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DeviceDefaultSettings[]>;
    (db: 'Difficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Difficulty[]>;
    (db: 'DissolveEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DissolveEffect[]>;
    (db: 'DriverBlacklist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DriverBlacklist[]>;
    (db: 'DungeonEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DungeonEncounter[]>;
    (db: 'DungeonMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DungeonMap[]>;
    (db: 'DungeonMapChunk', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DungeonMapChunk[]>;
    (db: 'DurabilityCosts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DurabilityCosts[]>;
    (db: 'DurabilityQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<DurabilityQuality[]>;
    (db: 'EdgeGlowEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EdgeGlowEffect[]>;
    (db: 'EmoteAnims', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmoteAnims[]>;
    (db: 'Emotes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Emotes[]>;
    (db: 'EmotesText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmotesText[]>;
    (db: 'EmotesTextData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmotesTextData[]>;
    (db: 'EmotesTextSound', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EmotesTextSound[]>;
    (db: 'EnumeratedString', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EnumeratedString[]>;
    (db: 'EnvironmentalDamage', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<EnvironmentalDamage[]>;
    (db: 'Exhaustion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Exhaustion[]>;
    (db: 'ExpectedStat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ExpectedStat[]>;
    (db: 'ExpectedStatMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ExpectedStatMod[]>;
    (db: 'ExtraAbilityInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ExtraAbilityInfo[]>;
    (db: 'Faction', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Faction[]>;
    (db: 'FactionGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FactionGroup[]>;
    (db: 'FactionTemplate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FactionTemplate[]>;
    (db: 'FileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FileData[]>;
    (db: 'FileDataComplete', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FileDataComplete[]>;
    (db: 'FilePaths', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FilePaths[]>;
    (db: 'FootprintTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FootprintTextures[]>;
    (db: 'FootstepTerrainLookup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FootstepTerrainLookup[]>;
    (db: 'FriendshipRepReaction', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FriendshipRepReaction[]>;
    (db: 'FriendshipReputation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FriendshipReputation[]>;
    (db: 'FullScreenEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<FullScreenEffect[]>;
    (db: 'GMSurveyAnswers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveyAnswers[]>;
    (db: 'GMSurveyCurrentSurvey', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveyCurrentSurvey[]>;
    (db: 'GMSurveyQuestions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveyQuestions[]>;
    (db: 'GMSurveySurveys', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMSurveySurveys[]>;
    (db: 'GMTicketCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GMTicketCategory[]>;
    (db: 'GameClockDebug', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameClockDebug[]>;
    (db: 'GameObjectAnimGroupMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectAnimGroupMember[]>;
    (db: 'GameObjectArtKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectArtKit[]>;
    (db: 'GameObjectDiffAnimMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectDiffAnimMap[]>;
    (db: 'GameObjectDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectDisplayInfo[]>;
    (db: 'GameObjectDisplayInfoXSoundKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectDisplayInfoXSoundKit[]>;
    (db: 'GameObjects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjects[]>;
    (db: 'GameObjectsClient', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameObjectsClient[]>;
    (db: 'GameParameter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameParameter[]>;
    (db: 'GameTables', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameTables[]>;
    (db: 'GameTips', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GameTips[]>;
    (db: 'GarrAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAbility[]>;
    (db: 'GarrAbilityCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAbilityCategory[]>;
    (db: 'GarrAbilityEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAbilityEffect[]>;
    (db: 'GarrAutoCombatant', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAutoCombatant[]>;
    (db: 'GarrAutoSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAutoSpell[]>;
    (db: 'GarrAutoSpellEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrAutoSpellEffect[]>;
    (db: 'GarrBuilding', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrBuilding[]>;
    (db: 'GarrBuildingDoodadSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrBuildingDoodadSet[]>;
    (db: 'GarrBuildingPlotInst', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrBuildingPlotInst[]>;
    (db: 'GarrClassSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrClassSpec[]>;
    (db: 'GarrClassSpecPlayerCond', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrClassSpecPlayerCond[]>;
    (db: 'GarrEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrEncounter[]>;
    (db: 'GarrEncounterSetXEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrEncounterSetXEncounter[]>;
    (db: 'GarrEncounterXMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrEncounterXMechanic[]>;
    (db: 'GarrFamilyName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFamilyName[]>;
    (db: 'GarrFollItemSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollItemSet[]>;
    (db: 'GarrFollItemSetMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollItemSetMember[]>;
    (db: 'GarrFollSupportSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollSupportSpell[]>;
    (db: 'GarrFollower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollower[]>;
    (db: 'GarrFollowerLevelXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerLevelXP[]>;
    (db: 'GarrFollowerQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerQuality[]>;
    (db: 'GarrFollowerSetXFollower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerSetXFollower[]>;
    (db: 'GarrFollowerType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerType[]>;
    (db: 'GarrFollowerUICreature', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerUICreature[]>;
    (db: 'GarrFollowerXAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrFollowerXAbility[]>;
    (db: 'GarrGivenName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrGivenName[]>;
    (db: 'GarrItemLevelUpgradeData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrItemLevelUpgradeData[]>;
    (db: 'GarrMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMechanic[]>;
    (db: 'GarrMechanicSetXMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMechanicSetXMechanic[]>;
    (db: 'GarrMechanicType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMechanicType[]>;
    (db: 'GarrMission', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMission[]>;
    (db: 'GarrMissionSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionSet[]>;
    (db: 'GarrMissionTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionTexture[]>;
    (db: 'GarrMissionType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionType[]>;
    (db: 'GarrMissionXEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionXEncounter[]>;
    (db: 'GarrMissionXFollower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMissionXFollower[]>;
    (db: 'GarrMssnBonusAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrMssnBonusAbility[]>;
    (db: 'GarrPlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlot[]>;
    (db: 'GarrPlotBuilding', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlotBuilding[]>;
    (db: 'GarrPlotInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlotInstance[]>;
    (db: 'GarrPlotUICategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrPlotUICategory[]>;
    (db: 'GarrSiteLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrSiteLevel[]>;
    (db: 'GarrSiteLevelPlotInst', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrSiteLevelPlotInst[]>;
    (db: 'GarrSpecialization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrSpecialization[]>;
    (db: 'GarrString', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrString[]>;
    (db: 'GarrTalTreeXGarrTalResearch', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalTreeXGarrTalResearch[]>;
    (db: 'GarrTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalent[]>;
    (db: 'GarrTalentCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentCost[]>;
    (db: 'GarrTalentMapPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentMapPOI[]>;
    (db: 'GarrTalentRank', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentRank[]>;
    (db: 'GarrTalentResearch', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentResearch[]>;
    (db: 'GarrTalentSocketProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentSocketProperties[]>;
    (db: 'GarrTalentTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrTalentTree[]>;
    (db: 'GarrType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrType[]>;
    (db: 'GarrUiAnimClassInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrUiAnimClassInfo[]>;
    (db: 'GarrUiAnimRaceInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GarrUiAnimRaceInfo[]>;
    (db: 'GemProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GemProperties[]>;
    (db: 'GlobalCurve', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalCurve[]>;
    (db: 'GlobalGameContentTuning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalGameContentTuning[]>;
    (db: 'GlobalPlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalPlayerCondition[]>;
    (db: 'GlobalPlayerConditionSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalPlayerConditionSet[]>;
    (db: 'GlobalStrings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalStrings[]>;
    (db: 'GlobalTable_PlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlobalTable_PlayerCondition[]>;
    (db: 'GlueScreenEmote', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlueScreenEmote[]>;
    (db: 'GlyphBindableSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphBindableSpell[]>;
    (db: 'GlyphExclusiveCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphExclusiveCategory[]>;
    (db: 'GlyphProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphProperties[]>;
    (db: 'GlyphRequiredSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphRequiredSpec[]>;
    (db: 'GlyphSlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GlyphSlot[]>;
    (db: 'GossipXUIDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GossipXUIDisplayInfo[]>;
    (db: 'GradientEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GradientEffect[]>;
    (db: 'GroundEffectDoodad', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroundEffectDoodad[]>;
    (db: 'GroundEffectTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroundEffectTexture[]>;
    (db: 'GroupFinderActivity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroupFinderActivity[]>;
    (db: 'GroupFinderActivityGrp', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroupFinderActivityGrp[]>;
    (db: 'GroupFinderCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GroupFinderCategory[]>;
    (db: 'GuildColorBackground', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildColorBackground[]>;
    (db: 'GuildColorBorder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildColorBorder[]>;
    (db: 'GuildColorEmblem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildColorEmblem[]>;
    (db: 'GuildEmblem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildEmblem[]>;
    (db: 'GuildPerkSpells', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildPerkSpells[]>;
    (db: 'GuildShirtBackground', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildShirtBackground[]>;
    (db: 'GuildShirtBorder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildShirtBorder[]>;
    (db: 'GuildTabardBackground', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildTabardBackground[]>;
    (db: 'GuildTabardBorder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildTabardBorder[]>;
    (db: 'GuildTabardEmblem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<GuildTabardEmblem[]>;
    (db: 'Heirloom', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Heirloom[]>;
    (db: 'HelmetAnimScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HelmetAnimScaling[]>;
    (db: 'HelmetGeosetData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HelmetGeosetData[]>;
    (db: 'HelmetGeosetVisData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HelmetGeosetVisData[]>;
    (db: 'HighlightColor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HighlightColor[]>;
    (db: 'HolidayDescriptions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HolidayDescriptions[]>;
    (db: 'HolidayNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<HolidayNames[]>;
    (db: 'Holidays', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Holidays[]>;
    (db: 'Hotfix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Hotfix[]>;
    (db: 'Hotfixes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Hotfixes[]>;
    (db: 'ImportPriceArmor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceArmor[]>;
    (db: 'ImportPriceQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceQuality[]>;
    (db: 'ImportPriceShield', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceShield[]>;
    (db: 'ImportPriceWeapon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ImportPriceWeapon[]>;
    (db: 'InvasionClientData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<InvasionClientData[]>;
    (db: 'Item-sparse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Item_sparse[]>;
    (db: 'Item', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Item[]>;
    (db: 'ItemAppearance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemAppearance[]>;
    (db: 'ItemAppearanceXUiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemAppearanceXUiCamera[]>;
    (db: 'ItemArmorQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemArmorQuality[]>;
    (db: 'ItemArmorShield', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemArmorShield[]>;
    (db: 'ItemArmorTotal', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemArmorTotal[]>;
    (db: 'ItemBagFamily', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBagFamily[]>;
    (db: 'ItemBonus', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonus[]>;
    (db: 'ItemBonusList', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusList[]>;
    (db: 'ItemBonusListGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListGroup[]>;
    (db: 'ItemBonusListGroupEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListGroupEntry[]>;
    (db: 'ItemBonusListLevelDelta', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListLevelDelta[]>;
    (db: 'ItemBonusListWarforgeLevelDelta', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusListWarforgeLevelDelta[]>;
    (db: 'ItemBonusSequenceSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusSequenceSpell[]>;
    (db: 'ItemBonusTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusTree[]>;
    (db: 'ItemBonusTreeNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemBonusTreeNode[]>;
    (db: 'ItemChildEquipment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemChildEquipment[]>;
    (db: 'ItemClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemClass[]>;
    (db: 'ItemCondExtCosts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemCondExtCosts[]>;
    (db: 'ItemContextPickerEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemContextPickerEntry[]>;
    (db: 'ItemCurrencyCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemCurrencyCost[]>;
    (db: 'ItemCurrencyValue', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemCurrencyValue[]>;
    (db: 'ItemDamageAmmo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageAmmo[]>;
    (db: 'ItemDamageOneHand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageOneHand[]>;
    (db: 'ItemDamageOneHandCaster', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageOneHandCaster[]>;
    (db: 'ItemDamageRanged', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageRanged[]>;
    (db: 'ItemDamageThrown', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageThrown[]>;
    (db: 'ItemDamageTwoHand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageTwoHand[]>;
    (db: 'ItemDamageTwoHandCaster', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageTwoHandCaster[]>;
    (db: 'ItemDamageWand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDamageWand[]>;
    (db: 'ItemDisenchantLoot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisenchantLoot[]>;
    (db: 'ItemDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisplayInfo[]>;
    (db: 'ItemDisplayInfoMaterialRes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisplayInfoMaterialRes[]>;
    (db: 'ItemDisplayXUiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemDisplayXUiCamera[]>;
    (db: 'ItemEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemEffect[]>;
    (db: 'ItemExtendedCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemExtendedCost[]>;
    (db: 'ItemFallbackVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemFallbackVisual[]>;
    (db: 'ItemGroupSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemGroupSounds[]>;
    (db: 'ItemLevelSelector', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLevelSelector[]>;
    (db: 'ItemLevelSelectorQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLevelSelectorQuality[]>;
    (db: 'ItemLevelSelectorQualitySet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLevelSelectorQualitySet[]>;
    (db: 'ItemLimitCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLimitCategory[]>;
    (db: 'ItemLimitCategoryCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemLimitCategoryCondition[]>;
    (db: 'ItemModifiedAppearance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemModifiedAppearance[]>;
    (db: 'ItemModifiedAppearanceExtra', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemModifiedAppearanceExtra[]>;
    (db: 'ItemNameDescription', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemNameDescription[]>;
    (db: 'ItemNameSlotOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemNameSlotOverride[]>;
    (db: 'ItemPetFood', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemPetFood[]>;
    (db: 'ItemPriceBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemPriceBase[]>;
    (db: 'ItemPurchaseGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemPurchaseGroup[]>;
    (db: 'ItemRandomProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemRandomProperties[]>;
    (db: 'ItemRandomSuffix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemRandomSuffix[]>;
    (db: 'ItemRangedDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemRangedDisplayInfo[]>;
    (db: 'ItemReforge', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemReforge[]>;
    (db: 'ItemSearchName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSearchName[]>;
    (db: 'ItemSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSet[]>;
    (db: 'ItemSetSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSetSpell[]>;
    (db: 'ItemSparse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSparse[]>;
    (db: 'ItemSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSpec[]>;
    (db: 'ItemSpecOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSpecOverride[]>;
    (db: 'ItemSubClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSubClass[]>;
    (db: 'ItemSubClassMask', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemSubClassMask[]>;
    (db: 'ItemToBattlePet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemToBattlePet[]>;
    (db: 'ItemToMountSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemToMountSpell[]>;
    (db: 'ItemUpgrade', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemUpgrade[]>;
    (db: 'ItemUpgradePath', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemUpgradePath[]>;
    (db: 'ItemVisualEffects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemVisualEffects[]>;
    (db: 'ItemVisuals', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemVisuals[]>;
    (db: 'ItemVisualsXEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemVisualsXEffect[]>;
    (db: 'ItemXBonusTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemXBonusTree[]>;
    (db: 'ItemXItemEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ItemXItemEffect[]>;
    (db: 'JournalEncounter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounter[]>;
    (db: 'JournalEncounterCreature', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterCreature[]>;
    (db: 'JournalEncounterItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterItem[]>;
    (db: 'JournalEncounterSection', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterSection[]>;
    (db: 'JournalEncounterXDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterXDifficulty[]>;
    (db: 'JournalEncounterXMapLoc', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalEncounterXMapLoc[]>;
    (db: 'JournalInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalInstance[]>;
    (db: 'JournalItemXDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalItemXDifficulty[]>;
    (db: 'JournalSectionXDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalSectionXDifficulty[]>;
    (db: 'JournalTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalTier[]>;
    (db: 'JournalTierXInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<JournalTierXInstance[]>;
    (db: 'Keychain', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Keychain[]>;
    (db: 'KeystoneAffix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<KeystoneAffix[]>;
    (db: 'LFGDungeonExpansion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGDungeonExpansion[]>;
    (db: 'LFGDungeonGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGDungeonGroup[]>;
    (db: 'LFGDungeons', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGDungeons[]>;
    (db: 'LFGRoleRequirement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LFGRoleRequirement[]>;
    (db: 'LanguageWords', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LanguageWords[]>;
    (db: 'Languages', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Languages[]>;
    (db: 'LfgDungeonsGroupingMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LfgDungeonsGroupingMap[]>;
    (db: 'Light', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Light[]>;
    (db: 'LightData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightData[]>;
    (db: 'LightFloatBand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightFloatBand[]>;
    (db: 'LightIntBand', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightIntBand[]>;
    (db: 'LightParams', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightParams[]>;
    (db: 'LightSkybox', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LightSkybox[]>;
    (db: 'Lightning', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Lightning[]>;
    (db: 'LiquidMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidMaterial[]>;
    (db: 'LiquidObject', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidObject[]>;
    (db: 'LiquidType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidType[]>;
    (db: 'LiquidTypeXTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LiquidTypeXTexture[]>;
    (db: 'LoadingScreenSkin', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoadingScreenSkin[]>;
    (db: 'LoadingScreenTaxiSplines', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoadingScreenTaxiSplines[]>;
    (db: 'LoadingScreens', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoadingScreens[]>;
    (db: 'Locale', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Locale[]>;
    (db: 'Location', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Location[]>;
    (db: 'Lock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Lock[]>;
    (db: 'LockType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LockType[]>;
    (db: 'LookAtController', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LookAtController[]>;
    (db: 'LoreText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoreText[]>;
    (db: 'LoreTextPublic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<LoreTextPublic[]>;
    (db: 'MCRSlotXMCRCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MCRSlotXMCRCategory[]>;
    (db: 'MailTemplate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MailTemplate[]>;
    (db: 'ManagedWorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManagedWorldState[]>;
    (db: 'ManagedWorldStateBuff', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManagedWorldStateBuff[]>;
    (db: 'ManagedWorldStateInput', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManagedWorldStateInput[]>;
    (db: 'ManifestInterfaceActionIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceActionIcon[]>;
    (db: 'ManifestInterfaceData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceData[]>;
    (db: 'ManifestInterfaceItemIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceItemIcon[]>;
    (db: 'ManifestInterfaceTOCData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestInterfaceTOCData[]>;
    (db: 'ManifestMP3', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ManifestMP3[]>;
    (db: 'Map', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Map[]>;
    (db: 'MapCelestialBody', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapCelestialBody[]>;
    (db: 'MapChallengeMode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapChallengeMode[]>;
    (db: 'MapDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapDifficulty[]>;
    (db: 'MapDifficultyXCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapDifficultyXCondition[]>;
    (db: 'MapLoadingScreen', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MapLoadingScreen[]>;
    (db: 'MarketingPromotionsXLocale', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MarketingPromotionsXLocale[]>;
    (db: 'Material', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Material[]>;
    (db: 'MawPower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MawPower[]>;
    (db: 'MawPowerRarity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MawPowerRarity[]>;
    (db: 'MinorTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MinorTalent[]>;
    (db: 'MissileTargeting', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MissileTargeting[]>;
    (db: 'ModelAnimCloakDampening', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelAnimCloakDampening[]>;
    (db: 'ModelFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelFileData[]>;
    (db: 'ModelManifest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelManifest[]>;
    (db: 'ModelNameToManifest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelNameToManifest[]>;
    (db: 'ModelRibbonQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModelRibbonQuality[]>;
    (db: 'ModifiedCraftingCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingCategory[]>;
    (db: 'ModifiedCraftingReagentItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingReagentItem[]>;
    (db: 'ModifiedCraftingReagentSlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingReagentSlot[]>;
    (db: 'ModifiedCraftingSpellSlot', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedCraftingSpellSlot[]>;
    (db: 'ModifiedReagentItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifiedReagentItem[]>;
    (db: 'ModifierTree', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ModifierTree[]>;
    (db: 'Mount', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Mount[]>;
    (db: 'MountCapability', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountCapability[]>;
    (db: 'MountEquipment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountEquipment[]>;
    (db: 'MountType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountType[]>;
    (db: 'MountTypeXCapability', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountTypeXCapability[]>;
    (db: 'MountXDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountXDisplay[]>;
    (db: 'MountXSpellVisualKitPicker', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MountXSpellVisualKitPicker[]>;
    (db: 'Movie', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Movie[]>;
    (db: 'MovieFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MovieFileData[]>;
    (db: 'MovieOverlays', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MovieOverlays[]>;
    (db: 'MovieVariation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MovieVariation[]>;
    (db: 'MultiStateProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MultiStateProperties[]>;
    (db: 'MultiTransitionProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MultiTransitionProperties[]>;
    (db: 'MythicPlusSeason', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MythicPlusSeason[]>;
    (db: 'MythicPlusSeasonRewardLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MythicPlusSeasonRewardLevels[]>;
    (db: 'MythicPlusSeasonTrackedAffix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<MythicPlusSeasonTrackedAffix[]>;
    (db: 'NPCModelItemSlotDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NPCModelItemSlotDisplayInfo[]>;
    (db: 'NPCSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NPCSounds[]>;
    (db: 'NameGen', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NameGen[]>;
    (db: 'NamesProfanity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NamesProfanity[]>;
    (db: 'NamesReserved', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NamesReserved[]>;
    (db: 'NamesReservedLocale', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NamesReservedLocale[]>;
    (db: 'NumTalentsAtLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<NumTalentsAtLevel[]>;
    (db: 'ObjectEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffect[]>;
    (db: 'ObjectEffectGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectGroup[]>;
    (db: 'ObjectEffectModifier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectModifier[]>;
    (db: 'ObjectEffectPackage', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectPackage[]>;
    (db: 'ObjectEffectPackageElem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectPackageElem[]>;
    (db: 'ObjectEffectStateName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ObjectEffectStateName[]>;
    (db: 'Occluder', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Occluder[]>;
    (db: 'OccluderCurtain', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OccluderCurtain[]>;
    (db: 'OccluderLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OccluderLocation[]>;
    (db: 'OccluderNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OccluderNode[]>;
    (db: 'OutlineEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OutlineEffect[]>;
    (db: 'OverrideSpellData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<OverrideSpellData[]>;
    (db: 'PVPBracketTypes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPBracketTypes[]>;
    (db: 'PVPDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPDifficulty[]>;
    (db: 'PVPItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPItem[]>;
    (db: 'PVPScoreboardCellInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPScoreboardCellInfo[]>;
    (db: 'PVPScoreboardColumnHeader', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPScoreboardColumnHeader[]>;
    (db: 'PVPScoreboardLayout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPScoreboardLayout[]>;
    (db: 'PVPStat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PVPStat[]>;
    (db: 'Package', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Package[]>;
    (db: 'PageTextMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PageTextMaterial[]>;
    (db: 'PaperDollItemFrame', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PaperDollItemFrame[]>;
    (db: 'ParagonReputation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ParagonReputation[]>;
    (db: 'ParticleColor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ParticleColor[]>;
    (db: 'Particulate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Particulate[]>;
    (db: 'ParticulateSound', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ParticulateSound[]>;
    (db: 'Path', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Path[]>;
    (db: 'PathEdge', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathEdge[]>;
    (db: 'PathNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathNode[]>;
    (db: 'PathNodeProperty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathNodeProperty[]>;
    (db: 'PathProperty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PathProperty[]>;
    (db: 'PetLoyalty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PetLoyalty[]>;
    (db: 'PetPersonality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PetPersonality[]>;
    (db: 'PetitionType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PetitionType[]>;
    (db: 'Phase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Phase[]>;
    (db: 'PhaseShiftZoneSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PhaseShiftZoneSounds[]>;
    (db: 'PhaseXPhaseGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PhaseXPhaseGroup[]>;
    (db: 'PlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PlayerCondition[]>;
    (db: 'Positioner', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Positioner[]>;
    (db: 'PositionerState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PositionerState[]>;
    (db: 'PositionerStateEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PositionerStateEntry[]>;
    (db: 'PowerDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PowerDisplay[]>;
    (db: 'PowerType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PowerType[]>;
    (db: 'PrestigeLevelInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PrestigeLevelInfo[]>;
    (db: 'PvpBrawl', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpBrawl[]>;
    (db: 'PvpReward', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpReward[]>;
    (db: 'PvpScalingEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpScalingEffect[]>;
    (db: 'PvpScalingEffectType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpScalingEffectType[]>;
    (db: 'PvpSeason', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpSeason[]>;
    (db: 'PvpSeasonRewardLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpSeasonRewardLevels[]>;
    (db: 'PvpTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalent[]>;
    (db: 'PvpTalentCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalentCategory[]>;
    (db: 'PvpTalentSlotUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalentSlotUnlock[]>;
    (db: 'PvpTalentUnlock', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTalentUnlock[]>;
    (db: 'PvpTier', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<PvpTier[]>;
    (db: 'QuestFactionReward', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestFactionReward[]>;
    (db: 'QuestFeedbackEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestFeedbackEffect[]>;
    (db: 'QuestInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestInfo[]>;
    (db: 'QuestLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestLine[]>;
    (db: 'QuestLineXQuest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestLineXQuest[]>;
    (db: 'QuestMoneyReward', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestMoneyReward[]>;
    (db: 'QuestObjective', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestObjective[]>;
    (db: 'QuestPOIBlob', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestPOIBlob[]>;
    (db: 'QuestPOIPoint', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestPOIPoint[]>;
    (db: 'QuestPackageItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestPackageItem[]>;
    (db: 'QuestSort', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestSort[]>;
    (db: 'QuestV2', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestV2[]>;
    (db: 'QuestV2CliTask', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestV2CliTask[]>;
    (db: 'QuestXGroupActivity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXGroupActivity[]>;
    (db: 'QuestXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXP[]>;
    (db: 'QuestXUIQuestDetailsTheme', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXUIQuestDetailsTheme[]>;
    (db: 'QuestXUiWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<QuestXUiWidgetSet[]>;
    (db: 'RTPC', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RTPC[]>;
    (db: 'RTPCData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RTPCData[]>;
    (db: 'RacialMounts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RacialMounts[]>;
    (db: 'RafActivity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RafActivity[]>;
    (db: 'RandPropPoints', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RandPropPoints[]>;
    (db: 'RecipeProgressionGroupEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RecipeProgressionGroupEntry[]>;
    (db: 'RelicSlotTierRequirement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RelicSlotTierRequirement[]>;
    (db: 'RelicTalent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RelicTalent[]>;
    (db: 'RenownRewards', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RenownRewards[]>;
    (db: 'ResearchBranch', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchBranch[]>;
    (db: 'ResearchField', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchField[]>;
    (db: 'ResearchProject', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchProject[]>;
    (db: 'ResearchSite', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ResearchSite[]>;
    (db: 'Resistances', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Resistances[]>;
    (db: 'RewardPack', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RewardPack[]>;
    (db: 'RewardPackXCurrencyType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RewardPackXCurrencyType[]>;
    (db: 'RewardPackXItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RewardPackXItem[]>;
    (db: 'RibbonQuality', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RibbonQuality[]>;
    (db: 'RopeEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RopeEffect[]>;
    (db: 'RulesetItemUpgrade', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RulesetItemUpgrade[]>;
    (db: 'RulesetRaidLootUpgrade', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RulesetRaidLootUpgrade[]>;
    (db: 'RulesetRaidOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RulesetRaidOverride[]>;
    (db: 'RuneforgeLegendaryAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<RuneforgeLegendaryAbility[]>;
    (db: 'SDReplacementModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SDReplacementModel[]>;
    (db: 'SSAOSettings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SSAOSettings[]>;
    (db: 'SandboxScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SandboxScaling[]>;
    (db: 'ScalingStatDistribution', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScalingStatDistribution[]>;
    (db: 'ScalingStatValues', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScalingStatValues[]>;
    (db: 'Scenario', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Scenario[]>;
    (db: 'ScenarioEventEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScenarioEventEntry[]>;
    (db: 'ScenarioStep', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScenarioStep[]>;
    (db: 'SceneScript', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScript[]>;
    (db: 'SceneScriptGlobalText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptGlobalText[]>;
    (db: 'SceneScriptPackage', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptPackage[]>;
    (db: 'SceneScriptPackageMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptPackageMember[]>;
    (db: 'SceneScriptText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SceneScriptText[]>;
    (db: 'ScheduledInterval', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledInterval[]>;
    (db: 'ScheduledWorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledWorldState[]>;
    (db: 'ScheduledWorldStateGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledWorldStateGroup[]>;
    (db: 'ScheduledWorldStateXUniqCat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScheduledWorldStateXUniqCat[]>;
    (db: 'ScreenEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScreenEffect[]>;
    (db: 'ScreenEffectType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScreenEffectType[]>;
    (db: 'ScreenLocation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ScreenLocation[]>;
    (db: 'SeamlessSite', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SeamlessSite[]>;
    (db: 'ServerMessages', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ServerMessages[]>;
    (db: 'ShadowyEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ShadowyEffect[]>;
    (db: 'SheatheSoundLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SheatheSoundLookups[]>;
    (db: 'SiegeableProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SiegeableProperties[]>;
    (db: 'SkillCostsData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillCostsData[]>;
    (db: 'SkillLine', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLine[]>;
    (db: 'SkillLineAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLineAbility[]>;
    (db: 'SkillLineAbilitySortedSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLineAbilitySortedSpell[]>;
    (db: 'SkillLineCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillLineCategory[]>;
    (db: 'SkillRaceClassInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillRaceClassInfo[]>;
    (db: 'SkillTiers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkillTiers[]>;
    (db: 'SkySceneXPlayerCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SkySceneXPlayerCondition[]>;
    (db: 'Soulbind', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Soulbind[]>;
    (db: 'SoulbindConduit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduit[]>;
    (db: 'SoulbindConduitEnhancedSocket', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitEnhancedSocket[]>;
    (db: 'SoulbindConduitItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitItem[]>;
    (db: 'SoulbindConduitRank', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitRank[]>;
    (db: 'SoulbindConduitRankProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindConduitRankProperties[]>;
    (db: 'SoulbindUIDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoulbindUIDisplayInfo[]>;
    (db: 'SoundAmbience', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundAmbience[]>;
    (db: 'SoundAmbienceFlavor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundAmbienceFlavor[]>;
    (db: 'SoundBus', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundBus[]>;
    (db: 'SoundBusName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundBusName[]>;
    (db: 'SoundBusOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundBusOverride[]>;
    (db: 'SoundCharacterMacroLines', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundCharacterMacroLines[]>;
    (db: 'SoundEmitterPillPoints', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEmitterPillPoints[]>;
    (db: 'SoundEmitters', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEmitters[]>;
    (db: 'SoundEntries', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEntries[]>;
    (db: 'SoundEntriesAdvanced', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEntriesAdvanced[]>;
    (db: 'SoundEntriesFallbacks', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEntriesFallbacks[]>;
    (db: 'SoundEnvelope', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundEnvelope[]>;
    (db: 'SoundFilter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundFilter[]>;
    (db: 'SoundFilterElem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundFilterElem[]>;
    (db: 'SoundKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKit[]>;
    (db: 'SoundKitAdvanced', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitAdvanced[]>;
    (db: 'SoundKitChild', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitChild[]>;
    (db: 'SoundKitEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitEntry[]>;
    (db: 'SoundKitFallback', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitFallback[]>;
    (db: 'SoundKitName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundKitName[]>;
    (db: 'SoundOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundOverride[]>;
    (db: 'SoundParameter', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundParameter[]>;
    (db: 'SoundProviderPreferences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundProviderPreferences[]>;
    (db: 'SoundSamplePreferences', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundSamplePreferences[]>;
    (db: 'SoundWaterType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SoundWaterType[]>;
    (db: 'SourceInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SourceInfo[]>;
    (db: 'SpamMessages', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpamMessages[]>;
    (db: 'SpecSetMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpecSetMember[]>;
    (db: 'SpecializationSpells', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpecializationSpells[]>;
    (db: 'SpecializationSpellsDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpecializationSpellsDisplay[]>;
    (db: 'Spell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Spell[]>;
    (db: 'SpellActionBarPref', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellActionBarPref[]>;
    (db: 'SpellActivationOverlay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellActivationOverlay[]>;
    (db: 'SpellAuraNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraNames[]>;
    (db: 'SpellAuraOptions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraOptions[]>;
    (db: 'SpellAuraRestrictions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraRestrictions[]>;
    (db: 'SpellAuraRestrictionsDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraRestrictionsDifficulty[]>;
    (db: 'SpellAuraVisXChrSpec', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraVisXChrSpec[]>;
    (db: 'SpellAuraVisXTalentTab', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraVisXTalentTab[]>;
    (db: 'SpellAuraVisibility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellAuraVisibility[]>;
    (db: 'SpellCastTimes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCastTimes[]>;
    (db: 'SpellCastingRequirements', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCastingRequirements[]>;
    (db: 'SpellCategories', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCategories[]>;
    (db: 'SpellCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCategory[]>;
    (db: 'SpellChainEffects', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellChainEffects[]>;
    (db: 'SpellClassOptions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClassOptions[]>;
    (db: 'SpellClutterAreaEffectCounts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterAreaEffectCounts[]>;
    (db: 'SpellClutterFrameRates', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterFrameRates[]>;
    (db: 'SpellClutterImpactModelCounts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterImpactModelCounts[]>;
    (db: 'SpellClutterKitDistances', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterKitDistances[]>;
    (db: 'SpellClutterMissileDist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterMissileDist[]>;
    (db: 'SpellClutterWeaponTrailDist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellClutterWeaponTrailDist[]>;
    (db: 'SpellCooldowns', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCooldowns[]>;
    (db: 'SpellCraftUI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellCraftUI[]>;
    (db: 'SpellDescriptionVariables', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDescriptionVariables[]>;
    (db: 'SpellDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDifficulty[]>;
    (db: 'SpellDispelType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDispelType[]>;
    (db: 'SpellDuration', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellDuration[]>;
    (db: 'SpellEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffect[]>;
    (db: 'SpellEffectAutoDescription', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectAutoDescription[]>;
    (db: 'SpellEffectCameraShakes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectCameraShakes[]>;
    (db: 'SpellEffectEmission', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectEmission[]>;
    (db: 'SpellEffectGroupSize', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectGroupSize[]>;
    (db: 'SpellEffectNames', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectNames[]>;
    (db: 'SpellEffectScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEffectScaling[]>;
    (db: 'SpellEquippedItems', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellEquippedItems[]>;
    (db: 'SpellFlyout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellFlyout[]>;
    (db: 'SpellFlyoutItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellFlyoutItem[]>;
    (db: 'SpellFocusObject', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellFocusObject[]>;
    (db: 'SpellIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellIcon[]>;
    (db: 'SpellInterrupts', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellInterrupts[]>;
    (db: 'SpellItemEnchantment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellItemEnchantment[]>;
    (db: 'SpellItemEnchantmentCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellItemEnchantmentCondition[]>;
    (db: 'SpellKeyboundOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellKeyboundOverride[]>;
    (db: 'SpellLabel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellLabel[]>;
    (db: 'SpellLearnSpell', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellLearnSpell[]>;
    (db: 'SpellLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellLevels[]>;
    (db: 'SpellMastery', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMastery[]>;
    (db: 'SpellMechanic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMechanic[]>;
    (db: 'SpellMisc', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMisc[]>;
    (db: 'SpellMiscDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMiscDifficulty[]>;
    (db: 'SpellMissile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMissile[]>;
    (db: 'SpellMissileMotion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellMissileMotion[]>;
    (db: 'SpellName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellName[]>;
    (db: 'SpellOverrideName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellOverrideName[]>;
    (db: 'SpellPower', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellPower[]>;
    (db: 'SpellPowerDifficulty', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellPowerDifficulty[]>;
    (db: 'SpellProceduralEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellProceduralEffect[]>;
    (db: 'SpellProcsPerMinute', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellProcsPerMinute[]>;
    (db: 'SpellProcsPerMinuteMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellProcsPerMinuteMod[]>;
    (db: 'SpellRadius', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellRadius[]>;
    (db: 'SpellRange', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellRange[]>;
    (db: 'SpellReagents', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellReagents[]>;
    (db: 'SpellReagentsCurrency', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellReagentsCurrency[]>;
    (db: 'SpellRuneCost', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellRuneCost[]>;
    (db: 'SpellScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellScaling[]>;
    (db: 'SpellScript', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellScript[]>;
    (db: 'SpellScriptText', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellScriptText[]>;
    (db: 'SpellShapeshift', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellShapeshift[]>;
    (db: 'SpellShapeshiftForm', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellShapeshiftForm[]>;
    (db: 'SpellSpecialUnitEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellSpecialUnitEffect[]>;
    (db: 'SpellTargetRestrictions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellTargetRestrictions[]>;
    (db: 'SpellTotems', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellTotems[]>;
    (db: 'SpellVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisual[]>;
    (db: 'SpellVisualAnim', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualAnim[]>;
    (db: 'SpellVisualAnimName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualAnimName[]>;
    (db: 'SpellVisualColorEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualColorEffect[]>;
    (db: 'SpellVisualEffectName', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualEffectName[]>;
    (db: 'SpellVisualEvent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualEvent[]>;
    (db: 'SpellVisualKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKit[]>;
    (db: 'SpellVisualKitAreaModel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitAreaModel[]>;
    (db: 'SpellVisualKitEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitEffect[]>;
    (db: 'SpellVisualKitModelAttach', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitModelAttach[]>;
    (db: 'SpellVisualKitPicker', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitPicker[]>;
    (db: 'SpellVisualKitPickerEntry', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualKitPickerEntry[]>;
    (db: 'SpellVisualMissile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualMissile[]>;
    (db: 'SpellVisualPrecastTransitions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualPrecastTransitions[]>;
    (db: 'SpellVisualScreenEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellVisualScreenEffect[]>;
    (db: 'SpellXDescriptionVariables', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellXDescriptionVariables[]>;
    (db: 'SpellXSpellVisual', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SpellXSpellVisual[]>;
    (db: 'StableSlotPrices', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<StableSlotPrices[]>;
    (db: 'StartupFiles', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<StartupFiles[]>;
    (db: 'Startup_Strings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Startup_Strings[]>;
    (db: 'Stationery', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Stationery[]>;
    (db: 'StringLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<StringLookups[]>;
    (db: 'SummonProperties', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<SummonProperties[]>;
    (db: 'TabardBackgroundTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TabardBackgroundTextures[]>;
    (db: 'TabardEmblemTextures', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TabardEmblemTextures[]>;
    (db: 'TactKey', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TactKey[]>;
    (db: 'TactKeyLookup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TactKeyLookup[]>;
    (db: 'Talent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Talent[]>;
    (db: 'TalentTab', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TalentTab[]>;
    (db: 'TalentTreePrimarySpells', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TalentTreePrimarySpells[]>;
    (db: 'TaxiNodes', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TaxiNodes[]>;
    (db: 'TaxiPath', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TaxiPath[]>;
    (db: 'TaxiPathNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TaxiPathNode[]>;
    (db: 'TeamContributionPoints', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TeamContributionPoints[]>;
    (db: 'TerrainColorGradingRamp', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainColorGradingRamp[]>;
    (db: 'TerrainMaterial', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainMaterial[]>;
    (db: 'TerrainType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainType[]>;
    (db: 'TerrainTypeSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TerrainTypeSounds[]>;
    (db: 'TextureBlendSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TextureBlendSet[]>;
    (db: 'TextureFileData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TextureFileData[]>;
    (db: 'TierTransition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TierTransition[]>;
    (db: 'TotemCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TotemCategory[]>;
    (db: 'Toy', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Toy[]>;
    (db: 'TradeSkillCategory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TradeSkillCategory[]>;
    (db: 'TradeSkillItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TradeSkillItem[]>;
    (db: 'TransformMatrix', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransformMatrix[]>;
    (db: 'TransmogDefaultLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogDefaultLevel[]>;
    (db: 'TransmogHoliday', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogHoliday[]>;
    (db: 'TransmogIllusion', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogIllusion[]>;
    (db: 'TransmogSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogSet[]>;
    (db: 'TransmogSetGroup', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogSetGroup[]>;
    (db: 'TransmogSetItem', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransmogSetItem[]>;
    (db: 'TransportAnimation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransportAnimation[]>;
    (db: 'TransportPhysics', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransportPhysics[]>;
    (db: 'TransportRotation', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TransportRotation[]>;
    (db: 'Trophy', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Trophy[]>;
    (db: 'TrophyInstance', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TrophyInstance[]>;
    (db: 'TrophyType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<TrophyType[]>;
    (db: 'UIChromieTimeExpansionInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIChromieTimeExpansionInfo[]>;
    (db: 'UICovenantAbility', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UICovenantAbility[]>;
    (db: 'UICovenantPreview', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UICovenantPreview[]>;
    (db: 'UIDungeonScoreRarity', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIDungeonScoreRarity[]>;
    (db: 'UIEventToast', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIEventToast[]>;
    (db: 'UIExpansionDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIExpansionDisplayInfo[]>;
    (db: 'UIExpansionDisplayInfoIcon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIExpansionDisplayInfoIcon[]>;
    (db: 'UIScriptedAnimationEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UIScriptedAnimationEffect[]>;
    (db: 'UISoundLookups', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UISoundLookups[]>;
    (db: 'UISplashScreen', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UISplashScreen[]>;
    (db: 'UiCamFbackTransmogChrRace', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCamFbackTransmogChrRace[]>;
    (db: 'UiCamFbackTransmogWeapon', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCamFbackTransmogWeapon[]>;
    (db: 'UiCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCamera[]>;
    (db: 'UiCameraType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCameraType[]>;
    (db: 'UiCanvas', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCanvas[]>;
    (db: 'UiCovenantDisplayInfo', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiCovenantDisplayInfo[]>;
    (db: 'UiItemInteraction', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiItemInteraction[]>;
    (db: 'UiMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMap[]>;
    (db: 'UiMapArt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapArt[]>;
    (db: 'UiMapArtStyleLayer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapArtStyleLayer[]>;
    (db: 'UiMapArtTile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapArtTile[]>;
    (db: 'UiMapAssignment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapAssignment[]>;
    (db: 'UiMapFogOfWar', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapFogOfWar[]>;
    (db: 'UiMapFogOfWarVisualization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapFogOfWarVisualization[]>;
    (db: 'UiMapGroupMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapGroupMember[]>;
    (db: 'UiMapLink', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapLink[]>;
    (db: 'UiMapPOI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapPOI[]>;
    (db: 'UiMapXMapArt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiMapXMapArt[]>;
    (db: 'UiModelScene', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelScene[]>;
    (db: 'UiModelSceneActor', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelSceneActor[]>;
    (db: 'UiModelSceneActorDisplay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelSceneActorDisplay[]>;
    (db: 'UiModelSceneCamera', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiModelSceneCamera[]>;
    (db: 'UiPartyPose', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiPartyPose[]>;
    (db: 'UiQuestDetailsTheme', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiQuestDetailsTheme[]>;
    (db: 'UiTextureAtlas', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlas[]>;
    (db: 'UiTextureAtlasElement', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlasElement[]>;
    (db: 'UiTextureAtlasElementOverride', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlasElementOverride[]>;
    (db: 'UiTextureAtlasMember', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureAtlasMember[]>;
    (db: 'UiTextureKit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiTextureKit[]>;
    (db: 'UiWidget', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidget[]>;
    (db: 'UiWidgetConstantSource', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetConstantSource[]>;
    (db: 'UiWidgetDataSource', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetDataSource[]>;
    (db: 'UiWidgetMap', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetMap[]>;
    (db: 'UiWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetSet[]>;
    (db: 'UiWidgetStringSource', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetStringSource[]>;
    (db: 'UiWidgetVisTypeDataReq', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetVisTypeDataReq[]>;
    (db: 'UiWidgetVisualization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetVisualization[]>;
    (db: 'UiWidgetXWidgetSet', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UiWidgetXWidgetSet[]>;
    (db: 'UnitBlood', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitBlood[]>;
    (db: 'UnitBloodLevels', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitBloodLevels[]>;
    (db: 'UnitCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitCondition[]>;
    (db: 'UnitPowerBar', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitPowerBar[]>;
    (db: 'UnitTest', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitTest[]>;
    (db: 'UnitTestSparse', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<UnitTestSparse[]>;
    (db: 'Vehicle', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Vehicle[]>;
    (db: 'VehiclePOIType', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehiclePOIType[]>;
    (db: 'VehicleSeat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehicleSeat[]>;
    (db: 'VehicleUIIndSeat', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehicleUIIndSeat[]>;
    (db: 'VehicleUIIndicator', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VehicleUIIndicator[]>;
    (db: 'VideoHardware', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VideoHardware[]>;
    (db: 'Vignette', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Vignette[]>;
    (db: 'VirtualAttachment', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VirtualAttachment[]>;
    (db: 'VirtualAttachmentCustomization', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VirtualAttachmentCustomization[]>;
    (db: 'VocalUISounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VocalUISounds[]>;
    (db: 'VolumeFogCondition', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<VolumeFogCondition[]>;
    (db: 'WMOAreaTable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WMOAreaTable[]>;
    (db: 'WMOMinimapTexture', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WMOMinimapTexture[]>;
    (db: 'WaterfallData', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaterfallData[]>;
    (db: 'WaypointEdge', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaypointEdge[]>;
    (db: 'WaypointNode', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaypointNode[]>;
    (db: 'WaypointSafeLocs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WaypointSafeLocs[]>;
    (db: 'WbAccessControlList', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbAccessControlList[]>;
    (db: 'WbCertBlacklist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbCertBlacklist[]>;
    (db: 'WbCertWhitelist', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbCertWhitelist[]>;
    (db: 'WbPermissions', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WbPermissions[]>;
    (db: 'WeaponImpactSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponImpactSounds[]>;
    (db: 'WeaponSwingSounds2', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponSwingSounds2[]>;
    (db: 'WeaponTrail', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponTrail[]>;
    (db: 'WeaponTrailModelDef', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponTrailModelDef[]>;
    (db: 'WeaponTrailParam', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeaponTrailParam[]>;
    (db: 'Weather', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<Weather[]>;
    (db: 'WeatherXParticulate', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeatherXParticulate[]>;
    (db: 'WeeklyRewardChestThreshold', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WeeklyRewardChestThreshold[]>;
    (db: 'WindSettings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WindSettings[]>;
    (db: 'WorldBossLockout', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldBossLockout[]>;
    (db: 'WorldChunkSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldChunkSounds[]>;
    (db: 'WorldEffect', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldEffect[]>;
    (db: 'WorldElapsedTimer', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldElapsedTimer[]>;
    (db: 'WorldMapArea', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapArea[]>;
    (db: 'WorldMapContinent', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapContinent[]>;
    (db: 'WorldMapOverlay', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapOverlay[]>;
    (db: 'WorldMapOverlayTile', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapOverlayTile[]>;
    (db: 'WorldMapTransforms', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldMapTransforms[]>;
    (db: 'WorldSafeLocs', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldSafeLocs[]>;
    (db: 'WorldState', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldState[]>;
    (db: 'WorldStateExpression', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldStateExpression[]>;
    (db: 'WorldStateUI', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldStateUI[]>;
    (db: 'WorldStateZoneSounds', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WorldStateZoneSounds[]>;
    (db: 'World_PVP_Area', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<World_PVP_Area[]>;
    (db: 'WowError_Strings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<WowError_Strings[]>;
    (db: 'ZoneIntroMusicTable', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneIntroMusicTable[]>;
    (db: 'ZoneLight', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneLight[]>;
    (db: 'ZoneLightPoint', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneLightPoint[]>;
    (db: 'ZoneMusic', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneMusic[]>;
    (db: 'ZoneStory', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<ZoneStory[]>;
    (db: 'gtArmorMitigationByLvl', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtArmorMitigationByLvl[]>;
    (db: 'gtBarberShopCostBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtBarberShopCostBase[]>;
    (db: 'gtBattlePetTypeDamageMod', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtBattlePetTypeDamageMod[]>;
    (db: 'gtBattlePetXP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtBattlePetXP[]>;
    (db: 'gtChanceToMeleeCrit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToMeleeCrit[]>;
    (db: 'gtChanceToMeleeCritBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToMeleeCritBase[]>;
    (db: 'gtChanceToSpellCrit', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToSpellCrit[]>;
    (db: 'gtChanceToSpellCritBase', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtChanceToSpellCritBase[]>;
    (db: 'gtCombatRatings', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtCombatRatings[]>;
    (db: 'gtItemSocketCostPerLevel', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtItemSocketCostPerLevel[]>;
    (db: 'gtMasteryMultipliers', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtMasteryMultipliers[]>;
    (db: 'gtNPCManaCostScaler', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtNPCManaCostScaler[]>;
    (db: 'gtOCTBaseHPByClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTBaseHPByClass[]>;
    (db: 'gtOCTBaseMPByClass', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTBaseMPByClass[]>;
    (db: 'gtOCTClassCombatRatingScalar', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTClassCombatRatingScalar[]>;
    (db: 'gtOCTHpPerStamina', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTHpPerStamina[]>;
    (db: 'gtOCTLevelExperience', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTLevelExperience[]>;
    (db: 'gtOCTRegenHP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTRegenHP[]>;
    (db: 'gtOCTRegenMP', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtOCTRegenMP[]>;
    (db: 'gtRegenHPPerSpt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtRegenHPPerSpt[]>;
    (db: 'gtRegenMPPerSpt', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtRegenMPPerSpt[]>;
    (db: 'gtResilienceDR', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtResilienceDR[]>;
    (db: 'gtSpellScaling', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<gtSpellScaling[]>;
}
